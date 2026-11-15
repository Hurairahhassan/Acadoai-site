"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { ArrowRight, CalendarCheck, Check, Mail, Phone, X } from "lucide-react";
import { fill, site, type Content } from "../content/pages";
import { Reveal } from "./motion";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};


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

export const Contact = ({ copy: c }: { copy: Content["ui"]["contact"] }) => {
  const contactLinks = [
    { icon: Mail, title: c.sales, value: site.email, href: `mailto:${site.email}` },
    { icon: Mail, title: c.support, value: site.supportEmail, href: `mailto:${site.supportEmail}` },
    { icon: Phone, title: c.phone, value: site.phone, href: site.phoneHref },
  ];
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isPending, setIsPending] = useState(false);
  const [sent, setSent] = useState<{ name: string; org: string; email: string } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeDialog = () => dialogRef.current?.close();

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
        message: c.errRequired,
      });
      return;
    }
    if (!isValidEmail(email)) {
      setState({ status: "error", message: c.errEmail });
      return;
    }
    if (!isValidPhone(phone)) {
      setState({ status: "error", message: c.errPhone });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setState({
        status: "error",
        message: c.errConfig,
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
          reply_to: email,
          // aliases for EmailJS preset templates, which use {{name}} / {{email}}
          name: `${firstName} ${lastName}`,
          email,
          phone,
          organization_name: organization,
          institution_type: institutionType,
          message: message || "(no message)",
          page_url: window.location.href,
          submitted_at: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        },
        {
          publicKey,
        },
      );

      setState(initialState);
      setSent({ name: firstName, org: organization, email });
      form.reset();
      dialogRef.current?.showModal();
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setState({
        status: "error",
        message: fill(c.errSend, { email: site.email }),
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="bg-paper py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-4 inline-flex items-center gap-2 text-royal"><span className="h-px w-6 bg-royal" aria-hidden />{c.eyebrow}</p>
          <h2 className="text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl">{c.title}</h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted">{c.lead}</p>
          <ul className="mt-12 space-y-1">
            {contactLinks.map(({ icon: Icon, title, value, href }) => (
              <li key={title}>
                <a href={href} className="group flex items-center gap-4 border-b border-line py-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-royal ring-1 ring-line"><Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden /></span>
                  <span className="w-20 text-sm text-muted">{title}</span>
                  <span dir="ltr" className="font-semibold text-ink">{value}</span>
                  <ArrowRight className="ms-auto h-4 w-4 text-royal opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(11,24,81,0.5)] ring-1 ring-line sm:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>{c.firstName}<Req /></label>
                <input id="firstName" name="firstName" type="text" autoComplete="given-name" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>{c.lastName}<Req /></label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name" className={inputClass} required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>{c.email}<Req /></label>
                <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@institution.edu" required />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>{c.mobile}<Req /></label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} placeholder="+92 300 1234567" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="organization" className={labelClass}>{c.organization}<Req /></label>
                <input id="organization" name="organization" type="text" autoComplete="organization" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="institutionType" className={labelClass}>{c.institutionType}<Req /></label>
                <select id="institutionType" name="institutionType" className={inputClass} required>
                  {/* The email keeps the English value so the sales team can read every request. */}
                  {["School (K-12)", "College", "University", "Coaching Centre / Academy"].map((value, i) => (
                    <option key={value} value={value}>
                      {c.types[i]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>{c.message} <span className="font-normal text-muted">{c.optional}</span></label>
              <textarea id="message" name="message" rows={3} className={inputClass} placeholder={c.messagePlaceholder} />
            </div>

            {state.status === "error" && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              >
                {state.message}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-4 font-semibold text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? c.sending : c.submit}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
            </button>
          </form>
        </Reveal>
      </div>

      {/* Success popup: native <dialog> gives Esc-to-close, focus trap and backdrop */}
      <dialog
        ref={dialogRef}
        aria-labelledby="sent-title"
        onClick={(e) => e.target === e.currentTarget && closeDialog()}
        className="m-auto w-[min(92vw,30rem)] rounded-[1.75rem] bg-transparent p-0 backdrop:bg-night/60 backdrop:backdrop-blur-sm"
      >
        {sent && (
          <motion.div
            key={sent.email + sent.org}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="relative overflow-hidden rounded-[1.75rem] bg-white text-center text-ink"
          >
            <div className="bg-[linear-gradient(160deg,#e4f3ff,#eef1ff)] px-8 pt-10 pb-8">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 15 }}
                className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-royal text-white shadow-[0_12px_30px_-10px_rgba(42,58,186,0.8)]"
              >
                <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden />
              </motion.span>
              <h3 id="sent-title" className="mt-6 text-3xl font-semibold">{fill(c.thanks, { name: sent.name })}</h3>
              <p className="mt-3 leading-7 text-muted">{fill(c.received, { org: sent.org })}</p>
            </div>
            <div className="space-y-3 px-8 py-7">
              <p className="text-sm text-muted">{fill(c.confirmation, { email: sent.email })}</p>
              <a
                href={site.demoUrl}
                onClick={closeDialog}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-3.5 font-semibold text-white transition-colors hover:bg-brand"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> {c.pickTime}
              </a>
              <button type="button" onClick={closeDialog} className="w-full rounded-xl py-3 font-semibold text-ink ring-1 ring-line transition-colors hover:bg-paper">
                {c.close}
              </button>
            </div>
            <button type="button" onClick={closeDialog} aria-label={c.close} className="absolute top-4 end-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink hover:bg-white">
              <X className="h-4 w-4" aria-hidden />
            </button>
          </motion.div>
        )}
      </dialog>
    </section>
  );
};
