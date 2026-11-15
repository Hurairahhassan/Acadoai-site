import Image from "next/image";
import { t } from "../content/request";
import { AIStoryClient } from "./AIStoryClient";
import { Reveal } from "./motion";
import { ButtonLink, SectionHeader } from "./ui";

export const AIWorkflows = () => {
  const { aiWorkflows, ui } = t();
  return (
  <section id="ai" className="relative bg-navy py-28 text-white">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          dark
          eyebrow={ui.ai.eyebrow}
          title={ui.ai.title}
          lead={ui.ai.lead}
        />
      </Reveal>
      <AIStoryClient
        steps={aiWorkflows.map(({ title, text }) => ({ title, text }))}
        screens={aiWorkflows.map((w) => (
          <div
            key={w.title}
            className="mx-auto w-full max-w-[540px] rounded-[1.75rem] border border-sky/25 bg-gradient-to-br from-white/10 to-sky/5 p-2.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] sm:p-3"
          >
            <Image
              src={w.screen}
              alt={w.alt}
              width={1448}
              height={1086}
              sizes="(min-width: 640px) 516px, 100vw"
              className="block h-auto w-full rounded-2xl object-contain"
            />
          </div>
        ))}
      />
      <Reveal className="mt-16">
        <ButtonLink href="/features/ai-teaching-tools" variant="ghostDark">
          {ui.ai.cta}
        </ButtonLink>
      </Reveal>
    </div>
  </section>
  );
};
