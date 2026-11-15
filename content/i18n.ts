// Locale config shared by server and client code. English lives at the root URL; other locales are prefixed (/ur, /ar, /es).
export const locales = ["en", "ur", "ar", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const isRtl = (lang: Locale) => lang === "ur" || lang === "ar";

export const localeNames: Record<Locale, string> = { en: "English", ur: "اردو", ar: "العربية", es: "Español" };
export const ogLocales: Record<Locale, string> = { en: "en_US", ur: "ur_PK", ar: "ar_SA", es: "es_ES" };

// Legal pages stay in English only and are never prefixed.
export const unlocalizedPaths = ["/privacy-policy", "/terms-and-conditions", "/delete-account"];

/** Turns a site path like "/pricing" or "/#platform" into its URL for the given locale. */
export function localize(lang: Locale, path: string): string {
  if (!path.startsWith("/") || lang === defaultLocale) return path;
  if (unlocalizedPaths.some((p) => path === p || path.startsWith(`${p}#`))) return path;
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

/** Strips a locale prefix from a pathname: "/ur/pricing" -> "/pricing". */
export function stripLocale(pathname: string): string {
  const first = pathname.split("/")[1];
  if (!isLocale(first) || first === defaultLocale) return pathname || "/";
  return pathname.slice(first.length + 1) || "/";
}

/** hreflang map for a site path, used in page metadata and the sitemap. */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((l) => [l, localize(l, path)])),
  "x-default": path,
});
