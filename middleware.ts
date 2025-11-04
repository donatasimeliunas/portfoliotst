import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLanguages = ["en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`)
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // If no language, maybe redirect to default language (optional)
  // const defaultLang = "en";
  // return NextResponse.redirect(new URL(`/${defaultLang}${pathname}`, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
