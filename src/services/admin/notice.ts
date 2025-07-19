"use server";

export async function AddNewNotice(previousState: unknown, formdata: FormData) {
  try {
    const Data = {
      noticeHeader: formdata.get("Notice Header"),
      noticeDis: formdata.get("dis"),
      pin: formdata.get("pin") === "pin",
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`, {
      method: "POST",
      body: JSON.stringify(Data),
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
