"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { isExternal, nav, site } from "../content/pages";
import { IconTile } from "./icons";

type MenuKey = "product" | "solutions" | null;

export const Navbar = () => {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const solid = scrolled || open !== null || mobile;
  const text = "text-ink";
  const demoProps = isExternal(site.demoUrl) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ${
        solid ? "bg-white/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-transparent"
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <nav aria-label="Main" className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        <Link href="/" aria-label="AcadoAI home" className="flex items-center">
          <Image
            src="/images/acado-edu-sys.svg"
            alt="AcadoAI"
            width={180}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <ul className={`hidden items-center gap-1 lg:flex ${text}`}>
          {(["product", "solutions"] as const).map((key) => (
            <li key={key}>
              <button
                type="button"
                aria-expanded={open === key}
                onMouseEnter={() => setOpen(key)}
                onClick={() => setOpen(open === key ? null : key)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium capitalize transition-opacity hover:opacity-70"
              >
                {key}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open === key ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </li>
          ))}
          {[
            { name: "Pricing", href: "/pricing" },
            { name: "About", href: "/about" },
          ].map((l) => (
            <li key={l.href} onMouseEnter={() => setOpen(null)}>
              <Link href={l.href} className="rounded-md px-3 py-2 text-[15px] font-medium transition-opacity hover:opacity-70">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/contact" className={`link-underline text-[15px] font-medium ${text}`}>
            Contact sales
          </Link>
          <a
            href={site.demoUrl}
            {...demoProps}
            className="group inline-flex items-center gap-2 rounded-xl bg-royal px-4 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(42,58,186,0.8)] transition-colors duration-300 hover:bg-brand"
          >
            Book a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          className={`lg:hidden ${text}`}
        >
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Desktop mega-menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-[0_30px_60px_-30px_rgba(4,14,69,0.35)] lg:block"
          >
            <div className="container-x py-8">
              {open === "product" ? (
                <div className="grid grid-cols-[1fr_280px] gap-10">
                  <ul className="grid grid-cols-3 gap-2">
                    {nav.product.map((f, i) => {
                      return (
                        <motion.li key={f.href} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.025 }}>
                          <Link href={f.href} onClick={() => setOpen(null)} className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-paper">
                            <IconTile name={f.icon} size="sm" />
                            <span>
                              <span className="block text-[15px] font-semibold text-ink">{f.name}</span>
                              <span className="mt-0.5 block text-sm leading-5 text-muted">{f.summary}</span>
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-between rounded-xl bg-night p-6 text-white">
                    <div>
                      <p className="eyebrow text-sky">See it live</p>
                      <p className="mt-3 font-display text-2xl leading-tight">A 30-minute tour, tailored to your school.</p>
                    </div>
                    <a href={site.demoUrl} {...demoProps} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                      Book a demo <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[1fr_280px] gap-10">
                  <div>
                    <p className="eyebrow mb-3 px-3 text-muted">By institution</p>
                    <ul>
                      {nav.solutions.map((s) => {
                        return (
                          <li key={s.href}>
                            <Link href={s.href} onClick={() => setOpen(null)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink hover:bg-paper">
                              <IconTile name={s.icon} size="sm" /> {s.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-paper p-6">
                    <p className="eyebrow text-royal">Pricing</p>
                    <p className="mt-3 font-display text-2xl leading-tight text-ink">Flexible packages built around your institution.</p>
                    <Link href="/pricing" onClick={() => setOpen(null)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                      See pricing <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-x max-h-[calc(100dvh-4rem)] space-y-6 overflow-y-auto py-6">
              {[
                { title: "Product", items: nav.product },
                { title: "Solutions", items: nav.solutions },
                { title: "Company", items: [{ name: "Pricing", href: "/pricing" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }] },
              ].map((group) => (
                <div key={group.title}>
                  <p className="eyebrow mb-2 text-muted">{group.title}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2">
                    {group.items.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={() => setMobile(false)} className="block py-2 text-base font-semibold text-ink">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <a href={site.demoUrl} {...demoProps} className="block rounded-lg bg-royal py-3 text-center font-semibold text-white">
                Book a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
