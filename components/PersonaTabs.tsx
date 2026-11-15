import { fill } from "../content/pages";
import { getLang, href, t } from "../content/request";
import { Reveal } from "./motion";
import { PersonaTabsClient } from "./PersonaTabsClient";
import { ProductVisual, SectionHeader } from "./ui";

export const PersonaTabs = () => {
  const { personas: list, ui } = t();
  const c = ui.personas;
  // Urdu and Arabic have no letter case, and lowercasing English labels reads naturally mid-sentence.
  const role = (label: string) => (getLang() === "en" ? label.toLowerCase() : label);
  const personas = list.map((p) => ({ ...p, href: href(p.href) }));
  return (
  <section id="roles" className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          eyebrow={c.eyebrow}
          title={c.title}
          lead={c.lead}
        />
      </Reveal>
      <PersonaTabsClient
        personas={personas}
        labels={{ tabs: c.tabs, explore: personas.map((p) => fill(c.explore, { role: role(p.label) })) }}
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
              aria-label={fill(c.demo, { role: role(p.label) })}
              className="block h-auto w-full rounded-2xl bg-white object-contain shadow-[0_40px_80px_-30px_rgba(11,24,81,0.45)] ring-1 ring-line"
            >
              <source src={`/videos/${video}.mp4`} type="video/mp4" />
              <a href={`/videos/${video}.mp4`}>{fill(c.watch, { role: role(p.label) })}</a>
            </video>
          ) : (
            <ProductVisual key={p.id} src={p.screen} mock={p.mock} alt={`${fill(c.demo, { role: role(p.label) })}: ${p.title}`} />
          );
        })}
      />
    </div>
  </section>
  );
};
