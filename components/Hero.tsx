"use client";

import { useState } from "react";
import { GH, INSTALL } from "./links";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[0.22em] text-sage uppercase">
            NexusG Labs · OpenMCP Registry · nikhilg.tech
          </p>
          <h1 className="font-display text-[42px] leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            <span className="gradient-text">The Open-Source Hub for MCP Servers</span>
            <span className="text-sage">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            Secure, pre-configured Model Context Protocol (MCP) servers to connect
            LLMs to your favorite APIs, databases, and local tools.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={GH}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-5 py-2.5 text-[13px] font-medium text-ink shadow-[0_2px_8px_rgba(0,0,0,.35)] hover:bg-white"
            >
              View on GitHub
            </a>
            <a
              href="#registry"
              className="rounded-full border border-paper/25 px-5 py-2.5 text-[13px] font-medium text-paper hover:border-paper/50"
            >
              Explore Registry
            </a>
          </div>
        </div>

        <div id="deploy" className="shadow-glow rounded-xl border border-line bg-panel">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3d3a36]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3d3a36]" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage-deep" />
            </div>
            <span className="font-mono text-[11px] text-muted">bash · mcp-postgres</span>
            <button
              type="button"
              onClick={copy}
              className="font-mono text-[11px] text-sage hover:text-paper"
            >
              {copied ? "copied" : "copy"}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-paper/90">
            <code>
              <span className="text-muted">$</span> {INSTALL}
              {"\n"}
              <span className="text-sage">ok</span>
              <span className="text-muted">  pulled image nikhilglabs/mcp-postgres:latest</span>
              {"\n"}
              <span className="text-sage">ok</span>
              <span className="text-muted">  bound stdio transport · tools: query, schema, ping</span>
              {"\n"}
              <span className="text-sage">ok</span>
              <span className="text-muted">  registered with OpenMCP · endpoint ready</span>
              {"\n"}
              <span className="text-muted">$</span> <span className="animate-pulse">_</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
