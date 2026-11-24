export type ServerCategory = "Developer tools" | "Utilities" | "Knowledge";

export interface ServerEntry {
  slug: string;
  name: string;
  category: ServerCategory;
  description: string;
  runtime: "Node.js" | "Python";
  command?: string;
  args?: readonly string[];
  firstParty?: boolean;
}

const upstream = "https://github.com/modelcontextprotocol/servers/tree/main/src/";

export const servers: readonly ServerEntry[] = [
  { slug: "text-stats", name: "Text Statistics", category: "Utilities", description: "Count words, characters and lines locally without external services.", runtime: "Node.js", firstParty: true },
  { slug: "everything", name: "Everything", category: "Developer tools", description: "Explore MCP tools, resources and prompts using a reference server.", runtime: "Node.js", command: "npx", args: ["@modelcontextprotocol/server-everything"] },
  { slug: "git", name: "Git", category: "Developer tools", description: "Inspect and work with local Git repositories.", runtime: "Python" },
  { slug: "filesystem", name: "Filesystem", category: "Developer tools", description: "Work with files in explicitly configured directories.", runtime: "Node.js" },
  { slug: "memory", name: "Memory", category: "Knowledge", description: "Store and retrieve information using a knowledge graph.", runtime: "Node.js", command: "npx", args: ["@modelcontextprotocol/server-memory"] },
  { slug: "sequentialthinking", name: "Sequential Thinking", category: "Knowledge", description: "Explore structured, iterative problem solving.", runtime: "Node.js", command: "npx", args: ["@modelcontextprotocol/server-sequential-thinking"] },
  { slug: "time", name: "Time", category: "Utilities", description: "Get current time and convert between time zones.", runtime: "Python", command: "uvx", args: ["mcp-server-time"] },
];

export function serverSource(server: ServerEntry): string {
  if (server.firstParty) return "https://github.com/CyberAkhil/open_mcp_hub/tree/main/servers/text-stats";
  return upstream + server.slug;
}
