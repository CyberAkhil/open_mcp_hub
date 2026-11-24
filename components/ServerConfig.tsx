"use client";

import { useState } from "react";
import type { ServerEntry } from "./catalog";

export default function ServerConfig({ server }: { server: ServerEntry }) {
  const [path, setPath] = useState("");
  const [windows, setWindows] = useState(false);
  const [status, setStatus] = useState("");
  const command = server.firstParty ? "node" : server.command;
  const args = server.firstParty ? [path.trim()] : [...(server.args ?? [])];
  const valid = Boolean(command && (!server.firstParty || /^(?:[A-Za-z]:[\\/]|\/)/.test(path.trim())));
  const config = valid ? JSON.stringify({
    mcpServers: {
      [server.slug]: { command: windows && command === "npx" ? "cmd" : command,
        args: windows && command === "npx" ? ["/c", "npx", ...args] : args }
    }
  }, null, 2) : "";

  async function copy() {
    try { await navigator.clipboard.writeText(config); setStatus("Copied"); }
    catch { setStatus("Copy unavailable; select the JSON manually."); }
  }

  return (
    <div className="mt-4 border border-line bg-panel p-5">
      <h4 className="font-display text-lg text-paper">Client configuration</h4>
      <p className="mt-2 text-sm text-muted">Review the source and merge the JSON into a compatible client's MCP settings. Nothing executes from this website.</p>
      {server.firstParty ? <label className="mt-4 block text-sm text-paper">
        Absolute path to servers/text-stats/index.mjs
        <input value={path} onChange={e => { setPath(e.target.value); setStatus(""); }} placeholder="C:\\projects\\open_mcp_hub\\servers\\text-stats\\index.mjs" className="mt-2 block w-full rounded-md border border-line bg-ink p-3 text-paper" />
      </label> : command === "npx" ? <label className="mt-4 flex items-center gap-2 text-sm text-paper">
        <input type="checkbox" checked={windows} onChange={e => { setWindows(e.target.checked); setStatus(""); }} /> Windows command wrapper
      </label> : null}
      {!command && <p className="mt-4 text-sm text-muted">This server needs environment-specific access configuration. Follow its upstream documentation.</p>}
      {command && !valid && <p className="mt-3 text-sm text-muted">Enter an absolute local file path to generate configuration.</p>}
      {config && <>
        <pre className="mt-4 overflow-x-auto border border-line bg-ink p-4 text-xs leading-relaxed text-paper">{config}</pre>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <button type="button" onClick={copy} className="rounded-md bg-paper px-4 py-2 text-sm text-ink">Copy JSON</button>
          <a href={"data:application/json;charset=utf-8," + encodeURIComponent(config)} download={server.slug + ".json"} className="text-sm text-sage underline">Download JSON</a>
          <span role="status" className="text-sm text-muted">{status}</span>
        </div>
      </>}
    </div>
  );
}
