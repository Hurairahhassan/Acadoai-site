import { FAQ } from "../../components/FAQ";
import { FeatureGrid } from "../../components/FeatureGrid";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { Pricing } from "../../components/Pricing";
import { PricingVisual } from "../../components/PricingVisual";
import { Readiness } from "../../components/Readiness";
import { Rollout } from "../../components/Rollout";
import { breadcrumbLd, JsonLd } from "../../components/ui";
import { pageMeta, softwareLd } from "../seo";

export const metadata = pageMeta({
  title: "Pricing – Custom School Management Software Packages",
  description:
    "No fixed subscription. AcadoAI builds a custom package for each school based on users, modules, storage and server needs, with a 2-month free trial.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbLd([{ name: "Pricing", path: "/pricing" }])} />
      <PageHero crumbs={[{ name: "Pricing" }]} eyebrow="Pricing" title="Flexible pricing, built around your institution" lead="No fixed subscription. We size your complete system to your users and operations, so you only pay for what you need."
        visual={<PricingVisual />}
      >
        <span />
      </PageHero>
      <div className="h-20 bg-white" />
      <Pricing />
      <Rollout />
      <Readiness />
      <FeatureGrid title="Modules you can include" eyebrow="Modules" />
      <FAQ />
    </PageShell>
  );
}
