import { Globe2, MapPin } from "lucide-react";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { t } from "../content/request";
import { SectionHeader } from "./ui";

export const Security = () => {
  const { securityPoints, ui } = t();
  const c = ui.security;
  return (
  <section id="security" className="bg-white py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader center eyebrow={c.eyebrow} title={<>{c.title} <span className="text-royal">{c.titleHighlight}</span></>} lead={c.lead} />
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
      <Reveal className="mt-5 grid gap-8 rounded-[1.5rem] bg-navy p-8 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-sky">{c.residencyEyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{c.residencyTitle}</h3>
          <p className="mt-3 max-w-xl leading-7 text-white/75">{c.residencyText}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
            <Globe2 className="h-6 w-6 text-sky" aria-hidden />
            <p className="mt-3 font-semibold">{c.europeTitle}</p>
            <p className="mt-1 text-sm leading-6 text-white/70">{c.europeText}</p>
          </li>
          <li className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
            <MapPin className="h-6 w-6 text-sky" aria-hidden />
            <p className="mt-3 font-semibold">{c.localTitle}</p>
            <p className="mt-1 text-sm leading-6 text-white/70">{c.localText}</p>
          </li>
        </ul>
      </Reveal>
    </div>
  </section>
  );
};
