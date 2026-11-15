import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { fill } from "../content/pages";
import { t as content } from "../content/request";
import { SectionHeader } from "./ui";

// Each quote must be approved by the named person before publishing.
const testimonials = [
  {
    name: "Sadiquain",
    institution: "Engineers & Doctors Inn",
    logo: "engineers-doctors-inn.png",
  },
  {
    name: "Shakeel Ahmed",
    institution: "BM Grammar School",
    logo: "bm-grammar-school.png",
  },
  {
    name: "Aamir",
    institution: "Engineers & Doctors Inn Coaching Centre",
    logo: "engineers-doctors-inn.png",
  },
];

export const Testimonials = () => {
  const { testimonials: c, logoWall } = content().ui;
  return (
  <section id="testimonials" className="bg-paper py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      </Reveal>
      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <StaggerItem key={t.name}>
            <figure className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-line shadow-[0_24px_50px_-30px_rgba(11,24,81,0.25)]">
              <Quote className="h-8 w-8 text-sky" aria-hidden />
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-ink">&ldquo;{c.quotes[i]}&rdquo;</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-line">
                  <Image src={`/images/institutions/${t.logo}`} alt={fill(logoWall.logo, { name: t.institution })} fill sizes="48px" className="object-contain p-1" />
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-muted">{t.institution}</span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
  );
};
