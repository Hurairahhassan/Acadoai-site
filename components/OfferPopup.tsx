"use client";

import { ArrowRight, CalendarCheck, DatabaseZap, Gift, GraduationCap, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site, type Content } from "../content/pages";

const SEEN_KEY = "acado-offer-seen";
const DELAY_MS = 6000;

const perkIcons = [CalendarCheck, DatabaseZap, GraduationCap];

/**
 * Launch offer in the bottom-left corner. It opens by itself once per visitor;
 * after that a "Free trial" button stays in the corner to reopen it.
 */
export function OfferPopup({ copy }: { copy: Content["ui"]["offer"] }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false); // launcher appears after mount, avoiding a hydration flash
  const closeRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setReady(true);
    let seen = false;
    try {
      seen = !!localStorage.getItem(SEEN_KEY);
    } catch {
      // storage blocked: auto-open every visit, the launcher still works
    }
    if (seen) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = (returnFocus = true) => {
    setOpen(false);
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {}
    if (returnFocus) requestAnimationFrame(() => launcherRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!ready) return null;

  return (
    <div className="fixed bottom-4 start-4 z-[90] sm:bottom-6 sm:start-6">
      {open ? (
        <div
          role="dialog"
          aria-labelledby="offer-title"
          className="w-[calc(100vw-2rem)] max-w-sm origin-bottom-left rtl:origin-bottom-right animate-[popIn_0.4s_ease] overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(4,14,69,0.55)] ring-1 ring-line"
        >
          <div className="relative bg-[linear-gradient(165deg,#e4f3ff_0%,#f5f9ff_55%,#eef1ff_100%)] px-6 pt-6 pb-5">
            <button
              ref={closeRef}
              type="button"
              onClick={() => close()}
              aria-label={copy.close}
              className="absolute top-3 end-3 grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-white hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <p className="eyebrow inline-flex rounded-full bg-royal px-3 py-1 text-white">{copy.eyebrow}</p>
            <h2 id="offer-title" className="mt-3 text-2xl leading-tight font-semibold text-ink">
              {copy.titleStart} <span className="text-royal">{copy.titleHighlight}</span>
            </h2>
            <p className="mt-1 text-[15px] text-muted">{copy.lead}</p>
          </div>
          <ul className="space-y-3.5 px-6 py-5">
            {copy.perks.map(({ title, text }, i) => {
              const Icon = perkIcons[i];
              return (
              <li key={title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-royal text-white">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{title}</span>
                  <span className="block text-sm leading-5 text-muted">{text}</span>
                </span>
              </li>
              );
            })}
          </ul>
          <div className="border-t border-line px-6 py-5">
            {/* CalendlyPopup intercepts this link and opens the booking widget */}
            <a
              href={site.demoUrl}
              onClick={() => close(false)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-royal px-6 py-3 font-semibold text-white shadow-[0_10px_24px_-10px_rgba(42,58,186,0.8)] transition-colors hover:bg-brand"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
            </a>
          </div>
        </div>
      ) : (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="group flex animate-[popIn_0.4s_ease] items-center gap-2.5 rounded-full bg-royal py-2 ps-2 pe-5 font-semibold text-white shadow-[0_14px_30px_-10px_rgba(42,58,186,0.85)] ring-4 ring-white/70 transition-colors hover:bg-brand"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-sky text-night">
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-sky/60 motion-reduce:hidden" />
            <Gift className="relative h-[18px] w-[18px]" aria-hidden />
          </span>
          <span className="text-sm">
            {copy.launcher}
            <span className="hidden sm:inline"> {copy.launcherMore}</span>
          </span>
        </button>
      )}
    </div>
  );
}
