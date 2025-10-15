import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware runs on every request that matches the matcher
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow request to continue
  return NextResponse.next();
}

// Specify which paths this middleware applies to
export const config = {
  matcher: ["/dashboard/:path*"], // protect all /dashboard/* routes
};
