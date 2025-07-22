import connectDB from "@/db/connect";
import Teacher from "@/models/Teacher";
import { DeleteImage } from "@/utils/cloudneary/deleteImage";
import { UploadImage } from "@/utils/cloudneary/upload_image";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.formData();

    const image = body.get("teacherImage") as File;

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const imageData = await UploadImage(buffer);

    if (!imageData) {
      return Response.json({ success: false, msg: "Image Upload Failed!1" });
    }

    const newTeacher = new Teacher({
      teacherName: body.get("teacherName"),
      teacherQuote: body.get("teacherQuote"),
      teacherRole: body.get("teacherRole"),
      image_Url: imageData.secure_url,
      public_id: imageData.public_id,
    });

    const result = await newTeacher.save();

    return Response.json({
      success: true,
      msg: "successfully added a new Teacher!",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while posting Teacher!",
      error,
    });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const result = await Teacher.find({});

    return Response.json({
      success: true,
      msg: "Successfull in getting Teacher",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while Getting Teachers!",
      error,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const result = await Teacher.findByIdAndDelete({ _id: body?._id });
    await DeleteImage(body?.publicId);

    return Response.json({
      success: true,
      msg: "successfully delete a Teacher",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while Getting Teachers!",
      error,
    });
  }
}
