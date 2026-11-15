import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootDocument } from "../../components/RootDocument";
import { isLocale, locales } from "../../content/i18n";
import { getContent } from "../../content/pages";
import { baseMetadata, pageMeta } from "../seo";
import "../globals.css";

export { viewport } from "../seo";

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return baseMetadata;
  const { meta } = getContent(lang).ui;
  const home = pageMeta({ lang, title: meta.title, description: meta.description, path: "/" });
  return { ...baseMetadata, ...home, title: { default: meta.title, template: "%s | AcadoAI" } };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <RootDocument lang={lang}>{children}</RootDocument>;
}
