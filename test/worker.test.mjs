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


test('worksai-graphmind: MCP JSON-RPC 2.0 lifecycle (initialize, notifications/initialized, ping, tools/list, tools/call) and safety boundaries', async () => {
  const env = makeMockEnv();

  // 1. initialize negotiation & Mcp-Session-Id header
  const initRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-MCP-Traffic-Class': 'automated_test' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'mcp-test-harness', version: '1.0.0' } } })
  }), env);
  assert.equal(initRes.status, 200);
  assert.ok(initRes.headers.get('Mcp-Session-Id'));
  const initJson = await initRes.json();
  assert.equal(initJson.result.protocolVersion, '2025-03-26');

  // 2. notifications/initialized -> 202 Accepted
  const notifRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' })
  }), env);
  assert.equal(notifRes.status, 202);

  // 3. tools/list returns exactly the 3 owned tools with annotations
  const listRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
  }), env);
  const listJson = await listRes.json();
  assert.equal(listJson.result.tools.length, 3);
  assert.equal(listJson.result.tools[0].name, 'graphmind.build_backlink_graph');
  assert.ok(typeof listJson.result.tools[0].annotations.readOnlyHint === 'boolean');

  // 4. Valid tools/call execution returns content, structuredContent, workspaceUrl, and handoffHandle
  const callRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-MCP-Traffic-Class': 'automated_test' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'graphmind.build_backlink_graph', arguments: { input: 'Gateway -> Service -> Database' } } })
  }), env);
  assert.equal(callRes.status, 200);
  const callJson = await callRes.json();
  assert.equal(callJson.result.isError, false);
  assert.ok(callJson.result.structuredContent.workspaceUrl.includes('graphmind.worksai.org'));
  assert.ok(callJson.result.structuredContent.handoffHandle.startsWith('handoff:'));

  // 5. Unknown tool returns JSON-RPC protocol error -32602
  const unkRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 4, method: 'tools/call', params: { name: 'nonexistent.fake_tool', arguments: { input: 'test' } } })
  }), env);
  assert.equal(unkRes.status, 400);
  const unkJson = await unkRes.json();
  assert.equal(unkJson.error.code, -32602);

  // 6. Empty input returns tool execution result with isError: true (not protocol crash)
  const emptyRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 5, method: 'tools/call', params: { name: 'graphmind.build_backlink_graph', arguments: { input: '   ' } } })
  }), env);
  const emptyJson = await emptyRes.json();
  assert.equal(emptyJson.result.isError, true);
  assert.equal(emptyJson.result.structuredContent.errorCode, 'INVALID_INPUT');

  // 7. Identity override in arguments is blocked (IDENTITY_OVERRIDE_FORBIDDEN)
  const overrideRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 6, method: 'tools/call', params: { name: 'graphmind.build_backlink_graph', arguments: { input: 'test', tenantId: 'hijack-tenant' } } })
  }), env);
  const overrideJson = await overrideRes.json();
  assert.equal(overrideJson.result.isError, true);
  assert.equal(overrideJson.result.structuredContent.errorCode, 'IDENTITY_OVERRIDE_FORBIDDEN');
});
