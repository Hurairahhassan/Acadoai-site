"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, BarChart3 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <motion.section
      id="ai"
      className="bubble-section py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-sm font-black uppercase text-blue-700">
              AI Features
            </h2>
            <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Intelligence woven into every workflow
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not just a chatbot. AcadoAI embeds AI where it matters -
              generating, analyzing, answering, and automating across every
              role.
            </p>

            <motion.div
              className="mt-10 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                },
              }}
            >
              {[
                {
                  icon: <Bot className="text-blue-500" />,
                  title: "Ask Your Data",
                  desc: "Admins query the school dataset in plain language with instant answers.",
                  iconBg: "#3b82f6",
                  accent: "rgba(59, 130, 246, 0.14)",
                },
                {
                  icon: <Sparkles className="text-emerald-500" />,
                  title: "AI Content Generator",
                  desc: "Teachers create quizzes, lesson plans, assignments, and presentations in seconds.",
                  iconBg: "#10b981",
                  accent: "rgba(16, 185, 129, 0.14)",
                },
                {
                  icon: <BarChart3 className="text-purple-500" />,
                  title: "Automated Alerts",
                  desc: "Attendance anomalies, declining grades, and overdue fees are flagged automatically.",
                  iconBg: "#a855f7",
                  accent: "rgba(168, 85, 247, 0.13)",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bubble-card flex gap-4 p-4"
                  style={
                    {
                      "--bubble-accent": item.accent,
                      "--bubble-icon": item.iconBg,
                    } as React.CSSProperties
                  }
                  whileHover={{ x: 8, y: -4 }}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  <div className="bubble-icon h-12 w-12 shrink-0 scale-90 [&_svg]:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-950">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <motion.div
              className="bubble-card p-6"
              style={
                {
                  "--bubble-accent": "rgba(37, 99, 235, 0.16)",
                } as React.CSSProperties
              }
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                },
              }}
            >
              <motion.div
                className="mb-4 rounded-[28px] bg-blue-600 p-5 text-white shadow-lg shadow-blue-700/20"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-blue-100 mb-2">
                  YOU
                </div>
                <p className="text-sm leading-6">
                  How many students failed mathematics last semester and which
                  classes?
                </p>
              </motion.div>
              <motion.div
                className="mb-4 ml-8 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5 text-emerald-900 shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-500 mb-2">
                  ACADOAI
                </div>
                <p className="text-sm leading-6">
                  47 students across 3 classes showed below-60% scores. Class 9A
                  had the highest drop. Want me to generate a remediation
                  report?
                </p>
              </motion.div>
              <motion.div
                className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
                  YOU
                </div>
                <p className="text-sm leading-6 text-slate-700">
                  Generate a quiz on photosynthesis for Grade 7, medium
                  difficulty.
                </p>
              </motion.div>
              <motion.div
                className="ml-8 mt-4 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5 text-emerald-900 shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-500 mb-2">
                  ACADOAI
                </div>
                <p className="text-sm leading-6">
                  Done. Created a 10-question mixed-format quiz aligned to
                  curriculum standards.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
