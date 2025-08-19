import Image from "next/image";
import { GetTeachers } from "@/services/admin/teachers";
import { TeacherType } from "@/models/Teacher";

export default async function OurStaffSection() {
  const result = await GetTeachers();

  if (result?.success === false) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  return (
    <>
      {result?.data?.map((items: TeacherType, i: number) => (
        <div
          key={i}
          className="bg-[#a68a64] flex justify-start items-center h-[4rem] md:h-[5rem] rounded-r-lg shadow-xl/20 w-[15rem] md:w-full mr-[-4rem] md:mr-[-3rem]"
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
      ))}
    </>
  );
}
