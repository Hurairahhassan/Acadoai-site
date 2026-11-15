import { Check } from "lucide-react";
import { site } from "../content/pages";
import { t } from "../content/request";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { ButtonLink, SectionHeader } from "./ui";

export const Pricing = () => {
  const { pricingFactors, pricingIncludes, pricingSteps, ui } = t();
  const c = ui.pricing;
  return (
  <section id="pricing" className="bg-white pb-28">
    <div className="container-x">
      <ol className="grid gap-6 lg:grid-cols-3">
        {pricingSteps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.08} className="rounded-2xl border border-line p-8">
            <span className="font-mono text-sm text-royal">0{i + 1}</span>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{s.title}</h2>
            <p className="mt-3 leading-7 text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-24">
        <SectionHeader eyebrow={c.factorsEyebrow} title={c.factorsTitle} lead={c.factorsLead} />
      </Reveal>
      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {pricingFactors.map((f) => (
          <StaggerItem key={f.title} className="rounded-[1.5rem] bg-paper p-6 ring-1 ring-line">
            <IconTile name={f.icon} />
            <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-muted">{f.text}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-20 grid gap-10 rounded-3xl bg-navy p-8 text-white shadow-[0_40px_80px_-40px_rgba(4,14,69,0.8)] sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow text-sky">{c.includes}</p>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {pricingIncludes.map((item) => (
              <li key={item} className="flex gap-3 text-lg">
                <Check className="mt-1 h-5 w-5 shrink-0 text-sky" aria-hidden /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 lg:w-64">
          <ButtonLink href={site.demoUrl} variant="sky" className="w-full py-4">
            {c.quote}
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghostDark" className="w-full py-4">
            {c.talk}
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  </section>
  );
};
