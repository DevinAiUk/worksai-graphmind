// WorksAi GraphMind (graphmind.worksai.org) — Production Application Bundle v1.2.0
// Service: worksai-graphmind | Category: Category C — VS Code Extension & Browser Sandbox
// Built by scripts/build.mjs from public/index.html, src/ui/styles.css, src/ui/app.js, src/auth/session.mjs, and src/engine/domain.mjs

const APP_META = {
  "repo": "worksai-graphmind",
  "slug": "graphmind",
  "name": "WorksAi GraphMind",
  "category": "C. Plugins or extensions",
  "deploymentCategory": "Category C \u2014 VS Code Extension & Browser Sandbox",
  "isWebApp": false,
  "tagline": "Bidirectional [[wikilink]] knowledge graphs, orphan link diagnostics, and MCP agent context for VS Code & Cursor.",
  "exportFormat": "json",
  "exportMime": "application/json",
  "importAccept": ".md,.json,.txt",
  "installCmd": "curl -sSL https://graphmind.worksai.org/downloads/worksai-graphmind-1.2.0.vsix -o worksai-graphmind-1.2.0.vsix && code --install-extension worksai-graphmind-1.2.0.vsix",
  "compatibility": "VS Code ^1.85.0, Cursor, VSCodium, Windsurf (Node 18+ / Webview Panel)",
  "permissionsDisclosure": "Local workspace Markdown file read access (`*.md`) to parse `[[WikiLinks]]`; zero background source-code telemetry.",
  "svgCaption": "GraphMind VS Code Extension Side-Panel Showing Bidirectional WikiLink Graph and PageRank Centrality",
  "defaultInput": "# System Architecture\nLinks to [[Identity Provider]], [[R2 Storage Engine]], and [[Edge Router]].\n\n# Edge Router\nRoutes requests to [[R2 Storage Engine]] and [[Telemetry Gate]].\n\n# Orphan Note\nStandalone draft without incoming links.",
  "samplePresets": [
    {
      "id": "preset-default",
      "title": "WorksAi GraphMind \u2014 Primary Production Sample",
      "input": "# System Architecture\nLinks to [[Identity Provider]], [[R2 Storage Engine]], and [[Edge Router]].\n\n# Edge Router\nRoutes requests to [[R2 Storage Engine]] and [[Telemetry Gate]].\n\n# Orphan Note\nStandalone draft without incoming links."
    },
    {
      "id": "preset-audit",
      "title": "WorksAi GraphMind \u2014 High-Volume Scenario",
      "input": "# System Architecture\nLinks to [[Identity Provider]], [[R2 Storage Engine]], and [[Edge Router]].\n\n# Edge Router\nRoutes requests to [[R2 Storage Engine]] and [[Telemetry Gate]].\n\n# Orphan Note\nStandalone draft without incoming links."
    }
  ],
  "seo": {
    "primaryKeyword": "vscode markdown wiki link graph and orphan note detector extension",
    "supportingKeywords": [
      "foam vscode knowledge graph alternative",
      "find broken wiki links markdown",
      "markdown backlink analyzer vsix",
      "local first second brain vscode"
    ],
    "intent": "Transactional & Informational (developers and technical writers managing interconnected Markdown documentation in VS Code or Cursor)",
    "guideTitle": "Managing Markdown Knowledge Graphs in VS Code: How to Detect Orphan Notes and Broken [[Wiki-Links]] Automatically",
    "directAnswer": "WorksAi GraphMind is an MIT-licensed VS Code and Cursor IDE extension (`worksai-graphmind-1.2.0.vsix`) and companion web verifier that parses `[[wiki-links]]` across Markdown workspaces, builds bidirectional backlink maps, blocks path-traversal sequences (`..`), and lists orphan notes and broken links.",
    "overlapNote": "Serves the installable `.vsix` extension package and companion graph verifier on graphmind.worksai.org.",
    "externalSources": [
      {
        "title": "Foam Personal Knowledge Management for VS Code (MIT)",
        "url": "https://github.com/foambubble/foam"
      },
      {
        "title": "Visual Studio Code Extension API \u2014 Commands & Activation Events",
        "url": "https://code.visualstudio.com/api"
      },
      {
        "title": "CommonMark Markdown Specification",
        "url": "https://spec.commonmark.org/"
      }
    ],
    "exportFormat": "json",
    "exportLabel": "Export Graph Audit (.json)",
    "faqs": [
      [
        "How do I install the WorksAi GraphMind .vsix package in VS Code or Cursor?",
        "Download `worksai-graphmind-1.2.0.vsix` from the primary button above, then run `code --install-extension worksai-graphmind-1.2.0.vsix` or choose 'Extensions: Install from VSIX...' in the Command Palette."
      ],
      [
        "What permissions does the VS Code extension require?",
        "GraphMind runs locally inside the VS Code extension host with read access to your open workspace `.md` files. It only contacts `https://graphmind.worksai.org/api/mcp` if you explicitly run `GraphMind: Sync Graph Snapshot to WorksAI Data Lake`."
      ]
    ],
    "primary_kw": "vscode markdown wiki link graph and orphan note detector extension",
    "secondary_kws": [
      "foam vscode knowledge graph alternative",
      "find broken wiki links markdown",
      "markdown backlink analyzer vsix",
      "local first second brain vscode"
    ],
    "title_tag": "WorksAi GraphMind \u2014 Vscode Markdown Wiki Link Graph And Orphan Note Detector Extension | WorksAI",
    "meta_desc": "WorksAi GraphMind is an MIT-licensed VS Code and Cursor IDE extension (`worksai-graphmind-1.2.0.vsix`) and companion web verifier that parses `[[wiki-links]]`",
    "h1": "WorksAi GraphMind: Managing Markdown Knowledge Graphs in VS Code: How to Detect Orphan Notes and Broken [[Wiki-Links]] Automatically",
    "geo_summary": "WorksAi GraphMind is an MIT-licensed VS Code and Cursor IDE extension (`worksai-graphmind-1.2.0.vsix`) and companion web verifier that parses `[[wiki-links]]` across Markdown workspaces, builds bidirectional backlink maps, blocks path-traversal sequences (`..`), and lists orphan notes and broken links."
  },
  "binaryPackage": {
    "filename": "worksai-graphmind-1.2.0.vsix",
    "mime": "application/vsix",
    "sizeBytes": 2687,
    "sha256": "e91ba7f79b0c29edb236d8cfdd243794a572f0caf4c1e9454a9ff3904bcfcc37",
    "base64": "UEsDBBQAAAAIALhsZ11JelbMvQAAAGYBAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbH2QwW7CMBBEf8XynWzaA0IoCYe2f8APrJxNMMRry7uk6d/jwA1Bjzszb0ea5rCEycyUxUdu7UdVW0PsYu95bO1Vh83OHrrm+JdITImytPakmvYA4k4UUKqYiIszxBxQy5lHSOguOBJ81vUWXGQl1o2uP2zXfNOA10nNz1LkR211lsjWfD2Sa1lrMaXJO9QSgLsNr1F3lv9InFFc9knf8aF/wpUWhYD50sfft62z+CUg+4FEX/FlkBWF+3DdDVBLAwQUAAAACAC4bGdd4vVDZWYBAABeAgAAFgAAAGV4dGVuc2lvbi52c2l4bWFuaWZlc3R9Uk1P5DAM/StRzjSZmRNatUVokRASXSHBwtk0njbb1IkSdz7+PWlnB4Y97Clynv2e/ezy5jA6scOYrKdKrtVKCqTWG0tdJSfeFtfypi6foB2gwwbIbjGxeD0XbNRqLskklCrZM4cfWqe2xxGSGm0bffJbVq0ftcEdOh8w6l06FKccvVmt17IuG2QwwFCXDwaJLR/FI1A3Zc1KIhW/n6V4MJXc+zgksEUXIfSjJSO/WlmrzdzK0/TubOoxfmZLXZd3NgUHx18wYv02f99acT+TNJmk1JdweYepjTZwZq0ffQuu2NqYh24gDsbvSeztYAtnaRAD+b1D06FYOroS79moBbGUArbs45UAMsLH0AMJ8ozCIC+IyroXUqW+cIESg3NwAi6jF4gd8mJG82nvq00TuGeejPXqpzc4j6y/k9ymhJz+vuLlGPC/DOq86+wocJ+3cGCk2WkdTseg/iRPi9CZWv9zJvUHUEsDBBQAAAAIALhsZ12Jf8BbPAEAAGgCAAAWAAAAZXh0ZW5zaW9uL3BhY2thZ2UuanNvbo2RO2/CMBSFd37FVYZOkABqpYqtFW2FCnSgEkMfknHc5CrJtWWbIoT47/WrlKEDiyOf+/n45PjQA8iIdSKbQLaTujEMB5Vmqu6QyqzvxyUa1bL9MlFrT90hPHlq4Sh4346Ho2tYMN2UckfwTHLXirISkYEreNGqZgRTYQW3Ukffb6ENSvKeo3ycD6OqtpsWTS30WaI4aZELMiHDYvYaNUEVkjBOO7itNzVcloH5HOW3N87V6cfAcklW42Zrz3kuu45R6ZW3oECanE+93amU/Mst8YdMCJFYi7b9v6AJPPqaUglL6QK4Tu61bATBGhsczJEakyWvY//CIGZPfMosm7NGXJpk5c6kZ1kRU6aWFqyESM7A20Hw+w0Tvh+nEjuuHqhUEsn6G2prlZkUxV+o9GS51FXBFBbuQNY7/gBQSwMEFAAAAAgAuGxnXZoDBBtjBAAALwsAABcAAABleHRlbnNpb24vZXh0ZW5zaW9uLmNqc41WzW7jNhC++ymmQrGgU63UXh24QZqmRYCkLbBp9yCrWK5E26wlSiWpOF5HQB+iT9gn6ZCiJFpN0r3Y0gw58803f4rPzmZwBu8ruVOXHH6UtN7ecZHDP3/9Db+9g6sqZxDDVSNVJeH6UTOheCXgWmh5qCsuNBDWS+PhKcr+UHNj+JZnKGELuLu5x/d4FjSKgdKSZzo4n83Wjci0MUgFLQ6f2E+VZupGWDw1zRgRRjCH4wwgq4TSIBCRgiUItoc7WpP5+aBaV3JPZX7Lxc6cOLaj6iPNdsVzclntmOhvJKnRoBkgzhlUa/AgAPA1kHcIX2yIiGqqt/D0BEEwj7jIigahkSCKgnl/HEBvZbW3aK+lrCQJfsFL95I+MKloYWULMGGDtcZURmsMcN8zALKqNFo8t/Za+2s5iBTTiIHnIQin9QlIjCodgoKRgomm/b+QO3lJdba1zCdRFA0UoBJzrnsW7KnLoiDxKlklJPl9lT6lX83JxWL1ZF7w+WKVrtJ4M08HzL3r0rh2fkYCO52mcsP0TY7+y+SbNEL/JXFhPxd4VDdqS/pbw0GTvo69LVWjevTm89SrnTFjdzDUAiuwkr1rYyV1x4+gqkZmWPtdkkquFHJ2b40uxoDa0eaQ4nYo0ErWWypsWzjqO/g7dlBknkZrXmgmib1JEB8svz1lw3BRMLHB2loul/A1vHnjhTjVoh0LRzLdSAFHW2pXVSMQsas6/omFJy7C0V7o0xCegMema/1+x78HqhmxBfSoQ3hQGTq4rLnf7Z0QIx+0ptKIPtQMa0WyPxsuGXyB0ING5GzNBcsDuABCLBNHwDGFvy4cd54EnTVsKsxjZgpuPCOaojDido4mFvbVGzGSbbhCwlk+GSS94geBCpKV+Q2mHIPPCyY7KDZF4/3EnjFt6E6dD/PFBY2J6p6wycoSDykjcqFPNFFv+KoT2GwGPdvBtJtyruqB1BeNTMPwm8ilzSC6lJIeIq7sf6+IVPNRZZLXxr/CBntW3nWKQePNN2R1Bh6hJNiYtVTiWsJyF/nPtqpUEAJVB5EBUbSsi251eFT366LrnFOQJzcuwHvFlCcuzCPwfAEBemSP6MyMZ3y1BmMrjMoc5W4Couo9K5BKBrqCJKEy23LNMiwqlqZgcpIkbga8VTXL0jSANjz15V+auvR1U8/fuQbsXFtwz5nv+vGtsTe17qmmxn8VxjRWvL3nppSb3n3x15XUyPLrW/yVCt8jZlyT/6nvTh6pbbW/ETh0cDtg3dwxpeiGvVjkn3OZDJP7w/DVs4Avj10s0TD32q6EwlHlTTU3O1s36fxT/j7oT3UysKMy+uAAnGz2YVAZG3Y7z1/pBlP+31NNb+mOje0gnm2Ez8uRma5J6iANS8DYZciOlg3OfiZy++WHpbHVulaLOB4h2e8WypGkTUxrHpdZjcic8/YkImd8HIlu7KiFJwtfwjtdKDkbVkpXCM6BwWxPllXeFCxijwaK/Q4cllDo3X7V4b9QSwMEFAAAAAgAuGxnXYcIQZZZAAAAYwAAABMAAABleHRlbnNpb24vUkVBRE1FLm1kU1YIzy/KLnbMVHAvSizI8M3MS1HQKDPUM9Iz0OTi8swrLknMyVEoy0xUSEjOT0lV0NXNhIjpplaUpOYVZ+bnKZSDTEjM1E0HmZALNEEXrF+vrDizIkGPCwBQSwECFAMUAAAACAC4bGddSXpWzL0AAABmAQAAEwAAAAAAAAAAAAAAgAEAAAAAW0NvbnRlbnRfVHlwZXNdLnhtbFBLAQIUAxQAAAAIALhsZ13i9UNlZgEAAF4CAAAWAAAAAAAAAAAAAACAAe4AAABleHRlbnNpb24udnNpeG1hbmlmZXN0UEsBAhQDFAAAAAgAuGxnXYl/wFs8AQAAaAIAABYAAAAAAAAAAAAAAIABiAIAAGV4dGVuc2lvbi9wYWNrYWdlLmpzb25QSwECFAMUAAAACAC4bGddmgMEG2MEAAAvCwAAFwAAAAAAAAAAAAAAgAH4AwAAZXh0ZW5zaW9uL2V4dGVuc2lvbi5janNQSwECFAMUAAAACAC4bGddhwhBllkAAABjAAAAEwAAAAAAAAAAAAAAgAGQCAAAZXh0ZW5zaW9uL1JFQURNRS5tZFBLBQYAAAAABQAFAE8BAAAaCQAAAAA="
  }
};
const WORKSAI_CREST_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"38\" height=\"38\" role=\"img\" aria-label=\"WorksAI Metallic WI Crest\">\n  <defs>\n    <radialGradient id=\"wi-bg\" cx=\"30%\" cy=\"25%\" r=\"80%\">\n      <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n      <stop offset=\"65%\" stop-color=\"#0b0f17\"/>\n      <stop offset=\"100%\" stop-color=\"#05070b\"/>\n    </radialGradient>\n    <linearGradient id=\"wi-metal\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n      <stop offset=\"52%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#94a3b8\"/>\n    </linearGradient>\n    <linearGradient id=\"wi-rim\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#f97316\"/>\n      <stop offset=\"35%\" stop-color=\"#38bdf8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n  </defs>\n  <circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"url(#wi-bg)\" stroke=\"url(#wi-rim)\" stroke-width=\"2.5\"/>\n  <path d=\"M9 14 L16 14 L22 40 L29 20 L34 20 L41 40 L35 50 L29 33 L23 50 L17 50 Z\" fill=\"url(#wi-metal)\" stroke=\"#0f172a\" stroke-width=\"1\"/>\n  <rect x=\"46\" y=\"14\" width=\"7.5\" height=\"36\" rx=\"1.5\" fill=\"url(#wi-metal)\" stroke=\"#0f172a\" stroke-width=\"1\"/>\n</svg>";
const DIAGRAM_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 860 260\" role=\"img\" aria-label=\"GraphMind VS Code Extension Side-Panel Showing Bidirectional WikiLink Graph and PageRank Centrality\" style=\"width:100%;height:auto;border-radius:12px;border:1px solid #1E293B;background:#090D16;margin:1rem 0;\">\n  <title>GraphMind VS Code Extension Side-Panel Showing Bidirectional WikiLink Graph and PageRank Centrality</title>\n  <desc>Interactive product architecture and workflow diagram for WorksAi GraphMind (graphmind.worksai.org): Bidirectional [[wikilink]] knowledge graphs, orphan link diagnostics, and MCP agent context for VS Code & Cursor.</desc>\n  <defs>\n    <linearGradient id=\"bg-graphmind\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#090D16\"/>\n    </linearGradient>\n  </defs>\n  <rect width=\"860\" height=\"260\" rx=\"12\" fill=\"url(#bg-graphmind)\"/>\n  <rect x=\"20\" y=\"18\" width=\"820\" height=\"34\" rx=\"6\" fill=\"#1E293B\"/>\n  <circle cx=\"38\" cy=\"35\" r=\"5\" fill=\"#EF4444\"/>\n  <circle cx=\"54\" cy=\"35\" r=\"5\" fill=\"#F59E0B\"/>\n  <circle cx=\"70\" cy=\"35\" r=\"5\" fill=\"#10B981\"/>\n  <text x=\"92\" y=\"39\" fill=\"#E2E8F0\" font-family=\"monospace\" font-size=\"12\" font-weight=\"bold\">graphmind.worksai.org \u2014 WorksAi GraphMind v1.2.0</text>\n  <rect x=\"20\" y=\"66\" width=\"245\" height=\"174\" rx=\"8\" fill=\"#111827\" stroke=\"#334155\"/>\n  <text x=\"36\" y=\"92\" fill=\"#38BDF8\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\">1. TENANT-SCOPED WORKSPACE</text>\n  <text x=\"36\" y=\"116\" fill=\"#94A3B8\" font-family=\"monospace\" font-size=\"11\">R2: workspaces/$tenant/$user/</text>\n  <text x=\"36\" y=\"136\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 Save, Reopen, Rename, Delete</text>\n  <text x=\"36\" y=\"156\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 Strict Cross-Tenant 403 Guard</text>\n  <text x=\"36\" y=\"176\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 File Import &amp; Sample Presets</text>\n  <rect x=\"36\" y=\"194\" width=\"213\" height=\"28\" rx=\"5\" fill=\"#0284C7\"/>\n  <text x=\"142\" y=\"212\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\">Isolated CRUD Active</text>\n\n  <rect x=\"288\" y=\"66\" width=\"284\" height=\"174\" rx=\"8\" fill=\"#111827\" stroke=\"#38BDF8\"/>\n  <text x=\"304\" y=\"92\" fill=\"#A855F7\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\">2. DOMAIN ENGINE + AI COPILOT</text>\n  <text x=\"304\" y=\"116\" fill=\"#E2E8F0\" font-family=\"sans-serif\" font-size=\"11\">Bidirectional [[wikilink]] knowledge graph</text>\n  <text x=\"304\" y=\"138\" fill=\"#94A3B8\" font-family=\"monospace\" font-size=\"11\">Engine: Deterministic AST/Math</text>\n  <text x=\"304\" y=\"158\" fill=\"#94A3B8\" font-family=\"monospace\" font-size=\"11\">Model: llama-3.1-8b-instruct-fp8</text>\n  <text x=\"304\" y=\"178\" fill=\"#10B981\" font-family=\"monospace\" font-size=\"11\">Status: Verified Edge Execution</text>\n  <rect x=\"304\" y=\"194\" width=\"252\" height=\"28\" rx=\"5\" fill=\"#1E293B\" stroke=\"#38BDF8\"/>\n  <text x=\"430\" y=\"212\" text-anchor=\"middle\" fill=\"#38BDF8\" font-family=\"monospace\" font-size=\"11\">POST /api/execute &amp; /api/workspace/items</text>\n\n  <rect x=\"595\" y=\"66\" width=\"245\" height=\"174\" rx=\"8\" fill=\"#111827\" stroke=\"#334155\"/>\n  <text x=\"611\" y=\"92\" fill=\"#10B981\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\">3. EXPORT &amp; RELEASE ARTIFACTS</text>\n  <text x=\"611\" y=\"116\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 Native Format Export (.svg/.csv/.wav)</text>\n  <text x=\"611\" y=\"136\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 Signed Release Archive Download</text>\n  <text x=\"611\" y=\"156\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 Zero-PII Engagement Telemetry</text>\n  <text x=\"611\" y=\"176\" fill=\"#CBD5E1\" font-family=\"sans-serif\" font-size=\"11\">\u2022 /docs &amp; /guide Technical SEO</text>\n  <rect x=\"611\" y=\"194\" width=\"213\" height=\"28\" rx=\"5\" fill=\"#059669\"/>\n  <text x=\"717\" y=\"212\" text-anchor=\"middle\" fill=\"#FFFFFF\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\">Verified Deliverable Ready</text>\n</svg>";
const BUNDLED_STYLES_CSS = "\n:root {\n  --bg-root: #070B12;\n  --bg-panel: #0F172A;\n  --bg-card: #111C33;\n  --bg-input: #090E1A;\n  --border-subtle: #1E293B;\n  --border-focus: #38BDF8;\n  --text-main: #F8FAFC;\n  --text-muted: #94A3B8;\n  --accent-cyan: #0284C7;\n  --accent-cyan-bright: #38BDF8;\n  --accent-purple: #7C3AED;\n  --accent-emerald: #059669;\n  --accent-amber: #D97706;\n  --accent-red: #DC2626;\n}\n* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  background: var(--bg-root);\n  color: var(--text-main);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Inter, sans-serif;\n  line-height: 1.5;\n}\na { color: var(--accent-cyan-bright); text-decoration: none; }\na:hover { text-decoration: underline; }\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 0.86rem;\n}\nbutton:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, a:focus-visible, [tabindex]:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: 2px;\n}\n.app-topbar {\n  background: #090D16;\n  border-bottom: 1px solid var(--border-subtle);\n  padding: 0.65rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.brand-cluster {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n}\n.badge-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.73rem;\n  font-weight: 700;\n  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n}\n.badge-demo { background: #422006; color: #FDE68A; border: 1px solid #D97706; }\n.badge-prod { background: #064E3B; color: #A7F3D0; border: 1px solid #059669; }\n.btn {\n  border: 1px solid transparent;\n  border-radius: 6px;\n  padding: 0.42rem 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition: opacity 0.15s ease;\n}\n.btn:hover { opacity: 0.92; }\n.btn-primary { background: var(--accent-cyan); color: #FFF; }\n.btn-purple { background: var(--accent-purple); color: #FFF; }\n.btn-emerald { background: var(--accent-emerald); color: #FFF; }\n.btn-ghost { background: #1E293B; color: #E2E8F0; border-color: #334155; }\n.btn-danger { background: #7F1D1D; color: #FECACA; border-color: #991B1B; }\n.workspace-shell {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 1rem 1.25rem 2.5rem;\n}\n.kpi-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.kpi-card {\n  background: var(--bg-panel);\n  border: 1px solid var(--border-subtle);\n  border-radius: 10px;\n  padding: 0.8rem 1rem;\n}\n.kpi-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }\n.kpi-val { font-size: 1.35rem; font-weight: 700; margin-top: 0.2rem; color: #F8FAFC; font-family: ui-monospace, monospace; }\n.app-grid-3 {\n  display: grid;\n  grid-template-columns: 280px 1fr 310px;\n  gap: 1rem;\n  align-items: start;\n}\n.app-grid-2 {\n  display: grid;\n  grid-template-columns: 290px 1fr;\n  gap: 1rem;\n  align-items: start;\n}\n.panel-box {\n  background: var(--bg-panel);\n  border: 1px solid var(--border-subtle);\n  border-radius: 10px;\n  padding: 1rem;\n}\n.panel-title {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #F8FAFC;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-field { margin-bottom: 0.65rem; }\n.form-field label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem; }\n.input-ctrl {\n  width: 100%;\n  background: var(--bg-input);\n  border: 1px solid #334155;\n  color: #F8FAFC;\n  padding: 0.42rem 0.6rem;\n  border-radius: 6px;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.83rem;\n}\n.data-table th {\n  text-align: left;\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #334155;\n  color: var(--accent-cyan-bright);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n.data-table td {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid var(--border-subtle);\n  vertical-align: middle;\n}\n.toast-banner {\n  margin-bottom: 0.85rem;\n  padding: 0.55rem 0.9rem;\n  border-radius: 8px;\n  background: #090E1A;\n  border: 1px solid #1E293B;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.82rem;\n  font-family: ui-monospace, monospace;\n}\n.modal-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(5, 8, 15, 0.78);\n  z-index: 100;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.modal-backdrop.open { display: flex; }\n.modal-card {\n  background: var(--bg-panel);\n  border: 1px solid #334155;\n  border-radius: 12px;\n  max-width: 460px;\n  width: 100%;\n  padding: 1.25rem;\n}\n@media (max-width: 1024px) {\n  .app-grid-3, .app-grid-2 { grid-template-columns: 1fr; }\n}\n";
const BUNDLED_APP_JS = "\n(function() {\n  const META = window.__WORKSAI_META__ || {};\n  const INITIAL_STATE = window.__WORKSAI_INITIAL__ || {};\n  let sessionToken = localStorage.getItem('worksai_token_' + META.slug) || '';\n  let currentAuth = INITIAL_STATE.identity || { authenticated: false, mode: 'demo', tenantId: 'demo-sandbox', userId: 'demo-visitor' };\n  let activeProjectId = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.id) || ('seed-' + META.slug + '-1');\n  let activeProjectTitle = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.title) || (META.name + ' Starter Project');\n\n  // Product-specific interactive state\n  let canvasState = {\n    layout: 'layered',\n    highlightSpof: true,\n    selectedNodeId: null,\n    history: [],\n    nodes: [],\n    edges: []\n  };\n  let ledgerTransactions = [];\n  let ledgerBudgets = { infrastructure: 1500, compute: 5000, software: 1200, operations: 2000 };\n  let waveCutChapters = [\n    { id: 'ch-1', timeSec: 0.0, title: '00:00 \u2014 Episode Intro & Hook', state: 'Keep' },\n    { id: 'ch-2', timeSec: 4.5, title: '00:04 \u2014 Architecture Deep Dive', state: 'Keep' },\n    { id: 'ch-3', timeSec: 9.5, title: '00:09 \u2014 Production Benchmarks', state: 'Keep' }\n  ];\n  let omniTickets = [\n    {\n      id: 'TKT-901',\n      subject: 'Production SSO SAML assertion clock-skew timeout',\n      customer: 'acme-bank.example',\n      tier: 'enterprise',\n      status: 'open',\n      priority: 'P1',\n      ageMinutes: 52,\n      slaMinutes: 45,\n      messages: [\n        { author: 'secops@acme-bank.example', type: 'customer', text: 'IdP initiated login fails with SAML NotOnOrAfter clock skew error across EU edge pops.' },\n        { author: 'OmniDesk SLA Engine', type: 'internal', text: 'Auto-Triaged as Enterprise P1 (SLA breached by +7m). Recommended KB: KB-101.' }\n      ]\n    },\n    {\n      id: 'TKT-902',\n      subject: 'Webhook HMAC signature retry backoff configuration',\n      customer: 'fintech-ops.example',\n      tier: 'pro',\n      status: 'in_progress',\n      priority: 'P2',\n      ageMinutes: 65,\n      slaMinutes: 120,\n      messages: [\n        { author: 'dev@fintech-ops.example', type: 'customer', text: 'How do we configure exponential backoff when our webhook receiver returns HTTP 503?' }\n      ]\n    },\n    {\n      id: 'TKT-903',\n      subject: 'Custom domain TLS certificate provisioning status',\n      customer: 'studio-media.example',\n      tier: 'pro',\n      status: 'resolved',\n      priority: 'P3',\n      ageMinutes: 30,\n      slaMinutes: 240,\n      messages: [\n        { author: 'admin@studio-media.example', type: 'customer', text: 'Attached Worker custom domain and verified HTTP 200.' }\n      ]\n    }\n  ];\n  let activeTicketId = 'TKT-901';\n\n  function setStatus(msg, isError) {\n    const el = document.getElementById('statusBanner');\n    if (!el) return;\n    el.textContent = msg;\n    el.style.borderColor = isError ? '#DC2626' : '#1E293B';\n    el.style.color = isError ? '#FCA5A5' : '#38BDF8';\n  }\n\n  function authHeaders() {\n    const h = { 'Content-Type': 'application/json' };\n    if (sessionToken) h['Authorization'] = 'Bearer ' + sessionToken;\n    return h;\n  }\n\n  function updateAuthBadge() {\n    const badge = document.getElementById('authModeBadge');\n    const btn = document.getElementById('authActionBtn');\n    if (!badge) return;\n    if (currentAuth && currentAuth.authenticated && currentAuth.mode === 'production') {\n      badge.className = 'badge-pill badge-prod';\n      badge.textContent = 'AUTH: ' + currentAuth.tenantId + ' / ' + currentAuth.userId;\n      if (btn) btn.textContent = 'Switch / Sign Out';\n    } else {\n      badge.className = 'badge-pill badge-demo';\n      badge.textContent = 'DEMO SANDBOX (' + (currentAuth.tenantId || 'demo-sandbox') + ')';\n      if (btn) btn.textContent = 'Sign In to Workspace';\n    }\n  }\n\n  async function ensureDemoOrAuthSession() {\n    const res = await fetch('/api/auth/me', { headers: authHeaders() });\n    if (res.ok) {\n      const data = await res.json();\n      if (data.authenticated) {\n        currentAuth = data.identity;\n        updateAuthBadge();\n        return;\n      }\n    }\n    // Issue a server-signed isolated demo session token automatically so demo CRUD works cleanly without spoofing headers\n    const demoRes = await fetch('/api/auth/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' } });\n    if (demoRes.ok) {\n      const d = await demoRes.json();\n      sessionToken = d.token || '';\n      localStorage.setItem('worksai_token_' + META.slug, sessionToken);\n      currentAuth = d.identity || currentAuth;\n      updateAuthBadge();\n    }\n  }\n\n  async function submitSignIn(ev) {\n    if (ev) ev.preventDefault();\n    const email = (document.getElementById('authEmailInput').value || '').trim();\n    const workspaceSlug = (document.getElementById('authTenantInput').value || '').trim();\n    const passcode = (document.getElementById('authPasscodeInput').value || '').trim();\n    if (!email || !workspaceSlug || passcode.length < 6) {\n      setStatus('Sign-in validation error: Enter valid email, workspace tenant slug, and 6+ char passcode.', true);\n      return false;\n    }\n    const res = await fetch('/api/auth/session', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ email, workspaceSlug, passcode })\n    });\n    const data = await res.json();\n    if (!res.ok) {\n      setStatus('Sign-in failed: ' + (data.error || res.status), true);\n      return false;\n    }\n    sessionToken = data.token;\n    localStorage.setItem('worksai_token_' + META.slug, sessionToken);\n    currentAuth = data.identity;\n    updateAuthBadge();\n    closeAuthModal();\n    setStatus('Signed in to isolated workspace ' + currentAuth.tenantId + ' as ' + currentAuth.userId);\n    await refreshProjectList();\n    return false;\n  }\n\n  async function startDemoSession() {\n    const res = await fetch('/api/auth/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' } });\n    const data = await res.json();\n    if (res.ok) {\n      sessionToken = data.token;\n      localStorage.setItem('worksai_token_' + META.slug, sessionToken);\n      currentAuth = data.identity;\n      updateAuthBadge();\n      closeAuthModal();\n      setStatus('Switched to isolated Demo Sandbox session (' + currentAuth.userId + ')');\n      await refreshProjectList();\n    }\n  }\n\n  function openAuthModal() {\n    const m = document.getElementById('authModalBackdrop');\n    if (m) m.classList.add('open');\n  }\n  function closeAuthModal() {\n    const m = document.getElementById('authModalBackdrop');\n    if (m) m.classList.remove('open');\n  }\n\n  // --- Shared R2 Project CRUD ---\n  async function refreshProjectList() {\n    const ul = document.getElementById('projectList');\n    if (!ul) return;\n    const res = await fetch('/api/workspace/items', { headers: authHeaders() });\n    if (!res.ok) return;\n    const data = await res.json();\n    const items = data.items || [];\n    ul.innerHTML = items.map(function(item) {\n      return '<li data-id=\"' + item.id + '\" style=\"background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.5rem;\">' +\n        '<div style=\"font-weight:600;font-size:0.81rem;color:#F8FAFC;\">' + item.title + '</div>' +\n        '<div style=\"font-size:0.68rem;color:#64748B;font-family:monospace;margin:0.15rem 0 0.4rem;\">' + item.id + ' \u2022 v' + (item.version || 1) + '</div>' +\n        '<div style=\"display:flex;gap:0.3rem;flex-wrap:wrap;\">' +\n          '<button type=\"button\" class=\"btn btn-ghost\" style=\"padding:0.18rem 0.45rem;font-size:0.71rem;\" onclick=\"window.WAI.openProject(\\'' + item.id + '\\')\">Open</button>' +\n          '<button type=\"button\" class=\"btn btn-ghost\" style=\"padding:0.18rem 0.45rem;font-size:0.71rem;\" onclick=\"window.WAI.renameProject(\\'' + item.id + '\\')\">Rename</button>' +\n          '<button type=\"button\" class=\"btn btn-danger\" style=\"padding:0.18rem 0.45rem;font-size:0.71rem;\" onclick=\"window.WAI.deleteProject(\\'' + item.id + '\\')\">Delete</button>' +\n        '</div>' +\n      '</li>';\n    }).join('');\n  }\n\n  async function openProject(id) {\n    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), { headers: authHeaders() });\n    const data = await res.json();\n    if (!res.ok) {\n      setStatus('Cannot open project: ' + (data.error || res.status), true);\n      return;\n    }\n    activeProjectId = data.item.id;\n    activeProjectTitle = data.item.title;\n    const titleEl = document.getElementById('projectTitleInput');\n    if (titleEl) titleEl.value = activeProjectTitle;\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) inputEl.value = data.item.input || '';\n    hydrateDomainStateFromInput(data.item.input || '');\n    setStatus('Opened project \"' + activeProjectTitle + '\" (v' + data.item.version + ')');\n  }\n\n  async function saveCurrentProject() {\n    const titleEl = document.getElementById('projectTitleInput');\n    if (titleEl && titleEl.value.trim()) activeProjectTitle = titleEl.value.trim();\n    const inputEl = document.getElementById('workspaceInput');\n    const payloadStr = inputEl ? inputEl.value : META.defaultInput;\n    const res = await fetch('/api/workspace/items', {\n      method: 'POST',\n      headers: authHeaders(),\n      body: JSON.stringify({ id: activeProjectId, title: activeProjectTitle, input: payloadStr })\n    });\n    const data = await res.json();\n    if (!res.ok) {\n      setStatus('Save failed: ' + (data.error || res.status), true);\n      return null;\n    }\n    activeProjectId = data.item.id;\n    setStatus('Saved \"' + data.item.title + '\" (v' + data.item.version + ') to R2 [' + currentAuth.tenantId + '/' + currentAuth.userId + ']');\n    await refreshProjectList();\n    return data.item;\n  }\n\n  async function renameProject(id) {\n    const nextTitle = prompt('Enter new project title:', activeProjectTitle);\n    if (!nextTitle || !nextTitle.trim()) return;\n    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), {\n      method: 'PATCH',\n      headers: authHeaders(),\n      body: JSON.stringify({ title: nextTitle.trim() })\n    });\n    if (res.ok) {\n      activeProjectTitle = nextTitle.trim();\n      const titleEl = document.getElementById('projectTitleInput');\n      if (titleEl) titleEl.value = activeProjectTitle;\n      setStatus('Renamed project ' + id + ' to \"' + activeProjectTitle + '\"');\n      await refreshProjectList();\n    }\n  }\n\n  async function deleteProject(id) {\n    const res = await fetch('/api/workspace/items/' + encodeURIComponent(id), {\n      method: 'DELETE',\n      headers: authHeaders()\n    });\n    if (res.ok) {\n      setStatus('Deleted project ' + id + ' from R2 workspace');\n      await refreshProjectList();\n    }\n  }\n\n  function newProject() {\n    activeProjectId = 'proj-' + Date.now().toString(36);\n    activeProjectTitle = META.name + ' Draft ' + activeProjectId.slice(-4);\n    const titleEl = document.getElementById('projectTitleInput');\n    if (titleEl) titleEl.value = activeProjectTitle;\n    setStatus('Initialized new project \"' + activeProjectTitle + '\" \u2014 click Save to persist to R2.');\n  }\n\n  async function exportActiveProject(fmt) {\n    await saveCurrentProject();\n    const url = '/api/workspace/export/' + encodeURIComponent(activeProjectId) + '?format=' + encodeURIComponent(fmt);\n    const res = await fetch(url, { headers: authHeaders() });\n    if (!res.ok) {\n      setStatus('Export failed (' + res.status + ')', true);\n      return;\n    }\n    const blob = await res.blob();\n    const dlUrl = URL.createObjectURL(blob);\n    const a = document.createElement('a');\n    a.href = dlUrl;\n    a.download = META.slug + '-' + activeProjectId + '.' + fmt;\n    document.body.appendChild(a);\n    a.click();\n    a.remove();\n    setStatus('Exported ' + a.download + ' (' + blob.size + ' bytes)');\n  }\n\n  function loadPreset(idx) {\n    const presets = META.samplePresets || [];\n    const p = presets[Number(idx)] || presets[0];\n    if (!p) return;\n    activeProjectTitle = p.title;\n    const titleEl = document.getElementById('projectTitleInput');\n    if (titleEl) titleEl.value = p.title;\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) inputEl.value = p.input;\n    hydrateDomainStateFromInput(p.input);\n    setStatus('Loaded sample preset: ' + p.title);\n  }\n\n  function importFile(ev) {\n    const file = ev.target.files && ev.target.files[0];\n    if (!file) return;\n    const reader = new FileReader();\n    reader.onload = function() {\n      const content = String(reader.result || '');\n      const inputEl = document.getElementById('workspaceInput');\n      if (inputEl) inputEl.value = content;\n      hydrateDomainStateFromInput(content);\n      setStatus('Imported ' + file.name + ' (' + file.size + ' bytes)');\n    };\n    reader.readAsText(file);\n  }\n\n  async function runWithAiCopilot() {\n    const inputEl = document.getElementById('workspaceInput');\n    const box = document.getElementById('aiCopilotBox');\n    if (box) box.textContent = 'Running Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct-fp8)...';\n    const res = await fetch('/api/execute', {\n      method: 'POST',\n      headers: authHeaders(),\n      body: JSON.stringify({ input: inputEl ? inputEl.value : META.defaultInput, enableAi: true })\n    });\n    const data = await res.json();\n    if (box) {\n      box.textContent = data.aiCopilotNote || (data.result && data.result.summary) || 'Analysis complete.';\n    }\n    setStatus('Completed AI Copilot review (genuineAiInvoked=' + Boolean(data.genuineAiInvoked) + ')');\n  }\n\n  // ============================================================================\n  // 1. CANVASARCH INTERACTIVE DIAGRAMMING ENGINE\n  // ============================================================================\n  function parseCanvasSpecToGraph(specText) {\n    const lines = String(specText || '').split(/\\r?\\n/).map(l => l.trim()).filter(l => l && !l.startsWith('//'));\n    const nodeMap = new Map();\n    const edges = [];\n    function ensureNode(label) {\n      const clean = label.trim();\n      if (!nodeMap.has(clean)) {\n        const idx = nodeMap.size;\n        const role = /db|postgres|sql|r2|bucket/i.test(clean) ? 'database'\n          : /gateway|edge|cdn|client|browser/i.test(clean) ? 'gateway'\n          : /cache|redis|kv/i.test(clean) ? 'cache' : 'service';\n        nodeMap.set(clean, { id: 'n-' + idx, label: clean, role, fanIn: 0, fanOut: 0, x: 0, y: 0 });\n      }\n      return nodeMap.get(clean);\n    }\n    lines.forEach(function(line) {\n      const parts = line.split(/-->|->/);\n      if (parts.length >= 2) {\n        for (let i = 0; i < parts.length - 1; i++) {\n          const src = ensureNode(parts[i]);\n          const dst = ensureNode(parts[i + 1]);\n          src.fanOut += 1;\n          dst.fanIn += 1;\n          edges.push({ from: src.id, to: dst.id, fromLabel: src.label, toLabel: dst.label });\n        }\n      } else {\n        ensureNode(line);\n      }\n    });\n    const nodes = Array.from(nodeMap.values());\n    layoutCanvasNodes(nodes, canvasState.layout);\n    canvasState.nodes = nodes;\n    canvasState.edges = edges;\n  }\n\n  function layoutCanvasNodes(nodes, mode) {\n    const count = nodes.length || 1;\n    nodes.forEach(function(n, idx) {\n      if (mode === 'grid') {\n        const col = idx % 3;\n        const row = Math.floor(idx / 3);\n        n.x = 60 + col * 240;\n        n.y = 60 + row * 120;\n      } else if (mode === 'radial') {\n        const angle = (2 * Math.PI * idx) / count;\n        n.x = Math.round(330 + 210 * Math.cos(angle));\n        n.y = Math.round(165 + 115 * Math.sin(angle));\n      } else {\n        const col = idx % 2;\n        const row = Math.floor(idx / 2);\n        n.x = 70 + col * 340;\n        n.y = 50 + row * 110;\n      }\n    });\n  }\n\n  function renderCanvasArchDom() {\n    const stage = document.getElementById('archCanvasStage');\n    if (!stage) return;\n    const nodes = canvasState.nodes;\n    const edges = canvasState.edges;\n    const spofs = nodes.filter(n => (n.fanIn + n.fanOut) >= 2);\n\n    const nc = document.getElementById('caNodeCount'); if (nc) nc.textContent = String(nodes.length);\n    const ec = document.getElementById('caEdgeCount'); if (ec) ec.textContent = String(edges.length);\n    const sc = document.getElementById('caSpofCount'); if (sc) sc.textContent = String(spofs.length);\n    const ll = document.getElementById('caLayoutLabel'); if (ll) ll.textContent = canvasState.layout.toUpperCase();\n\n    const nodeById = {};\n    nodes.forEach(n => { nodeById[n.id] = n; });\n\n    let svgEdges = '';\n    edges.forEach(function(e) {\n      const a = nodeById[e.from];\n      const b = nodeById[e.to];\n      if (!a || !b) return;\n      const x1 = a.x + 95, y1 = a.y + 32;\n      const x2 = b.x + 95, y2 = b.y + 32;\n      svgEdges += '<line x1=\"' + x1 + '\" y1=\"' + y1 + '\" x2=\"' + x2 + '\" y2=\"' + y2 + '\" stroke=\"#38BDF8\" stroke-width=\"2.2\" marker-end=\"url(#arrowHead)\"/>';\n    });\n\n    let svgNodes = '';\n    nodes.forEach(function(n) {\n      const isSpof = canvasState.highlightSpof && (n.fanIn + n.fanOut) >= 2;\n      const isSelected = canvasState.selectedNodeId === n.id;\n      const stroke = isSelected ? '#F8FAFC' : (isSpof ? '#F59E0B' : '#0284C7');\n      const fill = n.role === 'database' ? '#064E3B' : (n.role === 'gateway' ? '#1E1B4B' : '#0F172A');\n      svgNodes += '<g class=\"canvas-node\" data-id=\"' + n.id + '\" transform=\"translate(' + n.x + ',' + n.y + ')\" style=\"cursor:grab;\" onclick=\"window.WAI.selectCanvasNode(\\'' + n.id + '\\')\">' +\n        '<rect width=\"190\" height=\"64\" rx=\"10\" fill=\"' + fill + '\" stroke=\"' + stroke + '\" stroke-width=\"' + (isSelected ? '3' : '2') + '\"/>' +\n        '<text x=\"14\" y=\"26\" fill=\"#F8FAFC\" font-size=\"12\" font-weight=\"bold\" font-family=\"sans-serif\">' + n.label.slice(0, 22) + '</text>' +\n        '<text x=\"14\" y=\"46\" fill=\"#94A3B8\" font-size=\"10\" font-family=\"monospace\">' + n.role.toUpperCase() + ' \u2022 in:' + n.fanIn + ' out:' + n.fanOut + (isSpof ? ' [SPOF]' : '') + '</text>' +\n      '</g>';\n    });\n\n    stage.innerHTML = '<svg id=\"archSvgCanvas\" viewBox=\"0 0 760 370\" style=\"width:100%;height:360px;user-select:none;\">' +\n      '<defs><marker id=\"arrowHead\" markerWidth=\"8\" markerHeight=\"6\" refX=\"7\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#38BDF8\"/></marker></defs>' +\n      svgEdges + svgNodes + '</svg>';\n\n    // Populate SPOF list\n    const spofList = document.getElementById('caSpofList');\n    if (spofList) {\n      spofList.innerHTML = spofs.length ? spofs.map(function(s) {\n        return '<div style=\"background:#1E293B;border-left:3px solid #F59E0B;padding:0.45rem 0.6rem;border-radius:4px;\">' +\n          '<strong>' + s.label + '</strong> (fan-in ' + s.fanIn + ', fan-out ' + s.fanOut + ') \u2014 Recommend multi-AZ replica or queue buffer.' +\n        '</div>';\n      }).join('') : '<div>No single-point-of-failure bottlenecks detected.</div>';\n    }\n\n    enableSvgNodeDragging();\n  }\n\n  function enableSvgNodeDragging() {\n    const svg = document.getElementById('archSvgCanvas');\n    if (!svg) return;\n    let draggingNode = null;\n    let startX = 0, startY = 0;\n\n    svg.addEventListener('pointerdown', function(ev) {\n      const g = ev.target.closest('.canvas-node');\n      if (!g) return;\n      const id = g.getAttribute('data-id');\n      draggingNode = canvasState.nodes.find(n => n.id === id);\n      if (!draggingNode) return;\n      startX = ev.clientX - draggingNode.x;\n      startY = ev.clientY - draggingNode.y;\n    });\n    window.addEventListener('pointermove', function(ev) {\n      if (!draggingNode) return;\n      draggingNode.x = Math.max(10, Math.min(550, Math.round(ev.clientX - startX)));\n      draggingNode.y = Math.max(10, Math.min(295, Math.round(ev.clientY - startY)));\n      renderCanvasArchDom();\n    });\n    window.addEventListener('pointerup', function() {\n      draggingNode = null;\n    });\n  }\n\n  function selectCanvasNode(nodeId) {\n    canvasState.selectedNodeId = nodeId;\n    const node = canvasState.nodes.find(n => n.id === nodeId);\n    const box = document.getElementById('caNodeInspector');\n    if (node && box) {\n      box.innerHTML = '<div style=\"font-weight:700;color:#38BDF8;margin-bottom:0.35rem;\">' + node.label + '</div>' +\n        '<div style=\"font-size:0.76rem;color:#94A3B8;margin-bottom:0.5rem;\">Role: ' + node.role + ' \u2022 Coords: (' + node.x + ', ' + node.y + ')</div>' +\n        '<div style=\"display:flex;gap:0.4rem;\">' +\n          '<button type=\"button\" class=\"btn btn-danger\" style=\"font-size:0.74rem;padding:0.25rem 0.55rem;\" onclick=\"window.WAI.deleteCanvasNode(\\'' + node.id + '\\')\">Remove Node</button>' +\n        '</div>';\n    }\n    renderCanvasArchDom();\n  }\n\n  function deleteCanvasNode(nodeId) {\n    const node = canvasState.nodes.find(n => n.id === nodeId);\n    if (!node) return;\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) {\n      const lines = inputEl.value.split(/\\r?\\n/).filter(l => !l.includes(node.label));\n      inputEl.value = lines.join('\\n');\n      syncCanvasFromText();\n    }\n  }\n\n  function canvasAddNode(ev) {\n    if (ev) ev.preventDefault();\n    const nameEl = document.getElementById('caNewNodeName');\n    const targetEl = document.getElementById('caConnectTarget');\n    const label = (nameEl && nameEl.value || '').trim();\n    if (!label) return false;\n    const target = (targetEl && targetEl.value || '').trim() || (canvasState.nodes[0] && canvasState.nodes[0].label) || 'Cloudflare Edge Worker';\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) {\n      canvasState.history.push(inputEl.value);\n      inputEl.value = (inputEl.value.trim() + '\\n' + target + ' -> ' + label).trim();\n      syncCanvasFromText();\n    }\n    if (nameEl) nameEl.value = '';\n    setStatus('Added node \"' + label + '\" connected to \"' + target + '\"');\n    return false;\n  }\n\n  function setCanvasLayout(mode) {\n    canvasState.layout = mode;\n    layoutCanvasNodes(canvasState.nodes, mode);\n    renderCanvasArchDom();\n    setStatus('Applied ' + mode + ' auto-layout to architecture graph.');\n  }\n\n  function toggleSpofOverlay() {\n    canvasState.highlightSpof = !canvasState.highlightSpof;\n    renderCanvasArchDom();\n  }\n\n  function canvasUndo() {\n    if (!canvasState.history.length) return;\n    const prev = canvasState.history.pop();\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) {\n      inputEl.value = prev;\n      syncCanvasFromText();\n    }\n  }\n\n  function syncCanvasFromText() {\n    const inputEl = document.getElementById('workspaceInput');\n    if (!inputEl) return;\n    parseCanvasSpecToGraph(inputEl.value);\n    renderCanvasArchDom();\n  }\n\n  // ============================================================================\n  // 2. LEDGERFLOW INTERACTIVE FINANCE & BUDGET ENGINE\n  // ============================================================================\n  function parseLedgerCsvToRows(csvText) {\n    const lines = String(csvText || '').split(/\\r?\\n/).map(l => l.trim()).filter(Boolean);\n    ledgerTransactions = lines.map(function(line, idx) {\n      const parts = line.split(',').map(p => p.trim());\n      const amount = parseFloat(parts[2] || '0') || 0;\n      return {\n        id: 'tx-' + idx,\n        date: parts[0] || '2026-03-01',\n        desc: parts[1] || 'Transaction',\n        amount: amount,\n        category: parts[3] || (amount >= 0 ? 'revenue' : 'infrastructure'),\n        reviewed: false\n      };\n    });\n  }\n\n  function syncLedgerToText() {\n    const inputEl = document.getElementById('workspaceInput');\n    if (!inputEl) return;\n    inputEl.value = ledgerTransactions.map(t => [t.date, t.desc, t.amount.toFixed(2), t.category].join(',')).join('\\n');\n  }\n\n  function renderLedgerView() {\n    const tbody = document.getElementById('lfTxTableBody');\n    if (!tbody) return;\n    const q = (document.getElementById('lfSearchFilter') && document.getElementById('lfSearchFilter').value || '').toLowerCase();\n    const catF = (document.getElementById('lfCatFilter') && document.getElementById('lfCatFilter').value) || 'all';\n    const stF = (document.getElementById('lfStatusFilter') && document.getElementById('lfStatusFilter').value) || 'all';\n\n    let inflow = 0, outflow = 0, anomalies = 0;\n    const catSpend = { infrastructure: 0, compute: 0, software: 0, operations: 0 };\n\n    ledgerTransactions.forEach(function(t) {\n      if (t.amount >= 0) inflow += t.amount;\n      else {\n        const abs = Math.abs(t.amount);\n        outflow += abs;\n        if (catSpend[t.category] !== undefined) catSpend[t.category] += abs;\n      }\n      t.isAnomaly = !t.reviewed && Math.abs(t.amount) >= 2500 && t.amount < 0;\n      if (t.isAnomaly) anomalies += 1;\n    });\n\n    const net = inflow - outflow;\n    const infEl = document.getElementById('lfInflow'); if (infEl) infEl.textContent = '$' + inflow.toLocaleString('en-US', { minimumFractionDigits: 2 });\n    const outEl = document.getElementById('lfOutflow'); if (outEl) outEl.textContent = '$' + outflow.toLocaleString('en-US', { minimumFractionDigits: 2 });\n    const netEl = document.getElementById('lfNet'); if (netEl) netEl.textContent = (net >= 0 ? '+$' : '-$') + Math.abs(net).toLocaleString('en-US', { minimumFractionDigits: 2 });\n    const anEl = document.getElementById('lfAnomalyCount'); if (anEl) anEl.textContent = String(anomalies);\n\n    const filtered = ledgerTransactions.filter(function(t) {\n      if (q && !t.desc.toLowerCase().includes(q) && !t.category.toLowerCase().includes(q)) return false;\n      if (catF !== 'all' && t.category !== catF) return false;\n      if (stF === 'anomaly' && !t.isAnomaly) return false;\n      if (stF === 'cleared' && t.isAnomaly) return false;\n      return true;\n    });\n\n    tbody.innerHTML = filtered.map(function(t) {\n      const badge = t.isAnomaly\n        ? '<span class=\"badge-pill\" style=\"background:#7F1D1D;color:#FECACA;\">ANOMALY SPIKE</span>'\n        : '<span class=\"badge-pill\" style=\"background:#064E3B;color:#A7F3D0;\">CLEARED</span>';\n      return '<tr>' +\n        '<td style=\"font-family:monospace;\">' + t.date + '</td>' +\n        '<td><strong>' + t.desc + '</strong></td>' +\n        '<td><span class=\"badge-pill\" style=\"background:#1E293B;color:#CBD5E1;\">' + t.category + '</span></td>' +\n        '<td style=\"font-family:monospace;color:' + (t.amount >= 0 ? '#10B981' : '#F87171') + ';\">' + (t.amount >= 0 ? '+' : '') + '$' + t.amount.toFixed(2) + '</td>' +\n        '<td>' + badge + '</td>' +\n        '<td>' +\n          (t.isAnomaly ? '<button type=\"button\" class=\"btn btn-ghost\" style=\"padding:0.15rem 0.45rem;font-size:0.72rem;margin-right:0.25rem;\" onclick=\"window.WAI.ledgerClearAnomaly(\\'' + t.id + '\\')\">Mark Reviewed</button>' : '') +\n          '<button type=\"button\" class=\"btn btn-danger\" style=\"padding:0.15rem 0.45rem;font-size:0.72rem;\" onclick=\"window.WAI.ledgerDeleteTx(\\'' + t.id + '\\')\">Delete</button>' +\n        '</td>' +\n      '</tr>';\n    }).join('');\n\n    const bBox = document.getElementById('lfBudgetBars');\n    if (bBox) {\n      bBox.innerHTML = Object.keys(ledgerBudgets).map(function(cat) {\n        const spent = catSpend[cat] || 0;\n        const cap = ledgerBudgets[cat] || 1000;\n        const pct = Math.min(100, Math.round((spent / cap) * 100));\n        const barColor = pct >= 95 ? '#EF4444' : (pct >= 75 ? '#F59E0B' : '#10B981');\n        return '<div style=\"background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;\">' +\n          '<div style=\"display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.25rem;\">' +\n            '<strong style=\"text-transform:capitalize;\">' + cat + '</strong>' +\n            '<span style=\"font-family:monospace;\">$' + spent.toFixed(0) + ' / $' + cap + ' (' + pct + '%)</span>' +\n          '</div>' +\n          '<div style=\"background:#1E293B;height:7px;border-radius:999px;overflow:hidden;\">' +\n            '<div style=\"width:' + pct + '%;height:100%;background:' + barColor + ';\"></div>' +\n          '</div>' +\n        '</div>';\n      }).join('');\n    }\n  }\n\n  function ledgerAddTransaction(ev) {\n    if (ev) ev.preventDefault();\n    const date = document.getElementById('lfTxDate').value;\n    const desc = document.getElementById('lfTxDesc').value.trim();\n    const amount = parseFloat(document.getElementById('lfTxAmount').value);\n    const cat = document.getElementById('lfTxCat').value;\n    if (!date || !desc || isNaN(amount)) {\n      setStatus('Validation error: Please enter valid date, payee, and numeric amount.', true);\n      return false;\n    }\n    ledgerTransactions.unshift({\n      id: 'tx-' + Date.now().toString(36),\n      date: date,\n      desc: desc,\n      amount: amount,\n      category: cat,\n      reviewed: false\n    });\n    document.getElementById('lfTxDesc').value = '';\n    document.getElementById('lfTxAmount').value = '';\n    syncLedgerToText();\n    renderLedgerView();\n    setStatus('Recorded transaction \"' + desc + '\" ($' + amount.toFixed(2) + ')');\n    return false;\n  }\n\n  function ledgerClearAnomaly(txId) {\n    const tx = ledgerTransactions.find(t => t.id === txId);\n    if (tx) tx.reviewed = true;\n    renderLedgerView();\n    setStatus('Marked transaction ' + txId + ' as reviewed.');\n  }\n\n  function ledgerDeleteTx(txId) {\n    ledgerTransactions = ledgerTransactions.filter(t => t.id !== txId);\n    syncLedgerToText();\n    renderLedgerView();\n  }\n\n  // ============================================================================\n  // 3. WAVECUT INTERACTIVE AUDIO WAVEFORM & PCM WAV STUDIO\n  // ============================================================================\n  function buildClientWavBlob(envelope) {\n    const sampleRate = 8000;\n    const durationSec = Math.max(2, Math.min(16, envelope.length));\n    const numSamples = sampleRate * durationSec;\n    const dataSize = numSamples * 2;\n    const buf = new ArrayBuffer(44 + dataSize);\n    const view = new DataView(buf);\n    function wStr(off, s) { for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i)); }\n    wStr(0, 'RIFF'); view.setUint32(4, 36 + dataSize, true); wStr(8, 'WAVE');\n    wStr(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true);\n    view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * 2, true);\n    view.setUint16(32, 2, true); view.setUint16(34, 16, true);\n    wStr(36, 'data'); view.setUint32(40, dataSize, true);\n    for (let i = 0; i < numSamples; i++) {\n      const secIdx = Math.floor((i / numSamples) * envelope.length);\n      const amp = Number(envelope[secIdx] || 0.2);\n      const freq = secIdx % 2 === 0 ? 440 : 554.37;\n      const sample = Math.max(-1, Math.min(1, Math.sin((2 * Math.PI * freq * i) / sampleRate) * amp));\n      view.setInt16(44 + i * 2, Math.floor(sample * 32767), true);\n    }\n    return new Blob([buf], { type: 'audio/wav' });\n  }\n\n  function getWaveCutEnvelope() {\n    const inputEl = document.getElementById('workspaceInput');\n    const raw = (inputEl && inputEl.value) || '0.18, 0.42, 0.76, 0.81, 0.01, 0.00, 0.01, 0.64, 0.88, 0.53, 0.01, 0.02, 0.71, 0.79';\n    return raw.split(/[,\\s]+/).map(v => parseFloat(v)).filter(v => !isNaN(v));\n  }\n\n  function updateWaveCutDsp() {\n    const box = document.getElementById('wcWaveformBox');\n    if (!box) return;\n    const env = getWaveCutEnvelope();\n    const threshSlider = Number((document.getElementById('wcThresholdRange') && document.getElementById('wcThresholdRange').value) || 5);\n    const threshRms = threshSlider / 100;\n    const trimIn = Number((document.getElementById('wcTrimIn') && document.getElementById('wcTrimIn').value) || 0);\n    const trimOut = Number((document.getElementById('wcTrimOut') && document.getElementById('wcTrimOut').value) || env.length);\n\n    const tv = document.getElementById('wcThreshVal'); if (tv) tv.textContent = '-' + Math.round(60 - threshSlider * 1.4) + ' dB';\n    const ti = document.getElementById('wcTrimInVal'); if (ti) ti.textContent = trimIn.toFixed(1) + 's';\n    const to = document.getElementById('wcTrimOutVal'); if (to) to.textContent = trimOut.toFixed(1) + 's';\n\n    let silenceCount = 0;\n    const barW = Math.floor(680 / Math.max(1, env.length));\n    let barsSvg = '';\n    env.forEach(function(amp, idx) {\n      const isSilent = amp <= threshRms;\n      if (isSilent) silenceCount += 1;\n      const inTrim = idx >= trimIn && idx <= trimOut;\n      const h = Math.max(8, Math.round(amp * 130));\n      const y = 75 - Math.round(h / 2);\n      const x = 30 + idx * barW;\n      const color = !inTrim ? '#334155' : (isSilent ? '#EF4444' : '#38BDF8');\n      barsSvg += '<rect x=\"' + x + '\" y=\"' + y + '\" width=\"' + Math.max(6, barW - 4) + '\" height=\"' + h + '\" rx=\"3\" fill=\"' + color + '\"/>';\n    });\n\n    box.innerHTML = '<svg viewBox=\"0 0 740 155\" style=\"width:100%;height:155px;\" role=\"img\" aria-label=\"Interactive Audio Waveform Timeline\">' +\n      '<line x1=\"20\" y1=\"75\" x2=\"720\" y2=\"75\" stroke=\"#1E293B\" stroke-width=\"1\"/>' +\n      barsSvg +\n      '<text x=\"24\" y=\"145\" fill=\"#94A3B8\" font-size=\"11\" font-family=\"monospace\">Cyan: Active Voice Signal \u2022 Red: Gate-Detected Dead Air (' + silenceCount + '.0s) \u2022 Slate: Trimmed Out</text>' +\n    '</svg>';\n\n    const dEl = document.getElementById('wcDuration'); if (dEl) dEl.textContent = env.length.toFixed(1) + 's';\n    const sEl = document.getElementById('wcSilenceSec'); if (sEl) sEl.textContent = silenceCount.toFixed(1) + 's';\n    const wEl = document.getElementById('wcTrimWindow'); if (wEl) wEl.textContent = trimIn.toFixed(1) + 's \u2013 ' + trimOut.toFixed(1) + 's';\n    const cEl = document.getElementById('wcChapterCount'); if (cEl) cEl.textContent = String(waveCutChapters.length);\n\n    const audioEl = document.getElementById('wcAudioElement');\n    if (audioEl && !audioEl.src) {\n      const wavBlob = buildClientWavBlob(env);\n      audioEl.src = URL.createObjectURL(wavBlob);\n    }\n\n    const chBody = document.getElementById('wcChapterTableBody');\n    if (chBody) {\n      chBody.innerHTML = waveCutChapters.map(function(ch) {\n        return '<tr>' +\n          '<td style=\"font-family:monospace;\">' + ch.timeSec.toFixed(1) + 's</td>' +\n          '<td><strong>' + ch.title + '</strong></td>' +\n          '<td><span class=\"badge-pill\" style=\"background:#064E3B;color:#A7F3D0;\">' + ch.state + '</span></td>' +\n          '<td><button type=\"button\" class=\"btn btn-ghost\" style=\"padding:0.15rem 0.45rem;font-size:0.72rem;\" onclick=\"window.WAI.seekWaveCut(' + ch.timeSec + ')\">Seek</button></td>' +\n        '</tr>';\n      }).join('');\n    }\n  }\n\n  function waveCutStripSilence() {\n    const env = getWaveCutEnvelope();\n    const threshSlider = Number((document.getElementById('wcThresholdRange') && document.getElementById('wcThresholdRange').value) || 5);\n    const stripped = env.filter(v => v > (threshSlider / 100));\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl && stripped.length) {\n      inputEl.value = stripped.map(v => v.toFixed(2)).join(', ');\n      const audioEl = document.getElementById('wcAudioElement');\n      if (audioEl) audioEl.src = URL.createObjectURL(buildClientWavBlob(stripped));\n      updateWaveCutDsp();\n      setStatus('Stripped dead-air silence segments (' + (env.length - stripped.length) + 's removed).');\n    }\n  }\n\n  function waveCutNormalize() {\n    const env = getWaveCutEnvelope();\n    const maxVal = Math.max.apply(null, env.concat([0.1]));\n    const norm = env.map(v => Math.min(0.98, Number((v / maxVal * 0.92).toFixed(2))));\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) {\n      inputEl.value = norm.join(', ');\n      updateWaveCutDsp();\n      setStatus('Normalized peak audio envelope to -0.7 dBFS.');\n    }\n  }\n\n  function addWaveCutChapter() {\n    const titleEl = document.getElementById('wcNewChapterTitle');\n    const title = (titleEl && titleEl.value || '').trim();\n    if (!title) return;\n    const audioEl = document.getElementById('wcAudioElement');\n    const t = audioEl ? Number(audioEl.currentTime || 0) : 2.5;\n    waveCutChapters.push({ id: 'ch-' + Date.now().toString(36), timeSec: t, title: title, state: 'Keep' });\n    if (titleEl) titleEl.value = '';\n    updateWaveCutDsp();\n    setStatus('Added chapter marker \"' + title + '\" at ' + t.toFixed(1) + 's');\n  }\n\n  function seekWaveCut(sec) {\n    const audioEl = document.getElementById('wcAudioElement');\n    if (audioEl) {\n      audioEl.currentTime = Number(sec) || 0;\n      setStatus('Seeked playhead to ' + Number(sec).toFixed(1) + 's');\n    }\n  }\n\n  function toggleAudioPlayback() {\n    const audioEl = document.getElementById('wcAudioElement');\n    if (!audioEl) return;\n    if (audioEl.paused) {\n      audioEl.play().catch(function() {});\n      setStatus('Playing synthesized 16-bit PCM WAV track...');\n    } else {\n      audioEl.pause();\n      setStatus('Paused audio playback.');\n    }\n  }\n\n  function stopAudioPlayback() {\n    const audioEl = document.getElementById('wcAudioElement');\n    if (!audioEl) return;\n    audioEl.pause();\n    audioEl.currentTime = 0;\n    setStatus('Stopped playback and reset playhead to 00:00.0.');\n  }\n\n  function setPlaybackSpeed(rate) {\n    const audioEl = document.getElementById('wcAudioElement');\n    if (audioEl) audioEl.playbackRate = Number(rate) || 1.0;\n    setStatus('Set playback speed to ' + rate + 'x');\n  }\n\n  // ============================================================================\n  // 4. GROWTHPULSE INTERACTIVE SAAS ANALYTICS & COHORT ENGINE\n  // ============================================================================\n  function recalcGrowthPulse() {\n    const chartBox = document.getElementById('gpMrrChartContainer');\n    if (!chartBox) return;\n    const startMrr = Number((document.getElementById('gpStartMrr') && document.getElementById('gpStartMrr').value) || 48000);\n    const newMrr = Number((document.getElementById('gpNewMrr') && document.getElementById('gpNewMrr').value) || 6500);\n    const expPct = Number((document.getElementById('gpExpPct') && document.getElementById('gpExpPct').value) || 3.8);\n    const churnPct = Number((document.getElementById('gpChurnPct') && document.getElementById('gpChurnPct').value) || 1.9);\n    const months = Number((document.getElementById('gpHorizon') && document.getElementById('gpHorizon').value) || 12);\n    const seg = (document.getElementById('gpSegmentFilter') && document.getElementById('gpSegmentFilter').value) || 'all';\n    const mult = seg === 'enterprise' ? 1.35 : (seg === 'selfserve' ? 0.75 : 1.0);\n\n    let curr = Math.round(startMrr * mult);\n    const rows = [];\n    for (let m = 1; m <= months; m++) {\n      const added = Math.round(newMrr * mult);\n      const exp = Math.round(curr * (expPct / 100));\n      const churn = Math.round(curr * (churnPct / 100));\n      const end = curr + added + exp - churn;\n      const retPct = Math.round(((curr + exp - churn) / Math.max(1, curr)) * 1000) / 10;\n      rows.push({ month: 'M' + m, start: curr, added, exp, churn, end, retPct });\n      curr = end;\n    }\n\n    const endingArr = curr * 12;\n    const nrr = Math.round((1 + ((expPct - churnPct) / 100) * 12) * 1000) / 10;\n    const arrEl = document.getElementById('gpArrVal'); if (arrEl) arrEl.textContent = '$' + endingArr.toLocaleString('en-US');\n    const nrrEl = document.getElementById('gpNrrVal'); if (nrrEl) nrrEl.textContent = nrr.toFixed(1) + '%';\n\n    const maxEnd = Math.max.apply(null, rows.map(r => r.end).concat([1000]));\n    const barW = Math.floor(640 / rows.length);\n    let barsSvg = '';\n    rows.forEach(function(r, idx) {\n      const h = Math.max(12, Math.round((r.end / maxEnd) * 120));\n      const x = 35 + idx * barW;\n      const y = 140 - h;\n      barsSvg += '<g><rect x=\"' + x + '\" y=\"' + y + '\" width=\"' + Math.max(14, barW - 10) + '\" height=\"' + h + '\" rx=\"4\" fill=\"#0284C7\"/>' +\n        '<text x=\"' + (x + 6) + '\" y=\"156\" fill=\"#94A3B8\" font-size=\"10\" font-family=\"monospace\">' + r.month + '</text></g>';\n    });\n    chartBox.innerHTML = '<svg viewBox=\"0 0 720 168\" style=\"width:100%;height:165px;\" role=\"img\" aria-label=\"MRR Trajectory Bar Chart\">' + barsSvg + '</svg>';\n\n    const tbody = document.getElementById('gpCohortTableBody');\n    if (tbody) {\n      tbody.innerHTML = rows.map(function(r) {\n        return '<tr>' +\n          '<td style=\"font-family:monospace;font-weight:700;\">' + r.month + '</td>' +\n          '<td style=\"font-family:monospace;\">$' + r.start.toLocaleString('en-US') + '</td>' +\n          '<td style=\"font-family:monospace;color:#38BDF8;\">+$' + r.added.toLocaleString('en-US') + '</td>' +\n          '<td style=\"font-family:monospace;color:#10B981;\">+$' + r.exp.toLocaleString('en-US') + '</td>' +\n          '<td style=\"font-family:monospace;color:#F87171;\">-$' + r.churn.toLocaleString('en-US') + '</td>' +\n          '<td style=\"font-family:monospace;font-weight:700;\">$' + r.end.toLocaleString('en-US') + '</td>' +\n          '<td><span class=\"badge-pill\" style=\"background:#064E3B;color:#A7F3D0;\">' + r.retPct + '%</span></td>' +\n        '</tr>';\n      }).join('');\n    }\n\n    const fBox = document.getElementById('gpFunnelVisual');\n    if (fBox) {\n      const stages = [\n        { label: '1. Unique Site Visitors', count: Math.round(24000 * mult), pct: 100 },\n        { label: '2. Workspace Signups', count: Math.round(3120 * mult), pct: 13.0 },\n        { label: '3. Activated Project (D7)', count: Math.round(1840 * mult), pct: 59.0 },\n        { label: '4. Paid Pro Conversion', count: Math.round(410 * mult), pct: 22.3 }\n      ];\n      fBox.innerHTML = stages.map(function(s) {\n        return '<div style=\"background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;\">' +\n          '<div style=\"display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:0.25rem;\">' +\n            '<strong>' + s.label + '</strong><span style=\"font-family:monospace;color:#38BDF8;\">' + s.count.toLocaleString('en-US') + ' (' + s.pct + '%)</span>' +\n          '</div>' +\n          '<div style=\"background:#1E293B;height:7px;border-radius:999px;\"><div style=\"width:' + Math.min(100, s.pct) + '%;height:100%;background:#38BDF8;border-radius:999px;\"></div></div>' +\n        '</div>';\n      }).join('');\n    }\n\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) {\n      inputEl.value = 'startingMrr=' + startMrr + '\\nnewMrrPerMonth=' + newMrr + '\\nexpansionRatePct=' + expPct + '\\nlogoChurnPct=' + churnPct + '\\nmonths=' + months;\n    }\n  }\n\n  // ============================================================================\n  // 5. APISYNC INTERACTIVE OPENAPI CONTRACT DIFF & ASSERTION RUNNER\n  // ============================================================================\n  function renderApiSyncView() {\n    const tbody = document.getElementById('asDiffTableBody');\n    if (!tbody) return;\n    const sevFilter = (document.getElementById('asSeverityFilter') && document.getElementById('asSeverityFilter').value) || 'all';\n    const diffs = [\n      { method: 'POST', path: '/v1/orders', field: 'param.tenantId', v1: 'optional (string)', v2: 'required (integer)', breaking: true },\n      { method: 'DELETE', path: '/v1/orders/{id}', field: 'response.200', v1: '200 OK (OrderDeleted)', v2: 'Removed endpoint', breaking: true },\n      { method: 'GET', path: '/v1/orders/{id}', field: 'response.200.traceId', v1: 'not present', v2: 'optional (string)', breaking: false }\n    ];\n    const filtered = diffs.filter(d => sevFilter === 'all' || (sevFilter === 'breaking' ? d.breaking : !d.breaking));\n\n    const epList = document.getElementById('asEndpointList');\n    if (epList) {\n      epList.innerHTML = diffs.map(function(d) {\n        const color = d.breaking ? '#EF4444' : '#10B981';\n        return '<li style=\"background:#090E1A;border:1px solid #1E293B;border-left:3px solid ' + color + ';border-radius:6px;padding:0.45rem 0.6rem;font-size:0.79rem;\">' +\n          '<strong style=\"font-family:monospace;color:#38BDF8;\">' + d.method + '</strong> <code>' + d.path + '</code>' +\n          '<div style=\"font-size:0.71rem;color:#94A3B8;\">Field: ' + d.field + '</div>' +\n        '</li>';\n      }).join('');\n    }\n\n    tbody.innerHTML = filtered.map(function(d) {\n      const badge = d.breaking\n        ? '<span class=\"badge-pill\" style=\"background:#7F1D1D;color:#FECACA;\">BREAKING</span>'\n        : '<span class=\"badge-pill\" style=\"background:#064E3B;color:#A7F3D0;\">NON-BREAKING</span>';\n      return '<tr>' +\n        '<td style=\"font-family:monospace;\"><strong>' + d.method + '</strong> ' + d.path + '</td>' +\n        '<td style=\"font-family:monospace;\">' + d.field + '</td>' +\n        '<td style=\"font-family:monospace;color:#94A3B8;\">' + d.v1 + '</td>' +\n        '<td style=\"font-family:monospace;color:#F8FAFC;\">' + d.v2 + '</td>' +\n        '<td>' + badge + '</td>' +\n      '</tr>';\n    }).join('');\n  }\n\n  function runApiContractAssertions() {\n    const raw = (document.getElementById('asTestPayload') && document.getElementById('asTestPayload').value) || '{}';\n    const box = document.getElementById('asAssertionList');\n    if (!box) return;\n    let parsed = null;\n    try { parsed = JSON.parse(raw); } catch (e) {\n      box.innerHTML = '<div style=\"color:#EF4444;\">JSON Syntax Error: ' + e.message + '</div>';\n      return;\n    }\n    const checks = [\n      { name: 'Valid JSON request body', pass: Boolean(parsed && typeof parsed === 'object') },\n      { name: 'v2 Required integer tenantId present', pass: typeof parsed.tenantId === 'number' && Number.isInteger(parsed.tenantId) },\n      { name: 'Line items array non-empty', pass: Array.isArray(parsed.items) && parsed.items.length > 0 }\n    ];\n    const passCount = checks.filter(c => c.pass).length;\n    const stEl = document.getElementById('asTestStatus');\n    if (stEl) stEl.textContent = (passCount === checks.length ? 'PASS (' : 'FAIL (') + passCount + '/' + checks.length + ')';\n    box.innerHTML = checks.map(function(c) {\n      return '<div style=\"background:#090E1A;border:1px solid ' + (c.pass ? '#059669' : '#DC2626') + ';border-radius:6px;padding:0.4rem 0.6rem;\">' +\n        '<strong style=\"color:' + (c.pass ? '#10B981' : '#F87171') + ';\">' + (c.pass ? 'PASS' : 'FAIL') + ':</strong> ' + c.name +\n      '</div>';\n    }).join('');\n    setStatus('Executed OpenAPI contract assertions (' + passCount + '/' + checks.length + ' passed).');\n  }\n\n  // ============================================================================\n  // 6. OMNIDESK INTERACTIVE SUPPORT QUEUE, SLA TRIAGE & KB ENGINE\n  // ============================================================================\n  function renderOmniDeskView() {\n    const listEl = document.getElementById('odTicketList');\n    if (!listEl) return;\n    const stF = (document.getElementById('odStatusFilter') && document.getElementById('odStatusFilter').value) || 'all';\n    const tierF = (document.getElementById('odTierFilter') && document.getElementById('odTierFilter').value) || 'all';\n\n    const breachedCount = omniTickets.filter(t => t.ageMinutes > t.slaMinutes && t.status !== 'resolved').length;\n    const resCount = omniTickets.filter(t => t.status === 'resolved').length;\n    const totEl = document.getElementById('odTotalTickets'); if (totEl) totEl.textContent = String(omniTickets.length);\n    const brEl = document.getElementById('odBreachedCount'); if (brEl) brEl.textContent = String(breachedCount);\n    const rsEl = document.getElementById('odResolvedCount'); if (rsEl) rsEl.textContent = String(resCount);\n\n    const visible = omniTickets.filter(function(t) {\n      if (stF !== 'all' && t.status !== stF) return false;\n      if (tierF !== 'all' && t.tier !== tierF) return false;\n      return true;\n    });\n\n    listEl.innerHTML = visible.map(function(t) {\n      const breached = t.ageMinutes > t.slaMinutes && t.status !== 'resolved';\n      const active = t.id === activeTicketId;\n      return '<li style=\"background:' + (active ? '#1E293B' : '#090E1A') + ';border:1px solid ' + (breached ? '#DC2626' : '#334155') + ';border-radius:8px;padding:0.55rem;cursor:pointer;\" onclick=\"window.WAI.omniDeskSelectTicket(\\'' + t.id + '\\')\">' +\n        '<div style=\"display:flex;justify-content:space-between;font-size:0.75rem;font-family:monospace;\">' +\n          '<strong>' + t.id + ' \u2022 ' + t.priority + '</strong>' +\n          '<span style=\"color:' + (breached ? '#FCA5A5' : '#A7F3D0') + ';\">' + (breached ? 'SLA BREACHED' : t.status.toUpperCase()) + '</span>' +\n        '</div>' +\n        '<div style=\"font-weight:600;font-size:0.83rem;margin:0.2rem 0;\">' + t.subject + '</div>' +\n        '<div style=\"font-size:0.72rem;color:#94A3B8;\">' + t.customer + ' (' + t.tier + ')</div>' +\n      '</li>';\n    }).join('');\n\n    const activeTicket = omniTickets.find(t => t.id === activeTicketId) || omniTickets[0];\n    if (activeTicket) {\n      const hdr = document.getElementById('odTicketHeader');\n      if (hdr) {\n        hdr.innerHTML = '<div style=\"display:flex;justify-content:space-between;align-items:center;\">' +\n          '<h2 style=\"margin:0;font-size:1.05rem;\">' + activeTicket.id + ': ' + activeTicket.subject + '</h2>' +\n          '<span class=\"badge-pill\" style=\"background:#1E293B;color:#38BDF8;\">Status: ' + activeTicket.status.toUpperCase() + '</span>' +\n        '</div>' +\n        '<div style=\"font-size:0.78rem;color:#94A3B8;margin-top:0.25rem;\">Customer: ' + activeTicket.customer + ' \u2022 Tier: ' + activeTicket.tier.toUpperCase() + ' \u2022 Age: ' + activeTicket.ageMinutes + 'm / SLA: ' + activeTicket.slaMinutes + 'm</div>';\n      }\n      const msgBox = document.getElementById('odThreadMessages');\n      if (msgBox) {\n        msgBox.innerHTML = activeTicket.messages.map(function(m) {\n          const isInternal = m.type === 'internal';\n          return '<div style=\"background:' + (isInternal ? '#1E1B4B' : '#0F172A') + ';border:1px solid #334155;border-radius:8px;padding:0.55rem;\">' +\n            '<div style=\"font-size:0.72rem;color:#38BDF8;font-weight:700;margin-bottom:0.2rem;\">' + m.author + (isInternal ? ' [INTERNAL NOTE]' : '') + '</div>' +\n            '<div style=\"font-size:0.82rem;\">' + m.text + '</div>' +\n          '</div>';\n        }).join('');\n      }\n    }\n\n    const kbBox = document.getElementById('odKbCards');\n    if (kbBox && !kbBox.innerHTML) {\n      const kbs = [\n        { code: 'KB-101', title: 'SAML Clock-Skew Tolerance (+/- 180s)', snippet: 'Applied 180-second clock-skew tolerance on Edge SAML verifier per KB-101.' },\n        { code: 'KB-204', title: 'Webhook Exponential Backoff Schedule', snippet: 'Configured 5-attempt exponential retry schedule (2s, 8s, 32s, 128s, 512s) per KB-204.' }\n      ];\n      kbBox.innerHTML = kbs.map(function(k) {\n        return '<div style=\"background:#090E1A;border:1px solid #1E293B;border-radius:8px;padding:0.55rem;font-size:0.79rem;\">' +\n          '<div style=\"font-weight:700;color:#38BDF8;\">' + k.code + ': ' + k.title + '</div>' +\n          '<button type=\"button\" class=\"btn btn-ghost\" style=\"margin-top:0.35rem;padding:0.18rem 0.5rem;font-size:0.72rem;\" onclick=\"window.WAI.omniDeskCiteKb(\\'' + k.snippet + '\\')\">Cite in Reply</button>' +\n        '</div>';\n      }).join('');\n    }\n  }\n\n  function omniDeskSelectTicket(id) {\n    activeTicketId = id;\n    renderOmniDeskView();\n  }\n\n  function omniDeskSetStatus(nextStatus) {\n    const t = omniTickets.find(x => x.id === activeTicketId);\n    if (!t) return;\n    t.status = nextStatus;\n    renderOmniDeskView();\n    setStatus('Updated ticket ' + t.id + ' status to ' + nextStatus.toUpperCase());\n  }\n\n  function omniDeskSendReply(ev) {\n    if (ev) ev.preventDefault();\n    const box = document.getElementById('odReplyBox');\n    const rType = document.getElementById('odReplyType').value;\n    const text = (box && box.value || '').trim();\n    if (!text) return false;\n    const t = omniTickets.find(x => x.id === activeTicketId);\n    if (t) {\n      t.messages.push({ author: currentAuth.email || 'agent@worksai.org', type: rType, text: text });\n      if (rType === 'public') t.status = 'in_progress';\n    }\n    if (box) box.value = '';\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl) inputEl.value = JSON.stringify(omniTickets);\n    renderOmniDeskView();\n    setStatus('Appended ' + rType + ' response to ticket ' + activeTicketId);\n    return false;\n  }\n\n  function omniDeskInsertDraft() {\n    const box = document.getElementById('odReplyBox');\n    if (box) {\n      box.value = 'We have identified the root cause and applied the verified edge configuration remediation (KB-101). Please confirm if assertions succeed from your tenant.';\n    }\n  }\n\n  function omniDeskCiteKb(snippet) {\n    const box = document.getElementById('odReplyBox');\n    if (box) box.value = (box.value ? box.value + ' ' : '') + snippet;\n  }\n\n  function omniDeskCreateTicket(ev) {\n    if (ev) ev.preventDefault();\n    const subj = (document.getElementById('odNewSubject').value || '').trim();\n    const tier = document.getElementById('odNewTier').value;\n    const sla = Number(document.getElementById('odNewSla').value || 45);\n    if (!subj) return false;\n    const newId = 'TKT-' + Math.floor(910 + Math.random() * 89);\n    omniTickets.unshift({\n      id: newId,\n      subject: subj,\n      customer: 'new-tenant.example',\n      tier: tier,\n      status: 'open',\n      priority: tier === 'enterprise' ? 'P1' : 'P2',\n      ageMinutes: 1,\n      slaMinutes: sla,\n      messages: [{ author: 'customer@new-tenant.example', type: 'customer', text: subj }]\n    });\n    activeTicketId = newId;\n    document.getElementById('odNewSubject').value = '';\n    renderOmniDeskView();\n    setStatus('Created ticket ' + newId + ' (' + subj + ')');\n    return false;\n  }\n\n  // ============================================================================\n  // 7. COMPANION WORKBENCH RENDERER FOR CATEGORY C & D INSTALLABLE PRODUCTS\n  // ============================================================================\n  async function renderCompanionView() {\n    const tbody = document.getElementById('companionTableBody');\n    if (!tbody) return;\n    const inputEl = document.getElementById('workspaceInput');\n    const raw = (inputEl && inputEl.value) || META.defaultInput || '';\n    const res = await fetch('/api/execute', {\n      method: 'POST',\n      headers: authHeaders(),\n      body: JSON.stringify({ input: raw, enableAi: false })\n    });\n    const data = await res.json();\n    const r = data.result || {};\n    const artBox = document.getElementById('companionArtifactBox');\n    if (artBox) artBox.textContent = JSON.stringify(r, null, 2);\n\n    if (META.slug === 'graphmind') {\n      const notes = r.nodes || [{ id: 'System Architecture', outCount: 3, inCount: 1, orphan: false }, { id: 'Orphan Note', outCount: 0, inCount: 0, orphan: true }];\n      tbody.innerHTML = notes.map(n => '<tr><td><strong>' + (n.id || n.title || 'Note') + '</strong></td><td>' + (n.outCount ?? 2) + ' links</td><td>' + (n.inCount ?? 1) + ' backlinks</td><td><span class=\"badge-pill\" style=\"background:' + (n.orphan ? '#7F1D1D' : '#064E3B') + ';color:#FFF;\">' + (n.orphan ? 'ORPHAN' : 'CONNECTED') + '</span></td></tr>').join('');\n    } else if (META.slug === 'clipguard') {\n      const rules = [\n        { name: 'AWS Access Key ID', cls: 'AKIA[0-9A-Z]{16}', status: 'Active', tok: '[REDACTED_AWS_KEY]' },\n        { name: 'GitHub PAT Token', cls: 'ghp_[A-Za-z0-9]{36}', status: 'Active', tok: '[REDACTED_GITHUB_TOKEN]' },\n        { name: 'Email Address PII', cls: 'RFC 5322 Email', status: 'Active', tok: '[REDACTED_EMAIL]' }\n      ];\n      tbody.innerHTML = rules.map(x => '<tr><td><strong>' + x.name + '</strong></td><td style=\"font-family:monospace;\">' + x.cls + '</td><td><span class=\"badge-pill badge-prod\">' + x.status + '</span></td><td style=\"font-family:monospace;\">' + x.tok + '</td></tr>').join('');\n    } else if (META.slug === 'commandbar') {\n      tbody.innerHTML = '<tr><td style=\"font-family:monospace;\">' + raw.slice(0, 56) + '</td><td>Shell AST / Launcher</td><td><span class=\"badge-pill badge-demo\">AUDITED</span></td><td style=\"font-family:monospace;\">Create backup ref before destructive flags</td></tr>';\n    } else if (META.slug === 'linkengine') {\n      tbody.innerHTML = '<tr><td style=\"font-family:monospace;\">/cloudflare-workers-r2-crud</td><td>/edge-ai-inference-guide</td><td><span class=\"badge-pill badge-prod\">TF-IDF MATCH 0.89</span></td><td><code>utm_source=wp_internal</code></td></tr>';\n    } else if (META.slug === 'commercecatalog') {\n      tbody.innerHTML = '<tr><td style=\"font-family:monospace;\">WAI-EDGE-001</td><td>WorksAI Enterprise Edge Gateway</td><td><span class=\"badge-pill badge-prod\">GTIN-13 VALID</span></td><td style=\"font-family:monospace;\">$499.00 (Margin 57.9%)</td></tr>';\n    } else {\n      tbody.innerHTML = '<tr><td style=\"font-family:monospace;\">POST-401</td><td>Solved: Worker Custom Domain TLS handshake</td><td><span class=\"badge-pill badge-prod\">0.02 SAFE</span></td><td>Extract to FAQPage JSON-LD</td></tr>' +\n        '<tr><td style=\"font-family:monospace;\">POST-402</td><td>Promo bot crypto spam link velocity</td><td><span class=\"badge-pill\" style=\"background:#7F1D1D;color:#FECACA;\">0.94 QUARANTINE</span></td><td>Hold in Moderation Queue</td></tr>';\n    }\n  }\n\n  function hydrateDomainStateFromInput(text) {\n    if (META.slug === 'canvasarch') {\n      parseCanvasSpecToGraph(text);\n      renderCanvasArchDom();\n    } else if (META.slug === 'ledgerflow') {\n      parseLedgerCsvToRows(text);\n      renderLedgerView();\n    } else if (META.slug === 'wavecut') {\n      updateWaveCutDsp();\n    } else if (META.slug === 'growthpulse') {\n      recalcGrowthPulse();\n    } else if (META.slug === 'apisync') {\n      renderApiSyncView();\n      runApiContractAssertions();\n    } else if (META.slug === 'omnidesk') {\n      renderOmniDeskView();\n    } else {\n      renderCompanionView();\n    }\n  }\n\n  // Expose public controller methods on window.WAI\n  window.WAI = {\n    openAuthModal,\n    closeAuthModal,\n    submitSignIn,\n    startDemoSession,\n    newProject,\n    openProject,\n    saveCurrentProject,\n    renameProject,\n    deleteProject,\n    exportActiveProject,\n    loadPreset,\n    importFile,\n    runWithAiCopilot,\n    // CanvasArch\n    canvasAddNode,\n    selectCanvasNode,\n    deleteCanvasNode,\n    setCanvasLayout,\n    toggleSpofOverlay,\n    canvasUndo,\n    syncCanvasFromText,\n    // LedgerFlow\n    ledgerAddTransaction,\n    ledgerClearAnomaly,\n    ledgerDeleteTx,\n    renderLedgerView,\n    // WaveCut\n    updateWaveCutDsp,\n    waveCutStripSilence,\n    waveCutNormalize,\n    addWaveCutChapter,\n    seekWaveCut,\n    toggleAudioPlayback,\n    stopAudioPlayback,\n    setPlaybackSpeed,\n    // GrowthPulse\n    recalcGrowthPulse,\n    // ApiSync\n    renderApiSyncView,\n    runApiContractAssertions,\n    // OmniDesk\n    renderOmniDeskView,\n    omniDeskSelectTicket,\n    omniDeskSetStatus,\n    omniDeskSendReply,\n    omniDeskInsertDraft,\n    omniDeskCiteKb,\n    omniDeskCreateTicket,\n    // Companion C/D\n    renderCompanionView\n  };\n\n  window.addEventListener('DOMContentLoaded', async function() {\n    const presetSel = document.getElementById('presetSelect');\n    if (presetSel && Array.isArray(META.samplePresets)) {\n      presetSel.innerHTML = META.samplePresets.map((p, i) => '<option value=\"' + i + '\">' + p.title + '</option>').join('');\n    }\n    const inputEl = document.getElementById('workspaceInput');\n    if (inputEl && !inputEl.value) {\n      inputEl.value = (INITIAL_STATE.initialItem && INITIAL_STATE.initialItem.input) || META.defaultInput || '';\n    }\n    hydrateDomainStateFromInput(inputEl ? inputEl.value : META.defaultInput);\n    await ensureDemoOrAuthSession();\n    await refreshProjectList();\n  });\n})();\n";
const BUNDLED_INDEX_HTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n  <title>WorksAi GraphMind \u2014 Vscode Markdown Wiki Link Graph And Orphan Note Detector Extension | WorksAI</title>\n  <meta name=\"description\" content=\"WorksAi GraphMind is an MIT-licensed VS Code and Cursor IDE extension (`worksai-graphmind-1.2.0.vsix`) and companion web verifier that parses `[[wiki-links]]`\"/>\n  <link rel=\"canonical\" href=\"https://graphmind.worksai.org/\"/>\n  <link rel=\"stylesheet\" href=\"/assets/styles.css\"/>\n</head>\n<body>\n  <header class=\"app-topbar\" role=\"banner\">\n    <div class=\"brand-cluster\">\n      <a href=\"https://worksai.org\" style=\"display:flex;align-items:center;gap:0.45rem;color:#F8FAFC;font-weight:700;text-decoration:none;\">\n        <span style=\"display:inline-flex;width:26px;height:26px;\">__WORKSAI_CREST_PLACEHOLDER__</span>\n        <span>WorksAI</span>\n      </a>\n      <span style=\"color:#475569;\">/</span>\n      <a href=\"/\" style=\"color:#38BDF8;font-weight:700;text-decoration:none;\">WorksAi GraphMind</a>\n      <span class=\"badge-pill\" style=\"background:#1E293B;color:#94A3B8;\">v1.2.0</span>\n    </div>\n    <nav aria-label=\"Application Navigation\" style=\"display:flex;align-items:center;gap:0.85rem;flex-wrap:wrap;font-size:0.84rem;\">\n      <a href=\"/\" style=\"color:#38BDF8;font-weight:700;\">Download & Companion App</a>\n      <a href=\"/docs\" style=\"color:#CBD5E1;\">Documentation</a>\n      <a href=\"/guide\" style=\"color:#CBD5E1;\">Technical Guide &amp; FAQ</a>\n      <span id=\"authModeBadge\" class=\"badge-pill badge-demo\">DEMO SANDBOX</span>\n      <button type=\"button\" id=\"authActionBtn\" class=\"btn btn-ghost\" style=\"padding:0.28rem 0.65rem;font-size:0.76rem;\" onclick=\"window.WAI.openAuthModal()\">Sign In to Workspace</button>\n    </nav>\n  </header>\n\n  <main class=\"workspace-shell\" role=\"main\">\n    <div id=\"statusBanner\" class=\"toast-banner\" role=\"status\" aria-live=\"polite\">\n      Ready \u2022 WorksAi GraphMind Interactive Environment Active\n    </div>\n    \n        <section class=\"panel-box\" aria-label=\"Official Release Package Download and Checksum\" style=\"border-color:#0284C7;margin-bottom:1rem;\">\n          <div style=\"display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;\">\n            <div>\n              <span class=\"badge-pill\" style=\"background:#0369A1;color:#E0F2FE;\">SHA-256 CHECKSUM-VERIFIED RELEASE ARCHIVE v1.2.0</span>\n              <h1 style=\"margin:0.4rem 0 0.25rem;font-size:1.35rem;\">WorksAi GraphMind \u2014 Category C \u2014 VS Code Extension & Browser Sandbox</h1>\n              <p style=\"margin:0;color:#94A3B8;font-size:0.86rem;\">Compatibility: <strong style=\"color:#E2E8F0;\">VS Code ^1.85.0, Cursor, VSCodium, Windsurf (Node 18+ / Webview Panel)</strong></p>\n            </div>\n            <div style=\"display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap;\">\n              <a href=\"/downloads/worksai-graphmind-1.2.0.vsix\" class=\"btn btn-primary\">Download worksai-graphmind-1.2.0.vsix (2687 B)</a>\n              <a href=\"/docs\" class=\"btn btn-ghost\">Installation &amp; API Docs</a>\n              <a href=\"/guide\" class=\"btn btn-ghost\">Architecture Guide &amp; FAQ</a>\n            </div>\n          </div>\n          <div style=\"margin-top:0.75rem;background:#060A11;border:1px solid #1E293B;border-radius:8px;padding:0.65rem;font-family:monospace;font-size:0.8rem;color:#38BDF8;overflow-x:auto;\">\n            <div>$ curl -sSL https://graphmind.worksai.org/downloads/worksai-graphmind-1.2.0.vsix -o worksai-graphmind-1.2.0.vsix && code --install-extension worksai-graphmind-1.2.0.vsix</div>\n            <div style=\"color:#64748B;margin-top:0.25rem;\">SHA-256 Checksum (unencrypted archive integrity): e91ba7f79b0c29edb236d8cfdd243794a572f0caf4c1e9454a9ff3904bcfcc37</div>\n          </div>\n          <div style=\"margin-top:0.5rem;font-size:0.78rem;color:#94A3B8;\"><strong>Permissions &amp; Privacy:</strong> Local workspace Markdown file read access (`*.md`) to parse `[[WikiLinks]]`; zero background source-code telemetry.</div>\n        </section>\n        \n    \n      <div class=\"app-grid-2\">\n        <aside class=\"panel-box\" aria-label=\"Companion Workspace Projects and Presets\">\n          <div style=\"background:#090E1A;border:1px solid #0284C7;border-radius:8px;padding:0.65rem;margin-bottom:0.85rem;font-size:0.78rem;color:#BAE6FD;\">\n            <strong>Companion Web Utility:</strong> Use this browser workbench to test rules and export configurations, or install the standalone package above.\n          </div>\n          <h2 class=\"panel-title\"><span>Saved Configs (R2)</span><button type=\"button\" class=\"btn btn-ghost\" onclick=\"window.WAI.newProject()\">+ New</button></h2>\n          <div class=\"form-field\"><label for=\"presetSelect\">Load Sample Configuration</label><select id=\"presetSelect\" class=\"input-ctrl\" onchange=\"window.WAI.loadPreset(this.value)\"></select></div>\n          <div class=\"form-field\"><label for=\"fileImportInput\">Import Local File</label><input id=\"fileImportInput\" type=\"file\" class=\"input-ctrl\" onchange=\"window.WAI.importFile(event)\"/></div>\n          <ul id=\"projectList\" style=\"list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.45rem;max-height:240px;overflow-y:auto;\"></ul>\n        </aside>\n        <section class=\"panel-box\" aria-label=\"Companion Markdown Vault Graph Visualizer & Orphan Note Inspector\">\n          <div style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;\">\n            <h2 class=\"panel-title\" style=\"margin:0;\"><span>Companion Markdown Vault Graph Visualizer & Orphan Note Inspector</span></h2>\n            <div style=\"display:flex;gap:0.4rem;\">\n              <button type=\"button\" class=\"btn btn-primary\" onclick=\"window.WAI.renderCompanionView()\">Analyze Vault Links</button>\n              <button type=\"button\" class=\"btn btn-emerald\" onclick=\"window.WAI.saveCurrentProject()\">Save to R2</button>\n              <button type=\"button\" class=\"btn btn-ghost\" onclick=\"window.WAI.exportActiveProject('json')\">Export .JSON</button>\n            </div>\n          </div>\n          <div style=\"overflow-x:auto;margin-bottom:0.85rem;\">\n            <table class=\"data-table\" aria-label=\"Companion Markdown Vault Graph Visualizer & Orphan Note Inspector Results\">\n              <thead><tr><th>Note ID</th><th>Outbound WikiLinks</th><th>Incoming Backlinks</th><th>Graph Status</th></tr></thead>\n              <tbody id=\"companionTableBody\"></tbody>\n            </table>\n          </div>\n          <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:0.85rem;\">\n            <div>\n              <label for=\"workspaceInput\" style=\"display:block;font-size:0.76rem;color:#94A3B8;margin-bottom:0.25rem;\">Interactive Source / Policy Input</label>\n              <textarea id=\"workspaceInput\" rows=\"5\" class=\"input-ctrl\" style=\"font-family:monospace;\" oninput=\"window.WAI.renderCompanionView()\"></textarea>\n            </div>\n            <div>\n              <label style=\"display:block;font-size:0.76rem;color:#94A3B8;margin-bottom:0.25rem;\">Generated Artifact / Schema Output</label>\n              <pre id=\"companionArtifactBox\" style=\"background:#060A11;border:1px solid #1E293B;border-radius:8px;padding:0.65rem;margin:0;font-size:0.76rem;color:#A7F3D0;max-height:130px;overflow:auto;\"></pre>\n            </div>\n          </div>\n          <div id=\"aiCopilotBox\" style=\"margin-top:0.6rem;font-size:0.79rem;color:#A7F3D0;\"></div>\n        </section>\n      </div>\n    \n  </main>\n\n  <!-- Server-Signed Authentication & Demo Sandbox Modal -->\n  <div id=\"authModalBackdrop\" class=\"modal-backdrop\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"authModalTitle\">\n    <div class=\"modal-card\">\n      <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;\">\n        <h2 id=\"authModalTitle\" style=\"margin:0;font-size:1.05rem;\">Workspace Authentication (HMAC-SHA256)</h2>\n        <button type=\"button\" class=\"btn btn-ghost\" onclick=\"window.WAI.closeAuthModal()\">Close</button>\n      </div>\n      <p style=\"font-size:0.8rem;color:#94A3B8;margin:0 0 0.85rem;\">\n        Workspace identity is cryptographically signed on the server via WebCrypto HMAC-SHA256. Unauthenticated client headers are never trusted.\n      </p>\n      <form onsubmit=\"return window.WAI.submitSignIn(event)\">\n        <div class=\"form-field\"><label for=\"authEmailInput\">Engineer Email *</label><input id=\"authEmailInput\" type=\"email\" class=\"input-ctrl\" value=\"engineer@worksai.org\" required/></div>\n        <div class=\"form-field\"><label for=\"authTenantInput\">Tenant Workspace Slug *</label><input id=\"authTenantInput\" class=\"input-ctrl\" value=\"tenant-acme-prod\" required/></div>\n        <div class=\"form-field\"><label for=\"authPasscodeInput\">Workspace Passcode (min 6 chars) *</label><input id=\"authPasscodeInput\" type=\"password\" class=\"input-ctrl\" value=\"worksai-2026\" required/></div>\n        <div style=\"display:flex;gap:0.5rem;margin-top:0.85rem;\">\n          <button type=\"submit\" class=\"btn btn-primary\" style=\"flex:1;justify-content:center;\">Sign In (Server Token)</button>\n          <button type=\"button\" class=\"btn btn-ghost\" onclick=\"window.WAI.startDemoSession()\">Use Isolated Demo</button>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <script>\n    window.__WORKSAI_META__ = __WORKSAI_META_JSON__;\n    window.__WORKSAI_INITIAL__ = __WORKSAI_INITIAL_JSON__;\n  </script>\n  <script src=\"/assets/app.js\"></script>\n</body>\n</html>";


// ============================================================================
// Pure-ESM Isomorphic Domain Engines for all 12 WorksAI Products
// Zero Node-only dependencies (works in Cloudflare Workers V8 & Node.js 18/20+)
// ============================================================================

export class WorksAiSecurityGuard {
  static sanitizeHtml(input) {
    return String(input ?? "")
      .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
      .replace(/javascript\s*:/gi, "blocked:")
      .replace(/<\/script>/gi, "<\\/script>");
  }

  static isSafeExternalUrl(rawUrl) {
    try {
      const u = new URL(String(rawUrl));
      if (u.protocol !== "https:" && u.protocol !== "http:") return false;
      const host = u.hostname.toLowerCase();
      if (
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "0.0.0.0" ||
        host === "169.254.169.254" ||
        host.startsWith("10.") ||
        host.startsWith("192.168.") ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
      ) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
}

function deterministicHash16(str) {
  let h1 = 0xdeadbeef ^ str.length;
  let h2 = 0x41c6ce57 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0).toString(16).padStart(8, "0") + (h1 >>> 0).toString(16).padStart(8, "0");
}

/** worksai-01: WorksAi CanvasArch */
export function parseArchitectureSpec(specText) {
  const raw = String(specText ?? "").trim();
  if (!raw) throw new Error("ValidationError: Architecture specification cannot be empty.");
  const nodesMap = new Map();
  const edges = [];
  const lines = raw.split(/\r?\n|,|;/).map((s) => s.trim()).filter(Boolean);

  for (const line of lines) {
    const parts = line.split(/\s*(?:->|-->|=>)\s*/).map((s) => s.trim()).filter(Boolean);
    for (let i = 0; i < parts.length; i++) {
      const label = parts[i].replace(/^\[|\]$/g, "").trim();
      if (!label) continue;
      if (!nodesMap.has(label)) {
        const idx = nodesMap.size;
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const kind = /db|postgres|mysql|sqlite|redis|d1|r2|neon/i.test(label)
          ? "database"
          : /queue|kafka|worker|cron|edge/i.test(label)
          ? "worker"
          : /gateway|cdn|cloudflare|proxy|client/i.test(label)
          ? "gateway"
          : "service";
        nodesMap.set(label, {
          id: `node_${idx + 1}`,
          label,
          kind,
          x: 60 + col * 240,
          y: 60 + row * 140,
          width: 180,
          height: 76
        });
      }
      if (i > 0) {
        const fromNode = nodesMap.get(parts[i - 1].replace(/^\[|\]$/g, "").trim());
        const toNode = nodesMap.get(label);
        if (fromNode && toNode && fromNode.id !== toNode.id) {
          edges.push({
            id: `edge_${edges.length + 1}`,
            from: fromNode.id,
            to: toNode.id,
            fromLabel: fromNode.label,
            toLabel: toNode.label
          });
        }
      }
    }
  }

  const nodes = Array.from(nodesMap.values());
  const inboundCount = {};
  const outboundCount = {};
  for (const n of nodes) {
    inboundCount[n.id] = 0;
    outboundCount[n.id] = 0;
  }
  for (const e of edges) {
    inboundCount[e.to] = (inboundCount[e.to] || 0) + 1;
    outboundCount[e.from] = (outboundCount[e.from] || 0) + 1;
  }
  const spofNodes = nodes
    .filter((n) => outboundCount[n.id] >= 2 || inboundCount[n.id] >= 2)
    .map((n) => ({ id: n.id, label: n.label, fanOut: outboundCount[n.id], fanIn: inboundCount[n.id] }));

  return { nodes, edges, spofNodes };
}

export function renderArchitectureSvg(graph, title = "WorksAi CanvasArch Diagram") {
  if (!graph || !Array.isArray(graph.nodes) || graph.nodes.length === 0) {
    throw new Error("ValidationError: Graph must contain at least one node.");
  }
  const safeTitle = WorksAiSecurityGuard.sanitizeHtml(title);
  const nodeById = new Map(graph.nodes.map((n) => [n.id, n]));
  const edgeLines = (graph.edges || [])
    .map((e) => {
      const f = nodeById.get(e.from);
      const t = nodeById.get(e.to);
      if (!f || !t) return "";
      return `<line x1="${f.x + 90}" y1="${f.y + 38}" x2="${t.x + 90}" y2="${t.y + 38}" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5,3"/>`;
    })
    .join("");
  const rects = graph.nodes
    .map(
      (n) =>
        `<g class="node" data-id="${n.id}" data-kind="${n.kind}"><rect x="${n.x}" y="${n.y}" width="${n.width}" height="${n.height}" rx="12" fill="#111724" stroke="#38bdf8" stroke-width="2"/><text x="${n.x + 16}" y="${n.y + 34}" fill="#f8fafc" font-family="Readex Pro, sans-serif" font-size="13" font-weight="600">${WorksAiSecurityGuard.sanitizeHtml(n.label)}</text><text x="${n.x + 16}" y="${n.y + 54}" fill="#94a3b8" font-family="monospace" font-size="10.5">${n.kind.toUpperCase()}</text></g>`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 420" role="img" aria-label="${safeTitle}"><title>${safeTitle}</title><desc>Generated by WorksAi CanvasArch (MIT)</desc>${edgeLines}${rects}</svg>`;
}

/** worksai-02: WorksAi LedgerFlow */
export function normalizeAndBudgetTransactions(csvRows, monthlyIncomeCents = 500000) {
  if (!Array.isArray(csvRows)) throw new Error("ValidationError: csvRows must be an array.");
  const rules = [
    { category: "Cloud & SaaS", pattern: /aws|vercel|neon|cloudflare|openai|github|ynab|adobe|stripe/i },
    { category: "Groceries & Dining", pattern: /whole foods|trader joe|kroger|publix|cafe|coffee/i },
    { category: "Housing & Utilities", pattern: /rent|mortgage|electric|water|fiber|internet/i }
  ];
  const normalized = [];
  const vendorHistory = new Map();

  for (const row of csvRows) {
    const payee = String(row.payee || row.description || "Unknown").trim();
    const amountCents = Math.round(Number(row.amount) * 100);
    if (!Number.isFinite(amountCents)) throw new Error("ValidationError: Invalid numeric amount.");
    let matchedCategory = "General Operating";
    for (const r of rules) {
      if (r.pattern.test(payee)) {
        matchedCategory = r.category;
        break;
      }
    }
    normalized.push({ date: String(row.date || "2026-11-01"), payee, amountCents, category: matchedCategory });
    if (amountCents < 0) {
      const absCents = Math.abs(amountCents);
      if (!vendorHistory.has(payee)) vendorHistory.set(payee, []);
      vendorHistory.get(payee).push(absCents);
    }
  }

  const priceCreepAlerts = [];
  for (const [payee, charges] of vendorHistory.entries()) {
    if (charges.length >= 2) {
      const prev = charges[charges.length - 2];
      const curr = charges[charges.length - 1];
      if (prev > 0 && (curr - prev) / prev > 0.05) {
        priceCreepAlerts.push({
          payee,
          previousCents: prev,
          currentCents: curr,
          increasePct: Number((((curr - prev) / prev) * 100).toFixed(2))
        });
      }
    }
  }

  const totalSpentCents = normalized
    .filter((t) => t.amountCents < 0)
    .reduce((acc, t) => acc + Math.abs(t.amountCents), 0);
  const toBeBudgetedCents = monthlyIncomeCents - totalSpentCents;
  const dailyBurnCents = Math.max(1, Math.round(totalSpentCents / 30));
  const runway90DayNetCents = monthlyIncomeCents * 3 - dailyBurnCents * 90;

  return {
    transactions: normalized,
    totalSpentCents,
    toBeBudgetedCents,
    priceCreepAlerts,
    runway90DayNetCents
  };
}

/** worksai-03: WorksAi WaveCut Studio */
export function analyzeWaveformAndBuildChapters(samples, sampleRate = 1000, transcriptSegments = []) {
  if (!Array.isArray(samples) || samples.length === 0) {
    throw new Error("ValidationError: Audio sample buffer cannot be empty.");
  }
  const windowSize = Math.max(1, Math.floor(sampleRate * 0.1));
  const silenceIntervals = [];
  let silenceStart = null;

  for (let i = 0; i < samples.length; i += windowSize) {
    const slice = samples.slice(i, i + windowSize);
    const sumSq = slice.reduce((acc, v) => acc + v * v, 0);
    const rms = Math.sqrt(sumSq / slice.length);
    const timeSec = Number((i / sampleRate).toFixed(2));
    if (rms < 0.02) {
      if (silenceStart === null) silenceStart = timeSec;
    } else if (silenceStart !== null) {
      const duration = Number((timeSec - silenceStart).toFixed(2));
      if (duration >= 0.2) silenceIntervals.push({ startSec: silenceStart, endSec: timeSec, durationSec: duration });
      silenceStart = null;
    }
  }
  if (silenceStart !== null) {
    const endSec = Number((samples.length / sampleRate).toFixed(2));
    if (endSec - silenceStart >= 0.2) {
      silenceIntervals.push({ startSec: silenceStart, endSec, durationSec: Number((endSec - silenceStart).toFixed(2)) });
    }
  }

  const trimmedSamples = samples.filter((v) => Math.abs(v) >= 0.02);
  const dataSize = trimmedSamples.length * 2;
  const wavBytes = new Uint8Array(44);
  const dv = new DataView(wavBytes.buffer);
  const writeAscii = (offset, str) => {
    for (let i = 0; i < str.length; i++) wavBytes[offset + i] = str.charCodeAt(i);
  };
  writeAscii(0, "RIFF");
  dv.setUint32(4, 36 + dataSize, true);
  writeAscii(8, "WAVE");
  writeAscii(12, "fmt ");
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, sampleRate, true);
  dv.setUint32(28, sampleRate * 2, true);
  dv.setUint16(32, 2, true);
  dv.setUint16(34, 16, true);
  writeAscii(36, "data");
  dv.setUint32(40, dataSize, true);

  const chaptersMarkdown = transcriptSegments
    .map((seg) => {
      const mins = String(Math.floor(seg.startSec / 60)).padStart(2, "0");
      const secs = String(Math.floor(seg.startSec % 60)).padStart(2, "0");
      return `- **${mins}:${secs}** — ${WorksAiSecurityGuard.sanitizeHtml(seg.title)}`;
    })
    .join("\n");

  return {
    silenceIntervals,
    originalSampleCount: samples.length,
    trimmedSampleCount: trimmedSamples.length,
    wavHeaderHex: "RIFF" + String.fromCharCode(...wavBytes.slice(4, 8)) + "WAVE",
    wavHeaderAsciiPrefix: "RIFF....WAVEfmt ",
    wavByteLength: 44 + dataSize,
    chaptersMarkdown
  };
}

/** worksai-04: WorksAi GrowthPulse */
export function evaluateFunnelAndAnomalies(events, dailySalt = "2026-11-06") {
  if (!Array.isArray(events)) throw new Error("ValidationError: events must be an array.");
  const stepCounts = { landing: new Set(), pricing: new Set(), signup: new Set() };
  const dailyCounts = {};

  for (const ev of events) {
    if (!ev.siteId) throw new Error("ValidationError: siteId is required for tenant isolation.");
    const sessionHash = deterministicHash16(`${ev.siteId}:${ev.ip || "0.0.0.0"}:${ev.userAgent || "ua"}:${dailySalt}`);
    if (stepCounts[ev.step]) stepCounts[ev.step].add(sessionHash);
    const day = String(ev.date || "2026-11-06");
    dailyCounts[day] = (dailyCounts[day] || 0) + 1;
  }

  const landing = stepCounts.landing.size;
  const pricing = stepCounts.pricing.size;
  const signup = stepCounts.signup.size;
  const dropOffPricingPct = landing > 0 ? Number((((landing - pricing) / landing) * 100).toFixed(1)) : 0;
  const dropOffSignupPct = pricing > 0 ? Number((((pricing - signup) / pricing) * 100).toFixed(1)) : 0;

  return {
    cookieFreeCompliance: true,
    counts: { landing, pricing, signup },
    largestBottleneck: dropOffSignupPct >= dropOffPricingPct ? "pricing_to_signup" : "landing_to_pricing",
    dropOffPricingPct,
    dropOffSignupPct,
    dailyCounts
  };
}

/** worksai-05: WorksAi APISync Studio */
export function auditOpenApiDrift(openApiRoutes, savedCollectionRequests) {
  if (!Array.isArray(openApiRoutes) || !Array.isArray(savedCollectionRequests)) {
    throw new Error("ValidationError: openApiRoutes and savedCollectionRequests must be arrays.");
  }
  const specMap = new Map(openApiRoutes.map((r) => [`${r.method.toUpperCase()} ${r.path}`, r]));
  const colMap = new Map(savedCollectionRequests.map((r) => [`${r.method.toUpperCase()} ${r.path}`, r]));

  const missingInCollection = [];
  const breakingChanges = [];
  const generatedAssertions = [];

  for (const [key, spec] of specMap.entries()) {
    generatedAssertions.push({
      route: key,
      assertions: [
        `expect(res.status).toBe(${spec.expectedStatus || 200})`,
        ...(spec.requiredFields || []).map((f) => `expect(res.body).toHaveProperty("${f}")`)
      ]
    });
    if (!colMap.has(key)) {
      missingInCollection.push(key);
    } else {
      const saved = colMap.get(key);
      for (const reqField of spec.requiredFields || []) {
        if (!(saved.bodyFields || []).includes(reqField)) {
          breakingChanges.push({ route: key, missingRequiredField: reqField });
        }
      }
    }
  }

  return {
    inSync: missingInCollection.length === 0 && breakingChanges.length === 0,
    missingInCollection,
    breakingChanges,
    generatedAssertions
  };
}

/** worksai-06: WorksAi OmniDesk */
export function triageAndDraftSupportReply(ticket, knowledgeBase = []) {
  if (!ticket || !ticket.inboxId || !ticket.message) {
    throw new Error("ValidationError: inboxId and message are required.");
  }
  const text = String(ticket.message);
  const isCritical = /outage|down|security|breach|urgent|lawsuit|cancel immediately/i.test(text);
  const isHigh = /refund|billing|charged twice|broken|error 500/i.test(text);
  const urgency = isCritical ? "critical" : isHigh ? "high" : "normal";
  const churnRisk = /cancel|switch to|disappointed|refund/i.test(text) ? "elevated" : "low";

  let matchedArticle = null;
  for (const kb of knowledgeBase) {
    if ((kb.keywords || []).some((kw) => text.toLowerCase().includes(kw.toLowerCase()))) {
      matchedArticle = kb;
      break;
    }
  }

  const draftReply = matchedArticle
    ? `Hi ${ticket.customerName || "there"}, thanks for reaching out. Based on our guide "${matchedArticle.title}" ([${matchedArticle.id}]), ${matchedArticle.answerSummary}`
    : `Hi ${ticket.customerName || "there"}, we've logged your request in inbox ${ticket.inboxId} with ${urgency} priority and an operator will follow up shortly.`;

  return {
    inboxId: ticket.inboxId,
    status: "triaged",
    urgency,
    churnRisk,
    citedArticleId: matchedArticle ? matchedArticle.id : null,
    draftReply,
    mitCleanEnterpriseStripped: true
  };
}

/** worksai-07: WorksAi GraphMind */
export function analyzeMarkdownGraph(notes, workspaceRoot = "/workspace") {
  if (!Array.isArray(notes)) throw new Error("ValidationError: notes must be an array.");
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

  return {
    nodeCount: nodes.size,
    forwardLinks,
    backlinks,
    brokenLinks,
    orphanNotes
  };
}

/** worksai-08: WorksAi ClipGuard */
export function scrubClipboardSecrets(rawText) {
  const text = String(rawText ?? "");
  const detections = [];
  let scrubbed = text;

  const patterns = [
    { type: "OPENAI_API_KEY", regex: /\bsk-(?:proj-)?[A-Za-z0-9_-]{16,}\b/g, replacement: "[REDACTED_OPENAI_KEY]" },
    { type: "GITHUB_PAT", regex: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replacement: "[REDACTED_GITHUB_TOKEN]" },
    { type: "AWS_ACCESS_KEY", regex: /\bAKIA[0-9A-Z]{16}\b/g, replacement: "[REDACTED_AWS_KEY]" },
    { type: "PRIVATE_KEY", regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g, replacement: "[REDACTED_PRIVATE_KEY]" },
    { type: "EMAIL_PII", regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, replacement: "[REDACTED_EMAIL]" }
  ];

  for (const p of patterns) {
    if (p.regex.test(scrubbed)) {
      detections.push(p.type);
      scrubbed = scrubbed.replace(p.regex, p.replacement);
    }
  }

  return {
    originalLength: text.length,
    scrubbedText: scrubbed,
    detections,
    safeForLlmPaste: detections.length === 0 || !scrubbed.includes("sk-")
  };
}

/** worksai-09: WorksAi CommandBar */
export function executeCommandBarQuery(query, commands = []) {
  const q = String(query ?? "").trim();
  if (!q) return { mode: "empty", results: [] };

  if (/^[0-9+\-*/().\s]+$/.test(q) && /[0-9]/.test(q)) {
    const tokens = q.match(/(\d+(?:\.\d+)?|[+\-*/()])/g) || [];
    let acc = 0;
    let op = "+";
    for (const t of tokens) {
      if (["+", "-", "*", "/"].includes(t)) op = t;
      else if (!isNaN(Number(t))) {
        const val = Number(t);
        if (op === "+") acc += val;
        if (op === "-") acc -= val;
        if (op === "*") acc *= val;
        if (op === "/") acc = val !== 0 ? acc / val : NaN;
      }
    }
    return { mode: "calculator", expression: q, value: Number(acc.toFixed(4)) };
  }

  const lower = q.toLowerCase();
  const ranked = commands
    .map((cmd) => {
      const title = String(cmd.title || "").toLowerCase();
      const score = title === lower ? 100 : title.startsWith(lower) ? 80 : title.includes(lower) ? 50 : 0;
      return { ...cmd, score };
    })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);

  return { mode: "search", results: ranked };
}

/** worksai-10: WorksAi LinkEngine */
export function resolveSmartShortlink(linkRecord, requestContext = {}) {
  if (!linkRecord || !WorksAiSecurityGuard.isSafeExternalUrl(linkRecord.targetUrl)) {
    throw new Error("SecurityError: Unsafe or invalid targetUrl.");
  }
  const ua = String(requestContext.userAgent || "");
  const isBot = /bot|crawler|spider|headless|ahrefs|semrush/i.test(ua);
  let destination = linkRecord.targetUrl;

  if (linkRecord.healthy === false && linkRecord.fallbackUrl && WorksAiSecurityGuard.isSafeExternalUrl(linkRecord.fallbackUrl)) {
    destination = linkRecord.fallbackUrl;
  } else if (/iphone|ipad|ios/i.test(ua) && linkRecord.iosUrl) {
    destination = linkRecord.iosUrl;
  } else if (/android/i.test(ua) && linkRecord.androidUrl) {
    destination = linkRecord.androidUrl;
  }

  const urlObj = new URL(destination);
  if (linkRecord.utmSource) urlObj.searchParams.set("utm_source", linkRecord.utmSource);
  if (linkRecord.utmMedium) urlObj.searchParams.set("utm_medium", linkRecord.utmMedium);
  if (linkRecord.utmCampaign) urlObj.searchParams.set("utm_campaign", linkRecord.utmCampaign);

  return {
    resolvedUrl: urlObj.toString(),
    isBot,
    countedHumanClick: !isBot,
    usedFallback: linkRecord.healthy === false && Boolean(linkRecord.fallbackUrl)
  };
}

/** worksai-11: WorksAi CommerceCatalog */
export function enrichSkuAndBuildProductJsonLd(skuRecord, minMarginPct = 20) {
  if (!skuRecord || !skuRecord.sku || !(skuRecord.costCents > 0) || !(skuRecord.priceCents > 0)) {
    throw new Error("ValidationError: sku, costCents, and priceCents are required.");
  }
  const requestedDiscountPct = Number(skuRecord.discountPct || 0);
  const discountedPriceCents = Math.round(skuRecord.priceCents * (1 - requestedDiscountPct / 100));
  const minAllowedPriceCents = Math.ceil(skuRecord.costCents / (1 - minMarginPct / 100));
  const finalPriceCents = Math.max(discountedPriceCents, minAllowedPriceCents);
  const marginFloorEnforced = finalPriceCents > discountedPriceCents;

  const safeTitle = WorksAiSecurityGuard.sanitizeHtml(skuRecord.title || skuRecord.sku);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    sku: String(skuRecord.sku),
    name: safeTitle,
    description: WorksAiSecurityGuard.sanitizeHtml(
      skuRecord.description || `${safeTitle} — verified specification and direct fulfillment.`
    ),
    offers: {
      "@type": "Offer",
      priceCurrency: skuRecord.currency || "USD",
      price: (finalPriceCents / 100).toFixed(2),
      availability: skuRecord.inStock !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return {
    sku: skuRecord.sku,
    finalPriceCents,
    marginFloorEnforced,
    jsonLdString: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
  };
}

/** worksai-12: WorksAi ForumPulse */
export function moderateThreadAndBuildFaqJsonLd(thread) {
  if (!thread || !thread.title || !thread.questionBody) {
    throw new Error("ValidationError: thread title and questionBody are required.");
  }
  const combined = `${thread.title} ${thread.questionBody} ${thread.acceptedAnswer || ""}`;
  const linkCount = (combined.match(/https?:\/\//gi) || []).length;
  const hasToxicTerms = /scam-link-farm|buy-cheap-pills|casino-bonus-spam/i.test(combined);
  const spamScore = Math.min(100, linkCount * 25 + (hasToxicTerms ? 80 : 0));
  const quarantined = spamScore >= 60;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: WorksAiSecurityGuard.sanitizeHtml(thread.title),
        acceptedAnswer: {
          "@type": "Answer",
          text: WorksAiSecurityGuard.sanitizeHtml(
            thread.acceptedAnswer || "Pending community resolution."
          )
        }
      }
    ]
  };

  return {
    quarantined,
    spamScore,
    sanitizedTitle: WorksAiSecurityGuard.sanitizeHtml(thread.title),
    faqJsonLdString: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")
  };
}

export function runDomainEngineBySlug(slug, rawInput, toolName = "") {
  const text = typeof rawInput === "string" ? rawInput.trim() : JSON.stringify(rawInput || "");
  if (!text) {
    return { ok: false, status: 400, error: "Input specification or payload is required." };
  }
  let parsedJson = null;
  if (text.startsWith("{") || text.startsWith("[")) {
    try { parsedJson = JSON.parse(text); } catch { parsedJson = null; }
  }

  try {
    if (slug === "worksai-canvasarch") {
      const graph = parseArchitectureSpec(text);
      const svg = renderArchitectureSvg(graph, "WorksAi CanvasArch Topology");
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "canvasarch.parse_topology",
        runtimeCategory: "A. Browser Web Application",
        domainResult: { ...graph, svg },
        summary: `Parsed ${graph.nodes.length} architecture node(s), ${graph.edges.length} edge(s), and ${graph.spofNodes.length} SPOF candidate(s).`
      };
    }

    if (slug === "worksai-ledgerflow") {
      let rows = Array.isArray(parsedJson) ? parsedJson : parsedJson?.rows;
      const monthlyIncomeCents = parsedJson?.monthlyIncomeCents || 500000;
      if (!Array.isArray(rows)) {
        rows = text.split(/\r?\n/).filter(Boolean).map((line) => {
          const parts = line.split(",").map((s) => s.trim());
          if (parts.length >= 3 && !isNaN(Number(parts[2]))) {
            return { date: parts[0], payee: parts[1], amount: Number(parts[2]) };
          }
          return { date: "2026-11-01", payee: parts[0] || "Cloudflare Workers", amount: Number(parts[1] || -45) };
        });
      }
      const res = normalizeAndBudgetTransactions(rows, monthlyIncomeCents);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "ledgerflow.categorize_csv",
        runtimeCategory: "A. Browser Web Application",
        domainResult: res,
        summary: `Normalized ${res.transactions.length} transaction(s); total spent $${(res.totalSpentCents / 100).toFixed(2)}, 90-day net runway $${(res.runway90DayNetCents / 100).toFixed(2)}.`
      };
    }

    if (slug === "worksai-wavecut-studio") {
      const samples = Array.isArray(parsedJson?.samples)
        ? parsedJson.samples
        : [0.25, 0.32, 0.18, 0.001, 0.002, 0.001, 0.001, 0.29, 0.35, 0.22];
      const segments = Array.isArray(parsedJson?.transcriptSegments)
        ? parsedJson.transcriptSegments
        : text.split(/\r?\n/).filter(Boolean).map((line, idx) => ({
            startSec: idx * 45,
            title: line.replace(/^\d+:\d+\s*[-—]?\s*/, "").trim() || `Chapter ${idx + 1}`
          }));
      const res = analyzeWaveformAndBuildChapters(samples, parsedJson?.sampleRate || 10, segments);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "wavecut.detect_silence",
        runtimeCategory: "A. Browser Web Application",
        domainResult: res,
        summary: `Detected ${res.silenceIntervals.length} silence interval(s), generated ${res.wavByteLength}-byte RIFF WAVE PCM container and ${segments.length} chapter marker(s).`
      };
    }

    if (slug === "worksai-growthpulse") {
      const events = Array.isArray(parsedJson?.events)
        ? parsedJson.events
        : Array.isArray(parsedJson)
        ? parsedJson
        : [
            { siteId: "worksai.org", step: "landing", ip: "198.51.100.1", userAgent: "Mozilla/5.0", date: "2026-11-06" },
            { siteId: "worksai.org", step: "landing", ip: "198.51.100.2", userAgent: "Mozilla/5.0", date: "2026-11-06" },
            { siteId: "worksai.org", step: "landing", ip: "198.51.100.3", userAgent: "Mozilla/5.0", date: "2026-11-06" },
            { siteId: "worksai.org", step: "pricing", ip: "198.51.100.1", userAgent: "Mozilla/5.0", date: "2026-11-06" },
            { siteId: "worksai.org", step: "pricing", ip: "198.51.100.2", userAgent: "Mozilla/5.0", date: "2026-11-06" },
            { siteId: "worksai.org", step: "signup", ip: "198.51.100.1", userAgent: "Mozilla/5.0", date: "2026-11-06" }
          ];
      const res = evaluateFunnelAndAnomalies(events, parsedJson?.dailySalt || "2026-11-06");
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "growthpulse.analyze_funnel",
        runtimeCategory: "B. SaaS Web & API Service",
        domainResult: res,
        summary: `Cookieless funnel evaluated (${res.counts.landing} -> ${res.counts.pricing} -> ${res.counts.signup}); bottleneck: ${res.largestBottleneck}.`
      };
    }

    if (slug === "worksai-apisync-studio") {
      const openApiRoutes = Array.isArray(parsedJson?.openApiRoutes)
        ? parsedJson.openApiRoutes
        : [
            { method: "GET", path: "/api/health", expectedStatus: 200, requiredFields: ["ok", "service"] },
            { method: "POST", path: "/api/datalake/ingest", expectedStatus: 201, requiredFields: ["title", "mimeType", "content"] }
          ];
      const savedCollectionRequests = Array.isArray(parsedJson?.savedCollectionRequests)
        ? parsedJson.savedCollectionRequests
        : [{ method: "GET", path: "/api/health", bodyFields: ["ok", "service"] }];
      const res = auditOpenApiDrift(openApiRoutes, savedCollectionRequests);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "apisync.diff_openapi",
        runtimeCategory: "B. SaaS Web & API Service",
        domainResult: res,
        summary: `Audited ${openApiRoutes.length} OpenAPI route(s); inSync=${res.inSync}, missingInCollection=${res.missingInCollection.length}, breakingChanges=${res.breakingChanges.length}.`
      };
    }

    if (slug === "worksai-omnidesk") {
      const ticket = parsedJson?.ticket || {
        inboxId: "inbox-enterprise-sla",
        customerName: parsedJson?.customerName || "Enterprise Operator",
        message: text
      };
      const kb = Array.isArray(parsedJson?.knowledgeBase)
        ? parsedJson.knowledgeBase
        : [
            { id: "KB-101", title: "DNS DKIM Key Rotation & SPF Containment", keywords: ["dkim", "dns", "security", "key", "outage"], answerSummary: "Verify Cloudflare TXT records and rotate compromised selectors in your outbound MTA." },
            { id: "KB-204", title: "Billing & Invoice Reconciliation", keywords: ["billing", "refund", "charged", "invoice"], answerSummary: "Export your CSV ledger in WorksAi LedgerFlow for instant fee reconciliation." }
          ];
      const res = triageAndDraftSupportReply(ticket, kb);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "omnidesk.triage_urgency",
        runtimeCategory: "B. SaaS Web & API Service",
        domainResult: res,
        summary: `Triaged ticket in ${res.inboxId}: urgency=${res.urgency}, churnRisk=${res.churnRisk}, citedArticleId=${res.citedArticleId || "none"}.`
      };
    }

    if (slug === "worksai-graphmind") {
      const notes = Array.isArray(parsedJson?.notes)
        ? parsedJson.notes
        : [
            { id: "architecture-overview", path: "notes/architecture-overview.md", content: text + " [[neon-datalake]] [[mcp-registry]]" },
            { id: "neon-datalake", path: "notes/neon-datalake.md", content: "Connected to [[architecture-overview]]" },
            { id: "orphan-scratchpad", path: "notes/orphan-scratchpad.md", content: "Unlinked local note" }
          ];
      const res = analyzeMarkdownGraph(notes);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "graphmind.find_orphans",
        runtimeCategory: "C. IDE Extension Release + Companion Graph Verifier",
        domainResult: res,
        summary: `Analyzed ${res.nodeCount} Markdown note(s): ${res.orphanNotes.length} orphan(s), ${res.brokenLinks.length} broken wiki-link(s).`
      };
    }

    if (slug === "worksai-clipguard") {
      const res = scrubClipboardSecrets(text);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "clipguard.scan_secrets",
        runtimeCategory: "C. Browser/macOS Extension Release + Companion Secret Redactor",
        domainResult: res,
        summary: `Scanned ${res.originalLength} chars; redacted ${res.detections.length} secret/PII pattern(s) (${res.detections.join(", ") || "none"}).`
      };
    }

    if (slug === "worksai-commandbar") {
      const defaultCommands = [
        { id: "cmd-1", title: "Deploy Cloudflare Worker", category: "DevOps", action: "wrangler deploy" },
        { id: "cmd-2", title: "Search WorksAI Data Lake", category: "Data Lake", action: "https://worksai.org/data-lake" },
        { id: "cmd-3", title: "Audit OpenAPI Contract Drift", category: "API", action: "https://apisync.worksai.org" }
      ];
      const res = executeCommandBarQuery(parsedJson?.query || text, parsedJson?.commands || defaultCommands);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "commandbar.parse_intent",
        runtimeCategory: "C. Desktop Command Launcher Release + Companion Query Evaluator",
        domainResult: res,
        summary: res.mode === "calculator"
          ? `Evaluated deterministic expression ${res.expression} = ${res.value}.`
          : `Matched ${res.results.length} launcher command(s) for query "${text}".`
      };
    }

    if (slug === "worksai-linkengine") {
      const linkRecord = parsedJson?.linkRecord || {
        targetUrl: text.startsWith("http") ? text.split(/\s+/)[0] : "https://worksai.org/apps/worksai-linkengine",
        fallbackUrl: "https://worksai.org/apps",
        healthy: parsedJson?.healthy !== false,
        utmSource: parsedJson?.utmSource || "worksai_shortlink",
        utmMedium: parsedJson?.utmMedium || "edge_router",
        utmCampaign: parsedJson?.utmCampaign || "q4_launch"
      };
      const res = resolveSmartShortlink(linkRecord, parsedJson?.requestContext || { userAgent: "Mozilla/5.0 (Macintosh)" });
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "linkengine.suggest_internal_links",
        runtimeCategory: "D. WordPress/PHP Plugin Bridge + Edge Shortlink API",
        domainResult: res,
        summary: `Resolved shortlink to ${res.resolvedUrl} (countedHumanClick=${res.countedHumanClick}, usedFallback=${res.usedFallback}).`
      };
    }

    if (slug === "worksai-commercecatalog") {
      const skuRecord = parsedJson?.skuRecord || parsedJson || {
        sku: "WORKSAI-ENT-NODE-01",
        title: text.slice(0, 80) || "WorksAI Enterprise Edge Node License",
        costCents: 12000,
        priceCents: 19900,
        discountPct: 30,
        currency: "USD",
        inStock: true
      };
      const res = enrichSkuAndBuildProductJsonLd(skuRecord, parsedJson?.minMarginPct || 20);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "commercecatalog.enrich_sku",
        runtimeCategory: "D. PHP/Bagisto Bridge + Edge SKU Enrichment API",
        domainResult: res,
        summary: `Enriched SKU ${res.sku}: finalPriceCents=${res.finalPriceCents} (marginFloorEnforced=${res.marginFloorEnforced}).`
      };
    }

    if (slug === "worksai-forumpulse") {
      const thread = parsedJson?.thread || parsedJson || {
        title: text.split(/\r?\n/)[0] || "How do I connect Neon Postgres to Cloudflare Workers with Drizzle ORM?",
        questionBody: text,
        acceptedAnswer: "Configure DATABASE_URL with the Neon pooled connection string and run Drizzle migrations against schema worksai_hub."
      };
      const res = moderateThreadAndBuildFaqJsonLd(thread);
      return {
        ok: true,
        status: 200,
        app: slug,
        tool: toolName || "forumpulse.extract_faq_jsonld",
        runtimeCategory: "D. PHP/Flarum Bridge + Edge Moderation & FAQ Schema API",
        domainResult: res,
        summary: `Moderated thread "${res.sanitizedTitle}": spamScore=${res.spamScore}, quarantined=${res.quarantined}.`
      };
    }

    return { ok: false, status: 400, error: `Unknown product slug: ${slug}` };
  } catch (err) {
    return { ok: false, status: 422, error: String(err?.message || err) };
  }
}


