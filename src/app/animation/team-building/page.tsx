import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Team Building Arts Martiaux — Entreprises | Anim'Action33 Libourne",
  description: "Team building outdoor et arts martiaux pour entreprises à Libourne et Gironde. Ateliers 2h à journée complète. Devis sur mesure, Anim'Action33.",
};

export default function TeamBuildingPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-slate-900 to-[#1A3A8F] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <div className="text-6xl mb-4">🏢</div>
          <h1 className="font-baloo font-extrabold text-5xl mb-4">Team Building Anim&apos;Action33</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8">
            Renforcez la cohésion de vos équipes avec des ateliers arts martiaux et outdoor uniques.
            Une expérience qui restera dans les mémoires.
          </p>
          <a href="#devis" className="inline-flex items-center gap-2 bg-[#F5C518] text-[#1F2937] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all">
            Demander un devis <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] text-center mb-10">Formats disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titre: "Atelier 2h", effectif: "10-20 personnes", prix: "800 — 1200€", desc: "Parfait pour une introduction. Initiation aux arts martiaux, exercices de cohésion, défis collectifs.", icon: "⚡" },
              { titre: "Demi-journée", effectif: "10-30 personnes", prix: "1500 — 2500€", desc: "Programme complet avec ateliers thématiques, jeux de rôle et moments de réflexion collective.", icon: "🌟", popular: true },
              { titre: "Journée complète", effectif: "Sur devis", prix: "Sur devis", desc: "L'expérience ultime. Repas partagé, plusieurs disciplines, moments forts et souvenirs durables.", icon: "🏆" },
            ].map((f) => (
              <div key={f.titre} className={`rounded-3xl p-8 ${f.popular ? "bg-[#1A3A8F] text-white shadow-xl" : "bg-[#F0F4FF] border border-blue-100"}`}>
                <div className="text-4xl mb-4">{f.icon}</div>
                {f.popular && <div className="text-xs font-bold text-[#F5C518] uppercase tracking-wider mb-2">Le plus choisi</div>}
                <h3 className={`font-baloo font-bold text-2xl mb-1 ${f.popular ? "text-white" : "text-[#1F2937]"}`}>{f.titre}</h3>
                <p className={`text-sm mb-4 ${f.popular ? "text-blue-200" : "text-gray-500"}`}>{f.effectif}</p>
                <p className={`text-sm mb-6 ${f.popular ? "text-blue-100" : "text-gray-600"}`}>{f.desc}</p>
                <p className={`font-bebas text-3xl ${f.popular ? "text-[#F5C518]" : "text-[#1A3A8F]"}`}>{f.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="py-16 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-center text-[#1F2937] mb-4">Demander un devis</h2>
          <p className="text-center text-gray-500 mb-8">Chaque team building est unique — devis personnalisé gratuit</p>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <ContactForm defaultType="Team Building" />
          </div>
        </div>
      </section>
    </div>
  );
}
