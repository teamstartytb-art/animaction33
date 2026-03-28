import Link from "next/link";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    emoji: "🥷",
    title: "Anniversaire Ninja",
    href: "/animation/anniversaires/ninja",
    desc: "Une mission secrète pour de vrais guerriers",
    badge: "Anniversaire",
    badgeColor: "bg-[#F5C518] text-[#1F2937]",
    cardBg: "from-blue-900 to-blue-800",
    ages: "6 - 12 ans",
    price: "dès 199€",
  },
  {
    emoji: "🏝",
    title: "Anniversaire Koh Lanta",
    href: "/animation/anniversaires/koh-lanta",
    desc: "Défis et aventures pour survivants en herbe",
    badge: "Anniversaire",
    badgeColor: "bg-orange-400 text-white",
    cardBg: "from-orange-900 to-amber-800",
    ages: "6 - 14 ans",
    price: "dès 199€",
  },
  {
    emoji: "🌲",
    title: "Stage Vacances Aventure",
    href: "/animation/stages-vacances",
    desc: "Une semaine de nature, jeux et découvertes",
    badge: "Stage",
    badgeColor: "bg-green-500 text-white",
    cardBg: "from-green-900 to-green-800",
    ages: "6 - 14 ans",
    price: "dès 55€/j",
  },
  {
    emoji: "🎯",
    title: "Grands Jeux",
    href: "/animation/grands-jeux",
    desc: "Jeux grandeur nature pour groupes et associations",
    badge: "Groupe",
    badgeColor: "bg-purple-500 text-white",
    cardBg: "from-purple-900 to-indigo-800",
    ages: "Tous âges",
    price: "dès 300€",
  },
  {
    emoji: "🏢",
    title: "Team Building Entreprise",
    href: "/animation/team-building",
    desc: "Renforcer vos équipes par le défi et le partage",
    badge: "Entreprise",
    badgeColor: "bg-[#1A3A8F] text-white",
    cardBg: "from-slate-900 to-blue-900",
    ages: "Adultes",
    price: "Sur devis",
  },
  {
    emoji: "🥋",
    title: "Arts Martiaux & Combat",
    href: "/arts-martiaux",
    desc: "Vovinam, sports de combat et self-défense à domicile",
    badge: "Arts Martiaux",
    badgeColor: "bg-[#CC2027] text-white",
    cardBg: "from-red-900 to-slate-900",
    ages: "Dès 6 ans",
    price: "dès 55€/séance",
  },
];

export default function FeaturedActivities() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-montserrat font-bold text-xs text-[#CC2027] uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full">
            Nos prestations
          </span>
          <h2 className="font-baloo font-bold text-4xl text-[#1F2937] mt-4 mb-3">
            Activités phares
          </h2>
          <p className="text-gray-500 text-lg">
            Sélection de nos animations et cours les plus demandés
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <Link
              key={i}
              href={act.href}
              className="group relative rounded-3xl overflow-hidden card-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${act.cardBg}`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              <div className="relative z-10 p-7 flex flex-col h-full min-h-[240px]">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-montserrat font-bold px-3 py-1 rounded-full ${act.badgeColor}`}>
                    {act.badge}
                  </span>
                  <span className="text-xs text-white/60">{act.ages}</span>
                </div>

                <div className="text-5xl mb-3">{act.emoji}</div>
                <h3 className="font-baloo font-bold text-xl text-white mb-2">{act.title}</h3>
                <p className="text-white/70 text-sm mb-4 flex-1">{act.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-[#F5C518] font-bold">{act.price}</span>
                  <span className="flex items-center gap-1 text-white/60 text-sm group-hover:text-white group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/animation"
            className="inline-flex items-center gap-2 border-2 border-[#1A3A8F] text-[#1A3A8F] px-8 py-3 rounded-xl font-bold hover:bg-[#1A3A8F] hover:text-white transition-all"
          >
            Voir toutes les animations <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
