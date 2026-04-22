"use client";
import { motion } from "framer-motion";
import { AAButton } from "@/components/ui/AAButton";

const games = [
  { emoji: "🕵️", name: "Killer" },
  { emoji: "🎭", name: "Murder Party" },
  { emoji: "🗺️", name: "Pékin Express" },
  { emoji: "🏝️", name: "Koh-Lanta" },
  { emoji: "👾", name: "Beast Games" },
  { emoji: "🏰", name: "Zagamore" },
  { emoji: "🎯", name: "Capture Drapeau" },
  { emoji: "🚗", name: "Douanier Contrebandier" },
  { emoji: "🎪", name: "Fugitif" },
  { emoji: "🔍", name: "Sardine" },
  { emoji: "🎵", name: "Fureur" },
  { emoji: "🎬", name: "Homme en Noir" },
  { emoji: "🏆", name: "Olympiades" },
  { emoji: "🧩", name: "Escape Game" },
  { emoji: "🌊", name: "Spongeball" },
  { emoji: "⚓", name: "Bataille Navale" },
  { emoji: "🐔", name: "Poule Renard Vipère" },
];

export function Catalogue() {
  // Dupliquer pour avoir un défilement infini continu
  const loop = [...games, ...games];

  return (
    <section className="bg-aa-yellow py-20 lg:py-28 relative overflow-hidden border-y-3 border-aa-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-ink/80 mb-2 -rotate-1 inline-block">
            +30 jeux immersifs
          </p>
          <h2
            className="font-display text-aa-ink tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95 }}
          >
            Le <span className="text-aa-blue">catalogue</span> de jeux
          </h2>
          <p className="text-aa-ink/70 text-lg max-w-2xl mx-auto mt-4">
            Plus de 30 jeux immersifs pour tous les âges et tous les événements.
          </p>
        </motion.div>
      </div>

      {/* Défilement horizontal — rangée 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform">
          {loop.map((g, i) => (
            <span
              key={`row1-${i}`}
              className="inline-flex items-center gap-2 bg-aa-paper border-3 border-aa-ink rounded-full px-5 py-3 font-display uppercase tracking-wide text-aa-ink shadow-pop-sm text-sm md:text-base shrink-0"
            >
              <span className="text-xl">{g.emoji}</span>
              {g.name}
            </span>
          ))}
        </div>
      </div>

      {/* Rangée 2 inversée */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-marquee-rev whitespace-nowrap will-change-transform">
          {loop.map((g, i) => (
            <span
              key={`row2-${i}`}
              className="inline-flex items-center gap-2 bg-aa-ink border-3 border-aa-ink rounded-full px-5 py-3 font-display uppercase tracking-wide text-aa-yellow shadow-pop-sm text-sm md:text-base shrink-0"
            >
              <span className="text-xl">{g.emoji}</span>
              {g.name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mt-12">
        <p className="font-hand text-2xl text-aa-ink mb-6 rotate-1 inline-block">
          Et bien d&apos;autres ! Création de jeux sur mesure aussi disponible.
        </p>
        <div>
          <AAButton variant="secondary" size="lg" href="/prestations/grands-jeux">
            Voir le catalogue complet →
          </AAButton>
        </div>
      </div>
    </section>
  );
}
