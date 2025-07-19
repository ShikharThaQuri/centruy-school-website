import { UserType } from "@/models/Users";
import { jwtVerify, SignJWT } from "jose";

const secretKey = process.env.SECRET_KEY as string;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(user: UserType) {
  const payload = {
    sub: user?._id,
    username: user?.username,
    iat: Date.now(),
  };

  const token = await encrypt(payload);

  return token;
}

type SessionPayload = {
  sub: string;
  username: string;
  iat: number;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.log("hello", error);
    return null;
  }
}