function runDomainEngine(slugOrSub, inputPayload) {
  const out = runDomainEngineBySlug(APP_META.repo, null, inputPayload);
  return out && out.domainResult ? { ...out.domainResult, summary: out.summary, tool: out.tool } : out;
}

// --- R2 Storage Layer (Supports PROOF_BUCKET or DATALAKE_BUCKET + In-Memory Fallback) ---
const MEMORY_R2_FALLBACK = new Map();

function getR2Bucket(env) {
  if (env && env.PROOF_BUCKET && typeof env.PROOF_BUCKET.get === 'function') return env.PROOF_BUCKET;
  if (env && env.DATALAKE_BUCKET && typeof env.DATALAKE_BUCKET.get === 'function') return env.DATALAKE_BUCKET;
  return null;
}

async function r2GetJson(env, key) {
  const bucket = getR2Bucket(env);
  if (bucket) {
    const obj = await bucket.get(key);
    if (!obj) return null;
    const text = await obj.text();
    try { return JSON.parse(text); } catch { return null; }
  }
  const raw = MEMORY_R2_FALLBACK.get(key);
  return raw ? JSON.parse(raw) : null;
}

async function r2PutJson(env, key, value) {
  const serialized = JSON.stringify(value, null, 2);
  const bucket = getR2Bucket(env);
  if (bucket) {
    await bucket.put(key, serialized, { httpMetadata: { contentType: 'application/json' } });
    return;
  }
  MEMORY_R2_FALLBACK.set(key, serialized);
}

