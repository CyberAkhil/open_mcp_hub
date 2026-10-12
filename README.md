# OpenMCP Registry

Open-source [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server catalog and deployment surface from **NexusG Labs**.

MCP is a JSON-RPC contract (stdio or HTTP) that lets an LLM host such as Claude call tools, read resources, and use prompts against an external process. This repository is the public index of those processes plus the static site at [nikhilg.tech](https://nikhilg.tech).

## What ships here

| Path | Role |
| --- | --- |
| `app/`, `components/` | Landing page (Next.js App Router, static export) |
| `catalog/` *(planned)* | Canonical server index: slug, transport, runtime, env schema |
| `servers/` *(planned)* | Reference MCP implementations (`npx` entrypoints + Dockerfiles) |
| `cli/` *(planned)* | `npx @nikhilglabs/<server> --deploy` wrapper |

The landing page is production-ready. Catalog, servers, and CLI land in follow-up PRs; the public contract below is what those PRs must satisfy.

## Protocol surface

A listed server must speak MCP:

1. Host launches the process (`npx`, Docker, or a binary).
2. Transport is **stdio** (default) or **streamable HTTP**.
3. Server advertises `tools/list` (and optionally `resources/list`, `prompts/list`).
4. Host issues `tools/call`. The server talks to the real system (Postgres, filesystem, SaaS API). Credentials never leave the operator’s machine; the registry is not a data proxy.

```
LLM host (Claude, Cursor, …)
        │  MCP JSON-RPC
        v
 local MCP server  -->  Postgres / HTTP API / local tool
```

Example install (preview; package not on npm until the first server PR lands):

```bash
npx @nexusglabs/mcp-postgres --deploy
```

That command is expected to:

- resolve the catalog entry `mcp-postgres`
- pull or run the published image / npm package
- print a ready-to-paste host config (`mcpServers` JSON for Claude Desktop / Cursor)

## Catalog schema (target)

Each entry is a JSON document. Fields are stable; extra keys are allowed but ignored by the CLI.

```json
{
  "slug": "mcp-postgres",
  "title": "PostgreSQL",
  "runtime": "npx",
  "package": "@nexusglabs/mcp-postgres",
  "image": "ghcr.io/cyberakhil/mcp-postgres:latest",
  "transport": "stdio",
  "env": [
    { "name": "DATABASE_URL", "required": true, "secret": true }
  ],
  "tools": ["query", "schema", "ping"],
  "source": "https://github.com/CyberAkhil/open_mcp_hub/tree/main/servers/mcp-postgres"
}
```

Validation rules for a PR:

- `slug` is `[a-z0-9-]+` and unique
- at least one of `package` or `image`
- `transport` is `stdio` or `http`
- every required `env` name is documented in the server README
- a smoke test exists that starts the server and round-trips `tools/list`

## Landing page

Next.js 15 + React 19 + Tailwind CSS 3. `output: "export"` produces a static `out/` tree for GitHub Pages, Cloudflare Pages, or any host on `nikhilg.tech`.

```bash
npm install
npm run dev
```

```bash
npm run build
```

`out/` is the deployable artifact.

Visual language follows the NikhilG Labs site: near-black `#08080a`, warm paper `#e8e0d3`, sage `#356b52`, Outfit / Inter / IBM Plex Mono.

## Contributing

1. Open an issue describing the integration (API or database, auth model, expected tools).
2. Fork, branch from `main`.
3. For a **new server**: add `servers/<slug>/` (entrypoint, Dockerfile, README) and `catalog/<slug>.json`. Include a script that runs `tools/list` against a throwaway instance.
4. For **site-only** changes: keep copy in `components/` aligned with product behavior. Do not advertise npm packages that are not published.
5. `npm run build` must succeed.
6. Open a PR against `https://github.com/CyberAkhil/open_mcp_hub`.

Code review looks at: MCP compliance, secret handling (no tokens in catalog files), Docker user (non-root), and whether `env` in the catalog matches the process.

Questions: [build@nikhilg.tech](mailto:build@nikhilg.tech)

## License

Source in this repository is intended to ship under MIT once the first server module lands. Until then, treat contributions as inbound under MIT.
