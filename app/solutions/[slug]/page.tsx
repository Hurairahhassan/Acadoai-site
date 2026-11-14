import { notFound } from "next/navigation";
import { Automation } from "../../../components/Automation";
import { Benefits } from "../../../components/Benefits";
import { FAQ } from "../../../components/FAQ";
import { FeatureGrid } from "../../../components/FeatureGrid";
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
        visual={<ProductVisual src={s.screen} mock={s.mock} alt={`AcadoAI for ${s.name}`} priority />}
      />
      <Benefits eyebrow={`Built for ${s.name.toLowerCase()}`} title="Why it works for you" items={s.points} />
      <FeatureGrid slugs={s.features} eyebrow="The modules you'll use" title={`AcadoAI for ${s.name.toLowerCase()}`} />
      <Automation />
      <FAQ />
    </PageShell>
  );
}
