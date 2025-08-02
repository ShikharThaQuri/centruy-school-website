import { getAllEvents } from "@/services/admin/gallery";
import EventSection from "@/components/eventSection";

export default function AcademicActivities() {
  return (
    <main className="px-[120px] py-[1rem] bg-[white] text-black">
      <h1 className="font-bold text-[2rem] text-[blue] text-center mt-[1rem] mb-[2rem]">
        SPORTS EVENTS
      </h1>

      <AcademicActivitiesEventData />
    </main>
  );
}

async function AcademicActivitiesEventData() {
  const result = await getAllEvents();

  return (
    <>
      <EventSection result={result} type={"Academic Activities"} />
    </>
  );
}
