import type { Metadata } from "next";
import { Star, MessageSquare, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Témoignages — Avis clients Anim'Action33 | Libourne",
  description: "Avis et témoignages des clients d'Anim'Action33 : animations anniversaires, stages vacances, team building et cours d'arts martiaux à Libourne.",
};

export default function TemoignagesPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#F0F4FF] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl text-[#1F2937] mb-3">Ce que disent nos clients</h1>
          <p className="text-gray-500">Basé sur les avis de nos clients · Libourne et Gironde</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-16">
            <MessageSquare size={56} className="text-[#1A3A8F]/20 mx-auto mb-6" />
            <h2 className="font-baloo font-bold text-2xl text-[#1F2937] mb-3">
              Soyez le premier à nous laisser un avis !
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Les témoignages de nos clients apparaîtront ici au fur et à mesure. Si vous avez bénéficié de nos prestations, votre avis nous aide beaucoup !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A3A8F] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all"
              >
                <Star size={18} fill="white" color="white" />
                Laisser un avis Google
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
