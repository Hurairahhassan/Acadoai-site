import { Access } from "../components/Access";
import { AIWorkflows } from "../components/AIWorkflows";
import { Automation } from "../components/Automation";
import { CompetitorComparison } from "../components/CompetitorComparison";
import { Contact } from "../components/Contact";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { LogoWall } from "../components/LogoWall";
import { MobileApp } from "../components/MobileApp";
import { Modules } from "../components/Modules";
import { Navbar } from "../components/Navbar";
import { PersonaTabs } from "../components/PersonaTabs";
import { Security } from "../components/Security";
import { Stats } from "../components/Stats";
import { JsonLd } from "../components/ui";
import { softwareLd } from "./seo";

export default function Home() {
  return (
    <>
      <JsonLd data={softwareLd} />
      <Navbar />
      <main id="main">
        <Hero />
        <LogoWall />
        <Stats />
        <Modules />
        <Automation />
        <PersonaTabs />
        <AIWorkflows />
        <Access />
        <MobileApp />
        <Security />
        <CompetitorComparison />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
