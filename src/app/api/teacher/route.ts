import connectDB from "@/db/connect";
import Teacher from "@/models/Teacher";

export async function POST(req: Response) {
  try {
    await connectDB();

    const body = await req.formData();

    const newTeacher = new Teacher({
      teacherName: body.get("teacherName"),
      teacherQuote: body.get("teacherQuote"),
      teacherRole: body.get("teacherRole"),
    });

    const result = await newTeacher.save();

    return Response.json({
      success: true,
      msg: "successfully added a new Teacher!",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while posting Teacher!",
      error,
    });
  }
}
