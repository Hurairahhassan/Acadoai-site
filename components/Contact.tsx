"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

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
      className="py-24 bg-slate-900 text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Get in touch
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Ready to transform your institution? Our team is ready to give you
              a personalized demo and answer any questions.
            </p>

            <motion.div
              className="space-y-8"
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-slate-400">info@synapticssolution.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-slate-400">+92 313 1204236</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-green-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="text-slate-400">
                    123 Innovation Dr, Tech City, CA 94043
                  </p>
                </div>
              </div> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="john@school.edu"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Institution Type
                </label>
                <select
                  name="institutionType"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-600"
                  required
                >
                  <option>School (K-12)</option>
                  <option>University / College</option>
                  <option>Coaching Center</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>

              {state.status !== "idle" && (
                <p
                  className={`text-sm ${state.status === "success" ? "text-green-700" : "text-red-700"}`}
                >
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
