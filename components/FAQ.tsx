import { FAQClient } from "./FAQClient";
import { Reveal } from "./motion";
import { t } from "../content/request";
import { JsonLd, SectionHeader } from "./ui";

export const FAQ = ({ items: custom }: { items?: { q: string; a: string }[] }) => {
  const { faqs, ui } = t();
  const items = custom ?? faqs;
  return (
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
        <SectionHeader eyebrow="FAQ" title={ui.faq.title} lead={ui.faq.lead} />
      </Reveal>
      <FAQClient items={items} />
    </div>
  </section>
  );
};
