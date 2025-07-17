import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/utils/auth/session";

const portectedRoutes = [
  "/Dashboard/Home",
  "/Dashboard/Home/Teachers",
  "/Dashboard/Home/Gallery",
  "/Dashboard/Home/Notice",
  "/Dashboard/Add-Gallery",
  "/Dashboard/Add-Notice",
  "/Dashboard/Add-Teacher",
];
const publicRoutes = ["/Login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookie = req.cookies.get("session");
  const isProtectedRoute = portectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = cookie?.value as string;
  // console.log("Token:", token);

  const decoded = await decrypt(token);

  if (isProtectedRoute && !decoded) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  if (isPublicRoute && decoded) {
    return NextResponse.redirect(new URL("/Dashboard/Home", req.url));
  }

  return NextResponse.next();
}
