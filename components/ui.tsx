import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { MockName } from "../content/pages";
import { isExternal, site } from "../content/pages";
import { Mock } from "./mocks";

export const publicFileExists = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

const btn = {
  primary: "bg-royal text-white shadow-[0_10px_24px_-10px_rgba(42,58,186,0.8)] hover:bg-brand",
  sky: "bg-sky text-night hover:bg-white",
  ghostDark: "border border-white/25 text-white hover:border-white hover:bg-white/5",
  ghost: "border border-line bg-white text-ink hover:border-royal hover:text-royal",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof btn;
  className?: string;
  arrow?: boolean;
}) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-colors duration-300 ${btn[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </>
  );
  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export const DemoButton = (props: { variant?: keyof typeof btn; className?: string; children?: ReactNode }) => (
  <ButtonLink href={site.demoUrl} variant={props.variant} className={props.className}>
    {props.children ?? "Book a demo"}
  </ButtonLink>
);

const stores = [
  {
    href: site.appStoreUrl,
    top: "Download on the",
    name: "App Store",
    icon: "M16.37 12.6c-.02-2.33 1.9-3.45 1.99-3.5-1.08-1.59-2.77-1.8-3.37-1.83-1.43-.15-2.8.84-3.53.84-.73 0-1.85-.82-3.04-.8-1.56.02-3 .91-3.81 2.31-1.63 2.82-.42 6.99 1.17 9.28.78 1.12 1.7 2.38 2.91 2.33 1.17-.05 1.61-.75 3.02-.75 1.41 0 1.81.75 3.04.73 1.26-.02 2.05-1.14 2.82-2.27.89-1.3 1.25-2.56 1.27-2.62-.03-.01-2.44-.94-2.47-3.72ZM14.06 5.75c.64-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.79-.98 2.85 1.04.08 2.1-.53 2.74-1.31Z",
  },
  {
    href: site.playStoreUrl,
    top: "Get it on",
    name: "Google Play",
    icon: "M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7L3.6 2.3Zm10.8 10.8 2.6 2.6-11.6 6.6c-.4.2-.8.3-1.1.2l10.1-9.4Zm0-2.2L4.3 1.5c.3-.1.7 0 1.1.2L17 8.3l-2.6 2.6Zm3.8 4.1-2.9-2.9 2.9-2.9 3.3 1.9c.9.5.9 1.5 0 2l-3.3 1.9Z",
  },
];

/** App Store and Google Play download buttons. */
export const StoreButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {stores.map((s) => (
      <a
        key={s.name}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${s.top} ${s.name}`}
        className="inline-flex items-center gap-3 rounded-xl bg-night px-5 py-3 text-white shadow-[0_10px_24px_-12px_rgba(4,14,69,0.8)] transition-colors duration-300 hover:bg-royal"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d={s.icon} />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-white/75">{s.top}</span>
          <span className="block text-lg font-semibold">{s.name}</span>
        </span>
      </a>
    ))}
  </div>
);

export function SectionHeader({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 inline-flex items-center gap-2 ${dark ? "text-sky" : "text-royal"}`}>
          <span className={`h-px w-6 ${dark ? "bg-sky" : "bg-royal"}`} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-4xl leading-[1.05] font-semibold sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {lead && <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/70" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

/** Real screenshot in a browser frame. */
export function Screenshot({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgba(11,24,81,0.45)] ring-1 ring-line ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-3 rounded bg-white px-3 py-0.5 text-[11px] text-muted ring-1 ring-line">app.acadoai.com</span>
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} priority={priority} sizes="(min-width: 1024px) 60vw, 100vw" className="h-auto w-full" />
    </figure>
  );
}

/** Real screenshot when the file exists in /public, otherwise the matching product illustration. */
export function ProductVisual({ src, mock, alt, priority, className = "" }: { src: string; mock: MockName; alt: string; priority?: boolean; className?: string }) {
  return publicFileExists(src) ? (
    <Screenshot src={src} alt={alt} priority={priority} className={className} />
  ) : (
    <Mock name={mock} className={`mx-auto w-full max-w-[460px] ${className}`} />
  );
}

/** Real photo when present; otherwise a soft brand panel (never stock). */
export function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  if (publicFileExists(src)) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-sky/70 via-brand/50 to-royal ${className}`}>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_45%)]" />
        <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:18px_18px]" />
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={alt} className={`relative overflow-hidden bg-gradient-to-br from-sky/70 via-brand/50 to-royal ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:18px_18px]" />
      {process.env.NODE_ENV !== "production" && (
        <span className="absolute bottom-3 left-3 rounded bg-night/90 px-2 py-1 font-mono text-[10px] text-sky">add photo → public{src}</span>
      )}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.path}`,
  })),
});
