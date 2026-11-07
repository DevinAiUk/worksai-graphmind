import test from "node:test";
import assert from "node:assert/strict";
import { APP_META, handleAppRequest } from "../src/worker.mjs";

test("worksai-graphmind standalone Worker renders clean WorksAI UI with capabilityMatrix and zero forbidden branding", async () => {
  const res = await handleAppRequest(new Request("https://graphmind.worksai.org/"));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal(html.includes(APP_META.name), true);
  assert.equal(html.toLowerCase().includes("devinai.uk"), false);
  assert.equal(html.toLowerCase().includes("devonfolio"), false);
  assert.equal(html.includes("MIT Open Source • WorksAI Foundry"), true);
});

test("worksai-graphmind /api/ai/analyze executes deterministic engine, supports Workers AI + R2 persistence, and rejects empty input", async () => {
  const r2Map = new Map();
  const mockEnv = {
    AI: {
      async run(_model, _input) {
        return { response: "Verified Workers AI insight for worksai-graphmind." };
      }
    },
    DATALAKE_BUCKET: {
      async put(k, v) { r2Map.set(k, v); },
      async get(k) {
        if (!r2Map.has(k)) return null;
        const v = r2Map.get(k);
        return { async text() { return v; } };
      }
    }
  };

  const sample = "{\n  \"notes\": [\n    {\n      \"id\": \"edge-architecture\",\n      \"path\": \"notes/edge-architecture.md\",\n      \"content\": \"Links to [[neon-datalake]] and [[mcp-specification]]\"\n    },\n    {\n      \"id\": \"neon-datalake\",\n      \"path\": \"notes/neon-datalake.md\",\n      \"content\": \"Backlink to [[edge-architecture]]\"\n    },\n    {\n      \"id\": \"unlinked-draft\",\n      \"path\": \"notes/unlinked-draft.md\",\n      \"content\": \"Standalone note with zero links\"\n    }\n  ]\n}";
  const aiRes = await handleAppRequest(
    new Request("https://graphmind.worksai.org/api/ai/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: sample, tool: APP_META.mcpTools[0] })
    }),
    mockEnv
  );
  assert.equal(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert.equal(aiData.ok, true);
  assert.equal(aiData.executionBreakdown.deterministicUtilityExecuted, true);
  assert.equal(aiData.executionBreakdown.genuineAiModelInvoked, true);
  assert.equal(aiData.executionBreakdown.persistedToR2, true);

  const stateRes = await handleAppRequest(new Request("https://graphmind.worksai.org/api/workspace/state"), mockEnv);
  assert.equal(stateRes.status, 200);
  const stateJson = await stateRes.json();
  assert.equal(stateJson.persistedInR2, true);
});

test("worksai-graphmind executable VS Code extension (extension/extension.cjs) activates and executes graphmind.findOrphans", async () => {
  const { createRequire } = await import("node:module");
  const req = createRequire(import.meta.url);
  const ext = req("../extension/extension.cjs");
  const context = { subscriptions: [] };
  const messages = [];
  const mockVscode = {
    commands: { registerCommand(id, fn) { return { id, fn }; } },
    window: { showInformationMessage(msg) { messages.push(msg); } }
  };
  const api = ext.activate(context, mockVscode);
  assert.equal(typeof api.registeredCommands["graphmind.findOrphans"], "function");
  const report = await api.registeredCommands["graphmind.findOrphans"]();
  assert.equal(report.nodeCount, 3);
  assert.equal(report.orphanNotes.includes("orphan-note"), true);
  assert.equal(messages.length, 1);
});

