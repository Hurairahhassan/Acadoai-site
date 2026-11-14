import { Check } from "lucide-react";
import { plans, site } from "../content/pages";
import { Stagger, StaggerItem } from "./motion";
import { ButtonLink } from "./ui";

export const Pricing = () => (
  <section id="pricing" className="bg-white pb-28">
    <Stagger className="container-x grid gap-6 lg:grid-cols-3">
      {plans.map((p) => (
        <StaggerItem
          key={p.name}
          className={`relative flex flex-col rounded-2xl p-8 sm:p-10 ${p.featured ? "bg-navy text-white shadow-[0_40px_80px_-40px_rgba(4,14,69,0.8)]" : "border border-line bg-white text-ink"}`}
        >
          {p.featured && <span className="eyebrow absolute right-8 top-8 rounded-full bg-sky px-3 py-1 text-night">Most popular</span>}
          <h2 className="text-2xl font-semibold">{p.name}</h2>
          <p className={`mt-2 ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
          <p className="mt-8 flex items-baseline gap-1">
            <span className="font-display text-6xl font-semibold tracking-tight">{p.price === "Custom" ? "Custom" : `$${p.price}`}</span>
            <span className={p.featured ? "text-white/60" : "text-muted"}>{p.period}</span>
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3">
                <Check className={`mt-0.5 h-5 w-5 shrink-0 ${p.featured ? "text-sky" : "text-brand"}`} aria-hidden /> {f}
              </li>
            ))}
          </ul>
          <ButtonLink href={p.price === "Custom" ? "/contact" : site.demoUrl} variant={p.featured ? "sky" : "primary"} className="mt-10 w-full py-4">
            {p.cta}
          </ButtonLink>
        </StaggerItem>
      ))}
    </Stagger>
    <p className="container-x mt-8 text-center text-muted">All plans include a 30-day free trial. No credit card required. Prices in USD, billed monthly.</p>
  </section>
);
