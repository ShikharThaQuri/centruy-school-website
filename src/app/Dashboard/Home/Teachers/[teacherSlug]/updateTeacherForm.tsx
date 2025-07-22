"use client";

import { updateTeacher } from "@/services/admin/teachers";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

export default function UpdateTeacherForm({
  teacherName,
  teacherId,
  teacherQuote,
}: {
  teacherName: string;
  teacherId: string;
  teacherQuote: string;
}) {
  const router = useRouter();

  const [data, action, isPending] = useActionState(updateTeacher, undefined);

  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    setMsg(data?.msg);

    setTimeout(() => {
      setMsg("");
    }, 5000);

    if (data?.success === true) {
      router.push("/Dashboard/Home/Teachers");
    }
  }, [data]);

  return (
    <form action={action} className="flex flex-col">
      <input
        type="text"
        hidden
        defaultValue={`${teacherId}`}
        name="teacherId"
      />
      <div className="flex flex-col w-full text-left ">
        <label className={`${labelStyle}`} htmlFor="Teacher Name">
          Teacher Name
        </label>
        <input
          type="text"
          name="Teacher Name"
          defaultValue={`${teacherName}`}
          required
          className={`${inputStyle}`}
        />
      </div>

      <div className="flex flex-col w-full text-left ">
        <label className={`${labelStyle}`} htmlFor="Teacher Quote">
          Teacher Quote
        </label>
        <textarea
          rows={4}
          name="Quote"
          defaultValue={`${teacherQuote}`}
          required
          className={`${inputStyle}`}
        />
      </div>

      <select
        name="role"
        className={`${inputStyle}`}
        defaultValue={"default"}
        required
      >
        <option value="default" disabled hidden>
          Role
        </option>
        <option value="Teacher">Teacher</option>
        <option value="Helper">Helper</option>
        <option value="Accountant">Accountant</option>
      </select>

      <div className="mb-[3rem] tablet:flex tablet:flex-col tablet:gap-y-[2rem] tablet:items-center">
        <label className={`${labelStyle}`} htmlFor="Teacher Image">
          Upload Teacher Image
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          className={`border border-gray-300 rounded w-full
              file:px-3 file:py-2 file:text-[1rem] file:mr-[1rem] file:bg-[#d4a373] file:text-xs file:text-black
              hover:file:cursor-pointer`}
        />
      </div>
      <input
        disabled={isPending}
        type="submit"
        className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200`}
      />

      <div className="text-right mt-[0.4rem] w-full">
        <h1 className={`${data?.success ? "text-blue-700" : "text-red-700"} `}>
          {isPending ? "waiting..." : msg}
        </h1>
      </div>
    </form>
  );
}
