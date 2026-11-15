import { HeroVisual } from "./HeroVisual";
import { Check, Sparkles } from "lucide-react";
import { Magnetic, Reveal, WordReveal } from "./motion";
import { t } from "../content/request";
import { ButtonLink, DemoButton } from "./ui";

export const Hero = () => {
  const c = t().ui.hero;
  return (
  <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
    {/* Light sky gradient background */}
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#e4f3ff_0%,#f5f9ff_42%,#eef1ff_100%)]">
      <div className="absolute -top-40 -left-40 h-[620px] w-[620px] animate-sweep rounded-full bg-[radial-gradient(closest-side,rgba(144,206,255,0.55),transparent)]" />
      <div className="absolute -right-32 bottom-0 h-[560px] w-[560px] animate-sweep rounded-full bg-[radial-gradient(closest-side,rgba(63,90,204,0.18),transparent)] [animation-delay:-6s]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </div>

    <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <Reveal y={12}>
          <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-royal ring-1 ring-sky/60 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> {c.eyebrow}
          </p>
        </Reveal>
        <h1 className="text-[2.6rem] leading-[1.04] font-semibold text-ink sm:text-6xl lg:text-[3.9rem]">
          <WordReveal text={c.title} highlight={c.highlight} hlClass="text-royal" />
        </h1>
        <Reveal delay={0.55}>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            {c.lead}
          </p>
        </Reveal>
        <Reveal delay={0.7} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Magnetic>
            <DemoButton className="w-full px-7 py-4 text-base sm:w-auto" />
          </Magnetic>
          <ButtonLink href="/#platform" variant="ghost" className="px-7 py-4 text-base">
            {c.explore}
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.85}>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/80">
            {c.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-royal text-white">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <HeroVisual
        src="/images/people/herosection-realistic.png"
        alt={c.imageAlt}
      />
    </div>
  </section>
  );
};
