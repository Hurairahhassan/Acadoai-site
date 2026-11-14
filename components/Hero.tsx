import { Check, CircleCheckBig, Sparkles, TriangleAlert, Wallet } from "lucide-react";
import { Float, Magnetic, Reveal, WordReveal } from "./motion";
import { ButtonLink, DemoButton, Photo } from "./ui";

export const Hero = () => (
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
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> AI-powered education management
          </p>
        </Reveal>
        <h1 className="text-[2.6rem] leading-[1.04] font-semibold text-ink sm:text-6xl lg:text-[3.9rem]">
          <WordReveal text="Education operations and learning, connected by AI." highlight="connected" hlClass="text-royal" />
        </h1>
        <Reveal delay={0.55}>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Manage students, attendance, fees, exams and staff in one platform. AcadoAI automates the routine, flags students who need attention, and
            gives teachers and students practical AI tools.
          </p>
        </Reveal>
        <Reveal delay={0.7} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Magnetic>
            <DemoButton className="w-full px-7 py-4 text-base sm:w-auto" />
          </Magnetic>
          <ButtonLink href="/#platform" variant="ghost" className="px-7 py-4 text-base">
            Explore features
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.85}>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/80">
            {["Automated fee challans", "Role-based access", "AI for every role"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-royal text-white">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Photo with floating product cards */}
      <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
        <div aria-hidden className="absolute top-1/2 left-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] bg-gradient-to-br from-sky/60 to-brand/20" />
        <Reveal y={40}>
          <Photo
            src="/images/photos/hero.jpg"
            alt="Teacher and student using AcadoAI on a tablet"
            priority
            className="aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] shadow-[0_50px_100px_-40px_rgba(11,24,81,0.5)] ring-8 ring-white/70"
          />
        </Reveal>

        <Float delay={0.9} className="absolute top-[14%] -left-4 sm:-left-14">
          <div className="w-60 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgba(11,24,81,0.4)] ring-1 ring-line">
            <p className="flex items-center gap-2 text-[13px] font-semibold text-ink">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-100 text-amber-700">
                <TriangleAlert className="h-4 w-4" aria-hidden />
              </span>
              3 students need attention
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Admin", "Teacher", "Parent"].map((r) => (
                <span key={r} className="rounded-full bg-royal px-2 py-0.5 text-[11px] font-semibold text-white">
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-muted">Alerts sent automatically</p>
          </div>
        </Float>

        <Float delay={1.1} distance={10} className="absolute -right-2 bottom-[26%] sm:-right-10">
          <div className="w-48 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgba(11,24,81,0.4)] ring-1 ring-line">
            <p className="text-[11px] font-medium text-muted">Today's attendance</p>
            <div className="mt-2 flex items-center gap-3">
              <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90" aria-hidden>
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-paper)" strokeWidth="5" />
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-royal)" strokeWidth="5" strokeDasharray="91 100" pathLength="100" strokeLinecap="round" />
              </svg>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">94%</p>
                <p className="flex items-center gap-1 text-[11px] text-emerald-600">
                  <CircleCheckBig className="h-3 w-3" aria-hidden /> Auto-marked
                </p>
              </div>
            </div>
          </div>
        </Float>

        <Float delay={1.3} className="absolute bottom-[6%] -left-2 sm:-left-8">
          <div className="flex items-center gap-3 rounded-2xl bg-navy p-3 pr-5 text-white shadow-[0_24px_50px_-20px_rgba(11,24,81,0.6)]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky text-night">
              <Wallet className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-[13px] font-semibold">March challans generated</p>
              <p className="text-[11px] text-sky">Billing policy · automatic</p>
            </div>
          </div>
        </Float>

        <Float delay={1.5} distance={6} className="absolute top-[4%] right-[6%]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-royal shadow-lg ring-1 ring-sky/60">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> AcadoAI
          </span>
        </Float>
      </div>
    </div>
  </section>
);
