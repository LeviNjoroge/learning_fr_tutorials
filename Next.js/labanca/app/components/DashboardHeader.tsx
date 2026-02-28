import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type DashboardLink = {
  href: string;
  label: string;
};

type DashboardHeaderProps = {
  area: string;
  links: DashboardLink[];
};

const DashboardHeader = ({ area, links }: DashboardHeaderProps) => {
  return (
    <header className="border-b border-[color:var(--line)] bg-[color:var(--surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1200px,94%)] flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--brand)] text-sm font-semibold text-white">
              L
            </span>
            <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[color:var(--text-strong)]">
              Labanca
            </span>
          </Link>
          <span className="rounded-md border border-[color:var(--line)] bg-[color:var(--card)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
            {area}
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-2 text-sm font-medium text-[color:var(--text-strong)] transition hover:bg-[color:var(--surface)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-lg bg-[color:var(--brand)] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-deep)]"
          >
            Switch account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
