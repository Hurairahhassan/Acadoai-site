import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

export const Benefits = ({ eyebrow, title, items }: { eyebrow: string; title: string; items: { title: string; text: string }[] }) => (
  <section className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader eyebrow={eyebrow} title={title} />
      </Reveal>
      <Stagger className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
        {items.map((b, i) => (
          <StaggerItem key={b.title} className="border-t-2 border-ink pt-6">
            <span className="font-mono text-sm text-brand">0{i + 1}</span>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{b.title}</h3>
            <p className="mt-3 text-lg leading-8 text-muted">{b.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
