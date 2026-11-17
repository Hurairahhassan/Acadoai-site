import { t } from "../content/request";
import { Reveal } from "./motion";
import { IntroVideoPlayer } from "./IntroVideoPlayer";
import { SectionHeader } from "./ui";

/** Product introduction video in a browser frame; dark section matches the video's navy palette. */
export const IntroVideo = () => {
  const c = t().ui.intro;
  return (
    <section id="intro" aria-labelledby="intro-title" className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(63,90,204,0.45),transparent)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(144,206,255,0.6)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <div className="container-x relative">
        <Reveal>
          <SectionHeader dark center eyebrow={c.eyebrow} title={<span id="intro-title">{c.title}</span>} lead={c.lead} />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-5xl">
          <figure className="overflow-hidden rounded-2xl bg-night shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="ms-3 rounded bg-white/10 px-3 py-0.5 text-[11px] text-white/60">acadoai.com</span>
            </div>
            <IntroVideoPlayer label={c.label} play={c.play} fullscreen={c.fullscreen} watch={c.watch} />
          </figure>
        </Reveal>
      </div>
    </section>
  );
};
