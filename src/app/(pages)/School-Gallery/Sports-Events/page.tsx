import EventSection from "@/components/eventSection";
import { getAllEvents } from "@/services/admin/gallery";
import { Suspense } from "react";

export default function SportsEvent() {
  return (
    <main className=" py-[1rem] bg-[white] text-black">
      <h1 className="font-bold text-[2rem] text-[blue] text-center mt-[1rem] mb-[2rem]">
        SPORTS EVENTS
      </h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <SportEventData />
      </Suspense>
    </main>
  );
}

async function SportEventData() {
  const result = await getAllEvents();

  return (
    <>
      <EventSection result={result} type={"Sports"} />
    </>
  );
}
