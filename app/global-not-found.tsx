import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { RootDocument } from "../components/RootDocument";
import { localeNames, locales, localize, isRtl } from "../content/i18n";
import { getContent } from "../content/pages";
import { baseMetadata } from "./seo";
import "./globals.css";

// Unmatched URLs in any language land here. Without one shared root layout, this is how Next renders a full 404 on the server.
export const metadata: Metadata = { ...baseMetadata, title: "404", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  const en = getContent("en").ui.notFound;
  return (
    <RootDocument lang="en">
      <PageShell cta={false}>
        <section className="relative overflow-hidden bg-[linear-gradient(165deg,#e4f3ff_0%,#f5f9ff_45%,#eef1ff_100%)] pt-40 pb-28">
          <div className="container-x">
            <p className="eyebrow text-royal">{en.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-[3.4rem]">{en.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{en.lead}</p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locales.map((lang) => {
                const c = getContent(lang).ui.notFound;
                return (
                  <li key={lang} lang={lang} dir={isRtl(lang) ? "rtl" : "ltr"}>
                    <a href={localize(lang, "/")} hrefLang={lang} className="block h-full rounded-2xl bg-white p-6 ring-1 ring-line transition-colors hover:ring-royal">
                      <span className="text-sm font-semibold text-royal">{localeNames[lang]}</span>
                      <span className="mt-2 block font-semibold text-ink">{c.title}</span>
                      <span className="mt-3 block text-sm font-semibold text-royal">{c.home}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </PageShell>
    </RootDocument>
  );
}
