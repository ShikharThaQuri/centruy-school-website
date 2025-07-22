import connectDB from "@/db/connect";
import Notice from "@/models/Notice";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const singleNotice = await Notice.findById(slug);

    if (!singleNotice) {
      return Response.json({ success: false, msg: "There is no such user!!" });
    }

    return Response.json({
      success: true,
      msg: "successfully get single Notice.",
      data: singleNotice,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while deleting Notice!!",
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
    const Body = await req.json();

    const singleNotice = await Notice.findById(slug);

    if (!singleNotice) {
      return Response.json({ success: false, msg: "There is no such user!!" });
    }

    const date = new Date();
    const sliceDate = date.toString().substring(0, 16);

    const result = await Notice.findByIdAndUpdate(
      { _id: singleNotice._id },
      {
        noticeHeading: Body?.noticeHeading,
        noticeDis: Body?.noticeDis,
        pin: Body?.pin,
        sliceDate: sliceDate,
      },
      { new: true }
    );

    return Response.json({
      success: true,
      msg: "Successfully updated Notice.",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while deleting Notice!!",
      error,
    });
  }
}
