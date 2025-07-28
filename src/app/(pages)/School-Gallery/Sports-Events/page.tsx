import Image from "next/image";
import { getAllEvents } from "@/services/admin/gallery";
import { eventType } from "@/models/Gallery";

export default function SportsEvent() {
  return (
    <main className="px-[120px] py-[1rem] bg-[white] text-black">
      <h1 className="font-bold text-[2rem] text-[blue] text-center mt-[1rem] mb-[2rem]">
        SPORTS EVENTS
      </h1>

      <SportEventData />
    </main>
  );
}

async function SportEventData() {
  const result = await getAllEvents();

  return (
    <>
      {result?.data.map((items: eventType, i: number) => (
        <div key={i}>
          {items.type === "Sports" ? (
            <section className="border border-[black] shadow-xl/20 bg-[#fefae0] p-[1rem] mb-[3rem]">
              <div>
                <div className="flex justify-between items-center mb-[0.5rem]">
                  <h1 className="font-bold text-[1.5rem] text-[#c1121f]">
                    {items.eventHeading}
                  </h1>

                  <h1 className="font-bold text-[1.2rem] text-[#eb5e28]">
                    {items.date || "Date not Provided!!"}
                  </h1>
                </div>
                <p>{items.eventDis}</p>

                {/* ----- Image Section ----- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[1rem]">
                  {items.Images.map((img, i) => (
                    <div key={img._id || i}>
                      <Image
                        src={img.image_url}
                        alt="Image"
                        width={400}
                        height={200}
                        className="w-full h-[15rem] object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}
