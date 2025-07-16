import OurStaffSection from "./ourStaffSection";
import MapSection from "./mapSection";
import Herosection from "./heroSection";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-black px-[120px]">
      <Herosection />
      <MapSection />
      <OurStaffSection />
    </main>
  );
}
