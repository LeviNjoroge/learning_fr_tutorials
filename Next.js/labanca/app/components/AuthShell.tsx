import Link from "next/link";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const AuthShell = ({ title, subtitle, children }: AuthShellProps) => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto grid w-[min(1120px,92%)] items-start gap-8 py-8 md:grid-cols-[1fr_1fr] md:py-12">
        <section className="order-2 rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_20px_40px_rgba(9,31,67,0.08)] md:order-1 md:p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--card-soft)]"
          >
            <span aria-hidden="true">{"<"}</span>
            <span>Back to home</span>
          </Link>

          <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)]">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">{subtitle}</p>

          <div className="mt-7">{children}</div>
        </section>

        <aside className="order-1 rounded-3xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-6 md:order-2 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--accent)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            Secure onboarding
          </div>

          <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[color:var(--text-strong)]">
            Everything you need for modern banking.
          </h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">
            Open your account in minutes with trusted verification and real-time fraud protection.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
              <p className="text-lg font-semibold text-[color:var(--brand-deep)]">2.1M+</p>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">Active customers</p>
            </article>
            <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
              <p className="text-lg font-semibold text-[color:var(--brand-deep)]">256-bit</p>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">Encryption standard</p>
            </article>
            <article className="rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
              <p className="text-lg font-semibold text-[color:var(--brand-deep)]">&lt; 2 min</p>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">Average setup time</p>
            </article>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default AuthShell;
