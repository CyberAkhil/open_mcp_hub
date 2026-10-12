"use client";

import { useState } from "react";
import { GH, REPO } from "./links";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-2">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full border border-paper/15 bg-ink/65 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(232,224,211,0.12)] backdrop-blur-2xl backdrop-saturate-150">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-paper text-[11px] font-semibold tracking-tight text-ink">
            NG
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-paper">
            NexusG Labs
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
          className="grid h-11 w-11 place-items-center rounded-[14px] border border-paper/20 bg-paper/10 text-paper shadow-[inset_0_1px_0_rgba(232,224,211,0.1)] transition-colors hover:bg-paper/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-[calc(100%-1rem)] max-w-6xl rounded-2xl border border-paper/15 bg-ink/75 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-2xl backdrop-saturate-150 md:hidden">
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
