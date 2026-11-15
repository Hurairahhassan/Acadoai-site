import { personas } from "../content/pages";
import { Reveal } from "./motion";
import { PersonaTabsClient } from "./PersonaTabsClient";
import { ProductVisual, SectionHeader } from "./ui";

export const PersonaTabs = () => (
  <section id="roles" className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          eyebrow="For every role"
          title="Built for everyone who keeps education running"
          lead="Each person sees exactly what they need, and the AI does the repetitive part of their job."
        />
      </Reveal>
      <PersonaTabsClient
        personas={personas}
        screens={personas.map((p) => {
          const video = p.id === "leaders" ? "ask-data"
            : p.id === "teachers" ? "teacher-assistant"
            : p.id === "students" ? "student-tutor"
            : null;
          return video ? (
            <video
              key={p.id}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`/videos/${video}-poster.jpg`}
              aria-label={`AcadoAI demo for ${p.label.toLowerCase()}`}
              className="block h-auto w-full rounded-2xl bg-white object-contain shadow-[0_40px_80px_-30px_rgba(11,24,81,0.45)] ring-1 ring-line"
            >
              <source src={`/videos/${video}.mp4`} type="video/mp4" />
              <a href={`/videos/${video}.mp4`}>Watch the demo for {p.label.toLowerCase()}</a>
            </video>
          ) : (
            <ProductVisual key={p.id} src={p.screen} mock={p.mock} alt={`AcadoAI for ${p.label.toLowerCase()}: ${p.title}`} />
          );
        })}
      />
    </div>
  </section>
);
