import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/mo",
      desc: "For small schools up to 500 students.",
      features: [
        "Admin and finance portal",
        "Teacher tools suite",
        "Student learning portal",
        "AI Tutor (basic)",
        "Attendance and grading",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$599",
      period: "/mo",
      desc: "For institutions up to 2,000 students.",
      features: [
        "Everything in Starter",
        "Advanced AI features",
        "NoteBookLM suite",
        "Class Story and messaging",
        "Finance automation",
        "Analytics and certificates",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For multi-campus networks and universities.",
      features: [
        "Everything in Growth",
        "Dedicated server per campus",
        "Custom integrations",
        "SLA guarantee",
        "Onboarding and training",
        "24/7 dedicated support",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Scale from a single campus to a nationwide network. Pay per
            institution, not per user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border ${tier.highlight ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-50 scale-105 z-10" : "border-slate-200 hover:border-blue-300 transition-colors"}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {tier.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">{tier.desc}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-slate-500 ml-1">{tier.period}</span>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-slate-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <button
                  className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-xl text-sm font-bold transition-all ${tier.highlight ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30" : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"}`}
                >
                  {tier.cta} <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
