import React from "react";

const stats = [
  { value: "500+", label: "Schools Onboarded" },
  { value: "2M+", label: "Students Managed" },
  { value: "98%", label: "Admin Time Saved" },
  { value: "40+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold tracking-tight text-blue-600">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
