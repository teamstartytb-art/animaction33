import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Stages Vacances Aventure — Enfants 6-14 ans | Anim'Action33 Libourne",
  description: "Stages de vacances outdoor et arts martiaux à Libourne. Journées aventure, semaines thématiques, groupes réduits. Anim'Action33, animateur BAFD.",
};

export default function StagesVacancesPage() {
  return (
    <div className="pt-16">
      <div className="gradient-hero-left py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-6xl mb-4">🌲</div>
          <h1 className="font-baloo font-extrabold text-5xl text-[#1A3A8F] mb-4">Stages Vacances Aventure</h1>
          <p className="text-[#1A3A8F]/70 text-xl max-w-2xl mx-auto mb-8">
            Une semaine (ou quelques jours) d&apos;aventure, de sport et de nature pour vos enfants. Groupes réduits, encadrement certifié BAFD.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="bg-[#1A3A8F]/10 text-[#1A3A8F] font-bold px-4 py-2 rounded-xl text-sm">6 - 14 ans</span>
            <span className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-xl text-sm">Max 15 enfants</span>
            <span className="bg-[#F5C518]/20 text-[#1A3A8F] font-bold px-4 py-2 rounded-xl text-sm">Dès 55€/j</span>
          </div>
          <a href="#reserver" className="inline-flex items-center gap-2 bg-[#1A3A8F] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all">
            S&apos;inscrire <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-6">Programme type</h2>
            <div className="space-y-4">
              {[{ h: "Matin (9h-12h)", act: ["Initiation arts martiaux adaptée", "Jeux sportifs collectifs", "Challenges et défis physiques"] }, { h: "Après-midi (14h-17h)", act: ["Grands jeux thématiques", "Activités nature et outdoor", "Ateliers créatifs ou manuels"] }].map((p) => (
                <div key={p.h} className="bg-[#F0F4FF] rounded-2xl p-5">
                  <h3 className="font-bold text-[#1A3A8F] mb-3">{p.h}</h3>
                  <ul className="space-y-1">{p.act.map((a) => <li key={a} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-green-500" />{a}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-6">Tarifs</h2>
            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-200 overflow-hidden">
              {[{ l: "Demi-journée (3h)", p: "30€" }, { l: "Journée complète", p: "55€" }, { l: "Semaine (5 jours)", p: "230€" }, { l: "Semaine + repas midi", p: "320€" }].map((t) => (
                <div key={t.l} className="flex justify-between px-5 py-4 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{t.l}</span>
                  <span className="font-bold text-[#1A3A8F] text-lg">{t.p}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 rounded-2xl p-5 border border-green-100">
              <h3 className="font-bold text-green-800 mb-2">Inclus dans le tarif</h3>
              <ul className="space-y-1">
                {["Encadrement certifié BAFD", "Tout le matériel nécessaire", "Assurance RC", "Goûter de l'après-midi"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-green-700"><Check size={14} />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="reserver" className="py-16 bg-[#F0F4FF]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-center text-[#1F2937] mb-8">S&apos;inscrire au stage</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <ContactForm defaultType="Stage Vacances" />
          </div>
        </div>
      </section>
    </div>
  );
}
