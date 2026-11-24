import { REPO } from "./links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
        <a href="#top" className="flex items-center gap-3 font-display font-semibold text-paper">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-md bg-paper text-xs text-ink">NG</span>
          OpenMCP
        </a>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted sm:gap-6">
          <a href="#registry" className="hover:text-paper">Directory</a>
          <a href={REPO + "#readme"} className="hover:text-paper">Docs</a>
          <a href={REPO} className="hover:text-paper">GitHub</a>
        </div>
      </nav>
    </header>
  );
}
