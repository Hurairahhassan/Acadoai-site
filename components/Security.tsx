"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Lock, Database, ShieldCheck } from "lucide-react";

const securityCards = [
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "EU Verified Hosting",
    desc: "Servers hosted in EU-certified data centers meeting regional standards.",
    iconBg: "#2563eb",
    accent: "rgba(37, 99, 235, 0.15)",
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-600" />,
    title: "GDPR Compliant",
    desc: "Student and staff data handled with legal rigor and strong privacy controls.",
    iconBg: "#059669",
    accent: "rgba(5, 150, 105, 0.14)",
  },
  {
    icon: <Database className="h-6 w-6 text-indigo-600" />,
    title: "Isolated Databases",
    desc: "Each institution gets a dedicated server and database for complete isolation.",
    iconBg: "#4f46e5",
    accent: "rgba(79, 70, 229, 0.14)",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-rose-600" />,
    title: "Role-Based Permissions",
    desc: "Granular access control so every user sees only what they are authorized to see.",
    iconBg: "#e11d48",
    accent: "rgba(225, 29, 72, 0.13)",
  },
];

export const Security: React.FC = () => {
  return (
    <motion.section
      id="security"
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
            Security & Infrastructure
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Enterprise-grade security. Built for education.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every institution gets its own isolated server and database. Your
            data never touches another school's infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
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
          {securityCards.map((card) => (
            <motion.div
              key={card.title}
              className="bubble-card p-6"
              style={
                {
                  "--bubble-accent": card.accent,
                  "--bubble-icon": card.iconBg,
                } as React.CSSProperties
              }
              whileHover={{ y: -10, scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
            >
              <div className="bubble-icon mb-6 scale-90 [&_svg]:text-white">
                {card.icon}
              </div>
              <h3 className="text-lg font-black text-slate-950">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
