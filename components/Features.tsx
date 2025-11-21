import React from 'react';
import { Shield, Zap, Globe, Smartphone, BrainCircuit, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    title: "AI-First Architecture",
    desc: "Built from the ground up with Gemini integration. It doesn't just store data; it understands it.",
    color: "bg-indigo-600"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Real-time Sync",
    desc: "Updates across Admin, Teacher, and Student dashboards happen instantly. No page reloads.",
    color: "bg-orange-500"
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Bank-Grade Security",
    desc: "Financial data and student records are encrypted with enterprise-grade protocols.",
    color: "bg-emerald-500"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Predictive Analytics",
    desc: "Identify at-risk students before they fail. Forecast budget needs months in advance.",
    color: "bg-blue-500"
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Online Fee Payments",
    desc: "Integrated payment gateway for seamless tuition collection and receipt generation.",
    color: "bg-purple-500"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile Native",
    desc: "Fully responsive design ensures a perfect experience on tablets and smartphones.",
    color: "bg-pink-500"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to run a modern institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group p-6 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};