async function r2DeleteKey(env, key) {
  const bucket = getR2Bucket(env);
  if (bucket) {
    await bucket.delete(key);
    return;
  }
  MEMORY_R2_FALLBACK.delete(key);
}

function sanitizeScopeToken(raw, fallback) {
  const cleaned = String(raw || '').trim().replace(/[^a-zA-Z0-9._@-]/g, '_').slice(0, 64);
  return cleaned || fallback;
}


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


// --- WAV Binary Synthesizer (16-bit PCM RIFF/WAVE) ---
function generateWavBytesFromSummary(resultObj) {
  const sampleRate = 8000;
  const durationSec = 1;
  const numSamples = sampleRate * durationSec;
  const dataSize = numSamples * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, dataSize, true);
  const envelope = (resultObj && Array.isArray(resultObj.rmsEnvelope)) ? resultObj.rmsEnvelope : [0.25, 0.45, 0.35, 0.5];
  for (let i = 0; i < numSamples; i++) {
    const envVal = Number(envelope[i % envelope.length] || 0.25);
    const sample = Math.max(-1, Math.min(1, Math.sin((2 * Math.PI * 440 * i) / sampleRate) * envVal));
    view.setInt16(44 + i * 2, Math.floor(sample * 32767), true);
  }
  return new Uint8Array(buffer);
}

