const quickStats = [
  { label: "Available balance", value: "KES 248,560.20", note: "+KES 12,340 this month" },
  { label: "Monthly spend", value: "KES 74,210.00", note: "23 transactions" },
  { label: "Savings vault", value: "KES 93,000.00", note: "Goal: KES 120,000" },
  { label: "Credit score", value: "781", note: "Excellent standing" },
];

const recentTransactions = [
  { id: "TXN-9821", type: "Transfer", amount: "-KES 7,200", status: "Completed", date: "28 Feb 2026" },
  { id: "TXN-9813", type: "Deposit", amount: "+KES 25,000", status: "Completed", date: "27 Feb 2026" },
  { id: "TXN-9809", type: "Utility Bill", amount: "-KES 3,150", status: "Completed", date: "27 Feb 2026" },
  { id: "TXN-9801", type: "Card Payment", amount: "-KES 11,800", status: "Pending", date: "26 Feb 2026" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5 shadow-[0_12px_24px_rgba(9,31,67,0.08)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-[color:var(--text-muted)]">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-[color:var(--text-strong)]">{item.value}</p>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
              Balance trend
            </h2>
            <span className="text-xs text-[color:var(--text-muted)]">Last 7 days</span>
          </div>

          <div className="mt-5 h-52 rounded-xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-4">
            <div className="flex h-full items-end gap-2">
              {[42, 50, 45, 58, 61, 64, 70].map((height, index) => (
                <div key={index} className="flex-1 rounded-md bg-[linear-gradient(180deg,var(--brand),var(--brand-deep))]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
            Spending split
          </h2>

          <div className="mt-4 space-y-3">
            {[
              { category: "Essentials", pct: 46 },
              { category: "Savings", pct: 28 },
              { category: "Lifestyle", pct: 17 },
              { category: "Other", pct: 9 },
            ].map((entry) => (
              <div key={entry.category}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-[color:var(--text-strong)]">{entry.category}</span>
                  <span className="text-[color:var(--text-muted)]">{entry.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-[color:var(--card-soft)]">
                  <div className="h-full rounded-full bg-[color:var(--brand)]" style={{ width: `${entry.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
          Recent transactions
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-[color:var(--text-muted)]">
              <tr>
                <th className="pb-3 pr-4 font-medium">ID</th>
                <th className="pb-3 pr-4 font-medium">Type</th>
                <th className="pb-3 pr-4 font-medium">Amount</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((item) => (
                <tr key={item.id} className="border-t border-[color:var(--line)]">
                  <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.id}</td>
                  <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.type}</td>
                  <td className="py-3 pr-4 font-medium text-[color:var(--text-strong)]">{item.amount}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--text-muted)]">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 text-[color:var(--text-muted)]">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
