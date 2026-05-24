"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const productRows = [
  { label: "Attendance", value: "94%", tone: "bg-emerald-500" },
  { label: "Fee Collection", value: "$128k", tone: "bg-blue-500" },
  { label: "AI Lesson Plans", value: "312", tone: "bg-violet-500" },
];

const activity = [
  "Grade 8 quiz generated",
  "Payroll approved",
  "Parent circular sent",
];

export const Hero: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";

  return (
    <section
      id="home"
      className="bubble-section relative overflow-hidden bg-[#f8fafc] pt-14 pb-16 lg:pt-20"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_44%,#eef5ff_100%)]" />
      <div className="absolute inset-x-0 top-0 z-0 h-px bg-slate-200" />
      <div className="absolute inset-0 z-0 opacity-[0.32] [background-image:linear-gradient(#cbd5e1_1px,transparent_1px),linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] [background-size:52px_52px]" />
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-950/5">
              <Sparkles className="h-4 w-4" />
              Education Management for AI-ready schools
            </span>
            <h1 className="mb-7 text-4xl font-black leading-[1.06] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Education Management,
              <span className="block text-blue-700">
                redesigned for modern schools.
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              AcadoAI brings admissions, classrooms, finance, staff operations,
              parent communication, and AI teaching tools into one polished
              operating system for growing institutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-700/25 transition-all hover:-translate-y-0.5 hover:bg-slate-950 sm:w-auto"
              >
                Start Free Trial <ArrowRight size={20} />
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                <PlayCircle size={20} /> Watch Demo
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-600">
              {[
                "Admin OS",
                "Teacher AI",
                "Finance Suite",
                "Student Portal",
                "Parent Connect",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-6xl"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white/85 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden text-sm font-semibold text-slate-300 sm:inline">
                  AcadoAI Command Center
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                Live
              </div>
            </div>

            <div className="grid gap-0 bg-white lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-slate-200 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      Today at a glance
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">
                      Northview International School
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Healthy
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {productRows.map((row) => (
                    <motion.div
                      key={row.label}
                      className="rounded-[26px] border border-slate-200 bg-white/80 p-4 shadow-sm"
                      whileHover={{ y: -6, scale: 1.025 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                      <span className={`mb-4 block h-1.5 w-12 rounded-full ${row.tone}`} />
                      <p className="text-sm font-semibold text-slate-500">
                        {row.label}
                      </p>
                      <p className="mt-2 text-2xl font-black text-slate-950">
                        {row.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <BarChart3 className="h-4 w-4 text-blue-700" />
                      School performance
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      Last 30 days
                    </span>
                  </div>
                  <div className="flex h-36 items-end gap-3">
                    {[44, 64, 52, 76, 68, 88, 72, 94, 84].map((height, index) => (
                      <motion.div
                        key={index}
                        className="flex-1 rounded-t-md bg-blue-600"
                        initial={{ height: 12 }}
                        animate={{ height }}
                        transition={{
                          delay: 0.45 + index * 0.04,
                          duration: 0.45,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 sm:p-7">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CalendarDays className="h-4 w-4 text-rose-600" />
                      Operations feed
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      AI assisted
                    </span>
                  </div>
                  <div className="space-y-3">
                    {activity.map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-3 rounded-[22px] border border-slate-100 bg-slate-50 p-3"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-black text-blue-700 shadow-sm">
                          {index + 1}
                        </span>
                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-slate-950 p-5 text-white">
                    <p className="text-sm font-semibold text-slate-300">
                      AI suggestions
                    </p>
                    <p className="mt-4 text-3xl font-black">28</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Ready for principals and teachers
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-5">
                    <p className="text-sm font-bold text-amber-800">
                      Fee reminders
                    </p>
                    <p className="mt-4 text-3xl font-black text-slate-950">
                      146
                    </p>
                    <p className="mt-2 text-sm font-medium text-amber-900">
                      Scheduled automatically
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
