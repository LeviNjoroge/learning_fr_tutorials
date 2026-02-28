import DashboardHeader from "../components/DashboardHeader";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <DashboardHeader
        area="User"
        links={[
          { href: "/user/dashboard", label: "Dashboard" },
          { href: "/user/transactions", label: "Transactions" },
          { href: "/user/profile", label: "Profile" },
        ]}
      />
      <main className="mx-auto w-[min(1200px,94%)] py-8">{children}</main>
    </div>
  );
}
