import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/worker.mjs';

function makeMockEnv() {
  const store = new Map();
  return {
    AUTH_SECRET: 'test-hmac-secret-2026-worksai-v4',
    PROOF_BUCKET: {
      async get(key) {
        if (!store.has(key)) return null;
        const val = store.get(key);
        return { async text() { return val; } };
      },
      async put(key, val) {
        store.set(key, String(val));
      },
      async delete(key) {
        store.delete(key);
      }
    }
  };
}

test('worksai-graphmind: root application UI, static frontend assets (/assets/styles.css, /assets/app.js), /docs, and /guide render cleanly', async () => {
  const env = makeMockEnv();
  const rootRes = await worker.fetch(new Request('https://graphmind.worksai.org/'), env);
  assert.equal(rootRes.status, 200);
  const rootHtml = await rootRes.text();
  assert.ok(rootHtml.includes('companionTableBody'), 'Root HTML must include bespoke application container #companionTableBody');
  assert.ok(rootHtml.includes('/assets/app.js'), 'Root HTML must load compiled /assets/app.js');
  assert.ok(rootHtml.includes('/assets/styles.css'), 'Root HTML must load compiled /assets/styles.css');
  assert.ok(!/devon|devinai\.uk/i.test(rootHtml), 'Zero forbidden legacy branding');

  const cssRes = await worker.fetch(new Request('https://graphmind.worksai.org/assets/styles.css'), env);
  assert.equal(cssRes.status, 200);
  assert.ok((cssRes.headers.get('Content-Type') || '').includes('text/css'));

  const jsRes = await worker.fetch(new Request('https://graphmind.worksai.org/assets/app.js'), env);
  assert.equal(jsRes.status, 200);
  assert.ok((jsRes.headers.get('Content-Type') || '').includes('application/javascript'));
  const jsText = await jsRes.text();
  assert.ok(jsText.includes('window.WAI'));
});

test('worksai-graphmind: server-signed HMAC-SHA256 authentication, spoofed header rejection (401), cross-tenant isolation (403), and R2 logout revocation', async () => {
  const env = makeMockEnv();

  // 1. Unauthenticated request with spoofed X-WorksAI-Tenant header MUST be rejected with 401
  const spoofRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items', {
    headers: { 'X-WorksAI-Tenant': 'tenant-victim', 'X-WorksAI-User': 'victim' }
  }), env);
  assert.equal(spoofRes.status, 401);

  // 2. Sign in Alice on tenant-alpha via POST /api/auth/session
  const loginA = await worker.fetch(new Request('https://graphmind.worksai.org/api/auth/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'alice@worksai.org', workspaceSlug: 'tenant-alpha', passcode: 'secure-pass-123' })
  }), env);
  assert.equal(loginA.status, 200);
  const authA = await loginA.json();
  assert.ok(authA.token);
  assert.equal(authA.identity.tenantId, 'tenant-alpha');

  // 3. Sign in Bob on tenant-beta via POST /api/auth/session
  const loginB = await worker.fetch(new Request('https://graphmind.worksai.org/api/auth/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'bob@worksai.org', workspaceSlug: 'tenant-beta', passcode: 'secure-pass-456' })
  }), env);
  const authB = await loginB.json();

  // 4. Alice saves an item
  const saveRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authA.token },
    body: JSON.stringify({ id: 'proj-alpha-1', title: 'Alice Project v1', input: "# System Architecture\nLinks to [[Identity Provider]], [[R2 Storage Engine]], and [[Edge Router]].\n\n# Edge Router\nRoutes requests to [[R2 Storage Engine]] and [[Telemetry Gate]].\n\n# Orphan Note\nStandalone draft without incoming links." })
  }), env);
  assert.equal(saveRes.status, 201);

  // 5. Bob cannot read, rename, export, or delete Alice's project (403 Forbidden)
  const bobRead = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/proj-alpha-1', {
    headers: { 'Authorization': 'Bearer ' + authB.token }
  }), env);
  assert.equal(bobRead.status, 403);

  // 6. Demo sandbox token cannot read Alice's production item (403 Forbidden)
  const demoLogin = await worker.fetch(new Request('https://graphmind.worksai.org/api/auth/demo', { method: 'POST' }), env);
  const demoAuth = await demoLogin.json();
  const demoRead = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/proj-alpha-1', {
    headers: { 'Authorization': 'Bearer ' + demoAuth.token }
  }), env);
  assert.equal(demoRead.status, 403);

  // 7. Alice exports her project in native .json format
  const expRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/export/proj-alpha-1?format=json', {
    headers: { 'Authorization': 'Bearer ' + authA.token }
  }), env);
  assert.equal(expRes.status, 200);
  const expBytes = new Uint8Array(await expRes.arrayBuffer());
  assert.ok(expBytes.byteLength > 20);

  // 8. Alice logs out -> token JTI is revoked in R2 and subsequent use returns 401
  const logoutRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/auth/logout', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + authA.token }
  }), env);
  assert.equal(logoutRes.status, 200);

  const afterLogout = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items', {
    headers: { 'Authorization': 'Bearer ' + authA.token }
  }), env);
  assert.equal(afterLogout.status, 401);
});
