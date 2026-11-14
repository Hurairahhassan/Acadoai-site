import { Bell, BookOpenCheck, ClipboardList, GraduationCap, ShieldUser, Sparkles, UserRound, Wallet, CalendarCheck } from "lucide-react";
import type { ReactNode } from "react";
import { automations } from "../content/pages";
import { IconTile } from "./icons";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { ButtonLink, SectionHeader } from "./ui";

const inputs = [
  { icon: CalendarCheck, label: "Attendance" },
  { icon: BookOpenCheck, label: "Test & exam results" },
  { icon: ClipboardList, label: "Assignments" },
  { icon: Wallet, label: "Fee balances" },
];
const outputs = [
  { icon: ShieldUser, label: "Admin alert" },
  { icon: GraduationCap, label: "Teacher alert" },
  { icon: UserRound, label: "Parent alert" },
];

const Node = ({ icon: Icon, label, dark = false }: { icon: typeof Bell; label: string; dark?: boolean }) => (
  <li className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold shadow-sm ring-1 ${dark ? "bg-navy text-white ring-navy" : "bg-white text-ink ring-line"}`}>
    <Icon className={`h-4 w-4 ${dark ? "text-sky" : "text-royal"}`} strokeWidth={1.75} aria-hidden />
    {label}
  </li>
);

/** Connector with travelling dots; horizontal on desktop, vertical on mobile. */
const Connector = ({ delay = "0s" }: { delay?: string }): ReactNode => (
  <div aria-hidden className="relative mx-auto h-12 w-px bg-gradient-to-b from-sky to-royal/40 lg:mx-0 lg:h-px lg:w-full lg:bg-gradient-to-r">
    {[0, 0.8, 1.6].map((d) => (
      <span
        key={d}
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-flow-y rounded-full bg-royal shadow-[0_0_10px_rgba(42,58,186,0.8)] lg:top-1/2 lg:left-0 lg:animate-flow-x"
        style={{ animationDelay: `calc(${delay} + ${d}s)` }}
      />
    ))}
  </div>
);

export const Automation = () => (
  <section id="automation" className="relative overflow-hidden bg-[linear-gradient(180deg,#eef6ff_0%,#f7f9ff_100%)] py-28">
    <div className="container-x">
      <Reveal>
        <SectionHeader
          center
          eyebrow="Automation"
          title="The routine runs itself. You hear about what matters."
          lead="AcadoAI watches attendance, results, assignments and fees for every student, then alerts the right people when someone needs attention."
        />
      </Reveal>

      {/* Flow diagram */}
      <Reveal className="mt-16 grid items-center gap-2 lg:grid-cols-[1fr_120px_auto_120px_1fr] lg:gap-0">
        <ul className="mx-auto grid w-full max-w-xs gap-2.5">
          {inputs.map((n) => <Node key={n.label} {...n} />)}
        </ul>
        <Connector />
        <div className="relative mx-auto grid h-44 w-44 place-items-center">
          <span aria-hidden className="absolute inset-0 animate-ring rounded-full bg-sky/50" />
          <span aria-hidden className="absolute inset-0 animate-ring rounded-full bg-sky/40 [animation-delay:1.4s]" />
          <div className="relative grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-brand to-navy text-center text-white shadow-[0_30px_60px_-20px_rgba(11,24,81,0.7)] ring-8 ring-white">
            <div>
              <Sparkles className="mx-auto h-6 w-6 text-sky" aria-hidden />
              <p className="mt-1 font-display text-lg leading-tight font-semibold">AcadoAI</p>
              <p className="text-[11px] text-sky">tracks & detects</p>
            </div>
          </div>
        </div>
        <Connector delay="1.2s" />
        <ul className="mx-auto grid w-full max-w-xs gap-2.5">
          {outputs.map((n) => <Node key={n.label} {...n} dark />)}
          <li className="flex items-center gap-3 rounded-xl border border-dashed border-royal/40 px-4 py-3 text-sm font-semibold text-royal">
            <Bell className="h-4 w-4" strokeWidth={1.75} aria-hidden /> Assignment & test reminders
          </li>
        </ul>
      </Reveal>

      {/* Automations */}
      <Stagger className="mt-20 grid gap-5 lg:grid-cols-3">
        {automations.map((a) => (
          <StaggerItem key={a.title} className="flex flex-col rounded-[1.75rem] bg-white p-8 shadow-[0_30px_60px_-45px_rgba(11,24,81,0.5)] ring-1 ring-line">
            <IconTile name={a.icon} tone="solid" />
            <h3 className="mt-6 text-2xl font-semibold text-ink">{a.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-muted">{a.text}</p>
            <ul className="mt-6 space-y-2 border-t border-line pt-5">
              {a.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-royal" aria-hidden /> {p}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12 text-center">
        <ButtonLink href="/features/automation-alerts" variant="ghost">
          How automation works
        </ButtonLink>
      </Reveal>
    </div>
  </section>
);
