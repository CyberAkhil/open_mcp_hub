import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilg.tech"),
  title: "OpenMCP Registry — NexusG Labs",
  description:
    "Open-source Model Context Protocol (MCP) server registry and deployment platform. Connect LLMs to APIs, databases, and local tools.",
  openGraph: {
    title: "OpenMCP Registry — NexusG Labs",
    description:
      "Secure, pre-configured MCP servers to connect LLMs to APIs, databases, and local tools.",
    url: "https://nikhilg.tech",
    siteName: "NexusG Labs",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-ink font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
