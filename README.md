# OpenMCP Registry

A developer-focused directory of [Model Context Protocol](https://modelcontextprotocol.io/) reference servers by NexusG Labs.

**Status:** Early-stage MVP. Includes a searchable directory, client configuration generator, and a local first-party Text Statistics server. Hosted deployment and published packages are not yet available.

## What you can do

- Browse a curated set of upstream MCP reference implementations.
- Search by server name, capability, or runtime and filter by category.
- Follow official source and setup documentation.
- Generate, copy, or download a client configuration for supported entries.
- Run the dependency-free local [Text Statistics server](servers/text-stats/README.md).
- Contribute improvements to the directory or propose a new integration.

The directory links to educational reference projects maintained upstream. It does not run, host, or certify these servers. Review their code, access permissions, and deployment requirements before use.

## Run locally

Prerequisites: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run typecheck
npm test
```

Next.js generates a static export in `out/`. Serve that directory with a static hosting provider; no application server is required.

## Repository structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router and global styles |
| `components/catalog.ts` | Typed reference server directory |
| `components/Features.tsx` | Search and category filtering |
| `components/ServerConfig.tsx` | Client configuration generator |
| `servers/text-stats/` | Local educational MCP server |
| `tests/` | Protocol smoke test |
| `components/` | Site layout and navigation |

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3.

## Roadmap

- [x] Responsive website and searchable reference directory
- [ ] Documented catalog schema and contribution validation
- [x] First-party text utility with protocol smoke test
- [ ] Versioned packages and deployment tooling

## Contributing

1. Fork this repository and create a branch.
2. For a catalog change, update `components/catalog.ts` using an authoritative upstream source.
3. Use accurate descriptions and avoid claiming security certification or unpublished functionality.
4. Run `npm ci` and `npm run build`, then open a pull request.

## Resources

- [MCP documentation](https://modelcontextprotocol.io/)
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)
- [Reference server source](https://github.com/modelcontextprotocol/servers)

Contact: [build@nikhilg.tech](mailto:build@nikhilg.tech)

## License

A repository license has not yet been published. Third-party reference servers retain their respective licenses.
