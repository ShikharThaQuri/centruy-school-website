import connectDB from "@/db/connect";
import Blog from "@/models/Blog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const singleBlog = await Blog.findById(slug);

    if (!singleBlog) {
      return Response.json({
        success: false,
        msg: "There is no such Blog!!",
      });
    }

    return Response.json({
      success: true,
      msg: "Successfull in getting single Blog.",
      data: singleBlog,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while getting Blog!!",
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

    const singleBlog = await Blog.findById(slug);

    if (!singleBlog) {
      return Response.json({
        success: false,
        msg: "There is no such Blog!!",
      });
    }

    const result = await Blog.findByIdAndUpdate(
      { _id: singleBlog._id },
      {
        title: Body?.title ? Body?.title : singleBlog.title,
        content: Body?.content ? Body?.content : singleBlog.content,
        writterName: Body?.writterName
          ? Body?.writterName
          : singleBlog.writterName,
      },
      { new: true }
    );

    return Response.json({
      success: true,
      msg: "Successfully updated the Blog!!",
      data: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "Something went wrong while updating Blog!!",
      error,
    });
  }
}
