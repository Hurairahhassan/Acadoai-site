"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const contactCards = [
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    value: "info@acadoai.com",
    href: "mailto:info@acadoai.com",
    color: "text-blue-300",
  },
  {
    icon: <Mail size={22} />,
    title: "Support",
    value: "support@acadoai.com",
    href: "mailto:support@acadoai.com",
    color: "text-blue-300",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    value: "+92 313 1204236",
    href: "tel:+923131204236",
    color: "text-violet-300",
  },
];

const promiseCards = [
  { icon: <Clock3 className="h-4 w-4" />, label: "Fast response" },
  { icon: <CalendarCheck className="h-4 w-4" />, label: "Personal demo" },
  { icon: <ShieldCheck className="h-4 w-4" />, label: "No spam" },
];

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100";

export const Contact: React.FC = () => {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const institutionType = String(
      formData.get("institutionType") ?? "",
    ).trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!firstName || !lastName || !email || !institutionType || !message) {
      setState({
        status: "error",
        message: "Please fill in all fields before submitting.",
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setState({
        status: "error",
        message: "Email service is not configured yet. Please try again later.",
      });
      return;
    }

    setIsPending(true);
    setState(initialState);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: firstName,
          last_name: lastName,
          user_email: email,
          institution_type: institutionType,
          message,
          submitted_at: new Date().toISOString(),
        },
        {
          publicKey,
        },
      );

      setState({
        status: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setState({
        status: "error",
        message: "Submission failed. Please try again in a moment.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_58%_92%,rgba(168,85,247,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      <motion.span
        className="absolute left-[7%] top-20 h-24 w-24 rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur"
        animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute bottom-16 right-[8%] h-36 w-36 rounded-full border border-white/15 bg-blue-400/10 shadow-2xl shadow-emerald-500/20 backdrop-blur"
        animate={{ y: [0, 28, 0], x: [0, -16, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-[46%] top-[48%] h-14 w-14 rounded-full border border-white/15 bg-emerald-300/10 backdrop-blur"
        animate={{ y: [0, -18, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
              <MessageCircle className="h-4 w-4" />
              Talk to AcadoAI
            </span>
            <h2 className="mb-6 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Let&apos;s design your Education Management rollout.
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
              Share your institution type, current workflow, and what you want
              to improve. We&apos;ll map the right demo around admissions,
              finance, teaching tools, parent communication, and AI automation.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {promiseCards.map((item) => (
                <motion.span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur"
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                >
                  {item.icon}
                  {item.label}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                },
              }}
            >
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  className="group flex max-w-xl items-center gap-4 rounded-[30px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur transition-colors hover:bg-white/[0.11]"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ x: 8, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-black/10 ${card.color}`}
                  >
                    {card.icon}
                  </span>
                  <span>
                    <span className="block font-black text-white">
                      {card.title}
                    </span>
                    <span className="block text-slate-300">{card.value}</span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[36px] border border-white/20 bg-white p-6 text-slate-900 shadow-2xl shadow-blue-950/30 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100" />
            <div className="absolute -bottom-16 left-10 h-28 w-28 rounded-full bg-emerald-100" />

            <div className="relative mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Demo request
                </span>
                <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tell us what you need. We&apos;ll reply with a focused next
                  step.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className={inputClass}
                    placeholder="John"
                    required
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className={inputClass}
                    placeholder="Doe"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="john@school.edu"
                  required
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Institution Type
                </label>
                <select
                  name="institutionType"
                  className={`${inputClass} text-slate-600`}
                  required
                >
                  <option>School (K-12)</option>
                  <option>University / College</option>
                  <option>Coaching Center</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about your needs..."
                  required
                />
              </motion.div>

              {state.status !== "idle" && (
                <p
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    state.status === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 py-4 font-black text-white shadow-xl shadow-blue-700/25 transition-all hover:-translate-y-0.5 hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
