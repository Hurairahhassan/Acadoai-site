"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Schools Onboarded" },
  { value: "2M+", label: "Students Managed" },
  { value: "98%", label: "Admin Time Saved" },
  { value: "40+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export const Stats: React.FC = () => {
  return (
    <motion.section
      className="border-y border-slate-100 bg-slate-50 py-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-6 text-center md:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-4xl font-extrabold tracking-tight text-blue-600">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
