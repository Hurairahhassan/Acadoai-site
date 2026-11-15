import { Magnetic, Reveal } from "./motion";
import { t } from "../content/request";
import { ButtonLink, DemoButton } from "./ui";

export const CTABand = (props: { title?: string; lead?: string }) => {
  const { ctaBand, common } = t().ui;
  const { title = ctaBand.title, lead = ctaBand.lead } = props;
  return (
  <section className="relative overflow-hidden bg-royal py-24 text-white">
    <div aria-hidden className="absolute -right-40 -top-40 h-[600px] w-[600px] animate-sweep rounded-full bg-[radial-gradient(closest-side,rgba(144,206,255,0.45),transparent)]" />
    <div className="container-x relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl leading-[1.05] font-semibold sm:text-6xl">{title}</h2>
        <p className="mt-5 text-lg text-white/80">{lead}</p>
      </Reveal>
      <Reveal delay={0.15} className="flex flex-col gap-3 sm:flex-row">
        <Magnetic>
          <DemoButton variant="sky" className="w-full px-7 py-4 text-base sm:w-auto" />
        </Magnetic>
        <ButtonLink href="/pricing" variant="ghostDark" className="px-7 py-4 text-base">
          {common.seePricing}
        </ButtonLink>
      </Reveal>
    </div>
  </section>
  );
};
