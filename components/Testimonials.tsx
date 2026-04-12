"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    stars: "★★★★★",
    text: "AcadoAi transformed our administrative workload. What took our staff 3 hours a day now takes 20 minutes.",
    name: "Ahmed Raza",
    role: "Principal, Beacon House School",
    avatar: "AR",
    avatarClass: "bg-indigo-100 text-indigo-700",
  },
  {
    stars: "★★★★★",
    text: "My students are more engaged than ever. The AI tutor answers their questions at 11pm when I am not available.",
    name: "Sarah Patterson",
    role: "Head of Science, EduFirst Academy",
    avatar: "SP",
    avatarClass: "bg-emerald-100 text-emerald-700",
  },
  {
    stars: "★★★★★",
    text: "Finance tracking used to be a nightmare across 3 campuses. Now our CFO has a single real-time dashboard.",
    name: "Nadia Khan",
    role: "Operations Director, Horizon Schools",
    avatar: "NK",
    avatarClass: "bg-rose-100 text-rose-700",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-slate-50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Social Proof
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
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
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
