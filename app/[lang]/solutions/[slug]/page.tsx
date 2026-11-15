import { notFound } from "next/navigation";
import { Automation } from "../../../../components/Automation";
import { Benefits } from "../../../../components/Benefits";
import { FAQ } from "../../../../components/FAQ";
import { FeatureGrid } from "../../../../components/FeatureGrid";
import { HeroVisual } from "../../../../components/HeroVisual";
import { PageHero } from "../../../../components/PageHero";
import { PageShell } from "../../../../components/PageShell";
import { breadcrumbLd, JsonLd, ProductVisual } from "../../../../components/ui";
import { isLocale } from "../../../../content/i18n";
import { fill, getContent, solutions } from "../../../../content/pages";
import { getLang, setLang } from "../../../../content/request";
import { pageMeta } from "../../../seo";

type Props = PageProps<"/[lang]/solutions/[slug]">;

export const dynamicParams = false;
export const generateStaticParams = () => solutions.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const s = getContent(lang).solutions.find((x) => x.slug === slug);
  return s ? pageMeta({ lang, title: s.seoTitle, description: s.seoDescription, path: `/solutions/${s.slug}` }) : {};
}

export default async function SolutionPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  setLang(lang);
  const { solutions: list, ui } = getContent(lang);
  const s = list.find((x) => x.slug === slug);
  if (!s) notFound();
  const c = ui.solutionPage;
  // Lowercase only reads naturally mid-sentence in English; Urdu and Arabic have no case.
  const name = getLang() === "en" ? s.name.toLowerCase() : s.name;

  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: ui.common.solutions, path: "/#platform" }, { name: s.name, path: `/solutions/${s.slug}` }])} />
      <PageHero
        crumbs={[{ name: ui.common.solutions }, { name: s.name }]}
        eyebrow={fill(c.eyebrow, { name })}
        title={s.h1}
        lead={s.intro}
        visualIsFramed={s.slug === "k-12-schools" || s.slug === "private-schools" || s.slug === "colleges" || s.slug === "coaching-academies"}
        visual={s.slug === "k-12-schools" || s.slug === "private-schools" || s.slug === "colleges" || s.slug === "coaching-academies" ? (
          <HeroVisual
            src={s.slug === "coaching-academies" ? "/images/solutions/coaching-academies-hero.png"
              : s.slug === "colleges" ? "/images/solutions/colleges-hero.png"
              : s.slug === "private-schools" ? "/images/solutions/private-schools-hero.png"
              : "/images/solutions/k12-hero.png"}
            alt={c.alts[s.slug]}
          />
        ) : (
          <ProductVisual src={s.screen} mock={s.mock} alt={fill(c.modulesTitle, { name: s.name })} priority />
        )}
      />
      <Benefits eyebrow={fill(c.benefitsEyebrow, { name })} title={c.benefitsTitle} items={s.points} />
      <FeatureGrid slugs={s.features} eyebrow={c.modulesEyebrow} title={fill(c.modulesTitle, { name })} />
      <Automation />
      <FAQ />
    </PageShell>
  );
}
