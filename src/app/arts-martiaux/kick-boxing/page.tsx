import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Sports de combat — Cours particuliers à Libourne | Anim'Action33",
  description: "Cours de sports de combat à domicile avec moniteur TFP MKWDA. Enfants (dès 14 ans), ados, adultes. Libourne et Gironde. Crédit d'impôt 50%.",
};

export default function KickBoxingPage() {
  return (
    <div className="pt-16 bg-[#0A0A0A]">
      <div className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="text-6xl mb-6">🥊</div>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">Sports de combat</h1>
          <h2 className="font-bebas text-2xl tracking-wider text-orange-400 mb-6">
            Combat · Cardio · Technique
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Frapper fort, défendre bien, se dépenser pleinement. Les sports de combat combinent travail cardio-vasculaire et technique dans une pratique accessible à tous.
          </p>
          <a href="#reserver" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all">
            Réserver un cours <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <section className="py-16 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
            <h3 className="font-bebas text-2xl tracking-wider text-orange-400 mb-4">Ce qu&apos;on travaille</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["Techniques de frappe au poing (direct, crochet, uppercut)", "Techniques de frappe au pied (chassé, latéral, retourné)", "Défense et esquives", "Travail au sac de frappe", "Cardio et conditionnement physique", "Sparring encadré (selon niveau)"].map((i) => (
                <li key={i} className="flex items-start gap-2"><Check size={14} className="text-orange-400 shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
            <h3 className="font-bebas text-2xl tracking-wider text-[#F5C518] mb-4">Tarifs</h3>
            <div className="space-y-3 mb-6">
              {[
                { l: "Séance individuelle (1h)", p: "55€" }, { l: "Séance duo (1h)", p: "75€" },
                { l: "Pack 5 séances", p: "245€" }, { l: "Pack 10 séances", p: "450€" },
              ].map((t) => (
                <div key={t.l} className="flex justify-between py-2 border-b border-white/5 text-sm">
                  <span className="text-gray-300">{t.l}</span>
                  <span className="font-bebas text-xl text-orange-400">{t.p}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#F5C518]/10 border border-[#F5C518]/20 rounded-xl p-4 text-sm">
              <p className="text-[#F5C518] font-bold mb-1">💡 Crédit d&apos;impôt 50%</p>
              <p className="text-gray-400">Cours à domicile = 27,50€ réels après remboursement</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reserver" className="py-16 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-bebas text-4xl tracking-wider text-white text-center mb-8">Réserver un cours</h2>
          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10">
            <ContactForm defaultType="Cours Arts Martiaux" dark={true} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-bebas text-3xl tracking-wider text-center text-white mb-6">Autres disciplines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[{ href: "/arts-martiaux/vovinam", l: "Vovinam Viet Vo Dao", e: "🥋" }, { href: "/arts-martiaux/self-defense", l: "Self-Défense", e: "🛡" }].map((d) => (
              <Link key={d.href} href={d.href} className="group bg-[#0A0A0A] rounded-2xl p-6 border border-white/10 hover:border-[#CC2027]/30 transition-all card-hover flex items-center gap-4">
                <span className="text-4xl">{d.e}</span>
                <span className="font-bebas text-xl tracking-wider text-white group-hover:text-[#CC2027] transition-colors">{d.l}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
