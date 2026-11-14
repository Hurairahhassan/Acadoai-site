"use client";

import { motion, useReducedMotion } from "framer-motion";

// Re-mounts on every navigation, giving each route a soft fade-in.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
