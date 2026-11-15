import { showStats } from "../content/pages";
import { t } from "../content/request";
import { Counter, Stagger, StaggerItem } from "./motion";

/** Product facts by default; verified customer numbers when NEXT_PUBLIC_SHOW_STATS=true. */
export const Stats = () => {
  const c = t();
  const items = showStats ? c.stats.filter((s) => s.value) : c.productFacts;
  return (
    <section aria-label={c.ui.stats.label} className="border-y border-line bg-white py-14">
      <Stagger className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {items.map((s) => (
          <StaggerItem key={s.label} className="border-s-2 border-sky ps-5">
            <Counter value={s.value} className="block font-display text-4xl font-semibold tracking-tight text-royal sm:text-5xl" />
            <p className="mt-2 max-w-[14rem] text-sm leading-5 text-muted">{s.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};
