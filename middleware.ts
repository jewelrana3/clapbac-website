import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getProfile from "./utils/getProfile";

const authRoutes = [
  "/signup",
  "/login",
  "/forgot-password",
  "/verify-otp",
  "/reset-password",
];
const roleBasedRoutes = {
  USER: [
    "/",
    /^\/bussiness-categories\/[^\/]+$/,
    /^\/clapbac-reviews\/[^\/]+$/,
    "/reviewers",
  ],
  OWNER: [
    "/",
    "/rate-reviewer",
    /^\/bussiness-categories\/[^\/]+$/,
    /^\/clapbac-reviews\/[^\/]+$/,
    "/reviewers",
  ],
  ADMIN: [/^\/dashboard(\/.*)?$/],
  "SUPER ADMIN": [/^\/dashboard(\/.*)?$/],
  // add more roles here if needed
};

type TRole = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Step 1: redirect to login page if accessToken not found
  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    // allow access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    // Not logged in → redirect to login
    const loginUrl = new URL(`/login?redirect=${pathname}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Step 2: Get the current user from the session
  const user = await getProfile();

  // Step 3: Allow access to auth routes to not logged in users
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    // Not logged in → redirect to login
    const loginUrl = new URL(`/login?redirect=${pathname}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Step 4: not Allow access to auth routes for logged in users
  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const role = (user.role as string).toUpperCase() as TRole;

  // Step 5: Check role-based access
  if (role && roleBasedRoutes[role]) {
    const allowedRoutes = roleBasedRoutes[role];

    const hasAccess = allowedRoutes.some((route) =>
      typeof route === "string" ? pathname === route : pathname.match(route)
    );

    if (!hasAccess) {
      return NextResponse.redirect(new URL("/not-allowed", request.url));
    }

    return NextResponse.next();
  }

  // Final Step: Default redirect if access is denied
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/signup",
    "/login",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",

    // dashboard
    // "/bussiness-categories",
    // "/faq",
    // "/about-us",
    // "/contact-us",

    // Add missing routes here:
    "/bussiness-categories/:id",
    "/clapbac-reviews/:id",
    "/reviewers",
    "/rate-reviewer",
  ],
};
