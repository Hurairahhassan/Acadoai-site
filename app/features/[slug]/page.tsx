import { notFound } from "next/navigation";
import { Benefits } from "../../../components/Benefits";
import { Capabilities } from "../../../components/Capabilities";
import { FeatureGrid } from "../../../components/FeatureGrid";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { breadcrumbLd, JsonLd, ProductVisual } from "../../../components/ui";
import { features } from "../../../content/pages";
import { pageMeta } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => features.map((f) => ({ slug: f.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  return f ? pageMeta({ title: f.seoTitle, description: f.seoDescription, path: `/features/${f.slug}` }) : {};
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  if (!f) notFound();
  const related = features.filter((x) => x.slug !== f.slug).slice(0, 6).map((x) => x.slug);

  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: "Features", path: "/#platform" }, { name: f.name, path: `/features/${f.slug}` }])} />
      <PageHero
        crumbs={[{ name: "Features", href: "/#platform" }, { name: f.name }]}
        eyebrow={f.name}
        title={f.h1}
        lead={f.intro}
        visual={<ProductVisual src={f.screen} mock={f.mock} alt={`AcadoAI ${f.name} screen`} priority />}
      />
      <Benefits eyebrow={`Why institutions choose AcadoAI ${f.name}`} title="What you get" items={f.benefits} />
      <Capabilities name={f.name} items={f.capabilities} />
      <FeatureGrid slugs={related} title="Works with the rest of the platform" />
    </PageShell>
  );
}
