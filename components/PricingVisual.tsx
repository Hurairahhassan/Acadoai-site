import { CircleCheckBig, Cpu, Database, HardDrive, Sparkles, Users } from "lucide-react";
import { Counter } from "./motion";

// Illustrative sizing only; real packages are quoted per institution.
const rows = [
  { icon: Users, label: "Users", value: "920", unit: " students & staff", fill: "78%" },
  { icon: Database, label: "Dedicated database", value: "25", unit: " GB", fill: "55%" },
  { icon: HardDrive, label: "File storage", value: "120", unit: " GB", fill: "66%" },
  { icon: Sparkles, label: "AI credits", value: "5000", unit: " / month", fill: "45%" },
];

const modules = ["Fees", "Attendance", "Exams", "Payroll", "AI tools"];

export const PricingVisual = () => (
  <div className="relative mx-auto w-full max-w-[460px]" aria-label="Example of a custom AcadoAI package" role="img">
    <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-30px_rgba(11,24,81,0.45)] ring-1 ring-line sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-royal">Example package</p>
          <p className="mt-1 text-xl font-semibold text-ink">Your custom system</p>
        </div>
        <span className="rounded-full bg-sky/20 px-3 py-1 text-xs font-semibold text-royal">Sizing…</span>
      </div>

      <ul className="mt-6 space-y-4">
        {rows.map(({ icon: Icon, label, value, unit, fill }, i) => (
          <li key={label}>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium text-ink">
                <Icon className="h-4 w-4 text-royal" aria-hidden /> {label}
              </span>
              <span className="font-semibold text-ink">
                <Counter value={value} />
                <span className="font-normal text-muted">{unit}</span>
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper">
              <div
                className="h-full animate-[grow_1.4s_cubic-bezier(0.22,1,0.36,1)_both] rounded-full bg-gradient-to-r from-brand to-royal"
                style={{ width: fill, animationDelay: `${0.6 + i * 0.25}s` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-paper p-4 ring-1 ring-line">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-sky">
          <Cpu className="h-5 w-5" aria-hidden />
        </span>
        <div className="text-sm">
          <p className="font-semibold text-ink">Dedicated cloud server</p>
          <p className="text-muted">4 vCPU · 8 GB RAM · sized to your load</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {modules.map((m, i) => (
          <span
            key={m}
            className="animate-[popIn_0.5s_ease_both] rounded-full bg-royal px-3 py-1 text-xs font-semibold text-white"
            style={{ animationDelay: `${1.8 + i * 0.12}s` }}
          >
            {m}
          </span>
        ))}
      </div>
    </div>

    <div
      className="absolute -bottom-5 -left-4 flex animate-[popIn_0.6s_ease_both] items-center gap-3 rounded-2xl bg-navy p-3 pr-5 text-white shadow-[0_24px_50px_-20px_rgba(11,24,81,0.6)] sm:-left-8"
      style={{ animationDelay: "2.6s" }}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky text-night">
        <CircleCheckBig className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-[13px] font-semibold">Package ready</p>
        <p className="text-[11px] text-sky">No fixed plan · pay for what you use</p>
      </div>
    </div>
  </div>
);
