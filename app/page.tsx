import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AdmissionsCTA from "@/components/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyUs />
      <Programs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AdmissionsCTA />
    </>
  );
}
