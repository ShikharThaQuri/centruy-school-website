"use client";

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
        <div key={i} className="mb-[2rem]">
          {items.type === type ? (
            <section className="flex flex-col md:flex-row justify-between xl:justify-evenly gap-[0.5rem] bg-[#dda15e] rounded-lg shadow-lg p-3">
              {/* ---------------- Image Section ------------------- */}
              <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-y-3 py-3 pl-3 w-full md:w-[45%] relative rounded-lg bg-[#fdf0d5]">
                {/* Hover effect and button to show images and videos */}
                <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-white/30 opacity-0 hover:opacity-100 duration-400 ease-in-out flex items-center justify-center">
                  <button className="text-white bg-[#bc6c25] px-[1rem] py-[0.5rem]">
                    View All
                  </button>
                </div>

                {/* Shows only 4 items form the database images */}
                {items.Images.map((img, i) => (
                  <div key={i} className="w-full">
                    {i < 4 && (
                      <div
                        key={img._id || i}
                        className="w-full lg:w-full 2xl:w-full pr-3"
                      >
                        <Image
                          src={img.image_url}
                          alt="Image"
                          width={400}
                          height={200}
                          className="w-full h-[5rem] lg:h-[8rem] object-cover object-center"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Image Heading, Image dis and Image date section */}
              <div className="w-full md:w-[50%] xl:w-[40%] flex flex-col p-3 ">
                <h1 className="font-bold text-[0.9rem] md:text-[1.2rem] text-[#c1121f]">
                  {items.eventHeading}
                </h1>
                <div>
                  <p className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] mb-[0.5rem] ml-[0.8rem]">
                    {items.eventDis}
                  </p>

                  <h1 className="font-bold text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem] text-[#eb5e28] text-right">
                    {items.date || "Date not Provided!!"}
                  </h1>
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
