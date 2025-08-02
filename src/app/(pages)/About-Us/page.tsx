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

      <section id="staffs" className=" py-[2rem] md:py-[5rem] ">
        <h1 className="text-center text-[#fb5607] text-[2rem] font-bold">
          Our Staffs
        </h1>

        <div className="mt-[8rem] grid gap-y-[7rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-transparant">
          <Suspense fallback={<StaffLoading />}>
            <OurStaffSection />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
