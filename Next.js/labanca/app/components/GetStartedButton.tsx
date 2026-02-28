import Link from "next/link";

const GetStartedButton = () => {
  return (
    <Link
      href="/login"
      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(8,48,107,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(8,48,107,0.34)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] sm:w-auto"
    >
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.16),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">Get Started</span>
      <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
};

export default GetStartedButton;
