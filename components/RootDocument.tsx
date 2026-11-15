import type { ReactNode } from "react";
import { Bricolage_Grotesque, Geist, Noto_Naskh_Arabic } from "next/font/google";
import { isRtl, type Locale } from "../content/i18n";
import { getContent, site } from "../content/pages";
import { CalendlyPopup } from "./CalendlyPopup";
import { OfferPopup } from "./OfferPopup";
import { JsonLd } from "./ui";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
// Naskh covers Arabic and Urdu letters and keeps line heights close to the Latin design (Nastaliq would not).
const arabic = Noto_Naskh_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-arabic", display: "swap" });

/** <html> shell shared by the localized site and the English-only legal pages. */
export function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  const c = getContent(lang);
  const orgLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/acado-icon.svg`,
        email: site.email,
        sameAs: site.socials,
        contactPoint: [
          { "@type": "ContactPoint", contactType: "sales", email: site.email, telephone: site.phone, availableLanguage: ["English", "Urdu", "Arabic", "Spanish"] },
          { "@type": "ContactPoint", contactType: "customer support", email: site.supportEmail },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: c.ui.meta.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: lang,
      },
    ],
  };

  return (
    <html lang={lang} dir={isRtl(lang) ? "rtl" : "ltr"} className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2">
          {c.ui.common.skip}
        </a>
        <JsonLd data={orgLd} />
        {children}
        <CalendlyPopup />
        <OfferPopup copy={c.ui.offer} />
      </body>
    </html>
  );
}
