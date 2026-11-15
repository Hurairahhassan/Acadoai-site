import { FAQ } from "../../../components/FAQ";
import { FeatureGrid } from "../../../components/FeatureGrid";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { Pricing } from "../../../components/Pricing";
import { PricingVisual } from "../../../components/PricingVisual";
import { Readiness } from "../../../components/Readiness";
import { Rollout } from "../../../components/Rollout";
import { breadcrumbLd, JsonLd } from "../../../components/ui";
import { isLocale } from "../../../content/i18n";
import { getContent } from "../../../content/pages";
import { setLang } from "../../../content/request";
import { pageMeta, softwareLd } from "../../seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang).ui.pricingPage;
  return pageMeta({ lang, title: c.metaTitle, description: c.metaDescription, path: "/pricing" });
}

export default async function PricingPage({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  setLang(lang);
  const { pricingPage: c, common } = getContent(lang).ui;
  return (
    <PageShell>
      <JsonLd data={softwareLd(lang)} />
      <JsonLd data={breadcrumbLd([{ name: common.pricing, path: "/pricing" }])} />
      <PageHero crumbs={[{ name: common.pricing }]} eyebrow={common.pricing} title={c.title} lead={c.lead}
        visual={<PricingVisual />}
      >
        <span />
      </PageHero>
      <div className="h-20 bg-white" />
      <Pricing />
      <Rollout />
      <Readiness />
      <FeatureGrid title={c.modulesTitle} eyebrow={c.modulesEyebrow} />
      <FAQ />
    </PageShell>
  );
}
