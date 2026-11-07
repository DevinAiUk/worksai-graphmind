
// --- Server-Side WebCrypto HMAC-SHA256 Session & Tenant Isolation ---
// Workspace identity NEVER trusts raw client-supplied X-WorksAI-Tenant / X-WorksAI-User headers.
// Identity is derived strictly from server-signed HMAC-SHA256 tokens (cookie or Bearer) or an isolated Demo Sandbox session.

const MEMORY_REVOKED_JTIS = new Set();
const MEMORY_RATE_LIMITS = new Map();

function getServerSigningSecret(env) {
  return String((env && (env.AUTH_SECRET || env.BETTER_AUTH_SECRET || env.GIT_COMMIT_SHA)) || 'worksai-prod-hmac-key-2026-v4-isolated');
}

function base64UrlEncodeBytes(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlEncodeStr(str) {
  return base64UrlEncodeBytes(new TextEncoder().encode(str));
}

function base64UrlDecodeStr(b64url) {
  const pad = b64url.length % 4 === 0 ? '' : '='.repeat(4 - (b64url.length % 4));
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/') + pad;
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function importHmacKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

async function signSessionToken(payloadObj, env) {
  const secret = getServerSigningSecret(env);
  const key = await importHmacKey(secret);
  const bodyB64 = base64UrlEncodeStr(JSON.stringify(payloadObj));
  const sigBuf = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(bodyB64));
  const sigB64 = base64UrlEncodeBytes(new Uint8Array(sigBuf));
  return `${bodyB64}.${sigB64}`;
}

async function verifySessionToken(tokenStr, env) {
  if (!tokenStr || typeof tokenStr !== 'string' || !tokenStr.includes('.')) return null;
  const parts = tokenStr.split('.');
  if (parts.length !== 2) return null;
  const [bodyB64, sigB64] = parts;
  try {
    const secret = getServerSigningSecret(env);
    const key = await importHmacKey(secret);
    const pad = sigB64.length % 4 === 0 ? '' : '='.repeat(4 - (sigB64.length % 4));
    const b64 = sigB64.replace(/-/g, '+').replace(/_/g, '/') + pad;
    const bin = atob(b64);
    const sigBytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) sigBytes[i] = bin.charCodeAt(i);

    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(bodyB64));
    if (!valid) return null;
    const payload = JSON.parse(base64UrlDecodeStr(bodyB64));
    if (!payload || typeof payload !== 'object') return null;
    if (payload.exp && Date.now() > payload.exp) return null;

    // Check cross-isolate revocation in R2 + memory
    if (payload.jti) {
      if (MEMORY_REVOKED_JTIS.has(payload.jti)) return null;
      const rev = await r2GetJson(env, `revoked_tokens/${payload.jti}.json`);
      if (rev && rev.revoked) {
        MEMORY_REVOKED_JTIS.add(payload.jti);
        return null;
      }
    }
    return payload;
  } catch {
    return null;
  }
}

function extractTokenFromRequest(request) {
  const authHeader = request.headers.get('Authorization') || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  const cookieHeader = request.headers.get('Cookie') || '';
  const pairs = cookieHeader.split(';').map(c => c.trim().split('='));
  for (const [k, v] of pairs) {
    if (k === 'worksai_session' && v) return decodeURIComponent(v);
  }
  return null;
}

async function resolveAuthenticatedIdentity(request, url, env) {
  // 1. Check if client attempted to pass raw unverified X-WorksAI-Tenant / X-WorksAI-User headers without a valid signed session
  const rawHeaderTenant = request.headers.get('X-WorksAI-Tenant');
  const rawHeaderUser = request.headers.get('X-WorksAI-User');
  const tokenStr = extractTokenFromRequest(request);
  const verified = await verifySessionToken(tokenStr, env);

  if (verified) {
    // If client also sent headers that conflict with the signed token's tenant/user, reject as spoofing attempt!
    if ((rawHeaderTenant && rawHeaderTenant !== verified.tenantId) || (rawHeaderUser && rawHeaderUser !== verified.userId)) {
      return {
        authenticated: false,
        spoofAttempt: true,
        mode: 'rejected',
        tenantId: null,
        userId: null,
        error: 'Client header conflicts with server-signed session identity.'
      };
    }
    return {
      authenticated: true,
      spoofAttempt: false,
      mode: verified.mode || 'production',
      tenantId: verified.tenantId,
      userId: verified.userId,
      email: verified.email || `${verified.userId}@worksai.org`,
      jti: verified.jti
    };
  }

  // If unauthenticated caller sent raw X-WorksAI-Tenant / X-WorksAI-User headers trying to impersonate a tenant, flag spoofAttempt!
  if (rawHeaderTenant || rawHeaderUser) {
    return {
      authenticated: false,
      spoofAttempt: true,
      mode: 'unauthenticated',
      tenantId: null,
      userId: null,
      error: 'Unauthenticated client-supplied tenant/user headers are not trusted. Sign in via /api/auth/session or start a labeled /api/auth/demo session.'
    };
  }

  // Default read-only / isolated demo guest view for initial browser page load
  return {
    authenticated: false,
    spoofAttempt: false,
    mode: 'demo',
    tenantId: 'demo-sandbox',
    userId: 'demo-visitor',
    email: 'demo@worksai.org',
    jti: null
  };
}

function checkAiRateLimit(identityKey) {
  const now = Date.now();
  const windowMs = 60000;
  const maxReqs = 20;
  const entry = MEMORY_RATE_LIMITS.get(identityKey) || { count: 0, resetAt: now + windowMs };
  if (now > entry.resetAt) {
    entry.count = 1;
    entry.resetAt = now + windowMs;
  } else {
    entry.count += 1;
  }
  MEMORY_RATE_LIMITS.set(identityKey, entry);
  return entry.count <= maxReqs;
}
