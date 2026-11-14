import type { MetadataRoute } from "next";
import { competitors, features, site, solutions } from "../content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    entry("", 1, "weekly"),
    entry("/pricing", 0.9),
    ...features.map((f) => entry(`/features/${f.slug}`, 0.8)),
    ...solutions.map((s) => entry(`/solutions/${s.slug}`, 0.8)),
    ...competitors.map((c) => entry(`/compare/${c.slug}`, 0.7)),
    entry("/about", 0.5),
    entry("/contact", 0.6),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-and-conditions", 0.2, "yearly"),
    entry("/delete-account", 0.2, "yearly"),
  ];
}
