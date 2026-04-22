"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AACard } from "@/components/ui/AACard";
import { AABadge } from "@/components/ui/AABadge";
import { AAButton } from "@/components/ui/AAButton";

type Presta = {
  emoji: string;
  title: string;
  description: string;
  bg: string;
  badge: { label: string; color: string };
  href: string;
  tilt: number;
};

const prestations: Presta[] = [
  {
    emoji: "🎂",
    title: "Anniversaires",
    description:
      "Des fêtes inoubliables, dès 3 ans. Koh-Lanta, escape game, olympiades...",
    bg: "#FFF5D6",
    badge: { label: "Dès 199€", color: "#FFC91F" },
    href: "/prestations/anniversaires",
    tilt: -1,
  },
  {
    emoji: "💍",
    title: "Mariages",
    description:
      "Jeux intergénérationnels, quiz mariés, blind test, animation enfants.",
    bg: "#E8F0FF",
    badge: { label: "Sur mesure", color: "#6B9AEA" },
    href: "/prestations/mariages",
    tilt: 1,
  },
  {
    emoji: "🥂",
    title: "EVG / EVF",
    description:
      "Koh-Lanta adulte, défis, parcours du combattant, city game.",
    bg: "#FFE0E0",
    badge: { label: "Fun garanti", color: "#F07278" },
    href: "/prestations/evg-evf",
    tilt: -1,
  },
  {
    emoji: "🏢",
    title: "Team Building",
    description:
      "Escape game géant, murder party, olympiades d'entreprise.",
    bg: "#E0F0FF",
    badge: { label: "Gironde", color: "#6B9AEA" },
    href: "/prestations/team-building",
    tilt: 1,
  },
  {
    emoji: "🎯",
    title: "Grands Jeux",
    description:
      "+30 jeux en catalogue : Fugitif, Zagamore, Beast Games...",
    bg: "#FFF5D6",
    badge: { label: "+30 jeux", color: "#FFC91F" },
    href: "/prestations/grands-jeux",
    tilt: -1,
  },
  {
    emoji: "🏫",
    title: "Écoles & Loisirs",
    description:
      "Tournois sportifs, grands jeux thématiques, ateliers.",
    bg: "#E8FFE8",
    badge: { label: "BAFA/BAFD", color: "#7DE37D" },
    href: "/prestations/ecoles-loisirs",
    tilt: 1,
  },
];

export function Prestations() {
  return (
    <section className="bg-aa-cream py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-ink/70 mb-2 -rotate-2 inline-block">
            Ce qu&apos;on fait le mieux
          </p>
          <h2
            className="font-display text-aa-ink tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95 }}
          >
            Nos <span className="text-aa-red">prestations</span>
          </h2>
          <p className="text-aa-ink/70 text-lg max-w-2xl mx-auto mt-4">
            De l&apos;anniversaire au team building, on anime tout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prestations.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link href={p.href} className="block group">
                <AACard
                  color={p.bg}
                  tilt={p.tilt}
                  hoverable
                  className="h-full flex flex-col"
                >
                  <div className="text-6xl mb-5">{p.emoji}</div>
                  <h3 className="font-display text-3xl text-aa-ink uppercase tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-aa-ink/75 text-base leading-relaxed mb-6 flex-1">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <AABadge color={p.badge.color} size="sm">
                      {p.badge.label}
                    </AABadge>
                    <span className="font-display text-sm uppercase tracking-wider text-aa-ink flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir + <ArrowRight size={16} />
                    </span>
                  </div>
                </AACard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <AAButton variant="secondary" size="lg" href="/prestations">
            Voir toutes les prestations →
          </AAButton>
        </div>
      </div>
    </section>
  );
}
