// src/middleware.ts
// import authConfig from "./auth.config";
// import NextAuth from "next-auth";

// export const { auth: middleware } = NextAuth(authConfig);

// 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
//   // Your custom middleware logic goes here
// })

// -------------------------------------------------------------------

// import authConfig from "./auth.config";
// import NextAuth from "next-auth";
// import { NextRequest, NextResponse } from "next/server";

// // Use Edge-compatible settings
// const { auth } = NextAuth(authConfig);

// export default auth(async function middleware(req: NextRequest) {
//   const session = await auth();

//   if (!session && req.nextUrl.pathname.startsWith("/")) {
//     return NextResponse.redirect(new URL("/signin", req.url));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/"], // Add your protected routes
// };

// ------------------------------------------------------------------

import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Use Edge-compatible settings
const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  // Public routes (accessible without authentication)
  const publicRoutes = ["/", "/signin"];

  // If the user is not authenticated and the route is not public, redirect to /signin
  if (!session && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/questions/:path*", "/saved", "/profile", "/pricing"], // These routes require authentication
};
