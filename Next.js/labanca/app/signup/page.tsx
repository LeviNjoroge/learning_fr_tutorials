import Link from "next/link";

const Signup = () => {
  const error = "";

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3rem)] w-[min(620px,92%)] items-center py-10">
      <div className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_20px_40px_rgba(9,31,67,0.08)] sm:p-8">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)]">
          Create Your LaBanca Account
        </h1>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
          Signup Form
        </h2>

        <form action="#" method="post" className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-[color:var(--text-strong)]">
                First name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Joe"
                required
                className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-[color:var(--text-strong)]">
                Last name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                required
                className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-[color:var(--text-strong)]">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="joe_doe@email.com"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-[color:var(--text-strong)]">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-[color:var(--text-strong)]">
              Confirm password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <input
              type="submit"
              value="Create Account"
              name="signup"
              id="submit"
              className="cursor-pointer rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(8,48,107,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(8,48,107,0.34)]"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[color:var(--brand)] hover:underline">
                Log in
              </Link>
              .
            </p>
          </div>

          <p id="error" className="min-h-5 text-sm text-red-600">
            {error}
          </p>
        </form>
      </div>
    </main>
  );
};

export default Signup;
