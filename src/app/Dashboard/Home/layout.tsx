import DashHomeNavbar from "./DashHomeNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashHomeNavbar />
      <main className="bg-[#dedbd2] rounded-[1rem] inset-shadow-sm mt-[5rem] md:mx-[2rem] lg:mx-[5rem] xl:mx-[7.5rem]">
        {children}
      </main>
    </div>
  );
}
