import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const username = request.cookies.get("username")?.value
  const { pathname } = request.nextUrl

  // If the user is trying to access the dashboard without a username cookie, redirect to login (root)
  if (pathname.startsWith("/lottery-dashboard") && !username) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // If the user is on the login page (root) but already has a username cookie, redirect to dashboard
  if (pathname === "/" && username) {
    return NextResponse.redirect(new URL("/lottery-dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/lottery-dashboard/:path*"], // Apply middleware to root and dashboard routes
}
