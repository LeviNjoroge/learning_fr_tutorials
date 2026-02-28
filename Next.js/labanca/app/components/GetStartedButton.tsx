import Link from "next/link";

const GetStartedButton = () => {
  return (
    <Link
      href="/login"
      className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(8,48,107,0.24)] transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-deep)]"
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton;
