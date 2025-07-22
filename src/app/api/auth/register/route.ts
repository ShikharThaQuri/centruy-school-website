import connectDB from "@/db/connect";
import User from "@/models/Users";
import { createPassword } from "@/utils/auth/password";

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
    return Response.json({
      success: false,
      msg: "An error occurred while processing request.",
      error,
    });
  }
}
