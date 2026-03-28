import type { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — Anim'Action33 | Libourne",
  description: "Découvrez l'équipe Anim'Action33 : animateur BAFD, 3e Dan Vovinam d'État, fondateur à Libourne. 10 ans d'expérience, passion des arts martiaux et de l'animation.",
};

const diplomes = [
  { annee: 2019, nom: "PSC1", complet: "Prévention et Secours Civiques Niveau 1" },
  { annee: 2020, nom: "BAFA", complet: "Brevet d'Aptitude aux Fonctions d'Animateur" },
  { annee: 2022, nom: "PSE1 & PSE2", complet: "Premiers Secours en Équipe Niveaux 1 & 2" },
  { annee: 2022, nom: "DIF", complet: "Diplôme d'Instructeur Fédéral — FFKDA" },
  { annee: 2023, nom: "3e Dang Vovinam", complet: "3e Dan École Vovinam" },
  { annee: 2023, nom: "TFP MKWDA", complet: "Titre à Finalité Professionnelle Moniteur Sports de Combat et Disciplines Associées — FFKDA" },
  { annee: 2023, nom: "BAFD", complet: "Brevet d'Aptitude aux Fonctions de Directeur — DRAJES" },
  { annee: 2024, nom: "DEJEPS KDA", complet: "Diplôme d'État (en cours VAE) — FFKDA/DRAJES Nouvelle-Aquitaine" },
];

const chiffres = [
  { valeur: "10 ans", label: "d'expérience" },
  { valeur: "+100", label: "familles satisfaites" },
  { valeur: "3", label: "disciplines enseignées" },
  { valeur: "33", label: "Gironde couverte" },
];

export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1A3A8F] to-[#111827] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#F5C518]/20 to-[#CC2027]/20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-[#CC2027] to-[#1A3A8F] rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
            🥋
          </div>
          <h1 className="font-bebas text-5xl tracking-wider mb-2">Gwen — Anim&apos;Action33</h1>
          <p className="font-baloo text-2xl text-[#F5C518] mb-4">Fondateur &amp; animateur</p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Animateur certifié BAFD &middot; 3e Dan Vovinam d&apos;État &middot; 10 ans de passion partagée
          </p>
        </div>
      </div>

      {/* Chiffres */}
      <div className="bg-[#F5C518] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {chiffres.map((c) => (
              <div key={c.label}>
                <div className="font-bebas text-4xl text-[#1A3A8F]">{c.valeur}</div>
                <div className="text-[#1A3A8F]/70 font-semibold text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-6">Notre histoire</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Né en 1999 à Libourne, l&apos;animateur a découvert les arts martiaux très jeune. Ce qui a commencé comme une activité après l&apos;école est devenu une véritable passion, une philosophie de vie. En 10 ans de pratique et d&apos;enseignement, les arts martiaux sont apparus non seulement comme une affaire de techniques, mais avant tout comme une école du respect, du dépassement de soi et du partage.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              En parallèle, l&apos;animation a toujours été au cœur du projet : faire rire, créer des expériences mémorables pour les enfants et les équipes. Animateur BAFA puis directeur BAFD, l&apos;équipe a organisé des camps, des stages et des événements pendant des années.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Anim&apos;Action33 est né de cette double passion : offrir sur le territoire libournais des animations outdoor uniques et des cours d&apos;arts martiaux de qualité professionnelle, le tout avec la chaleur et l&apos;engagement d&apos;un artisan passionné.
            </p>
          </div>

          <div className="bg-[#F0F4FF] rounded-3xl p-8 mb-10">
            <h3 className="font-baloo font-bold text-2xl text-[#1A3A8F] mb-4">Notre philosophie</h3>
            <p className="text-gray-600 leading-relaxed italic">
              &ldquo;Pour nous, les arts martiaux et l&apos;animation partagent la même valeur fondamentale :
              <strong className="text-[#1A3A8F]"> mettre l&apos;humain au centre</strong>. Chaque enfant qui rit pendant une animation ninja,
              chaque adulte qui gagne confiance en soi après un cours de self-défense — c&apos;est pour ça que nous faisons ce métier.&rdquo;
            </p>
            <p className="font-bold text-[#1A3A8F] mt-4">— L&apos;équipe Anim&apos;Action33</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {["Respect", "Dépassement de soi", "Joie de vivre", "Partage", "Sécurité"].map((v) => (
              <span key={v} className="bg-[#1A3A8F] text-white px-4 py-2 rounded-xl font-semibold text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Diplômes */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-10 text-center">
            Diplômes & Certifications
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1A3A8F] via-[#CC2027] to-[#F5C518]" />
            <div className="space-y-6">
              {diplomes.map((d) => (
                <div key={d.nom} className="relative flex items-start gap-6 pl-16">
                  <div className="absolute left-6 w-4 h-4 bg-[#1A3A8F] rounded-full border-2 border-white shadow-md" />
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Award size={16} className="text-[#F5C518] shrink-0" />
                          <span className="font-bold text-[#1A3A8F]">{d.nom}</span>
                          {d.nom === "DEJEPS KDA" && (
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">En cours</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{d.complet}</p>
                      </div>
                      <span className="font-bebas text-2xl text-[#CC2027] shrink-0">{d.annee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 text-white">
          <h2 className="font-baloo font-bold text-3xl mb-4">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-white/80 mb-8">Que ce soit pour une animation ou des cours, la première prise de contact est gratuite.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5C518] text-[#1A3A8F] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all">
            Prendre contact <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
