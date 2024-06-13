import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token");
  const path = req.nextUrl.pathname;

  const publicPaths = ["/SignUp", "/Login"];

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

// export const config = {
//   matcher: ["/", "/Admin"],
// };

// if (!token && !publicPath) {
//   return NextResponse.redirect(new URL("/SignUp", req.url));
// }

// if (token && publicPath) {
//   return NextResponse.redirect(new URL("/", req.url));
// }
