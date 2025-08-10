import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-black px-[4rem] md:px-[7.5rem] ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
