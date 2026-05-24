"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    stars: "★★★★★",
    text: "AcadoAI transformed our administrative workload. What took our staff 3 hours a day now takes 20 minutes.",
    name: "Ahmed Raza",
    role: "Principal, Beacon House School",
    avatar: "AR",
    avatarClass: "bg-indigo-100 text-indigo-700",
    accent: "rgba(79, 70, 229, 0.14)",
  },
  {
    stars: "★★★★★",
    text: "My students are more engaged than ever. The AI tutor answers their questions at 11pm when I am not available.",
    name: "Sarah Patterson",
    role: "Head of Science, EduFirst Academy",
    avatar: "SP",
    avatarClass: "bg-emerald-100 text-emerald-700",
    accent: "rgba(16, 185, 129, 0.14)",
  },
  {
    stars: "★★★★★",
    text: "Finance tracking used to be a nightmare across 3 campuses. Now our CFO has a single real-time dashboard.",
    name: "Nadia Khan",
    role: "Operations Director, Horizon Schools",
    avatar: "NK",
    avatarClass: "bg-rose-100 text-rose-700",
    accent: "rgba(244, 63, 94, 0.13)",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <motion.section
      id="testimonials"
      className="bubble-section bubble-section-soft py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-sm font-black uppercase text-blue-700">
            Social Proof
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Trusted by schools across the globe
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
          }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              className="bubble-card p-7"
              style={
                {
                  "--bubble-accent": item.accent,
                } as React.CSSProperties
              }
              whileHover={{ y: -10, rotate: -0.4 }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
            >
              <div className="mb-4 text-yellow-500">{item.stars}</div>
              <p className="mb-6 text-sm leading-7 text-slate-600 italic">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${item.avatarClass}`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
