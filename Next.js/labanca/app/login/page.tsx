import Link from "next/link";

const Login = () => {
  const error = "";

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3rem)] w-[min(560px,92%)] items-center py-10">
      <div className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 shadow-[0_20px_40px_rgba(9,31,67,0.08)] sm:p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--card-soft)]"
        >
          <span aria-hidden="true">{"<"}</span>
          <span>Back to Home</span>
        </Link>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[color:var(--text-strong)]">
          Welcome Back to LaBanca
        </h1>
        <h2 className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]">
          Signin Form
        </h2>

        <form action="#" method="post" className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium text-[color:var(--text-strong)]">
              Username / Email:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="baraka_otieno"
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
              value="Sign In"
              name="signin"
              id="submit"
              className="cursor-pointer rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-deep))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(8,48,107,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(8,48,107,0.34)]"
            />
            <p className="text-sm text-[color:var(--text-muted)]">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-[color:var(--brand)] hover:underline">
                Register here
              </Link>
              !
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

export default Login;
