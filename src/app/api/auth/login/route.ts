import connectDB from "@/db/connect";
import User from "@/models/Users";
import { verifyPassword } from "@/utils/auth/password";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const getUser = await User.findOne({ username: body.username });

    if (!getUser) {
      return Response.json({
        success: false,
        msg: "User not found.",
      });
    }

    const verifyHash = verifyPassword(
      body.password,
      getUser?.hash,
      getUser?.salt
    );

    if (!verifyHash) {
      return Response.json({
        success: false,
        msg: "Wrong Password.",
      });
    }

    const user = await User.find({ username: body.username });

    return Response.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        msg: "An error occurred while fetching users.",
      },
      { status: 500 }
    );
  }
}
