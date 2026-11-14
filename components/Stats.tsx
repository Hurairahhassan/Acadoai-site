import { productFacts, showStats, stats } from "../content/pages";
import { Counter, Stagger, StaggerItem } from "./motion";

/** Product facts by default; verified customer numbers when NEXT_PUBLIC_SHOW_STATS=true. */
export const Stats = () => {
  const items = showStats ? stats.filter((s) => s.value) : productFacts;
  return (
    <section aria-label="AcadoAI at a glance" className="border-y border-line bg-white py-14">
      <Stagger className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {items.map((s) => (
          <StaggerItem key={s.label} className="border-l-2 border-sky pl-5">
            <Counter value={s.value} className="block font-display text-4xl font-semibold tracking-tight text-royal sm:text-5xl" />
            <p className="mt-2 max-w-[14rem] text-sm leading-5 text-muted">{s.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};
