export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 NexusG Labs. OpenMCP Registry.</p>
        <a href="mailto:build@nikhilg.tech" className="text-paper hover:text-sage">
          build@nikhilg.tech
        </a>
      </div>
    </footer>
  );
}
