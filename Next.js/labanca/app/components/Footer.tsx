const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[color:var(--line)] bg-[color:var(--surface)]/70">
      <div className="mx-auto grid w-[min(1120px,92%)] gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
            Labanca
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--text-muted)]">
            Reliable digital banking for modern households and businesses. Deposit, transfer,
            and manage your money with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--text-strong)]">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--text-muted)]">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[color:var(--text-strong)]">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--text-muted)]">
            <li>Help center</li>
            <li>Security</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-2 py-5 text-xs text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>2026 Labanca. All rights reserved.</span>
          <span>Bank-grade encryption and fraud monitoring 24/7.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
