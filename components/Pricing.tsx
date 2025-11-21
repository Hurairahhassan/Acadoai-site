
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'For small tutoring centers or individual teachers.',
      features: ['Up to 50 Students', 'Basic Gradebook', 'Attendance Tracking', 'Email Support'],
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Institution',
      price: '$499',
      period: '/month',
      desc: 'For schools and colleges needing full automation.',
      features: ['Unlimited Students', 'AI Tutor & Planner', 'Finance Module', 'Parent Portal', 'Priority Support'],
      cta: 'Get Started',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large districts and universities with custom needs.',
      features: ['Custom AI Training', 'API Access', 'Dedicated Success Manager', 'On-premise Deployment', 'SLA Guarantee'],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans for every stage of growth
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Transparent pricing with no hidden fees. Scale up as your institution grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border ${tier.highlight ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50 scale-105 z-10' : 'border-slate-200 hover:border-blue-300 transition-colors'}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{tier.desc}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  {tier.period && <span className="text-slate-500 ml-1">{tier.period}</span>}
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <button className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-xl text-sm font-bold transition-all ${tier.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30' : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'}`}>
                  {tier.cta} <ArrowRight size={16} className="ml-2"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
