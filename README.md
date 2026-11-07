# WorksAi GraphMind (`worksai-graphmind`)

> Bidirectional [[wikilink]] knowledge graphs, orphan link diagnostics, and MCP agent context for VS Code & Cursor.

- **Live Subdomain Application:** [https://graphmind.worksai.org](https://graphmind.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-graphmind](https://worksai.org/apps/worksai-graphmind)
- **Category:** C. Plugins or extensions
- **License:** MIT (Derived from [Foam](https://github.com/foambubble/foam) @ `7a2e632`)

## Capability Matrix
- **What You Can Do:** Download and run the VS Code/Cursor extension (extension/extension.cjs + package.json) or use the companion web verifier to parse [[wiki-links]], compute backlinks, and flag orphan notes and broken links.
- **Deterministic Domain Utilities:** analyzeMarkdownGraph (wiki-link regex parser, path-traversal guard, backlink graph builder, and orphan detector).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) semantic topic cluster naming and bridge-note suggestions.
- **Persisted R2/Neon Features:** Knowledge graph topology and orphan audit snapshots persisted in Cloudflare R2 (workspaces/worksai-graphmind/*).
- **Known Limitations:** Local filesystem note watching runs inside the downloadable VS Code extension (extension/extension.cjs); the web UI operates on submitted note arrays.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
