import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fi"];
const defaultLocale = "fi";

export function middleware(request: NextRequest) {
  // Get pathname and preferred language
  const pathname = request.nextUrl.pathname;
  const preferredLocale =
    request.headers.get("accept-language")?.split(",")[0].split("-")[0] ||
    defaultLocale;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in pathname or just root path, redirect to preferred locale
  if (!pathnameHasLocale || pathname === "/") {
    const locale = locales.includes(preferredLocale)
      ? preferredLocale
      : defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
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
