import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, unlocalizedPaths } from "./content/i18n";

// English is served without a prefix: "/pricing" renders app/[lang]/pricing with lang "en".
// "/en/..." redirects to the unprefixed URL so each page has exactly one English address.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }
  // Legal pages are English-only: "/ur/privacy-policy" -> "/privacy-policy".
  const rest = pathname.slice(first.length + 1);
  if (isLocale(first) && unlocalizedPaths.includes(rest)) {
    const url = request.nextUrl.clone();
    url.pathname = rest;
    return NextResponse.redirect(url, 308);
  }
  if (isLocale(first) || unlocalizedPaths.includes(pathname)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, robots.txt, sitemap.xml, ...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
