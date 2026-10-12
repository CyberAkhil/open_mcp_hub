const features = [
  {
    n: "01",
    title: "1-Click Deployments",
    body: "Pre-configured Docker and npx setups. Ship an MCP server to Claude or any compatible client without writing glue code.",
    tags: ["Docker", "npx", "stdio"],
  },
  {
    n: "02",
    title: "Secure by Default",
    body: "Enterprise-grade local connections. Credentials stay on your machine; the registry never proxies your data plane.",
    tags: ["localhost", "secrets", "TLS"],
  },
  {
    n: "03",
    title: "Community Driven",
    body: "100% open-source integrations. Add a server, a catalog entry, and a smoke test. The registry lists what the community maintains.",
    tags: ["MIT", "PRs", "catalog"],
  },
];

export default function Features() {
  return (
    <section id="registry" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[12px] tracking-[0.2em] text-sage">01</span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper">
            Features
          </h2>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.n}
              className="rounded-xl border border-line bg-panel p-6"
            >
              <p className="font-mono text-[11px] tracking-widest text-sage">{f.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">{f.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-paper/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
