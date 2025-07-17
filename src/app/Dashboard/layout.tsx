import DashboardNavbar from "./dashboardNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardNavbar />
      <main className="bg-white text-black pl-[15.7rem] pt-[5rem] relative">
        {children}
      </main>
    </div>
  );
}
