import connectDB from "@/db/connect";
import Notice from "@/models/Notice";

export async function POST(req: Request) {
  try {
    await connectDB();

    const Body = await req.json();

    const date = new Date();
    const sliceDate = date.toString().substring(0, 16);

    const newNotice = new Notice({
      noticeHeading: Body?.noticeHeading,
      noticeDis: Body?.noticeDis,
      pin: Body?.pin,
      sliceDate: sliceDate,
      hero: "hero",
    });

    const result = await newNotice.save();

    return Response.json({
      success: true,
      msg: "successfully added a Notice",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const result = await Notice.find({});

    return Response.json({
      success: true,
      msg: "Successfull in getting Notice",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const result = await Notice.findByIdAndDelete({ _id: body._id });

    return Response.json({
      success: true,
      msg: "Successfully delete a Notice.",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while deleting Notice!!",
      error,
    });
  }
}
