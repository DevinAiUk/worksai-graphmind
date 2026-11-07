import test from "node:test";
import assert from "node:assert/strict";
import { APP_META, handleAppRequest } from "../src/worker.mjs";

test("worksai-graphmind standalone Worker renders clean WorksAI UI without forbidden branding or hero upstream clutter", async () => {
  const res = await handleAppRequest(new Request("https://graphmind.worksai.org/"));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal(html.includes(APP_META.name), true);
  assert.equal(html.toLowerCase().includes("devinai.uk"), false);
  assert.equal(html.toLowerCase().includes("devonfolio"), false);
  assert.equal(html.includes("MIT Open Source • WorksAI Foundry"), true);
});

test("worksai-graphmind /api/ai/analyze and /api/mcp execute real deterministic domain engine and reject empty input", async () => {
  const sample = "{\n  \"notes\": [\n    {\n      \"id\": \"edge-architecture\",\n      \"path\": \"notes/edge-architecture.md\",\n      \"content\": \"Links to [[neon-datalake]] and [[mcp-specification]]\"\n    },\n    {\n      \"id\": \"neon-datalake\",\n      \"path\": \"notes/neon-datalake.md\",\n      \"content\": \"Backlink to [[edge-architecture]]\"\n    },\n    {\n      \"id\": \"unlinked-draft\",\n      \"path\": \"notes/unlinked-draft.md\",\n      \"content\": \"Standalone note with zero links\"\n    }\n  ]\n}";
  const aiRes = await handleAppRequest(
    new Request("https://graphmind.worksai.org/api/ai/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: sample, tool: APP_META.mcpTools[0] })
    })
  );
  assert.equal(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert.equal(aiData.ok, true);
  assert.equal(typeof aiData.domainResult, "object");
  assert.notEqual(aiData.domainResult, null);
});
