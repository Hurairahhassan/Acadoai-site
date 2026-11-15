import { securityPoints } from "../content/pages";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./ui";

export const Security = () => (
  <section id="security" className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader center eyebrow="Security & privacy" title={<>Your data. <span className="text-royal">Your control.</span></>} lead="Every institution on AcadoAI gets its own dedicated database and server, completely separate from other schools. Your data belongs to you, not us." />
      </Reveal>
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {securityPoints.map((s) => (
          <StaggerItem key={s.title} className="rounded-[1.5rem] bg-paper p-7 ring-1 ring-line transition-colors duration-500 hover:bg-white hover:ring-sky">
            <IconTile name={s.icon} />
            <h3 className="mt-6 text-xl font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 leading-7 text-muted">{s.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
