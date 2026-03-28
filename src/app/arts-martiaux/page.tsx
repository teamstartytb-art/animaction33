import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Arts Martiaux — Vovinam, Sports de combat, Self-Défense à Libourne",
  description: "Cours de Vovinam Viet Vo Dao, sports de combat et Self-Défense à Libourne avec Anim'Action33, 3e Dan d'État. Cours particuliers à domicile, crédit d'impôt 50%.",
};

export default function ArtsMartiauxPage() {
  return (
    <div className="pt-16 bg-[#0A0A0A]">
      <div className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC2027]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="font-montserrat font-bold text-xs text-[#CC2027] uppercase tracking-widest bg-[#CC2027]/10 px-3 py-1.5 rounded-full">
            Arts Martiaux
          </span>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider text-white mt-4 mb-4">
            Arts Martiaux &amp; Combat
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Discipline, technique, dépassement de soi. Des cours particuliers adaptés à tous les niveaux,
            à domicile ou sur terrain privé à Libourne.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: "/arts-martiaux/vovinam", emoji: "🥋", title: "Vovinam Viet Vo Dao", color: "from-red-900", desc: "Art martial vietnamien fondé en 1938. Techniques de frappe, projections, ciseaux volants, armes.", badge: "bg-red-900/50 text-red-400" },
              { href: "/arts-martiaux/kick-boxing", emoji: "🥊", title: "Sports de combat", color: "from-orange-900", desc: "Combat dynamique. Travail de frappe au poing et au pied, cardio, défense.", badge: "bg-orange-900/50 text-orange-400" },
              { href: "/arts-martiaux/self-defense", emoji: "🛡", title: "Self-Défense", color: "from-gray-800", desc: "Techniques pratiques de protection. Situationnelles, accessibles à tous, sans condition physique.", badge: "bg-gray-700/50 text-gray-300" },
            ].map((d) => (
              <Link key={d.href} href={d.href} className={`group relative bg-gradient-to-b ${d.color} to-[#0A0A0A] rounded-3xl p-8 border border-white/10 hover:border-[#CC2027]/30 card-hover`}>
                <div className="text-5xl mb-4">{d.emoji}</div>
                <h2 className="font-bebas text-2xl tracking-wider text-white mb-3">{d.title}</h2>
                <p className="text-gray-400 text-sm mb-6">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${d.badge}`}>Dès 55€/séance</span>
                  <ArrowRight size={18} className="text-gray-500 group-hover:text-[#CC2027] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded-3xl p-6 text-center">
            <p className="text-[#F5C518] font-bold text-lg mb-1">💡 Crédit d&apos;impôt 50%</p>
            <p className="text-gray-300 text-sm">Vos cours à domicile sont éligibles. Séance à 55€ = réellement 27,50€ après remboursement fiscal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
