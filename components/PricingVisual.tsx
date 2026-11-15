import { CircleCheckBig, Cpu, Database, HardDrive, Sparkles, Users } from "lucide-react";
import { t } from "../content/request";
import { Counter } from "./motion";

// Illustrative sizing only; real packages are quoted per institution.

export const PricingVisual = () => {
  const c = t().ui.pricingVisual;
  const rows = [
    { icon: Users, label: c.users, value: "920", unit: c.usersUnit, fill: "78%" },
    { icon: Database, label: c.database, value: "25", unit: " GB", fill: "55%" },
    { icon: HardDrive, label: c.storage, value: "120", unit: " GB", fill: "66%" },
    { icon: Sparkles, label: c.aiCredits, value: "5000", unit: c.perMonth, fill: "45%" },
  ];
  return (
  <div className="relative mx-auto w-full max-w-[460px]" aria-label={c.label} role="img">
    <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-30px_rgba(11,24,81,0.45)] ring-1 ring-line sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-royal">{c.eyebrow}</p>
          <p className="mt-1 text-xl font-semibold text-ink">{c.title}</p>
        </div>
        <span className="rounded-full bg-sky/20 px-3 py-1 text-xs font-semibold text-royal">{c.sizing}</span>
      </div>

      <ul className="mt-6 space-y-4">
        {rows.map(({ icon: Icon, label, value, unit, fill }, i) => (
          <li key={label}>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 font-medium text-ink">
                <Icon className="h-4 w-4 text-royal" aria-hidden /> {label}
              </span>
              {/* <bdi> keeps "25 GB" in the right order inside Urdu and Arabic text. */}
              <bdi className="font-semibold text-ink">
                <Counter value={value} />
                <span className="font-normal text-muted">{unit}</span>
              </bdi>
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
          <p className="font-semibold text-ink">{c.server}</p>
          <p className="text-muted">
            <bdi>{c.serverSpec}</bdi>
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {c.modules.map((m, i) => (
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
      className="absolute -bottom-5 -start-4 flex animate-[popIn_0.6s_ease_both] items-center gap-3 rounded-2xl bg-navy p-3 pe-5 text-white shadow-[0_24px_50px_-20px_rgba(11,24,81,0.6)] sm:-start-8"
      style={{ animationDelay: "2.6s" }}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky text-night">
        <CircleCheckBig className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-[13px] font-semibold">{c.ready}</p>
        <p className="text-[11px] text-sky">{c.readySub}</p>
      </div>
    </div>
  </div>
  );
};
