import { IconTile } from "./icons";
import { Float, Reveal, Stagger, StaggerItem } from "./motion";
import { Mock } from "./mocks";
import { ButtonLink, SectionHeader } from "./ui";

const sides = [
  { icon: "building" as const, title: "Admin", text: "Dashboard, approvals, attendance, finance, QR receipt verification and Ask Your Data." },
  { icon: "graduation" as const, title: "Teacher", text: "Today's classes, topic planning with video, attendance, tests and marks." },
  { icon: "book" as const, title: "Student", text: "Timetable, courses, assignments, tests, results, fees and payment proof." },
];

export const MobileApp = () => (
  <section id="mobile" className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9ff,#e9f4ff)] py-28">
    <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <Reveal>
          <SectionHeader
            eyebrow="Mobile app"
            title="Keep education work within reach."
            lead="Native mobile workspaces for admins, teachers and students, signed in with a school code and running on the same secure data as the web portal."
          />
        </Reveal>
        <Stagger className="mt-10 space-y-4">
          {sides.map((s) => (
            <StaggerItem key={s.title} className="flex gap-4 rounded-2xl bg-white/80 p-5 ring-1 ring-line backdrop-blur">
              <IconTile name={s.icon} />
              <div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 leading-7 text-muted">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <ButtonLink href="/features/mobile-app" variant="ghost">
            Mobile app
          </ButtonLink>
        </Reveal>
      </div>
      <div className="relative flex justify-center">
        <div aria-hidden className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/60 blur-3xl" />
        <Float distance={12}>
          <Mock name="phone" />
        </Float>
      </div>
    </div>
  </section>
);
