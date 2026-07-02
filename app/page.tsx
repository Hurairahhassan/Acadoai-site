import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { CompetitorComparison } from "../components/CompetitorComparison";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Finance } from "../components/Finance";
import { Security } from "../components/Security";
import { FAQ } from "../components/FAQ";
import { ProblemSolution } from "../components/ProblemSolution";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <CompetitorComparison />
        <Features />
        <DashboardShowcase />
        <About />
        <Finance />
        <Security />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
