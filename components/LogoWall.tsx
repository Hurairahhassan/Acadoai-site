import Image from "next/image";
import { fill } from "../content/pages";
import { t } from "../content/request";

const institutions = [
  { name: "Engineers & Doctors Inn", type: "coaching" as const, logo: "engineers-doctors-inn.png" },
  { name: "Shoeby Grammar English School", type: "school" as const, logo: "shoeby-grammar-english-school.png" },
  { name: "BM Grammar", type: "school" as const, logo: "bm-grammar-school.png" },
  { name: "Engineers & Doctors Inn School", type: "school" as const, logo: "engineers-doctors-inn.png" },
];

export const LogoWall = () => {
  const c = t().ui.logoWall;
  return (
  <section aria-labelledby="institutions-title" className="border-b border-line bg-white py-16">
    <div className="container-x">
      <div className="text-center">
        <h2 id="institutions-title" className="text-2xl font-semibold text-ink sm:text-3xl">{c.title}</h2>
        <p className="mt-3 text-muted">{c.lead}</p>
      </div>
      <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {institutions.map((institution) => (
          <li key={institution.name} className="flex flex-col items-center px-4 text-center">
            <div className="relative h-32 w-full max-w-[240px]">
              <Image
                src={`/images/institutions/${institution.logo}`}
                alt={fill(c.logo, { name: institution.name })}
                fill
                sizes="(min-width: 640px) 240px, 80vw"
                className="object-contain"
              />
            </div>
            <p className="mt-5 min-h-12 max-w-[260px] text-base leading-6 font-semibold text-ink">{institution.name}</p>
            <p className="mt-2 rounded-full bg-sky/20 px-3 py-1 text-xs font-medium text-royal">{c[institution.type]}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};
