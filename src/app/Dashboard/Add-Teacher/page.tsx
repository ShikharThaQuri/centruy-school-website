"use client";

import { AddNewTeacher } from "@/services/admin/teachers";
import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

export default function AddTeacher() {
  const [data, action, isPending] = useActionState(AddNewTeacher, undefined);

  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    setMsg(data?.msg);

    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [data]);

  return (
    <div className="py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Teacher</h1>

        <form action={action} className="flex flex-col">
          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Teacher Name">
              Teacher Name
            </label>
            <input
              type="text"
              name="Teacher Name"
              required
              placeholder="Enter Teacher Name Name"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Teacher Quote">
              Teacher Quote
            </label>
            <input
              type="text"
              name="Quote"
              required
              placeholder="Enter Notice Teacher Quote"
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
            <h1
              className={`${data?.success ? "text-blue-700" : "text-red-700"} `}
            >
              {isPending ? "waiting..." : msg}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
