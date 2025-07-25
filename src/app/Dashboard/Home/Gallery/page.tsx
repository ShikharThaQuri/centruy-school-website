import { eventType } from "@/models/Gallery";
import { getAllEvents } from "@/services/admin/gallery";
import { Suspense } from "react";
import { EventIcons } from "./eventIcons";

export default function GalleryPage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Gallery</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <GalleryBox />
      </Suspense>
    </main>
  );
}

async function GalleryBox() {
  const result = await getAllEvents();

  return (
    <>
      {result?.data?.map((items: eventType, i: number) => (
        <div
          key={i}
          className="bg-white rounded shadow-md p-4 mb-5 flex justify-between w-[50%] items-center"
        >
          <h2>{items.eventHeading}</h2>
          <EventIcons id={items._id} />
        </div>
      ))}
    </>
  );
}
