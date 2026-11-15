import type { MetadataRoute } from "next";
import { languageAlternates, locales, localize } from "../content/i18n";
import { features, site, solutions } from "../content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;
  // One entry per language, each listing every translation so Google links them as alternates.
  const localized = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => {
    const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([l, p]) => [l, abs(p)]));
    return locales.map((lang) => ({ url: abs(localize(lang, path)), lastModified: now, changeFrequency, priority, alternates: { languages } }));
  };
  const english = (path: string) => ({ url: abs(path), lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 });

  return [
    ...localized("/", 1, "weekly"),
    ...localized("/pricing", 0.9),
    ...features.flatMap((f) => localized(`/features/${f.slug}`, 0.8)),
    ...solutions.flatMap((s) => localized(`/solutions/${s.slug}`, 0.8)),
    ...localized("/about", 0.5),
    ...localized("/contact", 0.6),
    english("/privacy-policy"),
    english("/terms-and-conditions"),
    english("/delete-account"),
  ];
}
