"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  CircleGauge,
  Layers3,
  Sparkles,
} from "lucide-react";

const competitors = [
  {
    name: "PowerSchool",
    focus: "A mature K-12 SIS with compliance reporting, scheduling, gradebook, portals, and broad integrations.",
    gap: "Strong as a system of record, but many institutions still need separate workflows for AI tutoring, content generation, finance automation, and day-to-day action.",
    acado: "AcadoAI is positioned as an AI-first Education Management operating system: records, teaching tools, finance, communication, and AI workflows in one modern experience.",
    accent: "rgba(37, 99, 235, 0.16)",
  },
  {
    name: "Skooly",
    focus: "An all-in-one school management platform with mobile apps, integrations, cloud hosting, admissions, SIS, and parent engagement.",
    gap: "Good operational coverage, but the public positioning is still closer to classic school management modules.",
    acado: "AcadoAI goes further with ask-your-data, AI tutor, lesson and quiz generation, automated alerts, and role-based AI support.",
    accent: "rgba(16, 185, 129, 0.16)",
  },
  {
    name: "Teachmint",
    focus: "An integrated school platform for LMS, assessments, fee management, SIS, admissions, exam planner, and student tracking.",
    gap: "Useful for digitizing processes, but schools looking for deeper AI across admin, teaching, finance, and student support need a more AI-native story.",
    acado: "AcadoAI connects operations with AI decisions: staff can generate, analyze, answer, and automate inside the same platform.",
    accent: "rgba(168, 85, 247, 0.15)",
  },
  {
    name: "Blackbaud",
    focus: "A broad private-school suite covering admissions, business office, teachers, students, families, fundraising, tuition, SIS, and LMS.",
    gap: "Powerful for private-school ecosystems, but it can feel enterprise-heavy for institutions wanting a simpler, modern AI-led rollout.",
    acado: "AcadoAI is built for a sharper everyday experience: fewer disconnected handoffs, faster adoption, and AI assistance for every role.",
    accent: "rgba(244, 63, 94, 0.14)",
  },
];

const reasons = [
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    label: "AI-native from day one",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    label: "One platform for every role",
  },
  {
    icon: <CircleGauge className="h-5 w-5" />,
    label: "Built for speed and adoption",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    label: "Clear value for management",
  },
];

export const CompetitorComparison: React.FC = () => {
  return (
    <motion.section
      className="bubble-section bubble-section-soft py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <span className="bubble-orb three" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="bubble-chip inline-flex items-center gap-2 px-4 py-2 text-sm font-black text-blue-700">
            <Sparkles className="h-4 w-4" />
            Why choose AcadoAI
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Not another school ERP. A smarter Education Management engine.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Competitors digitize records and modules. AcadoAI is designed to
            help schools act faster: automate repetitive work, support teachers,
            guide students, improve parent trust, and turn data into decisions.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {reasons.map((reason) => (
            <motion.span
              key={reason.label}
              className="bubble-chip inline-flex items-center gap-2 px-4 py-2 text-sm font-black text-slate-700"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              {reason.icon}
              {reason.label}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.08 },
            },
          }}
        >
          {competitors.map((item) => (
            <motion.div
              key={item.name}
              className="bubble-card p-6"
              style={
                {
                  "--bubble-accent": item.accent,
                } as React.CSSProperties
              }
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
            >
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-slate-950">
                    {item.name}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                    Public positioning
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-black uppercase text-slate-400">
                      What they focus on
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.focus}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-slate-400">
                      Where schools still feel friction
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.gap}
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-blue-100 bg-blue-50 p-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                      <div>
                        <p className="text-xs font-black uppercase text-blue-700">
                          AcadoAI difference
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          {item.acado}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
