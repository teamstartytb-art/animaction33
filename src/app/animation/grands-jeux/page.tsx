import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Grands Jeux — Animation de groupe | Anim'Action33 Libourne",
  description: "Grands jeux extérieurs et événements pour groupes à Libourne et Gironde. Chasse au trésor, olympiades, jeux collectifs. Anim'Action33, animateur BAFD.",
};

export default function GrandsJeuxPage() {
  return (
    <div className="pt-16">
      <div className="gradient-hero-left py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="font-baloo font-extrabold text-5xl text-[#1A3A8F] mb-4">Grands Jeux</h1>
          <p className="text-[#1A3A8F]/70 text-xl max-w-2xl mx-auto mb-8">
            Olympiades, chasse au trésor géante, jeux collectifs — pour des groupes de 10 à 100 participants.
            Parfait pour les comités d&apos;entreprise, associations, colonies et événements familiaux.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="bg-[#1A3A8F]/10 text-[#1A3A8F] font-bold px-4 py-2 rounded-xl text-sm">10 à 100 pers.</span>
            <span className="bg-[#F5C518]/20 text-[#1A3A8F] font-bold px-4 py-2 rounded-xl text-sm">Dès 300€</span>
          </div>
          <a href="#devis" className="inline-flex items-center gap-2 bg-[#1A3A8F] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all">
            Demander un devis <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] text-center mb-10">Types de grands jeux</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏅", titre: "Olympiades", desc: "Épreuves sportives adaptées à tous les niveaux. Esprit olympique, dépassement, fair-play." },
              { icon: "🗺️", titre: "Chasse au Trésor", desc: "Indices, énigmes, collaboration — une aventure géante pour petits et grands." },
              { icon: "🎮", titre: "Jeux Collectifs", desc: "Grand Bazar, Koh Lanta géant, teams challenge — des jeux éprouvés et toujours efficaces." },
            ].map((j) => (
              <div key={j.titre} className="bg-[#F0F4FF] rounded-3xl p-7 text-center">
                <div className="text-5xl mb-4">{j.icon}</div>
                <h3 className="font-baloo font-bold text-xl text-[#1A3A8F] mb-2">{j.titre}</h3>
                <p className="text-gray-600 text-sm">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="py-16 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-center mb-8">Demander un devis</h2>
          <ContactForm defaultType="Grands Jeux" />
        </div>
      </section>
    </div>
  );
}
