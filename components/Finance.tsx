"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, TrendingUp, Users, FileText } from "lucide-react";

const financeCards = [
  {
    icon: <CreditCard className="h-7 w-7 text-blue-600" />,
    value: "Auto",
    label: "Fee reminders & invoicing",
    iconBg: "#2563eb",
    accent: "rgba(37, 99, 235, 0.16)",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-emerald-600" />,
    value: "Live",
    label: "Revenue & expense tracking",
    iconBg: "#059669",
    accent: "rgba(5, 150, 105, 0.15)",
  },
  {
    icon: <Users className="h-7 w-7 text-indigo-600" />,
    value: "Full",
    label: "Staff payroll management",
    iconBg: "#4f46e5",
    accent: "rgba(79, 70, 229, 0.15)",
  },
  {
    icon: <FileText className="h-7 w-7 text-rose-600" />,
    value: "PDF",
    label: "Audit-ready financial reports",
    iconBg: "#e11d48",
    accent: "rgba(225, 29, 72, 0.14)",
  },
];

export const Finance: React.FC = () => {
  return (
    <motion.section
      id="finance"
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
            Finance & Automation
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            School finance, finally under control
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Automate fee collection, track every rupee, manage payroll, and
            generate audit-ready financial reports.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
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
          {financeCards.map((card) => (
            <motion.div
              key={card.label}
              className="bubble-card p-7 text-center"
              style={
                {
                  "--bubble-accent": card.accent,
                  "--bubble-icon": card.iconBg,
                } as React.CSSProperties
              }
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
            >
              <div className="bubble-icon mx-auto mb-6 [&_svg]:text-white">
                {card.icon}
              </div>
              <div className="text-4xl font-black text-slate-950">
                {card.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-500">
                {card.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
