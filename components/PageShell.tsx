import type { ReactNode } from "react";
import { CTABand } from "./CTABand";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const PageShell = ({ children, cta = true }: { children: ReactNode; cta?: boolean }) => (
  <>
    <Navbar />
    <main id="main">{children}</main>
    {cta && <CTABand />}
    <Footer />
  </>
);
