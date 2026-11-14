import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { features } from "../content/pages";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { ProductVisual, SectionHeader } from "./ui";

const spotlight = ["fee-management", "attendance-management", "exams-gradebook", "student-information-system"];

export const Modules = () => {
  const big = spotlight.map((s) => features.find((f) => f.slug === s)!);
  const rest = features.filter((f) => !spotlight.includes(f.slug));

  return (
    <section id="platform" className="bg-white py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="The platform"
              title="Everything your institution runs on, in one place"
              lead="Thirteen connected modules share the same students, classes and permissions, so nothing is typed twice."
            />
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {big.map((f, i) => (
            <StaggerItem key={f.slug}>
              <Link
                href={`/features/${f.slug}`}
                className={`group relative flex h-[30rem] flex-col overflow-hidden rounded-[1.75rem] p-8 ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(11,24,81,0.45)] ${
                  i === 0 ? "bg-gradient-to-br from-[#e6f3ff] to-[#f4f7ff]" : i === 3 ? "bg-gradient-to-br from-[#eef0ff] to-white" : "bg-paper"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <IconTile name={f.icon} tone="solid" />
                  <ArrowUpRight className="h-6 w-6 text-royal transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink sm:text-3xl">{f.name}</h3>
                <p className="mt-2 max-w-md text-muted">{f.summary}</p>
                <div className="pointer-events-none absolute inset-x-8 top-[13.5rem] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [mask-image:linear-gradient(to_bottom,#000_70%,transparent)] group-hover:-translate-y-3">
                  <ProductVisual src={f.screen} mock={f.mock} alt={`AcadoAI ${f.name}`} />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" gap={0.04}>
          {rest.map((f) => (
            <StaggerItem key={f.slug} className="min-w-0">
              <Link href={`/features/${f.slug}`} className="group flex h-full items-center gap-4 rounded-2xl p-4 ring-1 ring-line transition-colors duration-300 hover:bg-paper hover:ring-sky">
                <IconTile name={f.icon} />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">{f.name}</span>
                  <span className="block truncate text-sm text-muted">{f.summary}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-royal opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
