import type { Metadata } from "next";
import { site } from "../content/pages";

/** Per-page metadata with canonical, Open Graph and Twitter kept consistent. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url: path, title: `${title} | AcadoAI`, description },
    twitter: { card: "summary_large_image", title: `${title} | AcadoAI`, description },
  };
}

export const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: site.url,
  description: site.description,
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "School Management System",
  operatingSystem: "Web, iOS, Android",
  publisher: { "@id": `${site.url}/#organization` },
};
