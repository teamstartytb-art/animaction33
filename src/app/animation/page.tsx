import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Animation Outdoor — Anniversaires, Stages, Grands Jeux, Team Building",
  description: "Animations sur thème à Libourne : anniversaires ninja, koh lanta, super héros, stages vacances, grands jeux et team building. Anim'Action33, animateur certifié BAFA/BAFD.",
};

const themes = [
  { href: "/animation/anniversaires/ninja", emoji: "🥷", title: "Ninja", ages: "6-12 ans", prix: "dès 199€", desc: "Mission secrète, techniques ninja, parcours d'obstacles" },
  { href: "/animation/anniversaires/koh-lanta", emoji: "🏝", title: "Koh Lanta", ages: "6-14 ans", prix: "dès 199€", desc: "Épreuves, alliances, conseil de vote" },
  { href: "/animation/anniversaires/guerrier-vietnamien", emoji: "⚔️", title: "Guerrier Vietnamien", ages: "7-14 ans", prix: "dès 199€", desc: "Arts martiaux, honneur, code du guerrier" },
  { href: "/animation/anniversaires/fort-boyard", emoji: "🏰", title: "Fort Boyard", ages: "6-14 ans", prix: "dès 199€", desc: "Énigmes, clés, salles de défi" },
  { href: "/animation/anniversaires/super-heros", emoji: "🦸", title: "Super Héros", ages: "5-10 ans", prix: "dès 199€", desc: "Pouvoirs spéciaux, missions, costumes" },
  { href: "/animation/anniversaires/olympiades", emoji: "🏅", title: "Olympiades", ages: "6-14 ans", prix: "dès 199€", desc: "Jeux sportifs, podium, cérémonie" },
];

export default function AnimationPage() {
  return (
    <div className="pt-16">
      <div className="gradient-hero-left py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="font-montserrat font-bold text-xs text-[#1A3A8F] uppercase tracking-widest bg-[#1A3A8F]/10 px-3 py-1.5 rounded-full">
            Animation Outdoor
          </span>
          <h1 className="font-baloo font-extrabold text-5xl text-[#1A3A8F] mt-4 mb-4">
            Anim&apos;Action33
          </h1>
          <p className="text-[#1A3A8F]/70 text-xl max-w-2xl mx-auto">
            Des animations sur-mesure pour vos enfants, vos équipes et vos événements.
            L&apos;animateur se déplace chez vous dans tout le Libournais.
          </p>
        </div>
      </div>

      {/* Anniversaires */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-2">Anniversaires sur thème</h2>
          <p className="text-gray-500 mb-8">6 thèmes disponibles — à domicile, dans votre jardin ou en salle</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((t) => (
              <Link key={t.href} href={t.href} className="group bg-[#F0F4FF] rounded-3xl p-7 card-hover border-2 border-transparent hover:border-[#1A3A8F]/20">
                <div className="text-5xl mb-4">{t.emoji}</div>
                <h3 className="font-baloo font-bold text-xl text-[#1A3A8F] mb-1">Anniversaire {t.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{t.ages} · {t.prix}</p>
                <p className="text-sm text-gray-600 mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#1A3A8F] font-semibold text-sm group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Autres */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-8">Autres animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: "/animation/grands-jeux", emoji: "🎯", title: "Grands Jeux", desc: "Olympiades, chasse aux trésors, jeux sportifs pour groupes de 10 à 100 personnes.", prix: "dès 300€" },
              { href: "/animation/stages-vacances", emoji: "🌲", title: "Stages Vacances", desc: "Une semaine d'aventure, de nature et de sport pendant les vacances scolaires.", prix: "dès 55€/j" },
              { href: "/animation/team-building", emoji: "🏢", title: "Team Building", desc: "Renforcez la cohésion de vos équipes avec des ateliers arts martiaux et outdoor.", prix: "dès 800€" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group bg-white rounded-3xl p-7 card-hover border border-gray-200 hover:border-[#1A3A8F]/30">
                <div className="text-5xl mb-4">{a.emoji}</div>
                <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A3A8F] font-bold text-sm">{a.prix}</span>
                  <span className="text-[#1A3A8F] text-sm group-hover:translate-x-1 transition-transform"><ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
