"use client";

// import { addNewProduct } from "@/services/admin/product";
// import { useActionState, useEffect, useState } from "react";

const inputStyle =
  "w-full px-3 py-2 mb-[1rem] border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500";

const labelStyle = "block text-sm font-medium text-gray-700 mb-2";

// const msg = "";

export default function AddGallery() {
  // const [data, action, isPending] = useActionState(addNewProduct, undefined);

  // const [msg, setMsg] = useState<string>();

  // useEffect(() => {
  //   setMsg(data?.msg);

  //   setTimeout(() => {
  //     setMsg("");
  //   }, 5000);
  // }, [data]);

  return (
    <div className="py-[2rem] flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Add Gallery Details
        </h1>

        <form className="flex flex-col">
          <div className="flex flex-col w-full text-left ">
            <label className={`${labelStyle}`} htmlFor="product name">
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
            <input
              type="text"
              name="dis"
              required
              placeholder="Enter Notice Discription"
              className={`${inputStyle}`}
            />
          </div>

          {/* <input
            disabled={isPending}
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200`}
          /> */}

          {/* <div className="text-right mt-[0.4rem] w-full">
            <h1
              className={`${data?.success ? "text-blue-700" : "text-red-700"} `}
            >
              {isPending ? "waiting..." : msg}
            </h1>
          </div> */}
        </form>
      </div>
    </div>
  );
}
