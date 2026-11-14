import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { FeatureGrid } from "../../../components/FeatureGrid";
import { Reveal } from "../../../components/motion";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { breadcrumbLd, JsonLd } from "../../../components/ui";
import { acadoStrengths, competitors } from "../../../content/pages";
import { pageMeta } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => competitors.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = competitors.find((x) => x.slug === slug);
  return c ? pageMeta({ title: `AcadoAI vs ${c.name}: School Management Software Comparison`, description: c.seoDescription, path: `/compare/${c.slug}` }) : {};
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const c = competitors.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: "Compare", path: "/#compare" }, { name: `AcadoAI vs ${c.name}`, path: `/compare/${c.slug}` }])} />
      <PageHero
        crumbs={[{ name: "Compare", href: "/#compare" }, { name: `AcadoAI vs ${c.name}` }]}
        eyebrow="Comparison"
        title={`AcadoAI vs ${c.name}`}
        lead={`An honest look at where each platform fits, so you can choose what's right for your institution.`}
      />
      <section className="bg-white py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-line p-8 sm:p-10">
            <p className="eyebrow text-muted">About {c.name}</p>
            <p className="mt-5 text-lg leading-8 text-ink">{c.about}</p>
            <p className="mt-8 border-t border-line pt-6 text-lg leading-8 text-muted">
              <strong className="text-ink">Choose {c.name} if</strong> {c.chooseThem}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl bg-navy p-8 text-white sm:p-10">
            <p className="eyebrow text-sky">About AcadoAI</p>
            <ul className="mt-5 space-y-4">
              {acadoStrengths.map((s) => (
                <li key={s} className="flex gap-3 text-lg leading-7">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden /> {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/15 pt-6 text-lg leading-8 text-white/75">
              <strong className="text-white">Choose AcadoAI if</strong> {c.chooseUs}
            </p>
          </Reveal>
        </div>
        <p className="container-x mt-8 text-sm text-muted">
          {c.name} is a trademark of its respective owner. Information is based on publicly available sources and may change; contact {c.name} for its latest offering.
        </p>
      </section>
      <FeatureGrid title="Explore AcadoAI's modules" eyebrow="The full platform" />
    </PageShell>
  );
}
