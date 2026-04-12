"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Lock, Database, ShieldCheck } from "lucide-react";

const securityCards = [
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "EU Verified Hosting",
    desc: "Servers hosted in EU-certified data centers meeting regional standards.",
  },
  {
    icon: <Lock className="h-6 w-6 text-emerald-600" />,
    title: "GDPR Compliant",
    desc: "Student and staff data handled with legal rigor and strong privacy controls.",
  },
  {
    icon: <Database className="h-6 w-6 text-indigo-600" />,
    title: "Isolated Databases",
    desc: "Each institution gets a dedicated server and database for complete isolation.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-rose-600" />,
    title: "Role-Based Permissions",
    desc: "Granular access control so every user sees only what they are authorized to see.",
  },
];

export const Security: React.FC = () => {
  return (
    <motion.section
      id="security"
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
            Security & Infrastructure
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise-grade security. Built for education.
          </p>
          <p className="mt-4 text-lg text-slate-600">
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
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
