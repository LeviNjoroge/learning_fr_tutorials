import Link from "next/link";

const Signup = () => {
  const error = "";

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3rem)] w-[min(620px,92%)] items-center py-10">
      <div className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_20px_40px_rgba(9,31,67,0.08)] sm:p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--card-soft)]"
        >
          <span aria-hidden="true">{"<"}</span>
          <span>Back to Home</span>
        </Link>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)]">
          Create Your LaBanca Account
        </h1>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
          Signup Form
        </h2>

        <form action="#" method="post" className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="text-sm font-medium text-[color:var(--text-strong)]">
                First name:
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Joe"
                required
                className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="text-sm font-medium text-[color:var(--text-strong)]">
                Last name:
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Doe"
                required
                className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="surname" className="text-sm font-medium text-[color:var(--text-strong)]">
              Surname:
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Adam"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="date_of_birth" className="text-sm font-medium text-[color:var(--text-strong)]">
              Date of birth:
            </label>
            <input
              type="text"
              name="date_of_birth"
              id="date_of_birth"
              placeholder="1999-12-31"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="national_id_no" className="text-sm font-medium text-[color:var(--text-strong)]">
              National ID No:
            </label>
            <input
              type="text"
              name="national_id_no"
              id="national_id_no"
              placeholder="34567890"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="username" className="text-sm font-medium text-[color:var(--text-strong)]">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="joedoe"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="email_address" className="text-sm font-medium text-[color:var(--text-strong)]">
              Email address:
            </label>
            <input
              type="email"
              name="email_address"
              id="email_address"
              placeholder="email@example.com"
              required
              className="mt-2 w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-strong)] outline-none transition focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="text-sm font-medium text-[color:var(--text-strong)]">
              Phone number:
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="+254 712 345 678"
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
