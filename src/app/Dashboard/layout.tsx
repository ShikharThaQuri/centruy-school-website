import Link from "next/link";
import DashboardNavbar from "./dashboardNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardNavbar />
      <main className=" bg-gray-100 text-black md:ml-[15.7rem] py-[2rem]">
        {children}
      </main>
      <Home />
    </div>
  );
}

function Home() {
  return (
    <div className="fixed bottom-[1.5rem] right-[1rem]">
      <Link
        href={"/"}
        className="font-bold bg-[#ff4d6d] px-[1rem] py-[0.8rem] rounded"
      >
        Home
      </Link>
    </div>
  );
}
