"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

function Step({ index, title, text, active, onActive }: { index: number; title: string; text: string; active: boolean; onActive: () => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <li ref={ref} className="lg:flex lg:min-h-[60vh] lg:items-center first:lg:min-h-[45vh] first:lg:items-start first:lg:pt-[12vh] last:lg:min-h-[50vh]">
      <div className={`border-l-2 pl-6 transition-colors duration-500 ${active ? "border-sky" : "border-white/15"}`}>
        <span className="font-mono text-sm text-sky">0{index + 1}</span>
        <h3 className={`mt-2 text-3xl font-semibold transition-colors duration-500 sm:text-4xl ${active ? "text-white" : "text-white/40"}`}>{title}</h3>
        <p className={`mt-4 max-w-md text-lg leading-8 transition-colors duration-500 ${active ? "text-white/75" : "text-white/35"}`}>{text}</p>
      </div>
    </li>
  );
}

export function AIStoryClient({ steps, screens }: { steps: { title: string; text: string }[]; screens: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <>
      {/* Desktop: sticky screenshot, text scrolls */}
      <div className="mt-8 hidden gap-16 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
        <ol>
          {steps.map((s, i) => (
            <Step key={s.title} index={i} {...s} active={i === active} onActive={() => setActive(i)} />
          ))}
        </ol>
        <div className="sticky top-[10vh] flex h-[80vh] items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="w-full"
              initial={reduce ? false : { opacity: 0, y: 40, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -30 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {screens[active]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: stacked */}
      <ol className="mt-14 space-y-16 lg:hidden">
        {steps.map((s, i) => (
          <motion.li key={s.title} initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <span className="font-mono text-sm text-sky">0{i + 1}</span>
            <h3 className="mt-2 text-3xl font-semibold">{s.title}</h3>
            <p className="mt-3 mb-8 text-lg leading-8 text-white/75">{s.text}</p>
            {screens[i]}
          </motion.li>
        ))}
      </ol>
    </>
  );
}
