"use server";

import { revalidateTag } from "next/cache";

export async function UploadGalleryEvent(
  previousState: unknown,
  formData: FormData
) {
  try {
    const files = formData.getAll("files");
    const galleryHeading = formData.get("Gallery Heading") as string;
    const dis = formData.get("dis") as string;
    const eventType = formData.get("event type") as string;

    const DataForm = new FormData();
    files.forEach((file) => {
      DataForm.append("images", file);
    });
    DataForm.set("galleryHeading", galleryHeading);
    DataForm.set("dis", dis);
    DataForm.set("eventType", eventType);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Gallery`, {
      method: "POST",
      body: DataForm,
    });

    const data = await res.json();

    if (data?.success === true) {
      revalidateTag("getAllEvents");
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

export async function getAllEvents() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Gallery`, {
      method: "GET",
      cache: "force-cache",
      next: { tags: ["getAllEvents"] },
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

export async function deleteEvent(id: string) {
  try {
    const bodyData = {
      id: id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Gallery`, {
      method: "DELETE",
      body: JSON.stringify(bodyData),
    });

    const data = await res.json();
    if (data?.success === true) {
      revalidateTag("getAllEvents");
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
