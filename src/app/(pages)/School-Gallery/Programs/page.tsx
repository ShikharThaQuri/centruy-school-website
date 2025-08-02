import { getAllEvents } from "@/services/admin/gallery";
import EventSection from "@/components/eventSection";
import { Suspense } from "react";
import EventLoading from "../eventLoading";

export default function Programs() {
  return (
    <main className="py-[1rem] bg-[white] text-black">
      <h1 className="font-bold text-[2rem] text-[blue] text-center mt-[1rem] mb-[2rem]">
        SPORTS EVENTS
      </h1>

      <Suspense fallback={<EventLoading />}>
        <ProgramsEventData />
      </Suspense>
    </main>
  );
}

async function ProgramsEventData() {
  const result = await getAllEvents();

  if (result?.success === false) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  return (
    <>
      <EventSection result={result} type={"Programs"} />
    </>
  );
}
