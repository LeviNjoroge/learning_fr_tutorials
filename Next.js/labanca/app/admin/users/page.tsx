const users = [
  { id: "USR-1001", name: "Baraka Otieno", email: "baraka.otieno@gmail.com", status: "Active", balance: "KES 248,560" },
  { id: "USR-1002", name: "Akinyi Njeri", email: "akinyi.njeri@gmail.com", status: "Active", balance: "KES 112,700" },
  { id: "USR-1003", name: "Faith Wambui", email: "faith.wambui@yahoo.com", status: "Review", balance: "KES 34,180" },
  { id: "USR-1004", name: "Kevin Kiptoo", email: "kevin.kiptoo@gmail.com", status: "Active", balance: "KES 401,920" },
  { id: "USR-1005", name: "Mwangi Karanja", email: "mwangi.karanja@gmail.com", status: "Suspended", balance: "KES 5,140" },
];

const UsersPage = () => {
  return (
    <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[color:var(--text-strong)]">
          System users
        </h1>
        <span className="rounded-full bg-[color:var(--card-soft)] px-3 py-1 text-xs text-[color:var(--text-muted)]">
          Total users: {users.length}
        </span>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)]">
            <tr>
              <th className="pb-3 pr-4 font-medium">User ID</th>
              <th className="pb-3 pr-4 font-medium">Name</th>
              <th className="pb-3 pr-4 font-medium">Email</th>
              <th className="pb-3 pr-4 font-medium">Balance</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-[color:var(--line)]">
                <td className="py-3 pr-4 text-[color:var(--text-strong)]">{user.id}</td>
                <td className="py-3 pr-4 text-[color:var(--text-strong)]">{user.name}</td>
                <td className="py-3 pr-4 text-[color:var(--text-muted)]">{user.email}</td>
                <td className="py-3 pr-4 font-medium text-[color:var(--text-strong)]">{user.balance}</td>
                <td className="py-3">
                  <span className="rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-xs text-[color:var(--text-muted)]">
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersPage;
