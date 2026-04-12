import React from "react";
import { CreditCard, TrendingUp, Users, FileText } from "lucide-react";

const financeCards = [
  {
    icon: <CreditCard className="h-7 w-7 text-blue-600" />,
    value: "Auto",
    label: "Fee reminders & invoicing",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-emerald-600" />,
    value: "Live",
    label: "Revenue & expense tracking",
  },
  {
    icon: <Users className="h-7 w-7 text-indigo-600" />,
    value: "Full",
    label: "Staff payroll management",
  },
  {
    icon: <FileText className="h-7 w-7 text-rose-600" />,
    value: "PDF",
    label: "Audit-ready financial reports",
  },
];

export const Finance: React.FC = () => {
  return (
    <section id="finance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Finance & Automation
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            School finance, finally under control
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Automate fee collection, track every rupee, manage payroll, and
            generate audit-ready financial reports.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {financeCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100">
                {card.icon}
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {card.value}
              </div>
              <div className="mt-2 text-sm text-slate-500">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
