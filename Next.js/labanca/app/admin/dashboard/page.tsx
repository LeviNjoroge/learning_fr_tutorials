const adminKpis = [
  { label: "Total users", value: "12,840", delta: "+4.6% this month" },
  { label: "Daily active users", value: "3,218", delta: "+2.1% today" },
  { label: "Volume processed", value: "KES 184.2M", delta: "+KES 12.7M WoW" },
  { label: "Fraud blocked", value: "84", delta: "14 high-risk in review" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminKpis.map((item) => (
          <article key={item.label} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
            <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--text-muted)]">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-[color:var(--text-strong)]">{item.value}</p>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">{item.delta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
            Transaction health analytics
          </h2>
          <div className="mt-5 space-y-4">
            {[
              { label: "Completed", pct: 92 },
              { label: "Pending", pct: 6 },
              { label: "Failed", pct: 2 },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-[color:var(--text-strong)]">{item.label}</span>
                  <span className="text-[color:var(--text-muted)]">{item.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-[color:var(--card-soft)]">
                  <div className="h-full rounded-full bg-[color:var(--brand)]" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">
            Weekly inflow vs outflow
          </h2>
          <div className="mt-5 h-52 rounded-xl border border-[color:var(--line)] bg-[color:var(--card-soft)] p-4">
            <div className="flex h-full items-end gap-2">
              {[35, 44, 52, 46, 60, 68, 72].map((value, index) => (
                <div key={index} className="flex-1 rounded-md bg-[linear-gradient(180deg,var(--brand),var(--brand-deep))]" style={{ height: `${value}%` }} />
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