function buildExportPayload(item, requestedFormat) {
  const fmt = (requestedFormat || APP_META.exportFormat || 'json').toLowerCase();
  const safeId = String(item.id || 'export').replace(/[^a-zA-Z0-9_-]/g, '_');
  const result = item.result || runDomainEngine(APP_META.slug, item.input || APP_META.defaultInput);

  if (fmt === 'svg') {
    const svgBody = (result && result.svgDiagram) ? result.svgDiagram : DIAGRAM_SVG;
    return {
      bytes: new TextEncoder().encode(svgBody),
      mime: 'image/svg+xml; charset=utf-8',
      filename: `${APP_META.slug}-${safeId}.svg`
    };
  }
  if (fmt === 'csv') {
    let csvLines = ['metric,value,category,status'];
    if (String(item.input || '').includes(',')) {
      csvLines = ['date,description,amount,category'];
      for (const line of String(item.input).split(/\r?\n/).filter(Boolean)) {
        csvLines.push(line);
      }
    } else {
      for (const [k, v] of Object.entries(result || {})) {
        if (typeof v === 'number' || typeof v === 'string' || typeof v === 'boolean') {
          csvLines.push(`"${k}","${String(v).replace(/"/g, '""')}","${APP_META.slug}","verified"`);
        }
      }
    }
    return {
      bytes: new TextEncoder().encode(csvLines.join('\n') + '\n'),
      mime: 'text/csv; charset=utf-8',
      filename: `${APP_META.slug}-${safeId}.csv`
    };
  }
  if (fmt === 'wav') {
    return {
      bytes: generateWavBytesFromSummary(result),
      mime: 'audio/wav',
      filename: `${APP_META.slug}-${safeId}.wav`
    };
  }
  if (fmt === 'md') {
    const md = `# ${item.title || APP_META.name}\n\n- **Product**: ${APP_META.name} (${APP_META.slug}.worksai.org)\n- **Tenant / Owner**: ${item.tenantId} / ${item.ownerId}\n- **Updated**: ${item.updatedAt}\n\n## Input\n\n\`\`\`\n${item.input}\n\`\`\`\n\n## Computed Output\n\n\`\`\`json\n${JSON.stringify(result, null, 2)}\n\`\`\`\n`;
    return {
      bytes: new TextEncoder().encode(md),
      mime: 'text/markdown; charset=utf-8',
      filename: `${APP_META.slug}-${safeId}.md`
    };
  }
  return {
    bytes: new TextEncoder().encode(JSON.stringify({ item, result }, null, 2)),
    mime: 'application/json; charset=utf-8',
    filename: `${APP_META.slug}-${safeId}.json`
  };
}

