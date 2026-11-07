export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-graphmind",
  subdomain: "graphmind.worksai.org",
  mcpEndpoint: "https://graphmind.worksai.org/api/mcp",
  aiEndpoint: "https://graphmind.worksai.org/api/ai/analyze",
  mcpTools: ["graphmind.index_wikilinks", "graphmind.find_orphan_notes", "graphmind.build_context_packet"]
} as const;
