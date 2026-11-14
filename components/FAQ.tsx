import { faqs } from "../content/pages";
import { FAQClient } from "./FAQClient";
import { Reveal } from "./motion";
import { JsonLd, SectionHeader } from "./ui";

export const FAQ = ({ items = faqs }: { items?: { q: string; a: string }[] }) => (
  <section id="faq" className="bg-white py-28">
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }}
    />
    <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <SectionHeader eyebrow="FAQ" title="Questions institutions ask us" lead="Can't find your answer? Our team replies within one business day." />
      </Reveal>
      <FAQClient items={items} />
    </div>
  </section>
);
