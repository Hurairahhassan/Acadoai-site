import { CalendarDays, Info, Mail, ShieldCheck, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./motion";
import { PageHero } from "./PageHero";
import { PageShell } from "./PageShell";
import { breadcrumbLd, ButtonLink, JsonLd } from "./ui";

export type LegalSection = { title: string; body: string[] };

const sectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Shared layout for Privacy Policy, Terms and Delete Account, matching the marketing pages. */
export const LegalPage = ({
  path,
  crumb,
  eyebrow,
  title,
  lead,
  lastUpdated,
  highlights,
  notice,
  sections,
  contact,
  children,
}: {
  path: string;
  crumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  lastUpdated: string;
  highlights: string[];
  notice?: { tone?: "info" | "warn"; text: ReactNode };
  sections: LegalSection[];
  contact: { title: string; text: string; href: string };
  /** Extra content shown above the numbered sections. */
  children?: ReactNode;
}) => (
  <PageShell cta={false}>
    <JsonLd data={breadcrumbLd([{ name: crumb, path }])} />
    <PageHero crumbs={[{ name: crumb }]} eyebrow={eyebrow} title={title} lead={lead}>
      <Reveal delay={0.55}>
        <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-ink ring-1 ring-sky/60 backdrop-blur">
          <CalendarDays className="h-4 w-4 text-royal" aria-hidden />
          Last updated: {lastUpdated}
        </p>
      </Reveal>
    </PageHero>

    <section className="bg-white pb-28">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h} delay={i * 0.08} className="rounded-2xl bg-paper p-6 ring-1 ring-line">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </span>
              <p className="mt-4 leading-7 text-ink/85">{h}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-royal">On this page</p>
            <nav aria-label="On this page" className="mt-5 border-l border-line">
              {sections.map((s) => (
                <a
                  key={s.title}
                  href={`#${sectionId(s.title)}`}
                  className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[15px] text-muted transition-colors hover:border-royal hover:text-royal"
                >
                  {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl">
            {notice && (
              <div
                className={`flex gap-3 rounded-2xl p-5 text-[15px] leading-7 ring-1 ${
                  notice.tone === "warn" ? "bg-amber-50 text-amber-900 ring-amber-200" : "bg-sky/15 text-ink ring-sky/60"
                }`}
              >
                {notice.tone === "warn" ? (
                  <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                ) : (
                  <Info className="mt-1 h-5 w-5 shrink-0 text-royal" aria-hidden />
                )}
                <div>{notice.text}</div>
              </div>
            )}

            {children}

            {sections.map((s) => (
              <article key={s.title} id={sectionId(s.title)} className="scroll-mt-28 border-b border-line py-10 last:border-b-0">
                <h2 className="text-2xl font-semibold text-ink sm:text-[1.7rem]">{s.title}</h2>
                <div className="mt-5 space-y-4">
                  {s.body.map((p) => (
                    <p key={p} className="text-[17px] leading-8 text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <Reveal className="mt-10 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{contact.title}</h2>
                  <p className="mt-2 max-w-md leading-7 text-sky/90">{contact.text}</p>
                </div>
                <ButtonLink href={contact.href} variant="sky" arrow={false} className="shrink-0">
                  <Mail className="h-4 w-4" aria-hidden />
                  support@acadoai.com
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);
