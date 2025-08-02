import { TeacherType } from "@/models/Teacher";
import { GetTeachers } from "@/services/admin/teachers";
import { Suspense } from "react";
import { TeacherIcons } from "./teacherIcons";
import EditDeleteLoading from "../editdeleteLoading";

export default function TeachersPage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Teachers</h1>

      <Suspense fallback={<EditDeleteLoading />}>
        <TeacherBox />
      </Suspense>
    </main>
  );
}

async function TeacherBox() {
  const result = await GetTeachers();

  if (result?.success === false) {
    return (
      <div className="min-h-[30vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  return (
    <>
      {result?.data?.map((items: TeacherType, i: number) => (
        <div
          key={i}
          className="bg-white rounded shadow-md p-4 mb-5 flex justify-between w-[80%] md:w-[70%] lg:w-[50%] items-center"
        >
          <h2>{items.teacherName}</h2>

          <TeacherIcons id={items._id} publicId={items.public_id} />
        </div>
      ))}
    </>
  );
}
