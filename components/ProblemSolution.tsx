"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileSpreadsheet,
  MessageSquareWarning,
  Puzzle,
  Sparkles,
  WalletCards,
} from "lucide-react";

const painPoints = [
  {
    icon: <FileSpreadsheet className="h-6 w-6 text-white" />,
    title: "Data is everywhere",
    desc: "Admissions, fees, attendance, exams, and parent updates often live in different files, apps, and staff conversations.",
    accent: "rgba(37, 99, 235, 0.16)",
    iconBg: "#2563eb",
  },
  {
    icon: <Clock3 className="h-6 w-6 text-white" />,
    title: "Admin work eats the day",
    desc: "Teams spend hours chasing fee status, preparing reports, updating registers, and repeating the same communication.",
    accent: "rgba(245, 158, 11, 0.18)",
    iconBg: "#f59e0b",
  },
  {
    icon: <MessageSquareWarning className="h-6 w-6 text-white" />,
    title: "Parents want instant clarity",
    desc: "When results, fee reminders, attendance, and notices are delayed, trust drops and front-office pressure increases.",
    accent: "rgba(244, 63, 94, 0.15)",
    iconBg: "#f43f5e",
  },
  {
    icon: <Puzzle className="h-6 w-6 text-white" />,
    title: "Old systems do not feel connected",
    desc: "Many schools already have software, but modules feel separate, reports are manual, and teachers still avoid the system.",
    accent: "rgba(168, 85, 247, 0.14)",
    iconBg: "#a855f7",
  },
];

const acadoAdvantages = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI built into daily work",
    desc: "Ask your data, generate lesson content, flag risks, and support students without jumping between tools.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "One operating system",
    desc: "Admin, finance, teaching, student learning, and parent communication are designed as one flow.",
  },
  {
    icon: <WalletCards className="h-5 w-5" />,
    title: "Automation that saves money",
    desc: "Fee reminders, payroll support, reports, and circulars reduce manual follow-up and operational leakage.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Simple enough to adopt",
    desc: "The interface is built for principals, front-office teams, teachers, students, and parents to use every day.",
  },
];

export const ProblemSolution: React.FC = () => {
  return (
    <motion.section
      className="bubble-section py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <span className="bubble-chip inline-flex items-center gap-2 px-4 py-2 text-sm font-black text-blue-700">
              <AlertTriangle className="h-4 w-4" />
              The real problem
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Schools are not short of software. They are short of clarity.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Most institutions already use something: spreadsheets, WhatsApp,
              fee tools, an ERP, an LMS, or a parent app. The issue is that the
              work still feels scattered, slow, and dependent on manual follow-up.
            </p>
          </motion.div>

          <motion.div
            className="bubble-card p-6"
            style={
              {
                "--bubble-accent": "rgba(16, 185, 129, 0.16)",
                "--bubble-icon": "#10b981",
              } as React.CSSProperties
            }
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <div className="flex items-start gap-4">
              <div className="bubble-icon shrink-0 scale-90">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  AcadoAI fixes the workflow, not just the record.
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  It turns school data into action: reminders, reports, learning
                  support, AI-generated content, risk alerts, and decisions that
                  staff can use immediately.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.08 },
            },
          }}
        >
          {painPoints.map((item) => (
            <motion.div
              key={item.title}
              className="bubble-card min-h-[265px] p-7"
              style={
                {
                  "--bubble-accent": item.accent,
                  "--bubble-icon": item.iconBg,
                } as React.CSSProperties
              }
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 23 }}
            >
              <div className="bubble-icon mb-6">{item.icon}</div>
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {acadoAdvantages.map((item, index) => (
            <motion.div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
            >
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
