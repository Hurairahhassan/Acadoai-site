import React from "react";
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
    color: "bg-indigo-600",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Teacher Tools Suite",
    desc: "AI presentation generator, quiz and assignment creator, lecture assistant, and NoteBookLM for transforming notes into lesson content.",
    color: "bg-emerald-500",
  },
  {
    icon: <School className="w-6 h-6 text-white" />,
    title: "Student Learning Portal",
    desc: "Assignments, results, schedule, and fee status. Paired with an AI tutor available 24/7 for personalized academic support.",
    color: "bg-blue-500",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    title: "AI Tutor & Assistants",
    desc: "Live AI conversation with subject-wise specialized assistants. Multilingual support. Students learn at their own pace, anytime.",
    color: "bg-indigo-500",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Attendance & Exams",
    desc: "Automated attendance marking, class test scheduling, grading engine, and certificate generation. End-to-end assessment workflow.",
    color: "bg-purple-500",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    title: "Finance Management",
    desc: "Revenue tracking, salary processing, expense reports, invoice generation, and automated fee reminders - fully integrated.",
    color: "bg-rose-500",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Messaging & Circulars",
    desc: "Group chats, personal messaging, file sharing, and school-wide broadcasts - no external app needed. Everything in one place.",
    color: "bg-sky-500",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Reports & Analytics",
    desc: "Smart analytics across academic performance, attendance trends, financial health, and staff productivity. Export PDF reports instantly.",
    color: "bg-amber-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "NoteBookLM",
    desc: "Upload notes and get AI-generated flashcards, mind maps, quizzes, multilingual audio summaries - turning any material into rich learning tools.",
    color: "bg-fuchsia-500",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            All-in-One Platform
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Every tool your school needs, in one intelligent system
          </p>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            From the front office to the classroom, AcadoAi replaces fragmented
            tools with one unified, AI-enhanced platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
