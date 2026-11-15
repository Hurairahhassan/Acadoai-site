import Image from "next/image";
import { Reveal } from "../../../components/motion";
import { PageHero } from "../../../components/PageHero";
import { PageShell } from "../../../components/PageShell";
import { Security } from "../../../components/Security";
import { breadcrumbLd, JsonLd, Photo, SectionHeader } from "../../../components/ui";
import { isLocale } from "../../../content/i18n";
import { getContent } from "../../../content/pages";
import { setLang } from "../../../content/request";
import { pageMeta } from "../../seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang).ui.aboutPage;
  return pageMeta({ lang, title: c.metaTitle, description: c.metaDescription, path: "/about" });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  setLang(lang);
  const { aboutPage: c, common } = getContent(lang).ui;
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: common.about, path: "/about" }])} />
      <PageHero
        crumbs={[{ name: common.about }]}
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        visual={
          <div className="mx-auto w-full max-w-[540px] rounded-[1.75rem] border border-sky/50 bg-white/70 p-2.5 shadow-[0_30px_70px_-30px_rgba(11,24,81,0.35)] sm:p-3">
            <Image
              src="/images/about/acadoai-hero.png"
              alt={c.heroAlt}
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 640px) 516px, 100vw"
              className="block h-auto w-full rounded-2xl object-contain"
            />
          </div>
        }
      />
      <section className="bg-white py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow={c.missionEyebrow}
              title={c.missionTitle}
              lead={c.missionLead}
            />
          </Reveal>
          <Photo src="/images/photos/mission-learning.png" alt={c.missionAlt} className="aspect-[4/3] rounded-2xl" />
        </div>
        <div className="container-x mt-24 grid gap-12 sm:grid-cols-3">
          {c.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="border-t-2 border-ink pt-6">
              <h3 className="text-2xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-lg leading-8 text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <Security />
    </PageShell>
  );
}
