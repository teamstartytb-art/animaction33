import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs — Animation & Arts Martiaux à Libourne | Anim'Action33",
  description: "Tous les tarifs Anim'Action33 : animations anniversaires dès 199€, stages vacances dès 55€/j, team building, cours arts martiaux dès 55€/séance. Crédit d'impôt 50%.",
};

export default function TarifsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#1A3A8F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl md:text-5xl text-white mb-3">
            Tarifs Anim&apos;Action33
          </h1>
          <p className="text-blue-200 text-lg">
            Transparent, sans surprise. Zone gratuite : Libourne + 15 km. Au-delà : 0,50€/km.
          </p>
        </div>
      </div>

      {/* ANIMATION SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-[#F5C518] rounded-full" />
            <div>
              <h2 className="font-baloo font-bold text-3xl text-[#1A3A8F]">Animation Outdoor</h2>
              <p className="text-gray-500 text-sm">Anniversaires · Stages · Grands Jeux · Team Building</p>
            </div>
          </div>

          {/* Anniversaires */}
          <div className="mb-12">
            <h3 className="font-baloo font-bold text-2xl text-[#1F2937] mb-6">Anniversaires sur thème</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { nom: "Découverte", duree: "2h", prix: 199, max: 10, populaire: false, inclus: ["1 animateur costumé", "Scénario narratif", "Tous les accessoires", "Diplôme personnalisé", "Cadeau pour l'enfant fêté"] },
                { nom: "Aventure", duree: "3h", prix: 259, max: 12, populaire: true, inclus: ["Tout de Découverte", "Pause goûter encadrée", "Photos souvenirs", "Animation ouverture cadeaux"] },
                { nom: "Épique", duree: "3h+", prix: 329, max: 12, populaire: false, inclus: ["Tout de Aventure", "2 options au choix", "Décoration thématique"] },
              ].map((f) => (
                <div key={f.nom} className={`relative rounded-3xl overflow-hidden border-2 ${f.populaire ? "border-[#CC2027] shadow-lg" : "border-gray-200"}`}>
                  {f.populaire && (
                    <div className="bg-[#CC2027] text-white text-xs font-bold text-center py-2 font-montserrat tracking-wider uppercase">★ Plus Populaire</div>
                  )}
                  <div className="p-7 bg-white">
                    <h4 className="font-baloo font-bold text-xl mb-1">{f.nom}</h4>
                    <p className="text-xs text-gray-500 mb-4">{f.duree} · max {f.max} enfants</p>
                    <p className="font-bebas text-4xl text-[#1A3A8F] mb-6">{f.prix}€</p>
                    <ul className="space-y-2 mb-6">
                      {f.inclus.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={14} className="text-green-500 shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/animation/anniversaires/ninja" className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${f.populaire ? "bg-[#CC2027] text-white hover:bg-red-700" : "border-2 border-gray-200 text-gray-700 hover:border-[#1A3A8F] hover:text-[#1A3A8F]"}`}>
                      Réserver cette formule
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-200 p-6">
              <h4 className="font-semibold text-[#1F2937] mb-4">Options supplémentaires</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  { nom: "Piñata artisanale", prix: 35 }, { nom: "Machine barbe à papa", prix: 45 },
                  { nom: "Parcours Ninja Warrior", prix: 40 }, { nom: "Atelier armes mousse", prix: 30 },
                  { nom: "Maquillage thème", prix: 25 }, { nom: "Enfant supplémentaire", prix: 10 },
                ].map((o) => (
                  <div key={o.nom} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100">
                    <span className="text-gray-700">{o.nom}</span>
                    <span className="font-bold text-[#1A3A8F]">+{o.prix}€</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stages / Grands Jeux / Team Building */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-3xl p-7 border border-green-100">
              <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-4">Stages Vacances</h3>
              <div className="space-y-3">
                {[
                  { label: "Demi-journée (3h)", prix: "30€" },
                  { label: "Journée complète", prix: "55€" },
                  { label: "Semaine (5 jours)", prix: "230€" },
                  { label: "Semaine + repas midi", prix: "320€" },
                ].map((t) => (
                  <div key={t.label} className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-sm text-gray-700">{t.label}</span>
                    <span className="font-bold text-green-700">{t.prix}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F0F4FF] rounded-3xl p-7 border border-blue-100">
              <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-4">Grands Jeux</h3>
              <div className="space-y-3">
                {[
                  { label: "Groupe privé 2h", prix: "300–500€" },
                  { label: "Journée événement", prix: "600–1000€" },
                ].map((t) => (
                  <div key={t.label} className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-sm text-gray-700">{t.label}</span>
                    <span className="font-bold text-[#1A3A8F]">{t.prix}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-500 mt-2">Tarif selon effectif et durée</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200">
              <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-4">Team Building</h3>
              <div className="space-y-3">
                {[
                  { label: "Atelier 2h (10-20 pers)", prix: "800–1200€" },
                  { label: "Demi-journée (10-30 pers)", prix: "1500–2500€" },
                  { label: "Journée complète", prix: "Sur devis" },
                ].map((t) => (
                  <div key={t.label} className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-sm text-gray-700">{t.label}</span>
                    <span className="font-bold text-slate-700">{t.prix}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTS MARTIAUX SECTION */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-10 bg-[#CC2027] rounded-full" />
            <div>
              <h2 className="font-bebas text-3xl tracking-wider text-white">Arts Martiaux</h2>
              <p className="text-gray-400 text-sm">Vovinam · Sports de combat · Self-Défense</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cours particuliers */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
              <h3 className="font-bebas text-2xl tracking-wider text-[#F5C518] mb-6">Cours particuliers</h3>
              <div className="space-y-3">
                {[
                  { label: "Séance individuelle (1h)", prix: "55€", badge: null },
                  { label: "Séance duo/binôme (1h)", prix: "75€", badge: "37,50€/pers" },
                  { label: "Petit groupe 3-4 (1h)", prix: "100€", badge: "dès 25€/pers" },
                  { label: "Cours en visio (1h)", prix: "35€", badge: null },
                ].map((t) => (
                  <div key={t.label} className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-gray-300 text-sm">{t.label}</span>
                    <div className="flex items-center gap-2">
                      {t.badge && <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">{t.badge}</span>}
                      <span className="font-bebas text-xl text-[#CC2027]">{t.prix}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-white mt-6 mb-4">Packs</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "5 séances", prix: "245€", badge: "-11%" },
                  { label: "10 séances", prix: "450€", badge: "-18%" },
                  { label: "Mensuel (4 séances)", prix: "190€/mois", badge: null },
                ].map((p) => (
                  <div key={p.label} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                    {p.badge && <span className="text-xs bg-[#F5C518]/20 text-[#F5C518] px-2 py-0.5 rounded-full block mb-2">{p.badge}</span>}
                    <p className="font-bebas text-lg text-white">{p.prix}</p>
                    <p className="text-xs text-gray-400 mt-1">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cours en groupe */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
              <h3 className="font-bebas text-2xl tracking-wider text-[#CC2027] mb-6">Préparations spécifiques</h3>
              {[
                { cat: "Préparation aux grades", data: [{ d: "1h", p: "15€" }, { d: "5h", p: "65€" }, { d: "10h", p: "120€" }] },
                { cat: "Préparation cardio", data: [{ d: "1h", p: "10€" }, { d: "5h", p: "40€" }, { d: "10h", p: "75€" }] },
                { cat: "Préparation compétition", data: [{ d: "1h", p: "20€" }, { d: "5h", p: "90€" }, { d: "10h", p: "160€" }] },
              ].map((cat) => (
                <div key={cat.cat} className="mb-6 last:mb-0">
                  <h4 className="text-white font-semibold text-sm mb-3">{cat.cat}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {cat.data.map((d) => (
                      <div key={d.d} className="bg-white/5 rounded-xl p-3 text-center">
                        <p className="font-bebas text-lg text-[#F5C518]">{d.p}</p>
                        <p className="text-xs text-gray-400">{d.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-4 bg-white/5 rounded-2xl p-4">
                <p className="text-white font-semibold text-sm mb-1">Saison compétition</p>
                <p className="font-bebas text-2xl text-[#CC2027]">150€</p>
                <p className="text-xs text-gray-400">Saison complète (+20h) + 1 cours particulier — Sur sélection</p>
              </div>
            </div>
          </div>

          {/* Crédit d'impôt */}
          <div className="mt-8 bg-[#F5C518]/10 border-2 border-[#F5C518]/30 rounded-3xl p-6 flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="text-[#F5C518] font-bold text-xl mb-2">Crédit d&apos;impôt 50% pour les cours à domicile !</h3>
              <p className="text-gray-300 text-sm">
                Vos cours à domicile sont éligibles au crédit d&apos;impôt service à la personne.
                Une séance à <strong className="text-white">55€ ne vous coûte réellement que 27,50€</strong> après remboursement fiscal.
                L&apos;attestation fiscale annuelle vous est fournie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière déplacement */}
      <div className="bg-[#1A3A8F] py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="font-semibold">Zone gratuite : Libourne + 15 km</p>
          <p className="text-blue-200 text-sm mt-1">Au-delà : supplément de 0,50€/km · Toute la Gironde couverte</p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-4">
            Un projet spécifique ?
          </h2>
          <p className="text-gray-500 mb-8">Demandez un devis sur-mesure gratuit</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#CC2027] text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/33677243675" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-[#1A3A8F] hover:text-[#1A3A8F] transition-all">
              WhatsApp direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
