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
      {result?.data.map((items: eventType, i: number) => (
        <div key={i}>
          {items.type === type ? (
            <section className="border border-[black] shadow-xl/20 bg-[#fefae0] p-[1rem] mb-[3rem]">
              <div className="flex flex-col lg:flex-row-reverse justify-between gap-[1rem] md:gap-[2rem]">
                <div className="w-full lg:w-[45%]">
                  <div className="flex justify-between items-center mb-[0.5rem]">
                    <h1 className="font-bold text-[0.9rem] md:text-[1.2rem] text-[#c1121f]">
                      {items.eventHeading}
                    </h1>

                    <h1 className="font-bold text-[0.7rem] md:text-[1.1rem] text-[#eb5e28]">
                      {items.date || "Date not Provided!!"}
                    </h1>
                  </div>
                  <p className="text-[0.7rem] md:text-[1rem] px-[1rem]">
                    {items.eventDis}
                  </p>
                </div>

                {/* ----- Image Section ----- */}
                <div className="grid grid-flow-col grid-rows-2 gap-3 justify-start w-full lg:w-[50%] overflow-x-scroll">
                  {items.Images.map((img, i) => (
                    <div
                      key={img._id || i}
                      className="w-[15.5rem] lg:w-[18rem] 2xl:w-[20rem]"
                    >
                      <Image
                        src={img.image_url}
                        alt="Image"
                        width={400}
                        height={200}
                        className="w-full h-[8rem] 2xl:h-[12rem] object-cover object-center"
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
