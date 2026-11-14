import Image from "next/image";
import Link from "next/link";
import { nav, site } from "../content/pages";

const columns = [
  { title: "Product", links: nav.product },
  { title: "Solutions", links: nav.solutions },
  { title: "Compare", links: nav.compare },
  {
    title: "Company",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Delete Account", href: "/delete-account" },
];

const socialName = (url: string) => new URL(url).hostname.replace(/^www\./, "").split(".")[0];

export const Footer = () => (
  <footer className="bg-night text-white">
    <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
      <div className="max-w-xs">
        <Link href="/" aria-label="AcadoAI home">
          <Image src="/images/acado-edu-sys.svg" alt="AcadoAI" width={180} height={48} className="h-10 w-auto brightness-0 invert" />
        </Link>
        <p className="mt-6 leading-7 text-white/60">AI-powered education management for administration, teaching, finance and student learning.</p>
        <address className="mt-6 space-y-1 text-sm not-italic text-white/60">
          <a href={`mailto:${site.email}`} className="link-underline block w-fit hover:text-white">
            {site.email}
          </a>
          <a href={site.phoneHref} className="link-underline block w-fit hover:text-white">
            {site.phone}
          </a>
        </address>
      </div>
      {columns.map((col) => (
        <nav key={col.title} aria-label={col.title}>
          <p className="eyebrow mb-5 text-sky">{col.title}</p>
          <ul className="space-y-3 text-[15px] text-white/70">
            {col.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
    <div className="border-t border-white/10">
      <div className="container-x flex flex-col gap-4 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} AcadoAI. All rights reserved.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline hover:text-white">
                {l.name}
              </Link>
            </li>
          ))}
          {site.socials.map((url) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer me" className="link-underline capitalize hover:text-white">
                {socialName(url)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
