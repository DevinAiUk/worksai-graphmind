import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.mjs';

function makeMockEnv() {
  const store = new Map();
  return {
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

test('worksai-graphmind: health, SEO pages (/, /docs, /guide), sitemap, and robots.txt', async () => {
  const env = makeMockEnv();
  const hRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/health'), env);
  assert.equal(hRes.status, 200);
  const hData = await hRes.json();
  assert.equal(hData.service, 'worksai-graphmind');
  assert.equal(hData.tenantIsolation, 'strict-r2-tenant-user-crud');

  for (const route of ['/', '/docs', '/guide']) {
    const pageRes = await worker.fetch(new Request('https://graphmind.worksai.org' + route), env);
    assert.equal(pageRes.status, 200);
    const html = await pageRes.text();
    assert.ok(html.includes('WorksAi GraphMind'));
    assert.ok(!/devon|devin|devinai\.uk/i.test(html), 'Zero forbidden legacy branding on ' + route);
  }

  const robotsRes = await worker.fetch(new Request('https://graphmind.worksai.org/robots.txt'), env);
  const robotsTxt = await robotsRes.text();
  assert.ok(robotsTxt.includes('Disallow: /api/workspace/'));
});

test('worksai-graphmind: multi-step tenant+user-scoped CRUD (Save, List, Reopen, Rename, Export, Delete) and Cross-Tenant 403 Isolation', async () => {
  const env = makeMockEnv();
  const headersA = {
    'Content-Type': 'application/json',
    'X-WorksAI-Tenant': 'tenant-alpha',
    'X-WorksAI-User': 'alice'
  };
  const headersB = {
    'Content-Type': 'application/json',
    'X-WorksAI-Tenant': 'tenant-beta',
    'X-WorksAI-User': 'bob'
  };

  // 1. Save new item as Alice in tenant-alpha
  const createRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items', {
    method: 'POST',
    headers: headersA,
    body: JSON.stringify({ id: 'item-alpha-101', title: 'Alice Architecture v1', input: "# System Architecture\nLinks to [[Identity Provider]], [[R2 Storage Engine]], and [[Edge Router]].\n\n# Edge Router\nRoutes requests to [[R2 Storage Engine]] and [[Telemetry Gate]].\n\n# Orphan Note\nStandalone draft without incoming links." })
  }), env);
  assert.equal(createRes.status, 201);
  const created = await createRes.json();
  assert.equal(created.item.id, 'item-alpha-101');
  assert.equal(created.item.tenantId, 'tenant-alpha');
  assert.equal(created.item.ownerId, 'alice');

  // 2. Verify Bob in tenant-beta CANNOT read, rename, export, or delete Alice's item (403 Forbidden)
  const bobRead = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', { headers: headersB }), env);
  assert.equal(bobRead.status, 403);

  const bobPatch = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', {
    method: 'PATCH',
    headers: headersB,
    body: JSON.stringify({ title: 'Hijacked' })
  }), env);
  assert.equal(bobPatch.status, 403);

  const bobDelete = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', {
    method: 'DELETE',
    headers: headersB
  }), env);
  assert.equal(bobDelete.status, 403);

  // 3. Alice renames her item
  const patchRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', {
    method: 'PATCH',
    headers: headersA,
    body: JSON.stringify({ title: 'Alice Architecture v2 Renamed' })
  }), env);
  assert.equal(patchRes.status, 200);
  const patched = await patchRes.json();
  assert.equal(patched.item.title, 'Alice Architecture v2 Renamed');
  assert.equal(patched.item.version, 2);

  // 4. Alice exports her item in native format (.json)
  const exportRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/export/item-alpha-101?format=json', {
    headers: headersA
  }), env);
  assert.equal(exportRes.status, 200);
  assert.ok((exportRes.headers.get('Content-Disposition') || '').includes('attachment; filename='));
  const exportBytes = new Uint8Array(await exportRes.arrayBuffer());
  assert.ok(exportBytes.byteLength > 20);

  // 5. Alice deletes her item
  const delRes = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', {
    method: 'DELETE',
    headers: headersA
  }), env);
  assert.equal(delRes.status, 200);

  const afterDel = await worker.fetch(new Request('https://graphmind.worksai.org/api/workspace/items/item-alpha-101', { headers: headersA }), env);
  assert.equal(afterDel.status, 404);
});

test('worksai-graphmind: privacy-conscious telemetry blocks sensitive fields and binary release endpoint works', async () => {
  const env = makeMockEnv();
  const badTel = await worker.fetch(new Request('https://graphmind.worksai.org/api/telemetry/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventType: 'paste', clipboard: 'AKIAIOSFODNN7EXAMPLE' })
  }), env);
  assert.equal(badTel.status, 400);

  const goodTel = await worker.fetch(new Request('https://graphmind.worksai.org/api/telemetry/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventType: 'cta_download_click' })
  }), env);
  assert.equal(goodTel.status, 202);

  const dlRes = await worker.fetch(new Request('https://graphmind.worksai.org/downloads/worksai-graphmind-1.2.0.vsix'), env);
  assert.equal(dlRes.status, 200);
  assert.equal(dlRes.headers.get('X-Package-SHA256'), 'e91ba7f79b0c29edb236d8cfdd243794a572f0caf4c1e9454a9ff3904bcfcc37');
  const dlBytes = new Uint8Array(await dlRes.arrayBuffer());
  assert.equal(dlBytes.byteLength, 2687);
});