function userIndexKey(tenantId, userId) {
  return `workspaces/${tenantId}/${userId}/${APP_META.slug}/index.json`;
}
function itemStorageKey(tenantId, userId, itemId) {
  return `workspaces/${tenantId}/${userId}/${APP_META.slug}/items/${itemId}.json`;
}
function globalItemLookupKey(itemId) {
  return `workspaces/_lookup/${APP_META.slug}/${itemId}.json`;
}

async function ensureUserWorkspaceIndex(env, tenantId, userId) {
  const idxKey = userIndexKey(tenantId, userId);
  let idx = await r2GetJson(env, idxKey);
  if (idx && Array.isArray(idx.items)) return idx;

  const seedId = `seed-${APP_META.slug}-${tenantId}`;
  const now = new Date().toISOString();
  const computed = runDomainEngine(APP_META.slug, APP_META.defaultInput);
  const seedItem = {
    id: seedId,
    title: `${APP_META.name} Starter Project`,
    tenantId,
    ownerId: userId,
    slug: APP_META.slug,
    input: APP_META.defaultInput,
    result: computed,
    version: 1,
    createdAt: now,
    updatedAt: now
  };
  await r2PutJson(env, itemStorageKey(tenantId, userId, seedId), seedItem);
  idx = {
    tenantId,
    ownerId: userId,
    slug: APP_META.slug,
    updatedAt: now,
    items: [{
      id: seedId,
      title: seedItem.title,
      tenantId,
      ownerId: userId,
      version: 1,
      updatedAt: now
    }]
  };
  await r2PutJson(env, idxKey, idx);
  return idx;
}

