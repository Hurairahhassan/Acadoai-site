import { Check } from "lucide-react";
import { Parallax, Reveal, Stagger, StaggerItem } from "./motion";
import { ButtonLink, ProductVisual, SectionHeader } from "./ui";

const roles = [
  ["School Admin", "Full institution administration and permission control"],
  ["Principal", "Scoped dashboard plus granted modules, incl. approvals and Ask Your Data"],
  ["Management & Accountant", "Only the modules the admin delegates"],
  ["Teacher & Coordinator", "Assigned classes, sections and students"],
  ["Student", "Own learning, results, attendance and fees"],
];

export const Access = () => (
  <section id="access" className="overflow-hidden bg-white py-28">
    <div className="container-x grid items-center gap-16 lg:grid-cols-2">
      <div>
        <Reveal>
          <SectionHeader
            eyebrow="Roles & permissions"
            title="Give each team member exactly the access their work needs."
            lead="Every role has its own workspace. Your admin delegates administrative modules one by one, and every change is audited."
          />
        </Reveal>
        <Stagger className="mt-10 divide-y divide-line border-y border-line">
          {roles.map(([r, d]) => (
            <StaggerItem key={r} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
              <span className="font-semibold text-ink">{r}</span>
              <span className="text-muted">{d}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink href="/features/roles-permissions" variant="ghost">
            Roles & permissions
          </ButtonLink>
          <span className="flex items-center gap-2 text-sm text-muted">
            <Check className="h-4 w-4 text-royal" aria-hidden /> Versioned saves · audit records · realtime updates
          </span>
        </Reveal>
      </div>
      <Parallax distance={30} className="relative">
        <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-[linear-gradient(160deg,#e6f3ff,#eef0ff)]" />
        <div className="relative p-4 sm:p-10">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-display text-6xl font-semibold tracking-tight text-royal">26</span>
            <span className="max-w-[12rem] text-sm leading-5 text-muted">admin modules you can delegate, one by one</span>
          </div>
          <ProductVisual src="/images/screens/permissions.png" mock="permissions" alt="AcadoAI permission editor for an accountant" />
        </div>
      </Parallax>
    </div>
  </section>
);
