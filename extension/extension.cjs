/**
 * WorksAi GraphMind — VS Code / Cursor Extension Entrypoint (extension/extension.cjs)
 * License: MIT
 */
"use strict";

function analyzeNotesInWorkspace(notes) {
  const nodes = new Map();
  const forwardLinks = {};
  const backlinks = {};
  const brokenLinks = [];
  for (const n of notes) {
    if (String(n.path || "").includes("..")) {
      throw new Error("PathTraversalError: Note path escapes workspace root.");
    }
    nodes.set(n.id, n);
    forwardLinks[n.id] = [];
    backlinks[n.id] = [];
  }
  for (const n of notes) {
    const matches = [...String(n.content || "").matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)];
    for (const m of matches) {
      const targetId = m[1].trim();
      forwardLinks[n.id].push(targetId);
      if (nodes.has(targetId)) {
        backlinks[targetId].push(n.id);
      } else {
        brokenLinks.push({ source: n.id, missingTarget: targetId });
      }
    }
  }
  const orphanNotes = [...nodes.keys()].filter(
    (id) => forwardLinks[id].length === 0 && backlinks[id].length === 0
  );
  return { nodeCount: nodes.size, forwardLinks, backlinks, brokenLinks, orphanNotes };
}

function activate(context, vscodeApi) {
  const vscode = vscodeApi || (typeof require !== "undefined" ? (() => { try { return require("vscode"); } catch { return null; } })() : null);
  const registered = {};
  const registerFn = (cmdId, handler) => {
    registered[cmdId] = handler;
    if (vscode && vscode.commands && typeof vscode.commands.registerCommand === "function") {
      const disp = vscode.commands.registerCommand(cmdId, handler);
      if (context && Array.isArray(context.subscriptions)) context.subscriptions.push(disp);
    }
  };

  registerFn("graphmind.findOrphans", async (sampleNotes) => {
    const notes = Array.isArray(sampleNotes) ? sampleNotes : [
      { id: "index", path: "notes/index.md", content: "Welcome to [[architecture]] and [[missing-spec]]" },
      { id: "architecture", path: "notes/architecture.md", content: "Backlink to [[index]]" },
      { id: "orphan-note", path: "notes/orphan-note.md", content: "Unlinked note" }
    ];
    const report = analyzeNotesInWorkspace(notes);
    if (vscode && vscode.window && typeof vscode.window.showInformationMessage === "function") {
      vscode.window.showInformationMessage(
        `GraphMind: ${report.nodeCount} notes, ${report.orphanNotes.length} orphans, ${report.brokenLinks.length} broken links.`
      );
    }
    return report;
  });

  registerFn("graphmind.syncDataLake", async (notes) => {
    const report = analyzeNotesInWorkspace(notes || []);
    return { synced: true, endpoint: "https://graphmind.worksai.org/api/mcp", report };
  });

  return { registeredCommands: registered, analyzeNotesInWorkspace };
}

function deactivate() {
  return true;
}

module.exports = { activate, deactivate, analyzeNotesInWorkspace };
