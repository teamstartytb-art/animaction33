import { Hero } from "@/components/homepage/Hero";
import { TrustBar } from "@/components/homepage/TrustBar";
import { Prestations } from "@/components/homepage/Prestations";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Stats } from "@/components/homepage/Stats";
import { Testimonials } from "@/components/homepage/Testimonials";
import { Catalogue } from "@/components/homepage/Catalogue";
import { FAQSection } from "@/components/homepage/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Prestations />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Catalogue />
      <FAQSection />
    </>
  );
}
