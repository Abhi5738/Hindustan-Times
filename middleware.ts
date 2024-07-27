import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  console.log("middle token>", "Middle PAth", path);

  // if (path === "/admin") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // const publicPaths = ["/SignUp", "/Login"];

  // if (!token && !publicPaths) {
  //   return NextResponse.redirect(new URL("/SignUp", req.url));
  // }

  // const isPublicPath = publicPaths.some((publicPath) =>
  //   path.startsWith(publicPath)
  // );

  // if (isPublicPath) {
  //   return NextResponse.next();
  // }

  // if (!token) {
  //   return NextResponse.redirect(new URL("/SignUp", req.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
