"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Search } from "lucide-react";

const portalCards = [
  {
    label: "Administrator",
    title: "Command & Control",
    icon: <Building2 className="h-6 w-6 text-blue-600" />,
    items: [
      "Real-time school overview snapshot",
      "Ask Your Data with AI-powered reporting",
      "Finance: revenue, expenses, payroll",
      "User and class management",
      "Attendance tracking for staff and students",
      "Role-based permission controls",
    ],
    accent: "border-blue-200 bg-blue-50/50",
  },
  {
    label: "Educator",
    title: "Teach Smarter",
    icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
    items: [
      "AI presentation and lecture plan generator",
      "AI quiz and assignment creator",
      "Lecture assistant for live sessions",
      "NoteBookLM for notes to lessons",
      "Class test, attendance, grading tools",
      "Student performance analytics",
    ],
    accent: "border-emerald-200 bg-emerald-50/50",
  },
  {
    label: "Student",
    title: "Learn Without Limits",
    icon: <Search className="h-6 w-6 text-rose-600" />,
    items: [
      "AcadoAI Tutor for live conversations",
      "Subject-wise specialized AI assistant",
      "NoteBookLM flashcards and mind maps",
      "Assignments, results, fee status",
      "Class schedule and timetable",
      "Multilingual audio learning support",
    ],
    accent: "border-rose-200 bg-rose-50/50",
  },
];

export const DashboardShowcase: React.FC = () => {
  return (
    <motion.section
      id="portals"
      className="py-24 bg-slate-50"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Role-Based Access
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Three portals, one platform.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Distinct experiences for every stakeholder so each role sees exactly
            what it needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {portalCards.map((card) => (
            <motion.div
              key={card.label}
              className={`rounded-2xl border p-8 shadow-sm ${card.accent} bg-white`}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 mb-5">
                {card.icon}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                {card.label}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
