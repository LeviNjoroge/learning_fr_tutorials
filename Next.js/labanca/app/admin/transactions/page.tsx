const adminTransactions = [
  { id: "TXN-9821", user: "Baraka Otieno", type: "Transfer", amount: "KES 7,200", status: "Completed", date: "28 Feb 2026" },
  { id: "TXN-9818", user: "Akinyi Njeri", type: "Deposit", amount: "KES 25,000", status: "Completed", date: "28 Feb 2026" },
  { id: "TXN-9810", user: "Mwangi Karanja", type: "Withdraw", amount: "KES 12,500", status: "Pending", date: "27 Feb 2026" },
  { id: "TXN-9806", user: "Faith Wambui", type: "Transfer", amount: "KES 1,840", status: "Failed", date: "27 Feb 2026" },
  { id: "TXN-9802", user: "Kevin Kiptoo", type: "Deposit", amount: "KES 54,200", status: "Completed", date: "26 Feb 2026" },
];

const Transactions = () => {
  return (
    <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[color:var(--text-strong)]">
          All system transactions
        </h1>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-[color:var(--text-muted)]">Completed</span>
          <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-[color:var(--text-muted)]">Pending</span>
          <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-[color:var(--text-muted)]">Failed</span>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)]">
            <tr>
              <th className="pb-3 pr-4 font-medium">ID</th>
              <th className="pb-3 pr-4 font-medium">User</th>
              <th className="pb-3 pr-4 font-medium">Type</th>
              <th className="pb-3 pr-4 font-medium">Amount</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {adminTransactions.map((item) => (
              <tr key={item.id} className="border-t border-[color:var(--line)]">
                <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.id}</td>
                <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.user}</td>
                <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.type}</td>
                <td className="py-3 pr-4 font-medium text-[color:var(--text-strong)]">{item.amount}</td>
                <td className="py-3 pr-4">
                  <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-xs text-[color:var(--text-muted)]">
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
  );
};

export default Transactions;
