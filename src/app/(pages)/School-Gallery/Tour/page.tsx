import { getAllEvents } from "@/services/admin/gallery";
import EventSection from "@/components/eventSection";

export default function Tour() {
  return (
    <main className="px-[120px] py-[1rem] bg-[white] text-black">
      <h1 className="font-bold text-[2rem] text-[blue] text-center mt-[1rem] mb-[2rem]">
        SPORTS EVENTS
      </h1>

      <TourEventData />
    </main>
  );
}

async function TourEventData() {
  const result = await getAllEvents();

  return (
    <>
      <EventSection result={result} type={"Tours"} />
    </>
  );
}
