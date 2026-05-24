"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Portals", href: "#portals" },
    { name: "AI Tools", href: "#ai" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            type="button"
            aria-label="Go to top"
            className="flex min-w-0 items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/images/acado-edu-sys.svg"
              alt="AcadoAI Education Management"
              className="h-12 w-auto max-w-[170px] object-contain sm:h-14 sm:max-w-[210px]"
            />
          </button>

          <div className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/75 p-1 shadow-sm shadow-slate-950/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started Free
            </a>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:text-blue-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white">
          <div className="space-y-1 px-4 pb-5 pt-2 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-xl bg-slate-950 px-4 py-3 text-center text-base font-bold text-white"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
