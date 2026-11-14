import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Renders only when real school logos exist in /public/images/logos (file name = school name).
export const LogoWall = () => {
  const dir = path.join(process.cwd(), "public/images/logos");
  const logos = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.(svg|png|webp)$/i.test(f)) : [];
  if (logos.length === 0) return null;
  const row = [...logos, ...logos]; // duplicated for a seamless loop

  return (
    <section aria-label="Schools using AcadoAI" className="border-b border-line bg-white py-14">
      <p className="eyebrow mb-8 text-center text-muted">Trusted by schools and academies worldwide</p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {row.map((file, i) => (
            <li key={i} aria-hidden={i >= logos.length}>
              <Image
                src={`/images/logos/${file}`}
                alt={file.replace(/\.\w+$/, "").replace(/[-_]/g, " ")}
                width={160}
                height={48}
                className="h-10 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
