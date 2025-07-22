"use client";

import { getSingleTeacher } from "@/services/admin/teachers";
import UpdateTeacherForm from "./updateTeacherForm";
import { Suspense, use, useEffect, useState } from "react";

export default function UpdateTeacher({
  params,
}: {
  params: Promise<{ teacherSlug: string }>;
}) {
  const { teacherSlug } = use(params);

  const [teacherName, setTeacherName] = useState<string>("");
  const [teacherQuote, setTeacherQuote] = useState<string>("");
  const [teacherId, setTeacherId] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const result = await getSingleTeacher(teacherSlug);

        setTeacherName(result?.data[0].teacherName);
        setTeacherQuote(result?.data[0].teacherQuote);
        setTeacherId(result?.data[0]._id);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [teacherSlug]);

  return (
    <div className="py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Teacher</h1>

        <Suspense fallback={<div>Loading..</div>}>
          <UpdateTeacherForm
            teacherId={teacherId}
            teacherName={teacherName}
            teacherQuote={teacherQuote}
          />
        </Suspense>
      </div>
    </div>
  );
}
