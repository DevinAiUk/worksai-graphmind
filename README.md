# WorksAi GraphMind (`worksai-07`)

> Bidirectional [[wikilink]] knowledge graphs, orphan link diagnostics, and MCP agent context for VS Code & Cursor.

**Category:** C. Plugins or extensions  
**License:** MIT (Derivative of [Foam](https://github.com/foambubble/foam) @ `7a2e632`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-graphmind/`

## Value Proposition & Scope
Gives engineers and technical writers Obsidian-grade bidirectional wikilinks, backlink graphs, and AI agent MCP tools right inside VS Code and Cursor without Obsidian's $50/user/year commercial license + $96/year Sync fees.

### What Works Out-of-the-Box (Zero External Credentials Required)
Full Markdown graph parsing, backlink resolution, broken-link linting, unlinked mention discovery, and local MCP server execution.

### What Requires User Configuration (`.env.example`)
Optional `WORKSAI_CLOUD_TOKEN` for hosted team knowledge-graph publishing.

## Measurable Acceptance Criteria
- AC-01: Parses Markdown files to extract `[[wikilinks]]`, aliases (`[[target|label]]`), `#tags`, and YAML frontmatter into a directed graph.
- AC-02: Computes accurate forward links, incoming backlinks, orphan notes, and broken dead-end links.
- AC-03: Suggests high-confidence unlinked mentions where a note title appears in plain text inside another note.
- AC-04: Rejects file paths outside the workspace root (`PathTraversalError`) and responds to MCP tool calls (`query_graph`, `get_backlinks`).

## Known Limitations
- Publishing to the public VS Code Marketplace or Open VSX requires an owner Personal Access Token (`VSCE_PAT`).
- Graphs exceeding 25,000 Markdown files should enable incremental index caching.

## Quick Start & Verification
```bash
npm test
```
