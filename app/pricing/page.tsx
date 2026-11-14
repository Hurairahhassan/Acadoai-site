import { FAQ } from "../../components/FAQ";
import { FeatureGrid } from "../../components/FeatureGrid";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { Pricing } from "../../components/Pricing";
import { breadcrumbLd, JsonLd } from "../../components/ui";
import { pageMeta, softwareLd } from "../seo";

export const metadata = pageMeta({
  title: "Pricing – School Management Software Plans",
  description:
    "Simple AcadoAI pricing for schools, colleges and academies. Starter, Growth and Enterprise plans, each with a 30-day free trial and no credit card required.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd([{ name: "Pricing", path: "/pricing" }])} />
      <PageHero crumbs={[{ name: "Pricing" }]} eyebrow="Pricing" title="Simple plans that grow with your school" lead="Every plan includes onboarding, data migration and a 30-day free trial.">
        <span />
      </PageHero>
      <div className="h-20 bg-white" />
      <Pricing />
      <FeatureGrid title="What's inside every plan" eyebrow="Modules" />
      <FAQ />
    </PageShell>
  );
}
