"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function AddNewTeacher(
  previousState: unknown,
  formData: FormData
) {
  try {
    const teachername = formData.get("Teacher Name") as string;
    const teacherQuote = formData.get("Quote") as string;
    const teacherRole = formData.get("role") as string;
    const teacherImage = formData.get("file") as File;

    const Data = new FormData();
    Data.set("teacherName", teachername);
    Data.set("teacherQuote", teacherQuote);
    Data.set("teacherRole", teacherRole);
    Data.set("teacherImage", teacherImage);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teacher`, {
      method: "POST",
      body: Data,
    });

    const data = await res.json();

    if (data?.success) {
      revalidateTag("getAllTeachers");
    }

    return data;
  } catch (error) {
    const data = {
      sussess: false,
      msg: "somting went wrong while Faching Data!",
      error,
    };
    return data;
  }
}

export async function GetTeachers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teacher`, {
      method: "GET",
      cache: "force-cache",
      next: { tags: ["getAllTeachers"] },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    const data = {
      sussess: false,
      msg: "somting went wrong while Faching Data!",
      error,
    };
    return data;
  }
}

export async function getSingleTeacher(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/teacher/${id}`,
      {
        method: "GET",
        // cache: "force-cache",
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    const data = {
      sussess: false,
      msg: "somting went wrong while Faching Data!",
      error,
    };
    return data;
  }
}

export async function updateTeacher(
  previousState: unknown,
  formData: FormData
) {
  try {
    const teachername = formData.get("Teacher Name") as string;
    const teacherQuote = formData.get("Quote") as string;
    const teacherRole = formData.get("role") as string;
    const teacherImage = formData.get("file") as File;

    const Data = new FormData();
    Data.set("teacherName", teachername);
    Data.set("teacherQuote", teacherQuote);
    Data.set("teacherRole", teacherRole);
    Data.set("teacherImage", teacherImage);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/teacher/${formData.get(
        "teacherId"
      )}`,
      {
        method: "PATCH",
        body: Data,
      }
    );

    const data = await res.json();

    if (data?.success) {
      revalidateTag("getAllTeachers");
    }

    return data;
  } catch (error) {
    const data = {
      sussess: false,
      msg: "somting went wrong while Faching Data!",
      error,
    };
    return data;
  }
}

export async function deleteTeacher(id: string, publicId: string) {
  try {
    const bodyData = {
      _id: id,
      publicId: publicId,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teacher`, {
      method: "DELETE",
      body: JSON.stringify(bodyData),
    });

    const data = await res.json();
    if (data?.success === true) {
      revalidatePath("/Dashboard/Home/Teachers");
    }

    return data;
  } catch (error) {
    const data = {
      sussess: false,
      msg: "somting went wrong while Faching Data!",
      error,
    };
    return data;
  }
}
