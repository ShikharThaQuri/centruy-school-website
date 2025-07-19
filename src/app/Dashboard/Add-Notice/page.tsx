"use client";

import { AddNewNotice } from "@/services/admin/notice";
import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

export default function AddNotice() {
  const [data, action, isPending] = useActionState(AddNewNotice, undefined);

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
        <h1 className="text-2xl font-bold mb-6 text-center">Add Notice</h1>

        <form action={action} className="flex flex-col">
          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Notice Header">
              Notice Header
            </label>
            <input
              type="text"
              name="Notice Header"
              required
              placeholder="Enter Notice Header Name"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Discription">
              Discription
            </label>
            <textarea
              id="dis"
              name="dis"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 mb-[1rem]"
              placeholder="Add Notice ..."
            ></textarea>
          </div>

          <div className="flex items-center mb-[1rem]">
            <input
              id="default-checkbox"
              type="checkbox"
              name="pin"
              value="pin"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
            />
            <label className="ms-2 text-sm font-medium text-gray-900">
              Pin
            </label>
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
