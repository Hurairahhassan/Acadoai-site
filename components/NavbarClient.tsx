"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { localize, localeNames, locales, stripLocale, unlocalizedPaths, type Locale } from "../content/i18n";
import { isExternal, site, type Content, type getNav } from "../content/pages";
import { IconTile } from "./icons";

type MenuKey = "product" | "solutions" | null;

type Props = {
  lang: Locale;
  copy: Pick<Content["ui"], "common" | "nav">;
  nav: ReturnType<typeof getNav>;
};

/** Links to the current page in every language (legal pages are English-only, so those go to each home page). */
function LanguageMenu({ lang, label, onPick }: { lang: Locale; label: string; onPick?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = stripLocale(usePathname() || "/");
  const target = (l: Locale) => localize(l, unlocalizedPaths.includes(path) ? "/" : path);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={label}
        className="flex items-center gap-1.5 rounded-md px-2 py-2 text-[15px] font-medium text-ink transition-opacity hover:opacity-70"
      >
        <Globe className="h-[18px] w-[18px]" aria-hidden />
        <span>{localeNames[lang]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <ul className="absolute end-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-xl bg-white py-1 shadow-[0_20px_50px_-20px_rgba(4,14,69,0.45)] ring-1 ring-line">
          {locales.map((l) => (
            <li key={l}>
              {/* Full page load: the document's language and text direction change with the locale. */}
              <a
                href={target(l)}
                hrefLang={l}
                lang={l}
                onClick={onPick}
                aria-current={l === lang ? "true" : undefined}
                className={`flex items-center justify-between px-4 py-2.5 text-[15px] hover:bg-paper ${l === lang ? "font-semibold text-royal" : "text-ink"}`}
              >
                {localeNames[l]}
                {l === lang && <Check className="h-4 w-4" aria-hidden />}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const NavbarClient = ({ lang, copy, nav }: Props) => {
  const { common, nav: t } = copy;
  const to = (path: string) => localize(lang, path);
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
      <nav aria-label={t.main} className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        <Link href={to("/")} aria-label={common.homeLabel} className="flex items-center">
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
                className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition-opacity hover:opacity-70"
              >
                {key === "product" ? common.product : common.solutions}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open === key ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </li>
          ))}
          {[
            { name: common.pricing, href: "/pricing" },
            { name: common.about, href: "/about" },
          ].map((l) => (
            <li key={l.href} onMouseEnter={() => setOpen(null)}>
              <Link href={to(l.href)} className="rounded-md px-3 py-2 text-[15px] font-medium transition-opacity hover:opacity-70">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageMenu lang={lang} label={t.language} />
          <Link href={to("/contact")} className={`link-underline text-[15px] font-medium ${text}`}>
            {common.contactSales}
          </Link>
          <a
            href={site.demoUrl}
            {...demoProps}
            className="group inline-flex items-center gap-2 rounded-xl bg-royal px-4 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(42,58,186,0.8)] transition-colors duration-300 hover:bg-brand"
          >
            {common.bookDemo} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden />
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageMenu lang={lang} label={t.language} onPick={() => setMobile(false)} />
          <button
            type="button"
            onClick={() => setMobile(!mobile)}
            aria-label={mobile ? t.closeMenu : t.openMenu}
            aria-expanded={mobile}
            className={text}
          >
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
                          <Link href={to(f.href)} onClick={() => setOpen(null)} className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-paper">
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
                      <p className="eyebrow text-sky">{t.seeItLive}</p>
                      <p className="mt-3 font-display text-2xl leading-tight">{t.tour}</p>
                    </div>
                    <a href={site.demoUrl} {...demoProps} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky">
                      {common.bookDemo} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[1fr_280px] gap-10">
                  <div>
                    <p className="eyebrow mb-3 px-3 text-muted">{t.byInstitution}</p>
                    <ul>
                      {nav.solutions.map((s) => {
                        return (
                          <li key={s.href}>
                            <Link href={to(s.href)} onClick={() => setOpen(null)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink hover:bg-paper">
                              <IconTile name={s.icon} size="sm" /> {s.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-paper p-6">
                    <p className="eyebrow text-royal">{common.pricing}</p>
                    <p className="mt-3 font-display text-2xl leading-tight text-ink">{t.pricingBlurb}</p>
                    <Link href={to("/pricing")} onClick={() => setOpen(null)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                      {common.seePricing} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
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
                { title: common.product, items: nav.product },
                { title: common.solutions, items: nav.solutions },
                {
                  title: common.company,
                  items: [
                    { name: common.pricing, href: "/pricing" },
                    { name: common.about, href: "/about" },
                    { name: common.contact, href: "/contact" },
                  ],
                },
              ].map((group) => (
                <div key={group.title}>
                  <p className="eyebrow mb-2 text-muted">{group.title}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2">
                    {group.items.map((l) => (
                      <li key={l.href}>
                        <Link href={to(l.href)} onClick={() => setMobile(false)} className="block py-2 text-base font-semibold text-ink">
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <a href={site.demoUrl} {...demoProps} className="block rounded-lg bg-royal py-3 text-center font-semibold text-white">
                {common.bookDemo}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
