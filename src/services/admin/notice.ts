"use server";

import { revalidateTag } from "next/cache";

export async function AddNewNotice(previousState: unknown, formdata: FormData) {
  try {
    const Data = {
      noticeHeading: formdata.get("Notice Heading"),
      noticeDis: formdata.get("dis"),
      pin: formdata.get("pin") === "pin",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`, {
      method: "POST",
      body: JSON.stringify(Data),
    });

    const data = await res.json();

    if (data?.success === true) {
      revalidateTag("getAllNotice");
    }

    return data;
  } catch (error) {
    const data = {
      susscess: false,
      msg: "Something went wrong while Fetching!!",
      error,
    };

    return data;
  }
}

export async function getNotice() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`, {
      method: "GET",
      cache: "force-cache",
      next: { tags: ["getAllNotice"] },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    const data = {
      susscess: false,
      msg: "Something went wrong while Fetching!!",
      error,
    };

    return data;
  }
}
