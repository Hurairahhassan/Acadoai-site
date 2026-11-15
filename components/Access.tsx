import { Check } from "lucide-react";
import { Parallax, Reveal, Stagger, StaggerItem } from "./motion";
import { t } from "../content/request";
import { ButtonLink, ProductVisual, SectionHeader } from "./ui";


export const Access = () => {
  const c = t().ui.access;
  return (
  <section id="access" className="overflow-hidden bg-white py-28">
    <div className="container-x grid items-center gap-16 lg:grid-cols-2">
      <div>
        <Reveal>
          <SectionHeader
            eyebrow={c.eyebrow}
            title={c.title}
            lead={c.lead}
          />
        </Reveal>
        <Stagger className="mt-10 divide-y divide-line border-y border-line">
          {c.roles.map(({ role: r, text: d }) => (
            <StaggerItem key={r} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <span className="font-semibold text-ink">{r}</span>
              <span className="text-muted">{d}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="/features/roles-permissions" variant="ghost">
            {c.cta}
          </ButtonLink>
          <span className="flex items-center gap-2 text-sm text-muted">
            <Check className="h-4 w-4 text-royal" aria-hidden /> {c.meta}
          </span>
        </Reveal>
      </div>
      <Parallax distance={30} className="relative">
        <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-[linear-gradient(160deg,#e6f3ff,#eef0ff)]" />
        <div className="relative p-4 sm:p-10">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-display text-6xl font-semibold tracking-tight text-royal">26</span>
            <span className="max-w-[12rem] text-sm leading-5 text-muted">{c.modules}</span>
          </div>
          <ProductVisual src="/images/screens/permissions.png" mock="permissions" alt={c.imageAlt} />
        </div>
      </Parallax>
    </div>
  </section>
  );
};
