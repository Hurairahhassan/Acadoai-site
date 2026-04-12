"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, BarChart3 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <motion.section
      id="ai"
      className="py-24 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              AI Features
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Intelligence woven into every workflow
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
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
                },
                {
                  icon: <Sparkles className="text-emerald-500" />,
                  title: "AI Content Generator",
                  desc: "Teachers create quizzes, lesson plans, assignments, and presentations in seconds.",
                },
                {
                  icon: <BarChart3 className="text-purple-500" />,
                  title: "Automated Alerts",
                  desc: "Attendance anomalies, declining grades, and overdue fees are flagged automatically.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
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
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl"
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
                className="bg-blue-600 text-white p-5 rounded-xl mb-4 shadow-lg"
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
                className="bg-emerald-50 border border-emerald-100 text-emerald-900 p-5 rounded-xl mb-4 ml-8 shadow-sm"
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
                className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm"
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
                className="bg-emerald-50 border border-emerald-100 text-emerald-900 p-5 rounded-xl mt-4 ml-8 shadow-sm"
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
