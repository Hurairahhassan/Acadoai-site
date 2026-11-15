import { Contact } from "../../../components/Contact";
import { FAQ } from "../../../components/FAQ";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { breadcrumbLd, JsonLd } from "../../../components/ui";
import { isLocale } from "../../../content/i18n";
import { getContent } from "../../../content/pages";
import { setLang } from "../../../content/request";
import { pageMeta } from "../../seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang).ui.contactPage;
  return pageMeta({ lang, title: c.metaTitle, description: c.metaDescription, path: "/contact" });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  setLang(lang);
  const { contactPage: c, common, contact } = getContent(lang).ui;
  return (
    <PageShell cta={false}>
      <JsonLd data={breadcrumbLd([{ name: common.contact, path: "/contact" }])} />
      <PageHero crumbs={[{ name: common.contact }]} eyebrow={common.contact} title={c.title} lead={c.lead}>
        <span />
      </PageHero>
      <Contact copy={contact} />
      <FAQ />
    </PageShell>
  );
}
