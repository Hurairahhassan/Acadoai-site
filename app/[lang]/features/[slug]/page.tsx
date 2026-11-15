import Image from "next/image";
import { notFound } from "next/navigation";
import { Benefits } from "../../../../components/Benefits";
import { Capabilities } from "../../../../components/Capabilities";
import { FeatureGrid } from "../../../../components/FeatureGrid";
import { PageHero } from "../../../../components/PageHero";
import { PageShell } from "../../../../components/PageShell";
import { Reveal } from "../../../../components/motion";
import { breadcrumbLd, JsonLd, ProductVisual, StoreButtons } from "../../../../components/ui";
import { isLocale } from "../../../../content/i18n";
import { features, fill, getContent } from "../../../../content/pages";
import { setLang } from "../../../../content/request";
import { pageMeta } from "../../../seo";

type Props = PageProps<"/[lang]/features/[slug]">;

export const dynamicParams = false;
export const generateStaticParams = () => features.map((f) => ({ slug: f.slug }));

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const f = getContent(lang).features.find((x) => x.slug === slug);
  return f ? pageMeta({ lang, title: f.seoTitle, description: f.seoDescription, path: `/features/${f.slug}` }) : {};
}

export default async function FeaturePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  setLang(lang);
  const { features: list, ui } = getContent(lang);
  const f = list.find((x) => x.slug === slug);
  if (!f) notFound();
  const c = ui.featurePage;
  const related = list.filter((x) => x.slug !== f.slug).slice(0, 6).map((x) => x.slug);

  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: ui.common.features, path: "/#platform" }, { name: f.name, path: `/features/${f.slug}` }])} />
      <PageHero
        crumbs={[{ name: ui.common.features, href: "/#platform" }, { name: f.name }]}
        eyebrow={f.name}
        title={f.h1}
        lead={f.intro}
        visual={f.slug === "student-information-system" || f.slug === "ai-tutor" || f.slug === "reports-analytics" ? (
          <div className="mx-auto w-full max-w-[540px] rounded-[1.75rem] border border-sky/50 bg-white/70 p-2.5 shadow-[0_30px_70px_-30px_rgba(11,24,81,0.35)] sm:p-3">
            <Image
              src={f.slug === "reports-analytics" ? "/images/features/ask-your-data.png"
                : f.slug === "ai-tutor" ? "/images/features/ai-tutor-study-tools.png"
                : "/images/features/students-staff.png"}
              alt={c.alts[f.slug]}
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
                alt={c.alts["mobile-app"]}
                width={709}
                height={1600}
                priority
                sizes="280px"
                className="block h-auto w-full rounded-[2.125rem]"
              />
            </div>
          </div>
        ) : (
          <ProductVisual src={f.screen} mock={f.mock} alt={fill(c.screenAlt, { name: f.name })} priority />
        )}
      >
        {f.slug === "mobile-app" ? (
          <Reveal delay={0.55}>
            <StoreButtons className="mt-10" />
          </Reveal>
        ) : undefined}
      </PageHero>
      <Benefits eyebrow={fill(c.benefitsEyebrow, { name: f.name })} title={c.benefitsTitle} items={f.benefits} />
      <Capabilities name={f.name} items={f.capabilities} />
      <FeatureGrid slugs={related} title={c.related} />
    </PageShell>
  );
}
