import DashHomeNavbar from "./DashHomeNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashHomeNavbar />
      <main className="bg-[#dedbd2] rounded-[1rem] inset-shadow-sm mt-[5rem] mx-[120px]">
        {children}
      </main>
    </div>
  );
}
