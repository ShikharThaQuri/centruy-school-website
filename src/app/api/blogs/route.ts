import connectDB from "@/db/connect";
import Blog from "@/models/Blog";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const date = new Date();
    const sliceDate = date.toString().substring(0, 15);

    const newBlog = new Blog({
      title: body?.title,
      content: body?.content,
      writterName: body?.writterName,
      sliceDate: sliceDate,
    });

    const result = await newBlog.save();

    return Response.json({
      msg: "Successfully added a new Blog!",
      success: true,
      data: result,
    });
  } catch (error) {
    return Response.json({
      msg: "Something went wrong while posting Blog!",
      success: false,
      error,
    });
  }
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return Response.json({
      msg: "Successfully fetched all Blogs!",
      success: true,
      data: blogs,
    });
  } catch (error) {
    return Response.json({
      msg: "Something went wrong while posting Blog!",
      success: false,
      error,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log(body, "hello world");

    const result = await Blog.findByIdAndDelete({ _id: body._id });

    return Response.json({
      success: true,
      msg: "Successfully delete a blogs.",
      result,
    });
  } catch (error) {
    return Response.json({
      msg: "Something went wrong while posting Blog!",
      success: false,
      error,
    });
  }
}
