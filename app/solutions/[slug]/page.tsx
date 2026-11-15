import { notFound } from "next/navigation";
import { Automation } from "../../../components/Automation";
import { Benefits } from "../../../components/Benefits";
import { FAQ } from "../../../components/FAQ";
import { FeatureGrid } from "../../../components/FeatureGrid";
import { HeroVisual } from "../../../components/HeroVisual";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { breadcrumbLd, JsonLd, ProductVisual } from "../../../components/ui";
import { solutions } from "../../../content/pages";
import { pageMeta } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => solutions.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return s ? pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/solutions/${s.slug}` }) : {};
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: "Solutions", path: "/#platform" }, { name: s.name, path: `/solutions/${s.slug}` }])} />
      <PageHero
        crumbs={[{ name: "Solutions" }, { name: s.name }]}
        eyebrow={`For ${s.name.toLowerCase()}`}
        title={s.h1}
        lead={s.intro}
        visualIsFramed={s.slug === "k-12-schools" || s.slug === "private-schools" || s.slug === "colleges" || s.slug === "coaching-academies"}
        visual={s.slug === "k-12-schools" || s.slug === "private-schools" || s.slug === "colleges" || s.slug === "coaching-academies" ? (
          <HeroVisual
            src={s.slug === "coaching-academies" ? "/images/solutions/coaching-academies-hero.png"
              : s.slug === "colleges" ? "/images/solutions/colleges-hero.png"
              : s.slug === "private-schools" ? "/images/solutions/private-schools-hero.png"
              : "/images/solutions/k12-hero.png"}
            alt={s.slug === "coaching-academies"
              ? "A realistic coaching academy classroom with batch desks, exam preparation materials, a whiteboard and AcadoAI batch schedule"
              : s.slug === "colleges"
              ? "A college campus on an open book with a graduation cap, diploma and AcadoAI results dashboard"
              : s.slug === "private-schools"
              ? "A private school principal and finance manager reviewing AcadoAI fee collection and verified receipts"
              : "A K-12 teacher helping a boy and girl learn with AcadoAI at a classroom desk"}
          />
        ) : (
          <ProductVisual src={s.screen} mock={s.mock} alt={`AcadoAI for ${s.name}`} priority />
        )}
      />
      <Benefits eyebrow={`Built for ${s.name.toLowerCase()}`} title="Why it works for you" items={s.points} />
      <FeatureGrid slugs={s.features} eyebrow="The modules you'll use" title={`AcadoAI for ${s.name.toLowerCase()}`} />
      <Automation />
      <FAQ />
    </PageShell>
  );
}
