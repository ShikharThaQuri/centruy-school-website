import connectDB from "@/db/connect";
import Notice from "@/models/Notice";

export async function POST(req: Request) {
  try {
    await connectDB();

    const Body = await req.json();

    const newNotice = new Notice({
      noticeHeader: Body?.noticeHeader,
      noticeDis: Body?.noticeDis,
      pin: Body?.pin,
    });

    const result = await newNotice.save();

    return Response.json({
      success: true,
      msg: "successfully added a Notice",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "something went wrong while adding Notice!!",
      error,
    });
  }
}
