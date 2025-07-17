"use server";

import { cookies } from "next/headers";

export async function loginUser(previousState: unknown, formData: FormData) {
  try {
    console.log(formData.get("username"));
    console.log(formData.get("password"));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      }
    );

    const data = await res.json();

    const cookieStore = await cookies();
    cookieStore.set("session", data?.session);

    return data;
  } catch (error) {
    return {
      success: false,
      msg: "Error in LoginUser",
      error,
    };
  }
}
