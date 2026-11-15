import { Check } from "lucide-react";
import { t } from "../content/request";
import { Reveal } from "./motion";
import { SectionHeader } from "./ui";

export const Rollout = () => {
  const { rolloutPhases, ui } = t();
  const c = ui.rollout;
  return (
  <section id="rollout" className="bg-paper py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          eyebrow={c.eyebrow}
          title={c.title}
          lead={c.lead}
        />
      </Reveal>
      <ol className="relative mt-16 space-y-6 before:absolute before:top-2 before:bottom-2 before:start-6 before:w-px before:bg-line sm:before:start-7">
        {rolloutPhases.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 0.05} className="relative grid grid-cols-[3rem_1fr] gap-5 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-royal font-mono text-sm font-semibold text-white ring-8 ring-paper sm:h-14 sm:w-14">
                0{i + 1}
              </span>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">{p.title}</h3>
                  <span className="rounded-full bg-sky/20 px-3 py-1 text-xs font-semibold text-royal">{p.when}</span>
                </div>
                <p className="mt-3 max-w-3xl leading-7 text-muted">{p.text}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="eyebrow text-muted">{c.deliverables}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.deliverables.map((d) => (
                      <li key={d} className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-line">
                        <Check className="h-3.5 w-3.5 text-royal" aria-hidden /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
  );
};
