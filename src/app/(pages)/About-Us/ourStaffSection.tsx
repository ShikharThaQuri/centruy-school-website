import Image from "next/image";
import { GetTeachers } from "@/services/admin/teachers";
import { TeacherType } from "@/models/Teacher";

export default async function OurStaffSection() {
  const result = await GetTeachers();

  return (
    <section id="staffs" className=" py-[2rem] md:py-[5rem] ">
      <h1 className="text-center text-[#fb5607] text-[2rem] font-bold">
        Our Staffs
      </h1>

      <div className="mt-[8rem] grid gap-y-[7rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-transparant">
        {result?.data?.map((items: TeacherType, i: number) => (
          <div
            key={i}
            className="bg-[#bb9457] h-auto text-center rounded-lg shadow-xl/20 "
          >
            <Image
              src={items.image_Url}
              alt="Staff"
              width={800}
              height={600}
              className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
            />

            <div className="py-4 px-2">
              <h1 className="text-[1.1rem] font-bold text-[#9d0208]">
                {items.teacherName}
              </h1>
              <p className="text-gray-800">{items.teacherRole}</p>
              <p className="mt-[1rem] text-[1.1rem]">{items.teacherQuote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
