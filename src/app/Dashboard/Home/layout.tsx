import DashHomeNavbar from "./DashHomeNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashHomeNavbar />
      <main>{children}</main>
    </div>
  );
}
