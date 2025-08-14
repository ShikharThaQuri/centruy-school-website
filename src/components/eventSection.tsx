import { eventType } from "@/models/Gallery";
import Image from "next/image";

type dataType = {
  success: boolean;
  data: eventType[];
  msg: string;
};

export default function EventSection({
  result,
  type,
}: {
  result: dataType;
  type: string;
}) {
  return (
    <>
      {result?.data?.map((items: eventType, i: number) => (
        <div key={i}>
          {items.type === type ? (
            <section className="border border-[gray] shadow-xl/20 bg-[#ffe6a7] p-[1rem] mb-[3rem]">
              <div className="flex flex-col justify-between gap-[0.5rem]">
                <div className="w-full">
                  <h1 className="font-bold text-[0.9rem] md:text-[1.2rem] text-[#c1121f]">
                    {items.eventHeading}
                  </h1>
                  <p className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] mb-[0.5rem] ml-[0.8rem]">
                    {items.eventDis}
                  </p>
                </div>

                <div className="grid grid-flow-col grid-rows-2 gap-3 justify-start w-full overflow-x-scroll no-scrollbar">
                  {/* ----- Image Section ----- */}
                  {items.Images.map((img, i) => (
                    <div
                      key={img._id || i}
                      className="w-[15.5rem] lg:w-[16rem] 2xl:w-[15rem]"
                    >
                      <Image
                        src={img.image_url}
                        alt="Image"
                        width={400}
                        height={200}
                        className="w-full h-[8rem] 2xl:h-[8rem] object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                <h1 className="font-bold text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem] text-[#eb5e28] text-right">
                  {items.date || "Date not Provided!!"}
                </h1>
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
