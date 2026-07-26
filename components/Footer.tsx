import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 flex items-center text-white">
              <img
                src="/images/acado-edu-sys.svg"
                alt="AcadoAI Education Management"
                className="h-12 w-auto max-w-[190px] rounded-full bg-white px-3 py-1"
              />
            </div>
            <p className="text-sm text-slate-400 mb-4">
              All-in-one AI-powered Education Management platform for
              administration, teaching, student learning, and finance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#ai" className="hover:text-blue-400">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#portals" className="hover:text-blue-400">
                  Portals
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#ai" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-blue-400">
                  Security
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail size={16} /> hello@acadoai.com
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AcadoAI. All rights reserved.
          </div>
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-semibold text-slate-400 hover:text-blue-400"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
