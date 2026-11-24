import { createInterface } from "node:readline";

const version = "2025-11-25";
const tools = [{
  name: "text_stats",
  description: "Count words, Unicode code points, and lines in supplied text.",
  inputSchema: {
    type: "object",
    properties: { text: { type: "string", maxLength: 100000 } },
    required: ["text"],
    additionalProperties: false
  }
}];

const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
let initialized = false;
const send = (message) => process.stdout.write(JSON.stringify(message) + "\n");

for await (const line of input) {
  let request;
  try { request = JSON.parse(line); }
  catch { send({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }); continue; }
  if (!request || request.jsonrpc !== "2.0" || typeof request.method !== "string") {
    send({ jsonrpc: "2.0", id: request?.id ?? null, error: { code: -32600, message: "Invalid request" } }); continue;
  }
  if (!Object.hasOwn(request, "id")) continue;
  const reply = (result) => send({ jsonrpc: "2.0", id: request.id, result });
  const error = (code, message) => send({ jsonrpc: "2.0", id: request.id, error: { code, message } });
  switch (request.method) {
    case "initialize":
      initialized = true;
      reply({ protocolVersion: version, capabilities: { tools: {} }, serverInfo: { name: "openmcp-text-stats", version: "0.1.0" } });
      break;
    case "ping": reply({}); break;
    case "tools/list":
      if (!initialized) { error(-32000, "Initialize first"); break; }
      reply({ tools }); break;
    case "tools/call": {
      if (!initialized) { error(-32000, "Initialize first"); break; }
      const { name, arguments: args } = request.params ?? {};
      if (name !== "text_stats" || typeof args?.text !== "string" || args.text.length > 100000) {
        error(-32602, "Expected text_stats with text of at most 100000 characters"); break;
      }
      const text = args.text;
      const stats = { words: text.trim() ? text.trim().split(/\s+/u).length : 0, characters: [...text].length, lines: text ? text.split(/\r\n|\r|\n/u).length : 0 };
      reply({ content: [{ type: "text", text: JSON.stringify(stats) }] });
      break;
    }
    default: error(-32601, "Method not found");
  }
}
