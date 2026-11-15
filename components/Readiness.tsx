import { Check, Mail, Phone } from "lucide-react";
import { readiness, site } from "../content/pages";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

export const Readiness = () => (
  <section id="readiness" className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          eyebrow="Before and after go-live"
          title="Operational readiness, training & support"
          lead="We check that your institution is ready before it goes live, train every role, and stay with you after launch."
        />
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-3xl bg-navy p-8 text-white sm:p-10">
          <p className="eyebrow text-sky">Operational readiness</p>
          <h3 className="mt-3 text-2xl font-semibold">Go-live checklist</h3>
          <p className="mt-2 leading-7 text-white/70">Your institution goes live only when every item is signed off with your team.</p>
          <ul className="mt-8 space-y-4">
            {readiness.checklist.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky text-night">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-paper p-8 ring-1 ring-line sm:p-10">
          <p className="eyebrow text-royal">Training</p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">Role-based training, free of cost</h3>
          <p className="mt-2 leading-7 text-muted">Each team learns only what their daily work needs, on the web portal and mobile apps.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {readiness.training.map((t) => (
              <li key={t.role} className="rounded-2xl bg-white p-5 ring-1 ring-line">
                <IconTile name={t.icon} size="sm" />
                <p className="mt-4 font-semibold text-ink">{t.role}</p>
                <p className="mt-1 text-[15px] leading-6 text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <p className="eyebrow text-royal">Support</p>
        <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">We stay with you after launch</h3>
      </Reveal>
      <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {readiness.support.map((s) => (
          <StaggerItem key={s.title} className="rounded-[1.5rem] border border-line p-6">
            <IconTile name={s.icon} />
            <h4 className="mt-5 text-lg font-semibold text-ink">{s.title}</h4>
            <p className="mt-2 text-[15px] leading-6 text-muted">{s.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
        <a href={`mailto:${site.supportEmail}`} className="inline-flex items-center gap-2 font-semibold text-royal hover:underline">
          <Mail className="h-4 w-4" aria-hidden /> {site.supportEmail}
        </a>
        <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold text-royal hover:underline">
          <Phone className="h-4 w-4" aria-hidden /> {site.phone}
        </a>
      </Reveal>
    </div>
  </section>
);
