import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ProblemSolution />
      <Services />
      <Process />
      <Results />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
