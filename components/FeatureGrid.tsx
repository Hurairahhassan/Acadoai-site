import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "../content/pages";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

/** Linked grid of features — used for internal linking across pages. */
export const FeatureGrid = ({ slugs, title = "Everything connected", eyebrow = "Related features" }: { slugs?: string[]; title?: string; eyebrow?: string }) => {
  const list = slugs ? features.filter((f) => slugs.includes(f.slug)) : features;
  return (
    <section className="bg-paper py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeader eyebrow={eyebrow} title={title} />
        </Reveal>
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f) => {
            return (
              <StaggerItem key={f.slug}>
                <Link href={`/features/${f.slug}`} className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-[#f2f8ff]">
                  <IconTile name={f.icon} />
                  <h3 className="mt-8 text-xl font-semibold text-ink ">{f.name}</h3>
                  <p className="mt-2 flex-1 leading-7 text-muted ">{f.summary}</p>
                  <ArrowRight className="mt-6 h-5 w-5 text-royal transition-all duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};
