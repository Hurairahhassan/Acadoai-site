"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

function Step({
  index,
  title,
  text,
  screen,
  active,
  onActive,
}: {
  index: number;
  title: string;
  text: string;
  screen: ReactNode;
  active: boolean;
  onActive: () => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  // Dimming only applies on desktop, where the screenshot column follows the active step.
  return (
    <li ref={ref} className="lg:flex lg:min-h-[70vh] lg:items-center lg:py-12">
      <div className={`lg:border-l-2 lg:pl-6 lg:transition-colors lg:duration-500 ${active ? "lg:border-sky" : "lg:border-white/15"}`}>
        <span className="font-mono text-sm text-sky">0{index + 1}</span>
        <h3 className={`mt-2 text-3xl font-semibold transition-colors duration-500 sm:text-4xl ${active ? "" : "lg:text-white/40"}`}>{title}</h3>
        <p className={`mt-4 max-w-md text-lg leading-8 text-white/75 transition-colors duration-500 ${active ? "" : "lg:text-white/35"}`}>{text}</p>
        <div className="mt-8 lg:hidden">{screen}</div>
      </div>
    </li>
  );
}

export function AIStoryClient({ steps, screens }: { steps: { title: string; text: string }[]; screens: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // One list for every screen size, so each step's text appears once in the page.
  return (
    <div className="mt-14 gap-12 lg:mt-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] xl:gap-16">
      <ol className="space-y-16 lg:space-y-0">
        {steps.map((s, i) => (
          <Step key={s.title} index={i} {...s} screen={screens[i]} active={i === active} onActive={() => setActive(i)} />
        ))}
      </ol>
      <div className="sticky top-[15vh] hidden h-[70vh] items-center lg:flex">
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
  );
}
