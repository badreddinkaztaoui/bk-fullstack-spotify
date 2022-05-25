import { NextRequest, NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library", "/favorites", "/search"];

export default function middleware(req: NextRequest) {
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.BK_SPOTIFY_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
