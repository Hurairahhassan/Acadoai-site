import Image from "next/image";
import { notFound } from "next/navigation";
import { Benefits } from "../../../components/Benefits";
import { Capabilities } from "../../../components/Capabilities";
import { FeatureGrid } from "../../../components/FeatureGrid";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { Reveal } from "../../../components/motion";
import { breadcrumbLd, JsonLd, ProductVisual, StoreButtons } from "../../../components/ui";
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
        visual={f.slug === "student-information-system" || f.slug === "ai-tutor" || f.slug === "reports-analytics" ? (
          <div className="mx-auto w-full max-w-[540px] rounded-[1.75rem] border border-sky/50 bg-white/70 p-2.5 shadow-[0_30px_70px_-30px_rgba(11,24,81,0.35)] sm:p-3">
            <Image
              src={f.slug === "reports-analytics" ? "/images/features/ask-your-data.png"
                : f.slug === "ai-tutor" ? "/images/features/ai-tutor-study-tools.png"
                : "/images/features/students-staff.png"}
              alt={f.slug === "reports-analytics"
                ? "A school principal reviewing fees by class and downloadable reports using AcadoAI Ask Your Data"
                : f.slug === "ai-tutor"
                ? "A boy and girl learning with AcadoAI AI Tutor and Study Tools, with a 3D teacher and visual maths board"
                : "A school administrator and students reviewing the AcadoAI Students and Staff directory together"}
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 640px) 516px, 100vw"
              className="block h-auto w-full rounded-2xl object-contain"
            />
          </div>
        ) : f.slug === "mobile-app" ? (
          <div className="relative mx-auto w-full max-w-[280px]">
            <div aria-hidden className="pointer-events-none absolute -inset-10 rounded-full bg-sky/50 blur-3xl" />
            <div className="relative rounded-[2.75rem] bg-night p-2.5 shadow-[0_40px_80px_-25px_rgba(11,24,81,0.5)] ring-1 ring-white/70">
              <Image
                src="/images/people/home_scren.jpeg"
                alt="Actual AcadoAI mobile app admin dashboard with student, staff and class management"
                width={709}
                height={1600}
                priority
                sizes="280px"
                className="block h-auto w-full rounded-[2.125rem]"
              />
            </div>
          </div>
        ) : (
          <ProductVisual src={f.screen} mock={f.mock} alt={`AcadoAI ${f.name} screen`} priority />
        )}
      >
        {f.slug === "mobile-app" ? (
          <Reveal delay={0.55}>
            <StoreButtons className="mt-10" />
          </Reveal>
        ) : undefined}
      </PageHero>
      <Benefits eyebrow={`Why institutions choose AcadoAI ${f.name}`} title="What you get" items={f.benefits} />
      <Capabilities name={f.name} items={f.capabilities} />
      <FeatureGrid slugs={related} title="Works with the rest of the platform" />
    </PageShell>
  );
}
