"use client";

import { loginUser } from "@/services/auth";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function Login() {
  const [data, action] = useActionState(loginUser, undefined);

  if (data?.success == true) {
    redirect("/Dashboard/Home");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-[3rem]">
      <div className="bg-[#403d39] p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action={action}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {data?.success === false ? (
          <h1 className="text-[#e63946] text-right">{data?.msg}</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
