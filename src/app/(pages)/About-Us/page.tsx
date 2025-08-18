import OurStaffSection from "./ourStaffSection";
import MapSection from "./mapSection";
import Herosection from "./heroSection";
import { Suspense } from "react";
import StaffLoading from "./staffLoading";

export default function AboutUsPage() {
  return (
    <main className="">
      <Herosection />
      <MapSection />

      <section id="staffs" className="py-[4rem] md:py-[5rem] ">
        <h1 className="text-center text-[#fb5607] text-[2rem] font-bold">
          Our Staffs
        </h1>

        <div className="mt-[7rem] grid gap-x-[4rem] gap-y-[4rem] justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-transparant">
          <Suspense fallback={<StaffLoading />}>
            <OurStaffSection />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
