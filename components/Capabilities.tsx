import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

export const Capabilities = ({ name, items }: { name: string; items: string[] }) => (
  <section className="bg-white pb-28">
    <div className="container-x">
      <div className="rounded-[2rem] bg-[linear-gradient(160deg,#e6f3ff,#f3f5ff)] p-8 sm:p-14">
        <Reveal>
          <SectionHeader eyebrow="Capabilities" title={`Inside ${name}`} />
        </Reveal>
        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" gap={0.04}>
          {items.map((c) => (
            <StaggerItem key={c} className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3.5 font-medium text-ink ring-1 ring-white">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-royal text-white">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              {c}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  </section>
);
