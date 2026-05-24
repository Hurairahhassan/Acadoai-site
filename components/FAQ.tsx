"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most schools are fully operational within 48-72 hours. Our team handles data migration, staff training, and initial configuration.",
  },
  {
    q: "Is our student data safe and private?",
    a: "Absolutely. Each institution gets a fully isolated server and database, with GDPR-aligned controls and encryption.",
  },
  {
    q: "Can the platform support multiple campuses?",
    a: "Yes. The Enterprise plan is designed for multi-campus networks with unified reporting and isolated operations.",
  },
  {
    q: "What languages does the AI Tutor support?",
    a: "The AI Tutor supports 40+ languages including Arabic, Urdu, French, Spanish, Mandarin, and major European languages.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. All plans include a 30-day free trial with full feature access and no credit card required.",
  },
  {
    q: "Do you integrate with existing student information systems?",
    a: "AcadoAI supports CSV import and REST API integration, with custom connectors available for Enterprise clients.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      id="faq"
      className="bubble-section py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="bubble-orb one" />
      <span className="bubble-orb two" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-sm font-black uppercase text-blue-700">
            FAQ
          </h2>
          <p className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
            Common questions
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 space-y-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.08 },
            },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.button
                key={faq.q}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="bubble-card w-full p-6 text-left"
                whileHover={{ y: -6 }}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <span className="text-slate-400">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
