"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "../content/pages";
import { Reveal } from "./motion";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const contactLinks = [
  { icon: Mail, title: "Sales", value: site.email, href: `mailto:${site.email}` },
  { icon: Mail, title: "Support", value: site.supportEmail, href: `mailto:${site.supportEmail}` },
  { icon: Phone, title: "Phone", value: site.phone, href: site.phoneHref },
];

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-royal focus:ring-4 focus:ring-sky/40";
const labelClass = "mb-2 block text-sm font-semibold text-ink";
const Req = () => (
  <span className="text-red-600" aria-hidden>
    {" "}*
  </span>
);

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
// 7–15 digits, optional leading +, spaces/dashes/brackets allowed
export const isValidPhone = (v: string) => /^\+?[\d\s\-()]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7 && (v.match(/\d/g)?.length ?? 0) <= 15;

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
    const phone = String(formData.get("phone") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!firstName || !lastName || !email || !phone || !organization || !institutionType) {
      setState({
        status: "error",
        message: "Please fill in your name, email, mobile number and organization name.",
      });
      return;
    }
    if (!isValidEmail(email)) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!isValidPhone(phone)) {
      setState({ status: "error", message: "Please enter a valid mobile number, e.g. +92 300 1234567." });
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
          phone,
          organization_name: organization,
          institution_type: institutionType,
          message: message || "(no message)",
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
    <section id="contact" className="bg-paper py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-4 inline-flex items-center gap-2 text-royal"><span className="h-px w-6 bg-royal" aria-hidden />Book a demo</p>
          <h2 className="text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl">Tell us about your institution. We&apos;ll show you the rest.</h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
            Share a few details and we&apos;ll reply within one business day with a tailored walkthrough of AcadoAI.
          </p>
          <ul className="mt-12 space-y-1">
            {contactLinks.map(({ icon: Icon, title, value, href }) => (
              <li key={title}>
                <a href={href} className="group flex items-center gap-4 border-b border-line py-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-royal ring-1 ring-line"><Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden /></span>
                  <span className="w-20 text-sm text-muted">{title}</span>
                  <span className="font-semibold text-ink">{value}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-royal opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(11,24,81,0.5)] ring-1 ring-line sm:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>First name<Req /></label>
                <input id="firstName" name="firstName" type="text" autoComplete="given-name" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>Last name<Req /></label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name" className={inputClass} required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>Email<Req /></label>
                <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@institution.edu" required />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Mobile number<Req /></label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} placeholder="+92 300 1234567" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className={labelClass}>Organization name<Req /></label>
                <input id="organization" name="organization" type="text" autoComplete="organization" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="institutionType" className={labelClass}>Institution type<Req /></label>
                <select id="institutionType" name="institutionType" className={inputClass} required>
                  <option>School (K-12)</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Coaching Centre / Academy</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>What would you like to see? <span className="font-normal text-muted">(optional)</span></label>
              <textarea id="message" name="message" rows={3} className={inputClass} placeholder="Number of students, campuses, current software…" />
            </div>

            {state.status !== "idle" && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${state.status === "success" ? "bg-sky/30 text-navy" : "bg-red-50 text-red-700"}`}
              >
                {state.message}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-4 font-semibold text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? "Sending…" : "Request my demo"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
