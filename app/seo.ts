import type { Metadata, Viewport } from "next";
import { isLocale, languageAlternates, localize, ogLocales, unlocalizedPaths, type Locale } from "../content/i18n";
import { getContent, site } from "../content/pages";

/** Metadata shared by every page; per-page title, description and canonical are layered on top. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: getContent("en").ui.meta.title, template: "%s | AcadoAI" },
  description: getContent("en").ui.meta.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [{ url: "/images/acado-icon.svg", type: "image/svg+xml" }],
    shortcut: "/images/acado-icon.svg",
    apple: "/images/acado-icon.svg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#040e45",
  width: "device-width",
  initialScale: 1,
};

/** Per-page metadata with canonical, hreflang alternates, Open Graph and Twitter kept consistent. */
export function pageMeta({ lang = "en", title, description, path }: { lang?: Locale; title: string; description: string; path: string }): Metadata {
  const url = localize(lang, path);
  const localized = isLocale(lang) && unlocalizedPaths.includes(path) ? undefined : languageAlternates(path);
  return {
    title,
    description,
    alternates: { canonical: url, languages: localized },
    openGraph: { type: "website", siteName: site.name, locale: ogLocales[lang], url, title: `${title} | AcadoAI`, description },
    twitter: { card: "summary_large_image", title: `${title} | AcadoAI`, description },
  };
}

export const softwareLd = (lang: Locale = "en") => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: site.url,
  description: getContent(lang).ui.meta.description,
  inLanguage: lang,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "School Management System",
  operatingSystem: "Web, iOS, Android",
  publisher: { "@id": `${site.url}/#organization` },
});
