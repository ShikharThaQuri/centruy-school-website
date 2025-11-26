"use client";

import Image from "next/image";
import { GetTeachers } from "@/services/admin/teachers";
import { TeacherType } from "@/models/Teacher";
import { useEffect, useState } from "react";
import StaffLoading from "./staffLoading";

export default function OurStaffSection() {
  const [data, setData] = useState<TeacherType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await GetTeachers();
        if (result?.success === false) {
          return (
            <div className="min-h-[50vh] flex justify-center items-center">
              <h1 className="text-[green] text-[2rem] font-bold">
                {result.msg}
              </h1>
            </div>
          );
        }

        setData(result?.data || []);
      } catch (error) {
        console.log("Error fetching teachers data", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">
          <StaffLoading />
        </h1>
      </div>
    );
  }

  return (
    <>
      {data?.map((items: TeacherType, i: number) => (
        <div key={i} className="w-[15rem] md:w-full mr-[-4rem] md:mr-[-3rem]">
          {show ? (
            // ---------------- Show All Staffs
            <div
              key={i}
              className="bg-[#a68a64] flex justify-start items-center h-[4rem] md:h-[5rem] rounded-r-lg shadow-xl/20 mb-[2rem] md:mb-[4rem]"
            >
              <Image
                src={items.image_Url}
                alt="Staff"
                width={200}
                height={200}
                className="w-[5rem] md:w-[6rem] h-[5rem] md:h-[6rem] ml-[-4rem] md:ml-[-3rem] rounded-[5rem] object-cover object-center"
              />

              <div className="py-[0.5rem] px-2 h-[4rem] md:h-[5rem] flex flex-col justify-start">
                <h1 className="text-[0.9rem] md:text-[1rem] font-bold text-[#9d0208]">
                  {items.teacherName}
                </h1>
                <p className="text-gray-800 text-[0.8rem] md:text-[1rem] ml-[0.5rem]">
                  {items.teacherRole}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* ------------- Only shows Firs 4 staffs */}
              {i < 4 && (
                <div
                  key={i}
                  className="bg-[#a68a64] flex justify-start items-center h-[4rem] md:h-[5rem] rounded-r-lg shadow-xl/20 mb-[2rem] md:mb-[4rem]"
                >
                  <Image
                    src={items.image_Url}
                    alt="Staff"
                    width={200}
                    height={200}
                    className="w-[5rem] md:w-[6rem] h-[5rem] md:h-[6rem] ml-[-4rem] md:ml-[-3rem] rounded-[5rem] object-cover object-center"
                  />

                  <div className="py-[0.5rem] px-2 h-[4rem] md:h-[5rem] flex flex-col justify-start">
                    <h1 className="text-[0.9rem] md:text-[1rem] font-bold text-[#9d0208]">
                      {items.teacherName}
                    </h1>
                    <p className="text-gray-800 text-[0.8rem] md:text-[1rem] ml-[0.5rem]">
                      {items.teacherRole}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      <button
        onClick={() => (show ? setShow(false) : setShow(true))}
        className="cursor-pointer px-[1rem] py-[0.8rem] bg-[#f3722c] text-[] absolute bottom-[-4rem] ml-[3rem] md:ml-[2rem]"
      >
        {show ? "Show Less" : "View More"}
      </button>
    </>
  );
}
