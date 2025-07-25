"use client";

import { UploadGalleryEvent } from "@/services/admin/gallery";
import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

export default function AddGallery() {
  const [data, action, isPending] = useActionState(
    UploadGalleryEvent,
    undefined
  );

  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    setMsg(data?.msg);

    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [data]);

  return (
    <div className="py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Gallery Details
        </h1>

        <form action={action} className="flex flex-col">
          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="gallery event name">
              Event Heading
            </label>
            <input
              type="text"
              name="Gallery Heading"
              required
              placeholder="Enter Event Name"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Discription">
              Event Discription
            </label>
            <textarea
              name="dis"
              rows={4}
              required
              placeholder="Enter Event Discription"
              className={`${inputStyle}`}
            />
          </div>

          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="Discription">
              Select Event Type
            </label>
            <select
              name="event type"
              defaultValue={"select"}
              required
              className={`${inputStyle}`}
            >
              <option value="select" hidden disabled>
                select
              </option>
              <option value="Sports">Sports</option>
              <option value="Tours">Tours</option>
              <option value="Academic Activities">Academic Activities</option>
              <option value="Programs">Programs</option>
            </select>
          </div>

          <div className="mb-[3rem] tablet:flex tablet:flex-col tablet:gap-y-[2rem] tablet:items-center">
            <label className={`${labelStyle}`} htmlFor="Teacher Image">
              Upload Images
            </label>
            <input
              type="file"
              name="files"
              accept="image/*"
              multiple
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
