import React from 'react';
import { GraduationCap, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">AcadoAI</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Empowering education through artificial intelligence. The smartest way to manage your school.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail size={16} /> support@acadoai.com
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} AcadoAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};