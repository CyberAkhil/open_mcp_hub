"use client";

import { useState } from "react";
import { servers, serverSource, type ServerCategory } from "./catalog";
import ServerConfig from "./ServerConfig";

const categories: readonly ("All" | ServerCategory)[] = ["All", "Developer tools", "Utilities", "Knowledge"];

export default function Features() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const search = query.trim().toLowerCase();
  const matches = servers.filter((server) =>
    (category === "All" || server.category === category) &&
    [server.name, server.description, server.category, server.runtime].some((value) => value.toLowerCase().includes(search))
  );

  return (
    <section id="registry" aria-labelledby="registry-title" className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-widest text-sage">01 / Directory</p>
        <h2 id="registry-title" className="mt-3 font-display text-4xl font-semibold text-paper">Reference servers</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Browse our local text utility and upstream learning resources. External examples are not independently audited or hosted by NexusG Labs.
        </p>
        <div className="my-8 flex flex-col gap-4 sm:flex-row sm:items-end">
          <label className="flex flex-1 flex-col gap-2 text-sm text-paper">
            Search servers
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, runtime, or capability"
              className="rounded-md border border-line bg-panel px-4 py-3 text-paper placeholder:text-muted" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-paper">
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value as typeof category)}
              className="rounded-md border border-line bg-panel px-4 py-3 text-paper">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <p aria-live="polite" className="mb-4 font-mono text-xs text-muted">{matches.length} of {servers.length} servers</p>
        <div className="divide-y divide-line border-y border-line">
          {matches.map((server) => (
            <article key={server.slug} className="py-6">
              <div className="grid gap-3 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-paper">{server.name}</h3>
                <p className="mt-1 text-xs text-sage">{server.category} · {server.runtime}{server.firstParty ? " · NexusG Labs" : ""}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{server.description}</p>
              <a href={serverSource(server)} className="text-sm font-medium text-paper underline decoration-sage underline-offset-4">Documentation<span className="sr-only"> for {server.name}</span></a>
              </div>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm text-sage">Setup options</summary>
                <ServerConfig server={server} />
              </details>
            </article>
          ))}
          {matches.length === 0 && <p className="py-10 text-sm text-muted">No matches. Try a different search or category.</p>}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-sm text-muted">Review source code, permissions, and credentials before connecting any server to an AI client.</p>
          <a href="https://registry.modelcontextprotocol.io/" className="text-sm text-sage underline underline-offset-4">Official MCP Registry</a>
        </div>
      </div>
    </section>
  );
}
