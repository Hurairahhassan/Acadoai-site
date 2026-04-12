import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { submitContactForm } from "./actions/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardShowcase />
        <About />
        <Contact submitAction={submitContactForm} />
      </main>
      <Footer />
    </div>
  );
}
