import connectDB from "@/db/connect";
import User from "@/models/Users";
import { verifyPassword } from "@/utils/auth/password";
import { createSession } from "@/utils/auth/session";

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

    const session = await createSession(getUser);

    const user = await User.find({ username: body.username });

    return Response.json({
      success: true,
      msg: "User logged in successfully.",
      data: user,
      session,
    });
  } catch (error) {
    return Response.json({
      success: false,
      msg: "An error occurred while fetching users.",
      error,
    });
  }
}
