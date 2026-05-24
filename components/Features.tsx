"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  BarChart3,
  FileText,
  Landmark,
  MessageSquare,
  School,
  Sparkles,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: <Landmark className="w-6 h-6 text-white" />,
    title: "Admin Dashboard",
    desc: "Real-time school snapshot - students, staff, finances, attendance, all at a glance. Ask your data with AI-powered Q&A queries.",
    iconBg: "#4f46e5",
    accent: "rgba(79, 70, 229, 0.16)",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Teacher Tools Suite",
    desc: "AI presentation generator, quiz and assignment creator, lecture assistant, and NoteBookLM for transforming notes into lesson content.",
    iconBg: "#10b981",
    accent: "rgba(16, 185, 129, 0.16)",
  },
  {
    icon: <School className="w-6 h-6 text-white" />,
    title: "Student Learning Portal",
    desc: "Assignments, results, schedule, and fee status. Paired with an AI tutor available 24/7 for personalized academic support.",
    iconBg: "#3b82f6",
    accent: "rgba(59, 130, 246, 0.17)",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    title: "AI Tutor & Assistants",
    desc: "Live AI conversation with subject-wise specialized assistants. Multilingual support. Students learn at their own pace, anytime.",
    iconBg: "#6366f1",
    accent: "rgba(99, 102, 241, 0.16)",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Attendance & Exams",
    desc: "Automated attendance marking, class test scheduling, grading engine, and certificate generation. End-to-end assessment workflow.",
    iconBg: "#a855f7",
    accent: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    title: "Finance Management",
    desc: "Revenue tracking, salary processing, expense reports, invoice generation, and automated fee reminders - fully integrated.",
    iconBg: "#f43f5e",
    accent: "rgba(244, 63, 94, 0.15)",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Messaging & Circulars",
    desc: "Group chats, personal messaging, file sharing, and school-wide broadcasts - no external app needed. Everything in one place.",
    iconBg: "#0ea5e9",
    accent: "rgba(14, 165, 233, 0.16)",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Reports & Analytics",
    desc: "Smart analytics across academic performance, attendance trends, financial health, and staff productivity. Export PDF reports instantly.",
    iconBg: "#f59e0b",
    accent: "rgba(245, 158, 11, 0.16)",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "NoteBookLM",
    desc: "Upload notes and get AI-generated flashcards, mind maps, quizzes, multilingual audio summaries - turning any material into rich learning tools.",
    iconBg: "#d946ef",
    accent: "rgba(217, 70, 239, 0.14)",
  },
];

export const Features: React.FC = () => {
  return (
    <motion.section
      id="features"
      className="bubble-section py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <span className="bubble-orb three" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-sm font-black uppercase text-blue-700">
            All-in-One Platform
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Every school workflow, designed to feel effortless
          </p>
          <p className="mx-auto mt-4 text-lg leading-8 text-slate-600">
            From the front office to the classroom, AcadoAI replaces fragmented
            tools with one unified Education Management platform.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bubble-card group min-h-[280px] p-7"
              style={
                {
                  "--bubble-accent": feature.accent,
                  "--bubble-icon": feature.iconBg,
                } as React.CSSProperties
              }
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="bubble-icon mb-7 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-black text-slate-950">
                {feature.title}
              </h3>
              <p className="leading-7 text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
