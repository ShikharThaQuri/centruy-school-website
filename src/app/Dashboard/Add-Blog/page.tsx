"use client";

import { AddNewBlog } from "@/services/admin/blog";
import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

export default function AddBlog() {
  const [data, action, isPending] = useActionState(AddNewBlog, undefined);

  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    setMsg(data?.msg);

    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [data]);

  return (
    <main className="min-h-[100vh] py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Add Blog Details
        </h1>

        <form action={action} className="flex flex-col">
          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Blog Heading">
              Blog Heading
            </label>
            <input
              type="text"
              name="Blog Heading"
              required
              placeholder="Enter Blog Heading"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Discription">
              Blog Discription
            </label>
            <textarea
              name="dis"
              rows={4}
              required
              placeholder="Enter Blog Discription"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Blog Heading">
              Writters Name
            </label>
            <input
              type="text"
              name="Writters Name"
              required
              placeholder="Enter Writters Name"
              className={`${inputStyle}`}
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
              {isPending ? "Adding..." : msg}
            </h1>
          </div>
        </form>
      </div>
    </main>
  );
}
