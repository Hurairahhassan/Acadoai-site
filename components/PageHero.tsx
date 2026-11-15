import Link from "next/link";
import type { ReactNode } from "react";
import { Float, Magnetic, Reveal, WordReveal } from "./motion";
import { ButtonLink, DemoButton } from "./ui";

export const PageHero = ({
  crumbs,
  eyebrow,
  title,
  lead,
  visual,
  visualIsFramed = false,
  children,
}: {
  crumbs: { name: string; href?: string }[];
  eyebrow: string;
  title: string;
  lead: string;
  visual?: ReactNode;
  visualIsFramed?: boolean;
  children?: ReactNode;
}) => (
  <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#e4f3ff_0%,#f5f9ff_45%,#eef1ff_100%)]">
      <div className="absolute -top-40 right-[-10%] h-[620px] w-[620px] animate-sweep rounded-full bg-[radial-gradient(closest-side,rgba(144,206,255,0.55),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </div>
    <div className={`container-x relative grid items-center gap-14 ${visual ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
      <div className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="link-underline hover:text-ink">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="link-underline hover:text-ink">{c.name}</Link> : <span aria-current="page" className="font-medium text-ink">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mb-5 inline-flex items-center gap-2 text-royal">
          <span className="h-px w-6 bg-royal" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="text-4xl leading-[1.05] font-semibold text-ink sm:text-[3.4rem]">
          <WordReveal text={title} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{lead}</p>
        </Reveal>
        {children ?? (
          <Reveal delay={0.55} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <DemoButton className="w-full px-7 py-4 text-base sm:w-auto" />
            </Magnetic>
            <ButtonLink href="/pricing" variant="ghost" className="px-7 py-4 text-base">See pricing</ButtonLink>
          </Reveal>
        )}
      </div>
      {visual && (visualIsFramed ? visual : (
        <Float delay={0.5} distance={8} className="relative">
          <div aria-hidden className="absolute top-1/2 left-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-sky/60 to-brand/20" />
          <div className="relative">{visual}</div>
        </Float>
      ))}
    </div>
  </section>
);
