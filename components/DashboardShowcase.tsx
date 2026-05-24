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
    iconBg: "#2563eb",
    accent: "rgba(37, 99, 235, 0.16)",
    bullet: "#60a5fa",
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
    iconBg: "#10b981",
    accent: "rgba(16, 185, 129, 0.16)",
    bullet: "#34d399",
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
    iconBg: "#f43f5e",
    accent: "rgba(244, 63, 94, 0.14)",
    bullet: "#fb7185",
  },
];

export const DashboardShowcase: React.FC = () => {
  return (
    <motion.section
      id="portals"
      className="bubble-section bubble-section-soft py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-sm font-black uppercase text-blue-700">
            Role-Based Access
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Three portals, one calm operating system.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Distinct experiences for every stakeholder so each role sees exactly
            what it needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
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
              className="bubble-card p-7"
              style={
                {
                  "--bubble-accent": card.accent,
                  "--bubble-icon": card.iconBg,
                } as React.CSSProperties
              }
              whileHover={{ y: -12, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
            >
              <div className="bubble-icon mb-7 bg-white text-white [&_svg]:text-white">
                {card.icon}
              </div>
              <div className="mb-3 text-xs font-black uppercase text-slate-500">
                {card.label}
              </div>
              <h3 className="mb-5 text-2xl font-black text-slate-950">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 rounded-full shadow-sm"
                      style={{ backgroundColor: card.bullet }}
                    />
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
