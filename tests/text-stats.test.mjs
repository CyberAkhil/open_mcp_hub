import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

test("stdio lifecycle and text statistics", () => {
  const requests = [
    { id: 1, method: "initialize", params: { protocolVersion: "2025-11-25", capabilities: {}, clientInfo: { name: "test", version: "1" } } },
    { method: "notifications/initialized" },
    { id: 2, method: "tools/list" },
    { id: 3, method: "tools/call", params: { name: "text_stats", arguments: { text: "hello world\nagain" } } },
    { id: 4, method: "tools/call", params: { name: "text_stats", arguments: { text: 42 } } }
  ];
  const result = spawnSync(process.execPath, [fileURLToPath(new URL("../servers/text-stats/index.mjs", import.meta.url))], {
    input: requests.map(r => JSON.stringify({ jsonrpc: "2.0", ...r })).join("\n") + "\n",
    encoding: "utf8", timeout: 5000
  });
  assert.equal(result.status, 0, result.stderr);
  const replies = result.stdout.trim().split("\n").map(JSON.parse);
  assert.equal(replies.length, 4);
  assert.equal(replies[0].result.protocolVersion, "2025-11-25");
  assert.equal(replies[1].result.tools[0].name, "text_stats");
  assert.deepEqual(JSON.parse(replies[2].result.content[0].text), { words: 3, characters: 17, lines: 2 });
  assert.equal(replies[3].error.code, -32602);
});
