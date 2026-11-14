// Illustrative product UI (synthetic data). Not customer data or outcome claims.
import { Check, Download, FileText, Mic, QrCode, ScanLine, Send, Sparkles, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import type { MockName } from "../content/pages";

const Card = ({ title, meta, children, className = "" }: { title: string; meta?: ReactNode; children: ReactNode; className?: string }) => (
  <div className={`w-full rounded-2xl bg-white p-5 text-[13px] text-ink shadow-[0_30px_60px_-30px_rgba(11,24,81,0.35)] ring-1 ring-line ${className}`}>
    <div className="mb-4 flex items-center justify-between gap-3">
      <p className="font-display text-[15px] font-semibold tracking-tight">{title}</p>
      {meta && <div className="text-[11px] text-muted">{meta}</div>}
    </div>
    {children}
  </div>
);

const Chip = ({ children, tone = "sky" }: { children: ReactNode; tone?: "sky" | "royal" | "warn" | "ok" | "muted" }) => {
  const t = { sky: "bg-sky/25 text-navy", royal: "bg-royal text-white", warn: "bg-amber-100 text-amber-800", ok: "bg-emerald-50 text-emerald-700", muted: "bg-paper text-muted" }[tone];
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${t}`}>{children}</span>;
};

const Avatar = ({ i, tone = 0 }: { i: string; tone?: number }) => (
  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${["bg-sky/40 text-navy", "bg-royal text-white", "bg-navy text-sky", "bg-brand/15 text-royal"][tone % 4]}`}>{i}</span>
);

const Bar = ({ pct, tone = "bg-royal" }: { pct: number; tone?: string }) => (
  <span className="block h-1.5 w-full overflow-hidden rounded-full bg-paper">
    <span className={`block h-full rounded-full ${tone}`} style={{ width: `${pct}%` }} />
  </span>
);

