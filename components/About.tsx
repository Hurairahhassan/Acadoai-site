
import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Revolutionizing Education Management
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              AcadoAI was born from a simple belief: educators should spend their time teaching, not managing paperwork. 
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We combine cutting-edge AI technology with intuitive design to create an ERP system that doesn't just store data—it actively helps schools improve outcomes. From predictive analytics that identify at-risk students to AI tutors that are available 24/7, we are building the future of learning.
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: <Users className="text-blue-500"/>, title: "Student-Centric", desc: "Everything we build focuses on improving the student experience." },
                 { icon: <Target className="text-purple-500"/>, title: "Data-Driven", desc: "We turn complex data into actionable insights for admins." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900">{item.title}</h4>
                       <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
               alt="Team working" 
               className="relative rounded-2xl shadow-2xl"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                   <Heart className="text-red-500 fill-red-500" size={20} />
                   <span className="font-bold text-slate-900">Trusted by 500+ Schools</span>
                </div>
                <p className="text-xs text-slate-500">Join the fastest growing education network today.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
