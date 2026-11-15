import { Contact } from "../../components/Contact";
import { FAQ } from "../../components/FAQ";
import { PageHero } from "../../components/PageHero";
import { PageShell } from "../../components/PageShell";
import { breadcrumbLd, JsonLd } from "../../components/ui";
import { pageMeta } from "../seo";

export const metadata = pageMeta({
  title: "Contact Sales & Book a Demo",
  description: "Book a personalised AcadoAI demo or contact our sales and support team. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell cta={false}>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero crumbs={[{ name: "Contact" }]} eyebrow="Contact" title="Let's talk about your school" lead="Book a demo, ask about pricing or get help from support.">
        <span />
      </PageHero>
      <Contact />
      <FAQ />
    </PageShell>
  );
}
