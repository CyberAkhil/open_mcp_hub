"use client";

import { useState } from "react";
import { GH, REPO } from "./links";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-paper text-[11px] font-semibold tracking-tight text-ink">
            NG
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-paper">
            NikhilG Labs
          </span>
        </a>

        <div className="hidden items-center gap-8 text-[13px] text-muted md:flex">
          <a href={GH} target="_blank" rel="noreferrer" className="hover:text-paper">
            GitHub
          </a>
          <a href={`${REPO}#readme`} target="_blank" rel="noreferrer" className="hover:text-paper">
            Docs
          </a>
          <a
            href="#deploy"
            className="rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink shadow-[0_2px_8px_rgba(0,0,0,.35)] hover:bg-white"
          >
            Deploy Now
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-lg border border-line text-paper md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-paper">
            <a href={GH} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              GitHub
            </a>
            <a href={`${REPO}#readme`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Docs
            </a>
            <a
              href="#deploy"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink"
            >
              Deploy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
