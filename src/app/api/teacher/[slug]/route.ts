import connectDB from "@/db/connect";
import Teacher from "@/models/Teacher";
import { DeleteImage } from "@/utils/cloudneary/deleteImage";
import { UploadImage } from "@/utils/cloudneary/upload_image";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const teacher = await Teacher.find({ _id: slug });

    if (!teacher) {
      return Response.json({ success: false, msg: "There is no such user!!" });
    }

    return Response.json({
      success: true,
      msg: "Successfully get a single Teacher.",
      data: teacher,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while getting a Teacher!",
      error,
    });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;
    const body = await req.formData();

    const image = body.get("teacherImage") as File;

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const teacher = await Teacher.findById(slug);

    if (!teacher) {
      return Response.json({
        success: false,
        msg: "There is no such Teacher!!",
      });
    }

    const public_id = teacher.public_id;

    await DeleteImage({ public_id });

    const imageData = await UploadImage(buffer);

    const result = await Teacher.findByIdAndUpdate(
      { _id: slug },
      {
        teacherName: body.get("teacherName"),
        teacherQuote: body.get("teacherQuote"),
        teacherRole: body.get("teacherRole"),
        image_Url: imageData.secure_url,
        public_id: imageData.public_id,
      },
      { new: true }
    );

    return Response.json({
      success: true,
      msg: "Successfully update a teacher.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while Updating Teacher!",
      error,
    });
  }
}
