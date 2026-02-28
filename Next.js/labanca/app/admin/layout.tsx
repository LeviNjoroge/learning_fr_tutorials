import DashboardHeader from "../components/DashboardHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <DashboardHeader
        area="Admin"
        links={[
          { href: "/admin/dashboard", label: "Dashboard" },
          { href: "/admin/transactions", label: "Transactions" },
        ]}
      />
      <main className="mx-auto w-[min(1200px,94%)] py-8">{children}</main>
    </div>
  );
}
