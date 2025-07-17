import connectDB from "@/db/connect";
import User from "@/models/Users";
import { createPassword, verifyPassword } from "@/utils/auth/password";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const { hash, salt } = createPassword(body.password);

    if (!hash) {
      return Response.json(
        {
          success: false,
          msg: "Password creation failed.",
        },
        { status: 400 }
      );
    }

    const newUser = new User({
      username: body.username,
      hash: hash,
      salt: salt,
    });

    const result = await newUser.save();

    return Response.json({
      success: true,
      msg: "User created successfully",
      data: result,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        msg: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const verifyHash = verifyPassword(body.password, body.hash, body.salt);

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
