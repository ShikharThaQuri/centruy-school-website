"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function AddNewBlog(previousState: unknown, formdata: FormData) {
  try {
    const Data = {
      title: formdata.get("Blog Heading") as string,
      content: formdata.get("dis") as string,
      writterName: formdata.get("Writters Name") as string,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      method: "POST",
      body: JSON.stringify(Data),
    });

    const data = await res.json();

    if (data?.success === true) {
      revalidateTag("getAllBlogs");
      revalidateTag("getSingleBlog");
    }

    return data;
  } catch (error) {
    const data = {
      susscess: false,
      msg: "Something went wrong while Adding Blog!!",
      error,
    };

    return data;
  }
}

export async function getAllBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      method: "GET",
      cache: "force-cache",
      next: { tags: ["getAllBlogs"] },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    const data = {
      usscess: false,
      msg: "Something went wrong while Fetching!!",
      error,
    };

    return data;
  }
}

export async function deleteBlog(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
      method: "DELETE",
      body: JSON.stringify({ _id: id }),
    });

    const data = await res.json();

    if (data?.success === true) {
      revalidatePath("/Dashboard/Home/BLOG");
    }

    return data;
  } catch (error) {
    const data = {
      usscess: false,
      msg: "Something went wrong while Fetching!!",
      error,
    };

    return data;
  }
}

export async function getSingleBlog(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`,
      {
        method: "GET",
        cache: "force-cache",
        next: { tags: ["getSingleBlog"] },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    const data = {
      usscess: false,
      msg: "Something went wrong while Fetching!!",
      error,
    };

    return data;
  }
}

export async function updateBlog(previousState: unknown, formdata: FormData) {
  try {
    const Data = {
      title: formdata.get("Blog Heading") as string,
      content: formdata.get("dis") as string,
      writterName: formdata.get("Writters Name") as string,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${formdata.get("id")}`,
      {
        method: "PATCH",
        body: JSON.stringify(Data),
      }
    );

    const data = await res.json();

    if (data?.success === true) {
      revalidateTag("getAllBlogs");
      revalidateTag("getSingleBlog");
    }

    return data;
  } catch (error) {
    const data = {
      susscess: false,
      msg: "Something went wrong while Updating Blog!!",
      error,
    };

    return data;
  }
}
