import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

// Each quote must be approved by the named person before publishing.
const testimonials = [
  {
    name: "Sadiquain",
    institution: "Engineers & Doctors Inn",
    logo: "engineers-doctors-inn.png",
    quote:
      "AcadoAI brought our admissions, attendance and fee records into one place. Fee challans now go out on time without the end-of-month rush, and our staff spend far less time on paperwork.",
  },
  {
    name: "Shakeel Ahmed",
    institution: "BM Grammar School",
    logo: "bm-grammar-school.png",
    quote:
      "Parents can now see attendance and results on their phones, and our teachers use the AI tools to prepare quizzes and lessons quickly. Running the school feels calmer and far more organised.",
  },
  {
    name: "Aamir",
    institution: "Engineers & Doctors Inn Coaching Centre",
    logo: "engineers-doctors-inn.png",
    quote:
      "In a coaching centre, every student's progress matters. AcadoAI flags students who need attention early, so we can follow up with them and their parents before small gaps become big ones.",
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="bg-paper py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader eyebrow="What our users say" title="Trusted by schools and academies" lead="Hear from the people who run their institutions on AcadoAI every day." />
      </Reveal>
      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-line shadow-[0_24px_50px_-30px_rgba(11,24,81,0.25)]">
              <Quote className="h-8 w-8 text-sky" aria-hidden />
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-line">
                  <Image src={`/images/institutions/${t.logo}`} alt={`${t.institution} logo`} fill sizes="48px" className="object-contain p-1" />
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
