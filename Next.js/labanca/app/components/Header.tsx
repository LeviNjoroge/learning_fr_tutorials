"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between gap-3 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--brand)] text-sm font-semibold text-white">
            L
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-[color:var(--text-strong)]">
            Labanca
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-lg border border-[color:var(--line)] px-4 py-2 text-center text-sm font-medium text-[color:var(--text-strong)] transition hover:bg-[color:var(--card)]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-[color:var(--brand)] px-4 py-2 text-center text-sm font-semibold text-white shadow-[0_12px_24px_rgba(8,48,107,0.26)] transition hover:bg-[color:var(--brand-deep)]"
          >
            Open account
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--text-strong)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`mx-auto w-[min(1120px,92%)] overflow-hidden transition-all duration-200 md:hidden ${
          isMenuOpen ? "max-h-64 pb-3" : "max-h-0"
        }`}
      >
        <div className="grid gap-2 border-t border-[color:var(--line)] pt-3">
          <ThemeToggle />
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg border border-[color:var(--line)] px-4 py-2 text-center text-sm font-medium text-[color:var(--text-strong)] transition hover:bg-[color:var(--card)]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg bg-[color:var(--brand)] px-4 py-2 text-center text-sm font-semibold text-white shadow-[0_12px_24px_rgba(8,48,107,0.26)] transition hover:bg-[color:var(--brand-deep)]"
          >
            Open account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
