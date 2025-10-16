import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fi"];
const defaultLocale = "fi";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Always redirect to defaultLocale (fi) if no locale in pathname or just root path
  if (!pathnameHasLocale || pathname === "/") {
    return NextResponse.redirect(
      new URL(
        `/${defaultLocale}${pathname === "/" ? "" : pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