function Dashboard() {
  return (
    <Card title="Today at a glance" meta="Live">
      <div className="grid grid-cols-3 gap-2">
        {[["Students", "1,240"], ["Attendance", "94%"], ["Fees collected", "82%"]].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-paper p-3">
            <p className="text-[11px] text-muted">{l}</p>
            <p className="mt-1 font-display text-lg font-semibold">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-20 items-end gap-1.5">
        {[40, 62, 48, 70, 58, 80, 66, 88, 74, 92].map((h, i) => (
          <span key={i} className={`flex-1 rounded-t ${i % 3 === 2 ? "bg-sky" : "bg-royal"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-4 mb-2 text-[11px] font-semibold text-muted uppercase tracking-wider">Dues by class</p>
      {[["Grade 9", 72], ["Grade 7", 48], ["Grade 4", 30]].map(([c, p]) => (
        <div key={c} className="mb-2 grid grid-cols-[64px_1fr_40px] items-center gap-2">
          <span>{c}</span>
          <Bar pct={p as number} tone="bg-brand" />
          <span className="text-right text-muted">{p}%</span>
        </div>
      ))}
    </Card>
  );
}

function Profile() {
  return (
    <Card title="Student profile" meta="Reg. 2026-0418">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky to-brand font-display text-lg font-semibold text-white">AK</span>
        <div>
          <p className="font-semibold">Ayesha Khan</p>
          <p className="text-muted">Grade 8 · Section B</p>
        </div>
        <Chip tone="ok"><Check className="h-3 w-3" /> Active</Chip>
      </div>
      <div className="mt-4 flex gap-1 rounded-lg bg-paper p-1 text-[11px] font-semibold">
        {["Profile", "Academics", "Family", "Fees"].map((t, i) => (
          <span key={t} className={`flex-1 rounded-md py-1 text-center ${i === 0 ? "bg-white text-royal shadow-sm" : "text-muted"}`}>{t}</span>
        ))}
      </div>
      <dl className="mt-3 divide-y divide-line">
        {[["Guardian", "Imran Khan"], ["Attendance", "96%"], ["Last result", "A · 88%"], ["Fee status", <Chip key="f" tone="ok">Paid</Chip>]].map(([k, v]) => (
          <div key={String(k)} className="flex items-center justify-between py-2">
            <dt className="text-muted">{k}</dt>
            <dd className="font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

function Timetable() {
  const subj = [["Math", "Eng", "Sci", "Urdu"], ["Sci", "Math", "CS", "Eng"], ["Eng", "Bio", "Math", "Art"], ["Math", "Urdu", "Sci", "PE"]];
  const tone: Record<string, string> = { Math: "bg-royal text-white", Sci: "bg-sky/40 text-navy", Eng: "bg-brand/15 text-royal", Urdu: "bg-navy text-sky" };
  return (
    <Card title="Weekly timetable" meta="Grade 7 · B">
      <div className="grid grid-cols-[34px_repeat(4,1fr)] gap-1.5 text-center text-[11px]">
        <span />
        {["Mon", "Tue", "Wed", "Thu"].map((d) => <span key={d} className="font-semibold text-muted">{d}</span>)}
        {[0, 1, 2, 3].map((p) => (
          <div key={p} className="contents">
            <span className="self-center text-muted">P{p + 1}</span>
            {subj.map((day, d) => (
              <span key={d} className={`relative rounded-md py-2 font-semibold ${tone[day[p]] ?? "bg-paper text-ink"}`}>
                {day[p]}
                {p === 1 && d === 2 && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white" />}
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 text-[11px] text-muted"><span className="h-2 w-2 rounded-full bg-amber-400" /> Substitute: Mr. Bilal, Room 12</p>
    </Card>
  );
}

function Attendance() {
  const rows = [["Ali Raza", "P"], ["Sara Ahmed", "P"], ["Hamza Iqbal", "L"], ["Fatima Noor", "A"], ["Usman Tariq", "P"]];
  const st: Record<string, string> = { P: "bg-emerald-500 text-white", A: "bg-red-500 text-white", L: "bg-amber-400 text-white" };
  return (
    <Card title="Mark attendance" meta="Grade 7 · B · 32 students">
      <div className="mb-3 flex items-center justify-between rounded-xl bg-sky/20 px-3 py-2 text-[12px]">
        <span className="flex items-center gap-2 font-semibold text-navy"><ScanLine className="h-4 w-4" /> QR scan · 08:02</span>
        <Chip tone="ok">On time</Chip>
      </div>
      <ul className="space-y-1.5">
        {rows.map(([n, s], i) => (
          <li key={n} className="flex items-center gap-3 rounded-lg px-1 py-1">
            <Avatar i={n.split(" ").map((w) => w[0]).join("")} tone={i} />
            <span className="flex-1 font-medium">{n}</span>
            <span className="flex gap-1">
              {["P", "A", "L"].map((k) => (
                <span key={k} className={`grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold ${s === k ? st[k] : "bg-paper text-muted"}`}>{k}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-[11px] text-muted">
        <span>Unmarked after 09:00 → marked absent automatically</span>
      </div>
    </Card>
  );
}

function Challan() {
  return (
    <Card title="Fee challan · March" meta={<Chip tone="sky">Auto-generated</Chip>}>
      <div className="divide-y divide-line">
        {[["Tuition fee", "8,000"], ["Transport", "2,500"], ["Lab charges", "1,000"], ["Sibling discount", "−800"], ["Late fee", "300"]].map(([k, v]) => (
          <div key={k} className="flex justify-between py-1.5">
            <span className="text-muted">{k}</span>
            <span className={`font-semibold ${v.startsWith("−") ? "text-emerald-600" : ""}`}>{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-paper p-3">
        <div className="mb-2 flex justify-between text-[12px]"><span className="font-semibold">Paid 7,000 of 11,000</span><span className="text-muted">Partial</span></div>
        <Bar pct={64} />
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-sky p-3">
        <QrCode className="h-9 w-9 text-navy" strokeWidth={1.5} />
        <div className="flex-1">
          <p className="font-semibold">Receipt 04821</p>
          <p className="text-[11px] text-muted">Scan or enter code to verify</p>
        </div>
        <Chip tone="ok"><Check className="h-3 w-3" /> Verified</Chip>
      </div>
    </Card>
  );
}

function Result() {
  return (
    <Card title="Term result card" meta="Term 1 · 2026">
      <table className="w-full text-left">
        <thead className="text-[11px] text-muted">
          <tr><th className="pb-2 font-medium">Subject</th><th className="pb-2 font-medium">Marks</th><th className="pb-2 text-right font-medium">Grade</th></tr>
        </thead>
        <tbody className="divide-y divide-line">
          {[["Mathematics", "92/100", "A+"], ["Physics", "84/100", "A"], ["English", "78/100", "B+"], ["Urdu", "81/100", "A"]].map(([s, m, g]) => (
            <tr key={s}><td className="py-1.5">{s}</td><td className="py-1.5 text-muted">{m}</td><td className="py-1.5 text-right font-semibold text-royal">{g}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[["Overall", "84%"], ["GPA", "3.7"], ["Rank", "4th"]].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-navy p-2 text-white"><p className="text-[10px] text-sky">{k}</p><p className="font-display text-base font-semibold">{v}</p></div>
        ))}
      </div>
    </Card>
  );
}

function Alerts() {
  const rows = [
    ["Hamza Iqbal", "Attendance fell to 68%", 0],
    ["Fatima Noor", "Math average 41% this term", 1],
    ["Usman Tariq", "3 assignments missing", 2],
  ] as const;
  return (
    <Card title="Students needing attention" meta={<Chip tone="warn"><TriangleAlert className="h-3 w-3" /> 3 flagged</Chip>}>
      <ul className="space-y-2">
        {rows.map(([n, r, i]) => (
          <li key={n} className="flex items-center gap-3 rounded-xl bg-paper p-2.5">
            <Avatar i={n.split(" ").map((w) => w[0]).join("")} tone={i} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{n}</p>
              <p className="truncate text-[11px] text-muted">{r}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-line pt-3">
        <span className="mr-1 text-[11px] text-muted">Alert sent to</span>
        <Chip tone="royal">Admin</Chip>
        <Chip tone="royal">Teacher</Chip>
        <Chip tone="royal">Parent</Chip>
      </div>
    </Card>
  );
}

function Lesson() {
  return (
    <Card title="AI lesson plan" meta={<Chip tone="sky"><Sparkles className="h-3 w-3" /> Generated</Chip>}>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {["Grade 8", "Science", "Photosynthesis", "40 min"].map((t) => <Chip key={t} tone="muted">{t}</Chip>)}
      </div>
      <p className="mb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">Objectives</p>
      <ul className="mb-3 space-y-1">
        {["Explain how plants make food", "Label the parts of a leaf"].map((o) => (
          <li key={o} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 text-royal" />{o}</li>
        ))}
      </ul>
      <p className="mb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">Activities</p>
      <ol className="space-y-1.5">
        {[["5′", "Warm-up question"], ["15′", "Leaf diagram walkthrough"], ["15′", "Group experiment"], ["5′", "Exit quiz"]].map(([t, a]) => (
          <li key={a} className="flex items-center gap-2"><span className="w-8 rounded bg-sky/30 py-0.5 text-center text-[11px] font-bold text-navy">{t}</span>{a}</li>
        ))}
      </ol>
      <div className="mt-4 flex gap-2">
        <span className="flex-1 rounded-lg border border-line py-2 text-center font-semibold">Edit</span>
        <span className="flex-1 rounded-lg bg-royal py-2 text-center font-semibold text-white">Make slides</span>
      </div>
    </Card>
  );
}

function Tutor() {
  return (
    <Card title="3D tutor · Mathematics" meta="English · اردو">
      <div className="grid grid-cols-[96px_1fr] gap-3">
        <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-sky/50 to-brand/20 p-3">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand to-navy font-display text-lg font-semibold text-white ring-4 ring-white">S</span>
          <p className="mt-2 text-[11px] font-semibold text-navy">Sara</p>
          <span className="mt-2 flex h-4 items-end gap-0.5">
            {[6, 12, 8, 14, 9, 11, 5].map((h, i) => <span key={i} className="w-1 animate-pulse rounded-full bg-royal" style={{ height: h, animationDelay: `${i * 120}ms` }} />)}
          </span>
        </div>
        <div className="rounded-xl bg-navy p-3 font-mono text-[12px] text-white">
          <p className="mb-1 text-[10px] tracking-wider text-sky uppercase">Board</p>
          <p>2x + 5 = 17</p>
          <p className="text-white/70">2x = 17 − 5</p>
          <p className="text-white/70">2x = 12</p>
          <p className="mt-1 text-sky">x = 6 ✓</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-paper p-1.5 pl-4">
        <span className="flex-1 text-muted">Hold to talk…</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-royal text-white"><Mic className="h-4 w-4" /></span>
      </div>
    </Card>
  );
}

function AskData() {
  return (
    <Card title="Ask Your Data" meta="Admin">
      <div className="ml-auto mb-3 w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-royal px-3 py-2 text-white">Show outstanding fees by class for this month</div>
      <div className="rounded-2xl rounded-bl-sm bg-paper p-3">
        <p className="mb-2 flex items-center gap-1 text-[11px] font-semibold text-royal"><Sparkles className="h-3 w-3" /> 4 classes with balances</p>
        {[["Grade 9", 86], ["Grade 10", 64], ["Grade 7", 41], ["Grade 5", 22]].map(([c, p]) => (
          <div key={c} className="mb-1.5 grid grid-cols-[60px_1fr] items-center gap-2"><span>{c}</span><Bar pct={p as number} tone="bg-brand" /></div>
        ))}
        <div className="mt-3 flex gap-2">
          <Chip tone="muted"><Download className="h-3 w-3" /> CSV</Chip>
          <Chip tone="muted"><FileText className="h-3 w-3" /> PDF report</Chip>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-line p-1.5 pl-4 text-muted">
        <span className="flex-1">Ask about attendance, fees, staff…</span>
        <Mic className="h-4 w-4" />
        <span className="grid h-7 w-7 place-items-center rounded-full bg-royal text-white"><Send className="h-3.5 w-3.5" /></span>
      </div>
    </Card>
  );
}

function Chat() {
  return (
    <Card title="Grade 7 · B · Class group" meta="12 online">
      <div className="space-y-2.5">
        <div className="flex gap-2"><Avatar i="MB" tone={1} /><div className="rounded-2xl rounded-tl-sm bg-paper px-3 py-2">Science fair projects due Friday. Rubric attached.</div></div>
        <div className="ml-9 flex w-fit items-center gap-2 rounded-xl border border-line px-3 py-2"><FileText className="h-4 w-4 text-royal" /> rubric.pdf</div>
        <div className="flex justify-end"><div className="rounded-2xl rounded-tr-sm bg-royal px-3 py-2 text-white">Can we work in pairs?</div></div>
        <div className="flex gap-2"><Avatar i="MB" tone={1} /><div className="relative rounded-2xl rounded-tl-sm bg-paper px-3 py-2">Yes, pairs are fine 👍<span className="absolute -bottom-2 right-2 rounded-full bg-white px-1.5 text-[10px] shadow ring-1 ring-line">❤️ 4</span></div></div>
      </div>
    </Card>
  );
}

function Salary() {
  return (
    <Card title="Salary · March" meta={<Chip tone="ok">Paid</Chip>}>
      <div className="divide-y divide-line">
        {[["Base salary", "60,000"], ["Allowances", "8,000"], ["Eidi bonus", "10,000"], ["Deductions", "−1,500"], ["Provident fund", "−3,000"], ["Tax", "−2,400"]].map(([k, v]) => (
          <div key={k} className="flex justify-between py-1.5"><span className="text-muted">{k}</span><span className={`font-semibold ${v.startsWith("−") ? "text-red-600" : ""}`}>{v}</span></div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-navy p-3 text-white">
        <span className="text-sky">Net salary</span>
        <span className="font-display text-lg font-semibold">71,100</span>
      </div>
    </Card>
  );
}

function Permissions() {
  const mods = [["Finance Management", true], ["Students", true], ["Student Attendance", false], ["Result Approval Queue", false], ["Messaging", true]] as const;
  return (
    <Card title="Access · Sana R." meta="Accountant">
      <ul className="space-y-1">
        {mods.map(([m, on]) => (
          <li key={m} className="flex items-center justify-between rounded-lg px-1 py-1.5">
            <span className={on ? "font-medium" : "text-muted"}>{m}</span>
            <span className={`relative h-5 w-9 rounded-full transition-colors ${on ? "bg-royal" : "bg-line"}`}>
              <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow ${on ? "left-[18px]" : "left-0.5"}`} />
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-2 border-t border-line pt-3 text-[11px] text-muted"><Check className="h-3.5 w-3.5 text-emerald-600" /> Saved · version 12 · change audited</p>
    </Card>
  );
}

function Phone() {
  return (
    <div className="mx-auto w-[230px] rounded-[2.2rem] bg-night p-2.5 shadow-[0_40px_80px_-30px_rgba(11,24,81,0.6)]">
      <div className="overflow-hidden rounded-[1.7rem] bg-paper text-[12px] text-ink">
        <div className="bg-gradient-to-br from-royal to-navy px-4 pt-6 pb-8 text-white">
          <p className="text-[11px] text-sky">Good morning</p>
          <p className="font-display text-base font-semibold">Ms. Hina</p>
        </div>
        <div className="-mt-5 space-y-2 px-3 pb-4">
          <div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[10px] text-muted">Today's classes</p><p className="font-semibold">4 periods · 1 duty</p></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[10px] text-muted">Attendance</p><p className="font-display text-base font-semibold">96%</p></div>
            <div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[10px] text-muted">To grade</p><p className="font-display text-base font-semibold">18</p></div>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-amber-800"><TriangleAlert className="h-4 w-4" /> 3 students need attention</div>
        </div>
      </div>
    </div>
  );
}

function Flashcards() {
  return (
    <Card title="NoteBookLM · Chapter 4" meta="Biology">
      <div className="mb-3 flex gap-1 overflow-hidden text-[11px] font-semibold">
        {["Summary", "Flashcards", "Quiz", "Mind map", "Audio"].map((t, i) => (
          <span key={t} className={`rounded-full px-2.5 py-1 ${i === 1 ? "bg-royal text-white" : "bg-paper text-muted"}`}>{t}</span>
        ))}
      </div>
      <div className="relative h-36">
        <div className="absolute inset-x-6 top-4 h-28 rounded-xl bg-sky/30" />
        <div className="absolute inset-x-3 top-2 h-28 rounded-xl bg-sky/50" />
        <div className="absolute inset-x-0 top-0 flex h-28 flex-col justify-center rounded-xl bg-navy p-4 text-white">
          <p className="text-[10px] tracking-wider text-sky uppercase">Card 3 of 20</p>
          <p className="mt-1 font-display text-base font-semibold">Where does photosynthesis take place?</p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex-1 rounded-lg border border-line py-2 text-center font-semibold">Show answer</span>
        <span className="flex-1 rounded-lg bg-royal py-2 text-center font-semibold text-white">Next</span>
      </div>
    </Card>
  );
}

const registry: Record<MockName, () => ReactNode> = {
  dashboard: Dashboard,
  profile: Profile,
  timetable: Timetable,
  attendance: Attendance,
  challan: Challan,
  result: Result,
  alerts: Alerts,
  lesson: Lesson,
  tutor: Tutor,
  askdata: AskData,
  chat: Chat,
  salary: Salary,
  permissions: Permissions,
  phone: Phone,
  flashcards: Flashcards,
};

export function Mock({ name, className = "" }: { name: MockName; className?: string }) {
  const C = registry[name];
  return (
    <div className={className} role="img" aria-label={`AcadoAI ${name} screen illustration`}>
      <C />
    </div>
  );
}
