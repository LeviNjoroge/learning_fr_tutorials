import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--brand)] text-sm font-semibold text-white">
            L
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-[color:var(--text-strong)]">
            Labanca
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-lg border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-[color:var(--text-strong)] transition hover:bg-[color:var(--card)]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(8,48,107,0.26)] transition hover:bg-[color:var(--brand-deep)]"
          >
            Open account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