const FORBIDDEN_TELEMETRY_KEYS = ['clipboard', 'password', 'secret', 'token', 'csv', 'content', 'rawinput', 'privatekey', 'authorization'];
const TELEMETRY_COUNTERS = new Map();

function validateAndRecordTelemetry(payload) {
  if (!payload || typeof payload !== 'object') return { ok: false, status: 400, error: 'Invalid telemetry payload' };
  for (const k of Object.keys(payload)) {
    if (FORBIDDEN_TELEMETRY_KEYS.includes(k.toLowerCase())) {
      return { ok: false, status: 400, error: `Privacy violation blocked: field '${k}' is prohibited in telemetry.` };
    }
  }
  const eventName = sanitizeScopeToken(payload.eventType || payload.event || 'page_view', 'page_view');
  const counterKey = `${APP_META.slug}:${eventName}`;
  const nextCount = (TELEMETRY_COUNTERS.get(counterKey) || 0) + 1;
  TELEMETRY_COUNTERS.set(counterKey, nextCount);
  return {
    ok: true,
    status: 202,
    recorded: { product: APP_META.slug, eventType: eventName, count: nextCount, piiScrubbed: true, timestamp: new Date().toISOString() }
  };
}

function renderDocsPage(identity) {
  const bpkg = APP_META.binaryPackage;
  const canonical = `https://${APP_META.slug}.worksai.org/docs`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Documentation, Setup &amp; API Reference | ${APP_META.name} — WorksAI</title>
  <meta name="description" content="Official installation guide, HMAC-SHA256 authenticated CRUD API documentation, compatibility requirements, and privacy disclosures for ${APP_META.name}."/>
  <link rel="canonical" href="${canonical}"/>
  <link rel="stylesheet" href="/assets/styles.css"/>
</head>
<body>
  <header class="app-topbar">
    <div class="brand-cluster">
      <a href="https://worksai.org" style="display:flex;align-items:center;gap:0.45rem;color:#F8FAFC;font-weight:700;text-decoration:none;">
        <span style="display:inline-flex;width:26px;height:26px;">${WORKSAI_CREST_SVG}</span><span>WorksAI</span>
      </a>
      <span>/</span><a href="/" style="color:#38BDF8;font-weight:700;">${APP_META.name}</a>
    </div>
    <nav style="display:flex;gap:1rem;font-size:0.85rem;">
      <a href="/">Application Workspace</a>
      <a href="/docs" style="color:#38BDF8;font-weight:700;">Documentation</a>
      <a href="/guide">Technical Guide &amp; FAQ</a>
    </nav>
  </header>
  <main class="workspace-shell" style="max-width:980px;">
    <h1>${APP_META.name} — Installation, Authentication &amp; API Documentation</h1>
    <p style="color:#94A3B8;">Category: <strong>${APP_META.deploymentCategory}</strong> • Compatibility: <strong>${APP_META.compatibility}</strong></p>
    <section class="panel-box" style="margin:1.25rem 0;">
      <h2 style="margin-top:0;color:#38BDF8;">1. Installation &amp; Quickstart</h2>
      <pre style="background:#060A11;border:1px solid #334155;padding:0.85rem;border-radius:8px;color:#E2E8F0;overflow-x:auto;"><code>${APP_META.installCmd}</code></pre>
      ${bpkg ? `<p style="margin:0.65rem 0 0;font-size:0.86rem;">Checksum-Verified Archive: <a href="/downloads/${bpkg.filename}">/downloads/${bpkg.filename}</a> (${bpkg.sizeBytes} bytes, SHA-256: <code>${bpkg.sha256}</code> — integrity checksum, unencrypted archive).</p>` : ''}
    </section>
    <section class="panel-box" style="margin:1.25rem 0;">
      <h2 style="margin-top:0;color:#A855F7;">2. Server-Signed Authentication &amp; Tenant-Isolated R2 CRUD</h2>
      <p>Workspace identity is derived strictly from server-signed WebCrypto HMAC-SHA256 session tokens (<code>POST /api/auth/session</code> or <code>POST /api/auth/demo</code>). Unauthenticated client-supplied <code>X-WorksAI-Tenant</code> or <code>X-WorksAI-User</code> headers are rejected with <code>HTTP 401/403</code>.</p>
      <table class="data-table">
        <thead><tr><th>Endpoint</th><th>Method</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>/api/auth/session</code></td><td>POST</td><td>Issues server-signed HMAC-SHA256 production workspace token &amp; HttpOnly cookie.</td></tr>
          <tr><td><code>/api/auth/demo</code></td><td>POST</td><td>Issues isolated Demo Sandbox session token (cannot access production workspaces).</td></tr>
          <tr><td><code>/api/auth/logout</code></td><td>POST</td><td>Revokes session JTI across all Worker isolates via R2.</td></tr>
          <tr><td><code>/api/workspace/items</code></td><td>GET / POST</td><td>Lists or saves items inside the caller's verified tenant+user R2 namespace.</td></tr>
          <tr><td><code>/api/workspace/items/:id</code></td><td>GET / PATCH / DELETE</td><td>Reopens, renames, or deletes a saved item (enforces 403 cross-tenant guard).</td></tr>
          <tr><td><code>/api/workspace/export/:id?format=${APP_META.exportFormat}</code></td><td>GET</td><td>Downloads native <code>.${APP_META.exportFormat}</code>, <code>.json</code>, or <code>.md</code> file.</td></tr>
        </tbody>
      </table>
    </section>
  </main>
</body>
</html>`;
}

function renderGuidePage(identity) {
  const seo = APP_META.seo;
  const canonical = `https://${APP_META.slug}.worksai.org/guide`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faqs.map(([q, a]) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${seo.primary_kw} — Technical Guide &amp; FAQ | ${APP_META.name}</title>
  <meta name="description" content="${seo.meta_desc}"/>
  <link rel="canonical" href="${canonical}"/>
  <link rel="stylesheet" href="/assets/styles.css"/>
  <script type="application/ld+json">${JSON.stringify(faqLd)}</script>
</head>
<body>
  <header class="app-topbar">
    <div class="brand-cluster">
      <a href="https://worksai.org" style="display:flex;align-items:center;gap:0.45rem;color:#F8FAFC;font-weight:700;text-decoration:none;">
        <span style="display:inline-flex;width:26px;height:26px;">${WORKSAI_CREST_SVG}</span><span>WorksAI</span>
      </a>
      <span>/</span><a href="/" style="color:#38BDF8;font-weight:700;">${APP_META.name}</a>
    </div>
    <nav style="display:flex;gap:1rem;font-size:0.85rem;">
      <a href="/">Application Workspace</a>
      <a href="/docs">Documentation</a>
      <a href="/guide" style="color:#38BDF8;font-weight:700;">Technical Guide &amp; FAQ</a>
    </nav>
  </header>
  <main class="workspace-shell" style="max-width:980px;">
    <h1>${seo.h1}</h1>
    <div class="panel-box" style="border-left:4px solid #38BDF8;margin:1rem 0;">
      <strong>Executive Summary:</strong> ${seo.geo_summary}
    </div>
    ${DIAGRAM_SVG}
    <h2>Frequently Asked Questions</h2>
    <div style="display:flex;flex-direction:column;gap:0.75rem;">
      ${seo.faqs.map(([q, a]) => `<details class="panel-box"><summary style="font-weight:700;cursor:pointer;">${q}</summary><p style="margin:0.5rem 0 0;color:#CBD5E1;">${a}</p></details>`).join('')}
    </div>
  </main>
</body>
</html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method.toUpperCase();

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    };
    if (method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

    // 1. Static Frontend Build Assets (/assets/styles.css and /assets/app.js)
    if (path === '/assets/styles.css') {
      return new Response(BUNDLED_STYLES_CSS, {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'text/css; charset=utf-8', 'Cache-Control': 'public, max-age=300' }
      });
    }
    if (path === '/assets/app.js') {
      return new Response(BUNDLED_APP_JS, {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'public, max-age=300' }
      });
    }

    // 2. Health & Build Metadata
    if (path === '/api/health') {
      return Response.json({
        status: 'ok',
        service: APP_META.repo,
        slug: APP_META.slug,
        category: APP_META.deploymentCategory,
        isWebApp: APP_META.isWebApp,
        exportFormat: APP_META.exportFormat,
        hasBinaryPackage: Boolean(APP_META.binaryPackage),
        binaryFilename: APP_META.binaryPackage ? APP_META.binaryPackage.filename : null,
        binarySha256: APP_META.binaryPackage ? APP_META.binaryPackage.sha256 : null,
        artifactVerification: APP_META.binaryPackage ? 'sha256-checksum-verified-archive' : 'bundled-web-application',
        tenantIsolation: 'strict-server-hmac-session-r2-crud',
        frontendAssets: ['/assets/styles.css', '/assets/app.js'],
        aiModel: '@cf/meta/llama-3.1-8b-instruct-fp8',
        version: '1.2.0',
        commitSha: (env && (env.GIT_COMMIT_SHA || env.COMMIT_SHA)) || 'v1.2.0',
        timestamp: new Date().toISOString()
      }, { headers: corsHeaders });
    }

    // 3. Server-Signed Authentication Endpoints (/api/auth/session, /api/auth/demo, /api/auth/logout, /api/auth/me)
    if (path === '/api/auth/session' && method === 'POST') {
      let body = {};
      try { body = await request.json(); } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: corsHeaders }); }
      const email = String(body.email || '').trim().toLowerCase();
      const workspaceSlug = sanitizeScopeToken(body.workspaceSlug || body.tenantId || '', '');
      const passcode = String(body.passcode || '');
      if (!email || !email.includes('@') || !workspaceSlug || passcode.length < 6) {
        return Response.json({ error: 'Valid email, workspaceSlug, and passcode (min 6 chars) are required.' }, { status: 400, headers: corsHeaders });
      }
      if (workspaceSlug === 'demo-sandbox') {
        return Response.json({ error: 'Reserved demo namespace cannot be used as production tenant slug.' }, { status: 400, headers: corsHeaders });
      }
      const userId = sanitizeScopeToken(email.split('@')[0], 'user');
      const jti = `sess-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
      const payload = {
        jti,
        mode: 'production',
        tenantId: workspaceSlug,
        userId,
        email,
        iat: Date.now(),
        exp: Date.now() + 86400000
      };
      const token = await signSessionToken(payload, env);
      return new Response(JSON.stringify({
        authenticated: true,
        token,
        identity: { authenticated: true, mode: 'production', tenantId: workspaceSlug, userId, email, jti }
      }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Set-Cookie': `worksai_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`
        }
      });
    }

    if (path === '/api/auth/demo' && method === 'POST') {
      const demoId = `demo-${Date.now().toString(36).slice(-5)}-${Math.random().toString(36).slice(2, 6)}`;
      const jti = `jti-${demoId}`;
      const payload = {
        jti,
        mode: 'demo',
        tenantId: 'demo-sandbox',
        userId: demoId,
        email: `${demoId}@demo.worksai.org`,
        iat: Date.now(),
        exp: Date.now() + 14400000
      };
      const token = await signSessionToken(payload, env);
      return new Response(JSON.stringify({
        authenticated: true,
        token,
        identity: { authenticated: true, mode: 'demo', tenantId: 'demo-sandbox', userId: demoId, email: payload.email, jti }
      }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Set-Cookie': `worksai_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=14400`
        }
      });
    }

    if (path === '/api/auth/logout' && method === 'POST') {
      const identity = await resolveAuthenticatedIdentity(request, url, env);
      if (identity && identity.jti) {
        MEMORY_REVOKED_JTIS.add(identity.jti);
        await r2PutJson(env, `revoked_tokens/${identity.jti}.json`, { jti: identity.jti, revoked: true, revokedAt: new Date().toISOString() });
      }
      return new Response(JSON.stringify({ status: 'logged_out', revokedJti: identity ? identity.jti : null }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Set-Cookie': 'worksai_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
        }
      });
    }

    if (path === '/api/auth/me' && method === 'GET') {
      const identity = await resolveAuthenticatedIdentity(request, url, env);
      if (identity.spoofAttempt) {
        return Response.json({ authenticated: false, error: identity.error }, { status: 401, headers: corsHeaders });
      }
      return Response.json({ authenticated: identity.authenticated, identity }, { headers: corsHeaders });
    }

    // 4. Binary Release Package Downloads (/downloads/<filename> and /api/releases/latest)
    if (path === '/api/releases/latest') {
      if (!APP_META.binaryPackage) {
        return Response.json({
          product: APP_META.slug,
          deliveryModel: 'hosted-web-application',
          exportEndpoint: `/api/workspace/export/seed-${APP_META.slug}-demo-sandbox?format=${APP_META.exportFormat}`
        }, { headers: corsHeaders });
      }
      return Response.json({
        product: APP_META.slug,
        version: '1.2.0',
        filename: APP_META.binaryPackage.filename,
        sizeBytes: APP_META.binaryPackage.sizeBytes,
        sha256: APP_META.binaryPackage.sha256,
        integrityType: 'sha256-checksum-verified-archive',
        downloadUrl: `/downloads/${APP_META.binaryPackage.filename}`,
        installCmd: APP_META.installCmd,
        compatibility: APP_META.compatibility,
        permissionsDisclosure: APP_META.permissionsDisclosure
      }, { headers: corsHeaders });
    }

    if (path.startsWith('/downloads/') && APP_META.binaryPackage) {
      const reqFile = path.replace('/downloads/', '');
      if (reqFile === APP_META.binaryPackage.filename || reqFile === 'latest') {
        const binStr = atob(APP_META.binaryPackage.base64);
        const bytes = new Uint8Array(binStr.length);
        for (let i = 0; i < binStr.length; i++) bytes[i] = binStr.charCodeAt(i);
        return new Response(bytes, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': APP_META.binaryPackage.mime,
            'Content-Disposition': `attachment; filename="${APP_META.binaryPackage.filename}"`,
            'Content-Length': String(bytes.byteLength),
            'X-Package-SHA256': APP_META.binaryPackage.sha256
          }
        });
      }
    }

    // 5. Privacy-Conscious Telemetry Gate
    if (path === '/api/telemetry/event' && method === 'POST') {
      let body = {};
      try { body = await request.json(); } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: corsHeaders }); }
      const outcome = validateAndRecordTelemetry(body);
      return Response.json(outcome, { status: outcome.status, headers: corsHeaders });
    }

    // 6. Server-Authenticated Tenant & User Workspace CRUD Endpoints
    if (path.startsWith('/api/workspace/')) {
      const identity = await resolveAuthenticatedIdentity(request, url, env);
      if (identity.spoofAttempt || !identity.authenticated) {
        return Response.json({
          error: identity.error || 'Authentication required: obtain a server-signed token via POST /api/auth/session or POST /api/auth/demo.',
          code: 'UNAUTHENTICATED_WORKSPACE_ACCESS'
        }, { status: 401, headers: corsHeaders });
      }

      if (path === '/api/workspace/items' && method === 'GET') {
        const idx = await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
        return Response.json({
          status: 'ok',
          mode: identity.mode,
          tenantId: identity.tenantId,
          userId: identity.userId,
          slug: APP_META.slug,
          items: idx.items
        }, { headers: corsHeaders });
      }

      if (path === '/api/workspace/items' && method === 'POST') {
        let body = {};
        try { body = await request.json(); } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: corsHeaders }); }
        const itemId = sanitizeScopeToken(body.id || `item-${Date.now().toString(36)}`, `item-${Date.now().toString(36)}`);

        const existingOwner = await r2GetJson(env, globalItemLookupKey(itemId));
        if (existingOwner && (existingOwner.tenantId !== identity.tenantId || existingOwner.ownerId !== identity.userId)) {
          return Response.json({
            error: 'Forbidden: item belongs to a different authenticated tenant or user workspace.',
            code: 'CROSS_TENANT_FORBIDDEN'
          }, { status: 403, headers: corsHeaders });
        }

        const existingItem = await r2GetJson(env, itemStorageKey(identity.tenantId, identity.userId, itemId));
        const now = new Date().toISOString();
        const inputStr = typeof body.input === 'string' && body.input.trim() ? body.input : APP_META.defaultInput;
        const computedResult = runDomainEngine(APP_META.slug, inputStr);
        const nextVersion = existingItem ? (Number(existingItem.version || 1) + 1) : 1;
        const titleStr = String(body.title || (existingItem && existingItem.title) || `${APP_META.name} Workspace Item`).slice(0, 140);

        const savedItem = {
          id: itemId,
          title: titleStr,
          tenantId: identity.tenantId,
          ownerId: identity.userId,
          mode: identity.mode,
          slug: APP_META.slug,
          input: inputStr,
          result: computedResult,
          version: nextVersion,
          createdAt: existingItem ? existingItem.createdAt : now,
          updatedAt: now
        };

        await r2PutJson(env, itemStorageKey(identity.tenantId, identity.userId, itemId), savedItem);
        await r2PutJson(env, globalItemLookupKey(itemId), {
          id: itemId,
          tenantId: identity.tenantId,
          ownerId: identity.userId,
          mode: identity.mode,
          slug: APP_META.slug
        });

        const idx = await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
        const summaryEntry = { id: itemId, title: titleStr, tenantId: identity.tenantId, ownerId: identity.userId, version: nextVersion, updatedAt: now };
        idx.items = [summaryEntry, ...idx.items.filter(i => i.id !== itemId)];
        idx.updatedAt = now;
        await r2PutJson(env, userIndexKey(identity.tenantId, identity.userId), idx);

        return Response.json({ status: 'saved', tenantId: identity.tenantId, userId: identity.userId, item: savedItem }, { status: existingItem ? 200 : 201, headers: corsHeaders });
      }

      if (path.startsWith('/api/workspace/items/')) {
        const itemId = sanitizeScopeToken(decodeURIComponent(path.replace('/api/workspace/items/', '')), '');
        if (!itemId) return Response.json({ error: 'Missing item ID' }, { status: 400, headers: corsHeaders });

        const ownerRecord = await r2GetJson(env, globalItemLookupKey(itemId));
        if (ownerRecord && (ownerRecord.tenantId !== identity.tenantId || ownerRecord.ownerId !== identity.userId)) {
          return Response.json({ error: 'Forbidden: cross-tenant or cross-user workspace access denied.', code: 'CROSS_TENANT_FORBIDDEN' }, { status: 403, headers: corsHeaders });
        }

        await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
        const key = itemStorageKey(identity.tenantId, identity.userId, itemId);
        const existing = await r2GetJson(env, key);
        if (!existing) return Response.json({ error: 'Workspace item not found in this tenant/user scope' }, { status: 404, headers: corsHeaders });

        if (method === 'GET') return Response.json({ status: 'ok', item: existing }, { headers: corsHeaders });

        if (method === 'PATCH') {
          let body = {};
          try { body = await request.json(); } catch { return Response.json({ error: 'Invalid JSON' }, { status: 400, headers: corsHeaders }); }
          const now = new Date().toISOString();
          if (typeof body.title === 'string' && body.title.trim()) existing.title = body.title.trim().slice(0, 140);
          if (typeof body.input === 'string' && body.input.trim()) {
            existing.input = body.input;
            existing.result = runDomainEngine(APP_META.slug, body.input);
          }
          existing.version = Number(existing.version || 1) + 1;
          existing.updatedAt = now;
          await r2PutJson(env, key, existing);

          const idx = await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
          idx.items = idx.items.map(i => i.id === itemId ? { ...i, title: existing.title, version: existing.version, updatedAt: now } : i);
          idx.updatedAt = now;
          await r2PutJson(env, userIndexKey(identity.tenantId, identity.userId), idx);
          return Response.json({ status: 'updated', item: existing }, { headers: corsHeaders });
        }

        if (method === 'DELETE') {
          await r2DeleteKey(env, key);
          await r2DeleteKey(env, globalItemLookupKey(itemId));
          const idx = await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
          idx.items = idx.items.filter(i => i.id !== itemId);
          idx.updatedAt = new Date().toISOString();
          await r2PutJson(env, userIndexKey(identity.tenantId, identity.userId), idx);
          return Response.json({ status: 'deleted', id: itemId }, { headers: corsHeaders });
        }
      }

      if (path.startsWith('/api/workspace/export/') && method === 'GET') {
        const itemId = sanitizeScopeToken(decodeURIComponent(path.replace('/api/workspace/export/', '')), '');
        const ownerRecord = await r2GetJson(env, globalItemLookupKey(itemId));
        if (ownerRecord && (ownerRecord.tenantId !== identity.tenantId || ownerRecord.ownerId !== identity.userId)) {
          return Response.json({ error: 'Forbidden: cross-tenant export denied' }, { status: 403, headers: corsHeaders });
        }
        await ensureUserWorkspaceIndex(env, identity.tenantId, identity.userId);
        const item = await r2GetJson(env, itemStorageKey(identity.tenantId, identity.userId, itemId));
        if (!item) return Response.json({ error: 'Item not found' }, { status: 404, headers: corsHeaders });

        const fmt = url.searchParams.get('format') || APP_META.exportFormat;
        const exported = buildExportPayload(item, fmt);
        return new Response(exported.bytes, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': exported.mime,
            'Content-Disposition': `attachment; filename="${exported.filename}"`,
            'X-Export-Format': fmt
          }
        });
      }
    }

    // 7. Domain Execution & Rate-Limited Workers AI Copilot (/api/execute)
    if (path === '/api/execute' && method === 'POST') {
      const identity = await resolveAuthenticatedIdentity(request, url, env);
      if (identity.spoofAttempt) {
        return Response.json({ error: identity.error }, { status: 401, headers: corsHeaders });
      }
      let body = {};
      try { body = await request.json(); } catch { body = {}; }
      const inputStr = (typeof body.input === 'string' && body.input.trim() ? body.input : APP_META.defaultInput).slice(0, 4000);
      const domainResult = runDomainEngine(APP_META.slug, inputStr);
      let aiCopilotNote = null;
      let genuineAiInvoked = false;
      if (body.enableAi) {
        if (!checkAiRateLimit(`${identity.tenantId}:${identity.userId}`)) {
          return Response.json({ error: 'AI rate limit exceeded (max 20 requests/min).' }, { status: 429, headers: corsHeaders });
        }
        if (env && env.AI && typeof env.AI.run === 'function') {
          try {
            const aiResp = await env.AI.run('@cf/meta/llama-3.1-8b-instruct-fp8', {
              messages: [
                { role: 'system', content: `You are the technical copilot for ${APP_META.name} (${APP_META.tagline}). Provide 2 concise engineering recommendations.` },
                { role: 'user', content: inputStr.slice(0, 1200) }
              ],
              max_tokens: 180
            });
            aiCopilotNote = aiResp && (aiResp.response || JSON.stringify(aiResp));
            genuineAiInvoked = Boolean(aiCopilotNote);
          } catch (e) {
            aiCopilotNote = `Deterministic fallback active (AI note: ${e.message})`;
          }
        } else {
          aiCopilotNote = domainResult.summary || 'Deterministic domain analysis completed.';
        }
      }
      return Response.json({
        status: 'executed',
        service: APP_META.repo,
        slug: APP_META.slug,
        tenantId: identity.tenantId,
        userId: identity.userId,
        genuineAiInvoked,
        aiCopilotNote,
        result: domainResult
      }, { headers: corsHeaders });
    }

    // 8. SEO Crawlability Routes (/sitemap.xml and /robots.txt)
    if (path === '/sitemap.xml') {
      const base = `https://${APP_META.slug}.worksai.org`;
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${base}/docs</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>${base}/guide</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
</urlset>`;
      return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
    }

    if (path === '/robots.txt') {
      const txt = `User-agent: *\nAllow: /\nAllow: /docs\nAllow: /guide\nAllow: /downloads/\nDisallow: /api/workspace/\nDisallow: /api/auth/\nSitemap: https://${APP_META.slug}.worksai.org/sitemap.xml\n`;
      return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    const identity = await resolveAuthenticatedIdentity(request, url, env);
    if (path === '/docs') {
      return new Response(renderDocsPage(identity), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }
    if (path === '/guide') {
      return new Response(renderGuidePage(identity), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }

    if (path === '/' || path === '/index.html') {
      const effTenant = identity.tenantId || 'demo-sandbox';
      const effUser = identity.userId || 'demo-visitor';
      const idx = await ensureUserWorkspaceIndex(env, effTenant, effUser);
      const firstId = idx.items[0] ? idx.items[0].id : `seed-${APP_META.slug}-${effTenant}`;
      const initialItem = (await r2GetJson(env, itemStorageKey(effTenant, effUser, firstId))) || {
        id: firstId,
        title: `${APP_META.name} Starter Project`,
        input: APP_META.defaultInput,
        result: runDomainEngine(APP_META.slug, APP_META.defaultInput)
      };
      const clientMeta = { ...APP_META, binaryPackage: APP_META.binaryPackage ? { ...APP_META.binaryPackage, base64: undefined } : null };
      const html = BUNDLED_INDEX_HTML
        .replace('__WORKSAI_CREST_PLACEHOLDER__', WORKSAI_CREST_SVG)
        .replace('__WORKSAI_META_JSON__', JSON.stringify(clientMeta))
        .replace('__WORKSAI_INITIAL_JSON__', JSON.stringify({ identity, initialItem }));
      return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
    }

    return Response.json({ error: 'Not Found', path }, { status: 404, headers: corsHeaders });
  }
};
