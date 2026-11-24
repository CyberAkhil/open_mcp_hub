# Text Statistics

An educational, dependency-free MCP server for Node.js 22+, using the
2025-11-25 handshake protocol over stdio. It offers one tool, `text_stats`.
It does not access files, networks, or credentials.

Configure a compatible client with command `node` and the absolute path to
`servers/text-stats/index.mjs` as its sole argument. The client launches the server.

Run `npm test` from the repository root to exercise initialization, tool discovery,
tool invocation, and invalid inputs. This is a limited reference implementation,
not a certified or production-grade MCP SDK.
