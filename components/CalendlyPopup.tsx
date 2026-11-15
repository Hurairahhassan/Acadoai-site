"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

let loader: Promise<void> | null = null;

// Loads Calendly's widget only on the first click, so it never slows the page.
function loadCalendly() {
  loader ??= new Promise<void>((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src = "https://assets.calendly.com/assets/external/widget.js";
    js.async = true;
    js.onload = () => resolve();
    js.onerror = () => {
      loader = null;
      reject(new Error("Calendly failed to load"));
    };
    document.body.appendChild(js);
  });
  return loader;
}

/** Opens every link to calendly.com (all "Book a demo" buttons) as an on-page popup. */
export function CalendlyPopup() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="https://calendly.com/"]');
      if (!a) return;
      e.preventDefault();
      loadCalendly()
        .then(() => window.Calendly?.initPopupWidget({ url: a.href }))
        .catch(() => window.open(a.href, "_blank", "noopener")); // fallback: open Calendly in a new tab
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
