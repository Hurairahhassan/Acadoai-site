"use client";

import { Maximize, Play } from "lucide-react";
import { useRef, useState } from "react";

const SRC = "/videos/AcadoAI_Marketing_Video_v2.mp4";

export function IntroVideoPlayer({ label, play, fullscreen, watch }: { label: string; play: string; fullscreen: string; watch: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const goFullscreen = () => {
    const v = ref.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
    else v.webkitEnterFullscreen?.(); // iOS Safari
  };

  return (
    <div className="relative">
      {/* preload="none": large file with sound, so it only downloads when the visitor presses play. */}
      <video
        ref={ref}
        controls={started}
        playsInline
        preload="none"
        poster="/videos/acadoai-intro-poster.jpg"
        aria-label={label}
        onPlay={() => setStarted(true)}
        className="block aspect-video h-auto w-full bg-night"
      >
        <source src={SRC} type="video/mp4" />
        <a href={SRC}>{watch}</a>
      </video>

      {!started && (
        <button
          type="button"
          onClick={() => { setStarted(true); ref.current?.play(); }}
          aria-label={play}
          className="group absolute inset-0 grid place-items-center bg-night/20 transition hover:bg-night/10"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-royal shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] ring-8 ring-white/25 transition group-hover:scale-110 sm:h-24 sm:w-24">
            <Play className="ms-1 h-9 w-9 fill-current" aria-hidden />
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={goFullscreen}
        aria-label={fullscreen}
        title={fullscreen}
        className="absolute end-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-night/60 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-night/80"
      >
        <Maximize className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
