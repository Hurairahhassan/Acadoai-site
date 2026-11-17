import { Access } from "../../components/Access";
import { AIWorkflows } from "../../components/AIWorkflows";
import { Automation } from "../../components/Automation";
import { Contact } from "../../components/Contact";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { IntroVideo } from "../../components/IntroVideo";
import { LogoWall } from "../../components/LogoWall";
import { MobileApp } from "../../components/MobileApp";
import { Modules } from "../../components/Modules";
import { Navbar } from "../../components/Navbar";
import { PersonaTabs } from "../../components/PersonaTabs";
import { Security } from "../../components/Security";
import { Stats } from "../../components/Stats";
import { Testimonials } from "../../components/Testimonials";
import { JsonLd } from "../../components/ui";
import { isLocale } from "../../content/i18n";
import { setLang, t } from "../../content/request";
import { softwareLd } from "../seo";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  setLang(lang);
  return (
    <>
      <JsonLd data={softwareLd(lang)} />
      <Navbar />
      <main id="main">
        <Hero />
        <LogoWall />
        <Stats />
        <IntroVideo />
        <Modules />
        <Automation />
        <PersonaTabs />
        <AIWorkflows />
        <Access />
        <MobileApp />
        <Security />
        <Testimonials />
        <FAQ />
        <Contact copy={t().ui.contact} />
      </main>
      <Footer />
    </>
  );
}
