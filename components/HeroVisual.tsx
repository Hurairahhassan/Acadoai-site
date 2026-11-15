import { CircleCheckBig, Sparkles, TriangleAlert, Wallet } from "lucide-react";
import { Float, Reveal } from "./motion";
import { t } from "../content/request";
import { Photo } from "./ui";

export const HeroVisual = ({ src, alt }: { src: string; alt: string }) => {
  const c = t().ui.heroVisual;
  return (
  <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
    <div aria-hidden className="absolute top-1/2 left-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] bg-gradient-to-br from-sky/60 to-brand/20" />
    <Reveal y={40}>
      <Photo
        src={src}
        alt={alt}
        priority
        className="aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] shadow-[0_50px_100px_-40px_rgba(11,24,81,0.5)] ring-8 ring-white/70"
      />
    </Reveal>

    <Float delay={0.9} className="absolute top-[14%] -start-4 sm:-start-14">
      <div className="w-60 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgba(11,24,81,0.4)] ring-1 ring-line">
        <p className="flex items-center gap-2 text-[13px] font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-amber-100 text-amber-700">
            <TriangleAlert className="h-4 w-4" aria-hidden />
          </span>
          {c.needAttention}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {c.roles.map((r) => (
            <span key={r} className="rounded-full bg-royal px-2 py-0.5 text-[11px] font-semibold text-white">
              {r}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-muted">{c.alertsSent}</p>
      </div>
    </Float>

    <Float delay={1.1} distance={10} className="absolute -end-2 bottom-[26%] sm:-end-10">
      <div className="w-48 rounded-2xl bg-white p-4 shadow-[0_24px_50px_-20px_rgba(11,24,81,0.4)] ring-1 ring-line">
        <p className="text-[11px] font-medium text-muted">{c.attendance}</p>
        <div className="mt-2 flex items-center gap-3">
          <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90" aria-hidden>
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-paper)" strokeWidth="5" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--color-royal)" strokeWidth="5" strokeDasharray="91 100" pathLength="100" strokeLinecap="round" />
          </svg>
          <div>
            <p className="font-display text-2xl font-semibold text-ink">94%</p>
            <p className="flex items-center gap-1 text-[11px] text-emerald-600">
              <CircleCheckBig className="h-3 w-3" aria-hidden /> {c.autoMarked}
            </p>
          </div>
        </div>
      </div>
    </Float>

    <Float delay={1.3} className="absolute bottom-[6%] -start-2 sm:-start-8">
      <div className="flex items-center gap-3 rounded-2xl bg-navy p-3 pe-5 text-white shadow-[0_24px_50px_-20px_rgba(11,24,81,0.6)]">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky text-night">
          <Wallet className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-[13px] font-semibold">{c.challans}</p>
          <p className="text-[11px] text-sky">{c.billing}</p>
        </div>
      </div>
    </Float>

    <Float delay={1.5} distance={6} className="absolute top-[4%] end-[6%]">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-royal shadow-lg ring-1 ring-sky/60">
        <Sparkles className="h-3.5 w-3.5" aria-hidden /> AcadoAI
      </span>
    </Float>
  </div>
  );
};
