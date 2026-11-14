import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { competitors } from "../content/pages";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

export const CompetitorComparison = () => (
  <section id="compare" className="bg-paper py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader eyebrow="Choosing a platform?" title="See how AcadoAI compares" lead="Honest side-by-sides with the platforms institutions usually evaluate." />
      </Reveal>
      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {competitors.map((c) => (
          <StaggerItem key={c.slug}>
            <Link
              href={`/compare/${c.slug}`}
              className="group flex h-full flex-col justify-between rounded-xl border border-line bg-white p-6 transition-colors duration-300 hover:border-royal hover:bg-royal"
            >
              <span className="eyebrow text-muted transition-colors group-hover:text-sky">AcadoAI vs</span>
              <span className="mt-10 flex items-end justify-between">
                <span className="font-display text-3xl font-semibold text-ink transition-colors group-hover:text-white">{c.name}</span>
                <ArrowUpRight className="h-6 w-6 text-royal transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" aria-hidden />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
