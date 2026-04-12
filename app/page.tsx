import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { Stats } from "../components/Stats";
import { Finance } from "../components/Finance";
import { Testimonials } from "../components/Testimonials";
import { Security } from "../components/Security";
import { FAQ } from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <DashboardShowcase />
        <About />
        <Finance />
        <Testimonials />
        {/* <Pricing /> */}
        <Security />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
