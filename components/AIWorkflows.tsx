import { aiWorkflows } from "../content/pages";
import { AIStoryClient } from "./AIStoryClient";
import { Reveal } from "./motion";
import { ButtonLink, ProductVisual, SectionHeader } from "./ui";

export const AIWorkflows = () => (
  <section id="ai" className="relative bg-navy py-28 text-white">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          dark
          eyebrow="AI built into daily work"
          title="Practical AI for leaders, teachers and students."
          lead="Different AI tools for different jobs, working inside your institution's own records, with usage allowances you control."
        />
      </Reveal>
      <AIStoryClient
        steps={aiWorkflows.map(({ title, text }) => ({ title, text }))}
        screens={aiWorkflows.map((w) => (
          <ProductVisual key={w.title} src={w.screen} mock={w.mock} alt={`AcadoAI ${w.title}`} />
        ))}
      />
      <Reveal className="mt-16">
        <ButtonLink href="/features/ai-teaching-tools" variant="ghostDark">
          Explore AI features
        </ButtonLink>
      </Reveal>
    </div>
  </section>
);
