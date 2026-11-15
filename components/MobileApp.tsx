import Image from "next/image";
import { IconTile } from "./icons";
import { Float, Reveal, Stagger, StaggerItem } from "./motion";
import { t } from "../content/request";
import { ButtonLink, SectionHeader } from "./ui";

const sideIcons = ["building", "graduation", "book"] as const;

export const MobileApp = () => {
  const c = t().ui.mobile;
  const sides = c.sides.map((side, i) => ({ ...side, icon: sideIcons[i] }));
  return (
  <section id="mobile" className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9ff,#e9f4ff)] py-28">
    <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <Reveal>
          <SectionHeader
            eyebrow={c.eyebrow}
            title={c.title}
            lead={c.lead}
          />
        </Reveal>
        <Stagger className="mt-10 space-y-4">
          {sides.map((s) => (
            <StaggerItem key={s.title} className="flex gap-4 rounded-2xl bg-white/80 p-5 ring-1 ring-line backdrop-blur">
              <IconTile name={s.icon} />
              <div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 leading-7 text-muted">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <ButtonLink href="/features/mobile-app" variant="ghost">
            {c.cta}
          </ButtonLink>
        </Reveal>
      </div>
      <div className="relative flex justify-center">
        <div aria-hidden className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/60 blur-3xl" />
        <Float distance={12} className="w-full max-w-[280px]">
          <div className="rounded-[2.75rem] bg-night p-2.5 shadow-[0_40px_80px_-25px_rgba(11,24,81,0.5)] ring-1 ring-white/40">
            <Image
              src="/images/photos/mobile_scr.jpeg"
              alt={c.imageAlt}
              width={709}
              height={1600}
              sizes="280px"
              className="block h-auto w-full rounded-[2.125rem]"
            />
          </div>
        </Float>
      </div>
    </div>
  </section>
  );
};
