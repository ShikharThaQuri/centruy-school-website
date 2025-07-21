import { getSingleTeacher } from "@/services/admin/teachers";
import UpdateTeacherForm from "./updateTeacherForm";

export default async function UpdateTeacher({
  params,
}: {
  params: Promise<{ teacherSlug: string }>;
}) {
  const { teacherSlug } = await params;

  const result = await getSingleTeacher(teacherSlug);

  return (
    <div className="py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Teacher</h1>

        <UpdateTeacherForm
          teacherName={result?.data[0].teacherName}
          teacherQuote={result?.data[0].teacherQuote}
          teacherId={result?.data[0]._id}
        />
      </div>
    </div>
  );
}
