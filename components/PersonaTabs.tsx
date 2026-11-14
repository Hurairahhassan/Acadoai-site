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
        screens={personas.map((p) => (
          <ProductVisual key={p.id} src={p.screen} mock={p.mock} alt={`AcadoAI for ${p.label.toLowerCase()}: ${p.title}`} />
        ))}
      />
    </div>
  </section>
);
