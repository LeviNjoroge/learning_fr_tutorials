import Link from "next/link";
import Footer from "./components/Footer";
import GetStartedButton from "./components/GetStartedButton";
import Header from "./components/Header";

const highlights = [
  { label: "Active customers", value: "2.1M+" },
  { label: "Monthly transfers", value: "$4.8B" },
  { label: "Uptime", value: "99.99%" },
];

const features = [
  {
    title: "Smart transfers",
    description:
      "Send local and international payments in seconds with live fee previews and instant confirmation.",
  },
  {
    title: "Savings vaults",
    description:
      "Create goal-based vaults and automate daily, weekly, or monthly savings in one tap.",
  },
  {
    title: "Card controls",
    description:
      "Freeze cards, set spend limits, and control online payments directly from your dashboard.",
  },
];

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="mx-auto grid w-[min(1120px,92%)] gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <p className="inline-block rounded-full border border-[color:var(--line)] bg-[color:var(--card)]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-deep)]">
              Trusted Digital Banking
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold leading-tight text-[color:var(--text-strong)] sm:mt-6 sm:text-4xl md:text-6xl">
              Banking designed for speed, security, and everyday confidence.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--text-muted)] md:text-lg">
              Labanca helps you manage money across accounts, cards, and transfers with a clean,
              reliable, and modern banking experience.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <GetStartedButton />
              <Link
                href="/signup"
                className="inline-flex w-full items-center justify-center rounded-xl border border-[color:var(--line)] bg-[color:var(--card)] px-6 py-3 text-sm font-semibold text-[color:var(--text-strong)] transition hover:bg-[color:var(--surface)] sm:w-auto"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-5 shadow-[0_24px_60px_rgba(9,31,67,0.12)] sm:p-6 md:p-7">
            <div className="rounded-2xl bg-[linear-gradient(145deg,#0e5ecc,#08306b)] p-5 text-white sm:p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-blue-100">Portfolio balance</p>
              <p className="mt-2 text-3xl font-semibold sm:text-4xl">$84,920.35</p>
              <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-white/12 p-3">
                  <p className="text-blue-100">Monthly income</p>
                  <p className="mt-1 font-semibold">$12,400</p>
                </div>
                <div className="rounded-xl bg-white/12 p-3">
                  <p className="text-blue-100">Savings rate</p>
                  <p className="mt-1 font-semibold">+18.6%</p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-3">
                <p className="text-xs text-[color:var(--text-muted)]">Transfer in progress</p>
                <p className="mt-1 text-sm font-semibold text-[color:var(--text-strong)]">$3,000 to Lexi Ventures</p>
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-3">
                <p className="text-xs text-[color:var(--text-muted)]">Scheduled vault contribution</p>
                <p className="mt-1 text-sm font-semibold text-[color:var(--text-strong)]">$250 every Friday</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[min(1120px,92%)] py-2">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_8px_24px_rgba(9,31,67,0.07)]"
              >
                <p className="text-3xl font-semibold text-[color:var(--brand-deep)]">{item.value}</p>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto w-[min(1120px,92%)] py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">Core features</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)] md:text-4xl">
              Built to match how people bank today.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_10px_28px_rgba(9,31,67,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(9,31,67,0.12)]"
              >
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="mx-auto w-[min(1120px,92%)] py-4 sm:py-8">
          <div className="security-panel rounded-3xl border border-[color:var(--line)] p-6 sm:p-8 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--security-muted)]">Security first</p>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold leading-tight text-[color:var(--security-text)] sm:text-3xl md:text-4xl">
                  Enterprise-grade protection for every customer transaction.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[color:var(--security-muted)] sm:text-base">
                  Security controls run in the background at every step, from sign-in to transfer completion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <article className="rounded-xl border border-[color:var(--security-card-border)] bg-[color:var(--security-card-bg)] p-4">
                  <p className="text-2xl font-semibold text-[color:var(--security-text)]">99.99%</p>
                  <p className="mt-1 text-xs text-[color:var(--security-muted)] sm:text-sm">Platform availability</p>
                </article>
                <article className="rounded-xl border border-[color:var(--security-card-border)] bg-[color:var(--security-card-bg)] p-4">
                  <p className="text-2xl font-semibold text-[color:var(--security-text)]">&lt; 2s</p>
                  <p className="mt-1 text-xs text-[color:var(--security-muted)] sm:text-sm">Fraud alert latency</p>
                </article>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[color:var(--security-card-border)] bg-[color:var(--security-card-bg)] p-4 sm:p-5">
                <p className="text-sm font-semibold text-[color:var(--security-text)]">256-bit encryption</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--security-muted)]">All payment flows and stored data are encrypted end-to-end.</p>
              </div>
              <div className="rounded-xl border border-[color:var(--security-card-border)] bg-[color:var(--security-card-bg)] p-4 sm:p-5">
                <p className="text-sm font-semibold text-[color:var(--security-text)]">24/7 fraud monitoring</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--security-muted)]">AI-backed alerts flag unusual activity in real time.</p>
              </div>
              <div className="rounded-xl border border-[color:var(--security-card-border)] bg-[color:var(--security-card-bg)] p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
                <p className="text-sm font-semibold text-[color:var(--security-text)]">Biometric sign-in</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--security-muted)]">Support for fingerprint and face unlock on supported devices.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto w-[min(1120px,92%)] py-16">
          <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">Customer feedback</p>
            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)] md:text-4xl">
              Teams and families trust Labanca daily.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <blockquote className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-5 text-sm leading-6 text-[color:var(--text-muted)]">
                &ldquo;Transfers arrive fast, and the app is clear enough for my whole team to use without training.&rdquo;
              </blockquote>
              <blockquote className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-5 text-sm leading-6 text-[color:var(--text-muted)]">
                &ldquo;Savings vaults helped us automate emergency funds without thinking about it every week.&rdquo;
              </blockquote>
              <blockquote className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-5 text-sm leading-6 text-[color:var(--text-muted)]">
                &ldquo;Support response is quick and security alerts are actually useful, not noisy.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
