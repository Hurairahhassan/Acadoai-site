import { Reveal } from "../../components/motion";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { Security } from "../../components/Security";
import { breadcrumbLd, JsonLd, Photo, SectionHeader } from "../../components/ui";
import { pageMeta } from "../seo";

export const metadata = pageMeta({
  title: "About AcadoAI – AI-first Education Management",
  description: "AcadoAI builds AI-first school management software so educators spend less time on administration and more time on teaching.",
  path: "/about",
});

const values = [
  { title: "Teachers first", text: "Every feature is judged by one question: does it give a teacher time back?" },
  { title: "AI that earns its place", text: "AI belongs where it removes real work, not as a badge on the box." },
  { title: "Privacy by design", text: "Each school's data is isolated and only visible to the people who need it." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbLd([{ name: "About", path: "/about" }])} />
      <PageHero
        crumbs={[{ name: "About" }]}
        eyebrow="About AcadoAI"
        title="We build the software we wished our schools had"
        lead="AcadoAI brings administration, teaching, finance and learning into one AI-first platform, so schools can focus on students."
      />
      <section className="bg-white py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Our mission"
              title="Give every educator back the hours admin takes away."
              lead="Schools run on dozens of disconnected tools, spreadsheets and phone calls. We replace them with one calm system where AI handles the repetitive work."
            />
          </Reveal>
          <Photo src="/images/photos/team.jpg" alt="The AcadoAI team" className="aspect-[4/3] rounded-2xl" />
        </div>
        <div className="container-x mt-24 grid gap-12 sm:grid-cols-3">
          {values.map((v, i) => (
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
