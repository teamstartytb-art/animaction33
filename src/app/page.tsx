import HeroSection from "@/components/homepage/HeroSection";
import TrustBar from "@/components/homepage/TrustBar";
import HowItWorks from "@/components/homepage/HowItWorks";
import FeaturedActivities from "@/components/homepage/FeaturedActivities";
import TestimonialsCarousel from "@/components/homepage/TestimonialsCarousel";
import FAQRapide from "@/components/homepage/FAQRapide";
import AProposHomepage from "@/components/homepage/AProposHomepage";
import FinalCTA from "@/components/homepage/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <FeaturedActivities />
      <TestimonialsCarousel />

      {/* Bandeau urgence */}
      <div className="gradient-cta py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-white font-bold text-lg">
            Prochains stages disponibles : Été 2026 — Places limitées !
          </p>
          <a
            href="/animation/stages-vacances"
            className="bg-white text-[#CC2027] font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
          >
            Voir les dates disponibles →
          </a>
        </div>
      </div>

      <AProposHomepage />
      <FAQRapide />
      <FinalCTA />
    </>
  );
}
