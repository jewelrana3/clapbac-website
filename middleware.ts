import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { myFetch } from "./utils/myFetch";

const authRoutes = ["/login"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // // Get the current user from server
  const userRes = await myFetch("/users/profile");
  const profile = userRes.data;

  if (!profile) {
    // Allow unauthenticated access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // Allow only users with USER role
  if (!(profile.role === "Owner" || profile.role === "Admin")) {
    (await cookies()).delete("OWNER_TOKEN");
    (await cookies()).delete("refreshToken");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Don't allow authorized users to access auth routes
  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/"
    "/dashboard:path*",
  ],
};
