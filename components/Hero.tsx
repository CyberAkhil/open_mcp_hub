import { REPO } from "./links";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-sage">NexusG Labs / Developer resources</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-7xl">
            Find the right MCP server.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Explore reference implementations of the Model Context Protocol, discover what they do, and get started with their official documentation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#registry" className="rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink hover:bg-white">Browse servers</a>
            <a href={REPO} className="rounded-md border border-line px-5 py-3 text-sm font-medium text-paper hover:border-sage">View source</a>
          </div>
        </div>
        <aside className="border-t border-line pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-sage">Project status</p>
          <h2 className="mt-3 font-display text-2xl text-paper">Early access</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Browse reference servers, generate client configurations, or try our local Text Statistics server. Hosted deployment is planned.
          </p>
          <a href={REPO + "#readme"} className="mt-5 inline-block text-sm text-sage underline underline-offset-4">Read the roadmap</a>
        </aside>
      </div>
    </section>
  );
}
