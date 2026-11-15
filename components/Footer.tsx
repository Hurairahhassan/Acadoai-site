import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { fill, getNav, site } from "../content/pages";
import { href, t } from "../content/request";

const socialIcons = {
  linkedin: { Icon: Linkedin, label: "LinkedIn" },
  facebook: { Icon: Facebook, label: "Facebook" },
  instagram: { Icon: Instagram, label: "Instagram" },
};
const socialName = (url: string) => new URL(url).hostname.replace(/^www\./, "").split(".")[0] as keyof typeof socialIcons;

export const Footer = () => {
  const c = t();
  const { common, footer } = c.ui;
  const nav = getNav(c);
  const columns = [
    { title: common.product, links: nav.product },
    { title: common.solutions, links: nav.solutions },
    {
      title: common.company,
      links: [
        { name: common.pricing, href: "/pricing" },
        { name: common.about, href: "/about" },
        { name: common.contact, href: "/contact" },
      ],
    },
  ];
  const legal = [
    { name: footer.privacy, href: "/privacy-policy" },
    { name: footer.terms, href: "/terms-and-conditions" },
    { name: footer.deleteAccount, href: "/delete-account" },
  ];
  return (
  <footer className="bg-night text-white">
    <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
      <div className="max-w-xs">
        <Link href={href("/")} aria-label={common.homeLabel}>
          <Image src="/images/acado-edu-sys.svg" alt="AcadoAI" width={180} height={48} className="h-10 w-auto brightness-0 invert" />
        </Link>
        <p className="mt-6 leading-7 text-white/60">{footer.tagline}</p>
        <address className="mt-6 space-y-1 text-sm not-italic text-white/60">
          <a href={`mailto:${site.email}`} className="link-underline block w-fit hover:text-white">
            {site.email}
          </a>
          <a href={site.phoneHref} dir="ltr" className="link-underline block w-fit hover:text-white">
            {site.phone}
          </a>
        </address>
        <ul className="mt-6 flex gap-3">
          {site.socials.map((url) => {
            const { Icon, label } = socialIcons[socialName(url)];
            return (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={fill(footer.social, { network: label })}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 transition-colors hover:bg-sky hover:text-night"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {columns.map((col) => (
        <nav key={col.title} aria-label={col.title}>
          <p className="eyebrow mb-5 text-sky">{col.title}</p>
          <ul className="space-y-3 text-[15px] text-white/70">
            {col.links.map((l) => (
              <li key={l.href}>
                <Link href={href(l.href)} className="link-underline hover:text-white">
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
        <p>© {new Date().getFullYear()} AcadoAI. {footer.rights}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((l) => (
            <li key={l.href}>
              <Link href={href(l.href)} className="link-underline hover:text-white">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
  );
};
