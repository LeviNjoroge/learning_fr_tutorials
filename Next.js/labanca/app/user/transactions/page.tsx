const transactions = [
  { id: "TXN-9821", direction: "Outgoing", channel: "Transfer", amount: "KES 7,200", user: "Akinyi Njeri", when: "28 Feb 2026, 09:12" },
  { id: "TXN-9818", direction: "Incoming", channel: "Deposit", amount: "KES 25,000", user: "Baraka Otieno", when: "28 Feb 2026, 08:46" },
  { id: "TXN-9812", direction: "Outgoing", channel: "Withdraw", amount: "KES 3,500", user: "Baraka Otieno", when: "27 Feb 2026, 18:30" },
];

const actionCard =
  "rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5 shadow-[0_12px_24px_rgba(9,31,67,0.08)]";
const inputClass =
  "mt-2 w-full rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text-strong)] outline-none focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20";

const Transactions = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-3">
        <article className={actionCard}>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[color:var(--text-strong)]">Deposit funds</h2>
          <form className="mt-4 space-y-3">
            <label className="block text-sm text-[color:var(--text-muted)]">
              Amount
              <input name="deposit_amount" placeholder="KES 15,000" className={inputClass} />
            </label>
            <label className="block text-sm text-[color:var(--text-muted)]">
              Source
              <input name="deposit_source" placeholder="M-Pesa / Bank" className={inputClass} />
            </label>
            <button type="button" className="mt-1 w-full rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white">
              Deposit
            </button>
          </form>
        </article>

        <article className={actionCard}>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[color:var(--text-strong)]">Withdraw funds</h2>
          <form className="mt-4 space-y-3">
            <label className="block text-sm text-[color:var(--text-muted)]">
              Amount
              <input name="withdraw_amount" placeholder="KES 4,500" className={inputClass} />
            </label>
            <label className="block text-sm text-[color:var(--text-muted)]">
              Destination
              <input name="withdraw_destination" placeholder="Bank / Mobile wallet" className={inputClass} />
            </label>
            <button type="button" className="mt-1 w-full rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white">
              Withdraw
            </button>
          </form>
        </article>

        <article className={actionCard}>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[color:var(--text-strong)]">Transfer funds</h2>
          <form className="mt-4 space-y-3">
            <label className="block text-sm text-[color:var(--text-muted)]">
              Recipient
              <input name="transfer_recipient" placeholder="ann_wambui" className={inputClass} />
            </label>
            <label className="block text-sm text-[color:var(--text-muted)]">
              Amount
              <input name="transfer_amount" placeholder="KES 2,800" className={inputClass} />
            </label>
            <button type="button" className="mt-1 w-full rounded-lg bg-[color:var(--brand)] px-4 py-2 text-sm font-semibold text-white">
              Transfer
            </button>
          </form>
        </article>
      </section>

      <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[color:var(--text-strong)]">Recent activity</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-[color:var(--text-muted)]">
              <tr>
                <th className="pb-3 pr-4 font-medium">Transaction ID</th>
                <th className="pb-3 pr-4 font-medium">Direction</th>
                <th className="pb-3 pr-4 font-medium">Channel</th>
                <th className="pb-3 pr-4 font-medium">Amount</th>
                <th className="pb-3 pr-4 font-medium">Owner</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => (
                <tr key={item.id} className="border-t border-[color:var(--line)]">
                  <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.id}</td>
                  <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.direction}</td>
                  <td className="py-3 pr-4 text-[color:var(--text-strong)]">{item.channel}</td>
                  <td className="py-3 pr-4 font-medium text-[color:var(--text-strong)]">{item.amount}</td>
                  <td className="py-3 pr-4 text-[color:var(--text-muted)]">{item.user}</td>
                  <td className="py-3 text-[color:var(--text-muted)]">{item.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Transactions;
