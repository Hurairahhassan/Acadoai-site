"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { Content } from "../content/pages";

export function PersonaTabsClient({
  personas,
  screens,
  labels,
}: {
  personas: Content["personas"];
  screens: ReactNode[];
  labels: { tabs: string; explore: string[] };
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = personas[active];

  const onKey = (e: KeyboardEvent) => {
    // In right-to-left pages the visual order of the tabs is reversed.
    const rtl = document.documentElement.dir === "rtl";
    const dir = e.key === "ArrowRight" ? (rtl ? -1 : 1) : e.key === "ArrowLeft" ? (rtl ? 1 : -1) : 0;
    if (!dir) return;
    const next = (active + dir + personas.length) % personas.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-14">
      <div role="tablist" aria-label={labels.tabs} onKeyDown={onKey} className="flex gap-1 overflow-x-auto border-b border-line [scrollbar-width:none]">
        {personas.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${item.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative shrink-0 px-4 pb-4 pt-2 text-[15px] font-semibold transition-colors ${i === active ? "text-royal" : "text-muted hover:text-ink"}`}
          >
            {item.label}
            {i === active && <motion.span layoutId="persona-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-royal" transition={{ type: "spring", stiffness: 420, damping: 36 }} />}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} className="mt-12 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: 24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-3xl leading-tight font-semibold text-ink sm:text-4xl">{p.title}</h3>
            <p className="mt-4 text-lg leading-8 text-muted">{p.lead}</p>
            <ul className="mt-8 space-y-4">
              {p.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="flex gap-3 text-ink"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky/40">
                    <Check className="h-3.5 w-3.5 text-royal" aria-hidden />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
            <Link href={p.href} className="group mt-10 inline-flex items-center gap-2 font-semibold text-royal">
              <span className="link-underline">{labels.explore[active]}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className={`relative rounded-[2rem] bg-[linear-gradient(160deg,#e6f3ff,#f3f5ff)] ${p.id === "leaders" || p.id === "teachers" || p.id === "students" ? "p-3 sm:p-4" : "p-6 sm:p-10"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {screens[active]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
