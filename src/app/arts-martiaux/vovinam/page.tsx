import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Check, Shield, Award } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Vovinam Viet Vo Dao — Cours particuliers à Libourne | Gironde",
  description:
    "Cours de Vovinam Viet Vo Dao à domicile avec Anim'Action33, 3e Dan d'État. Enfants, ados, adultes. Libourne et Gironde. Crédit d'impôt 50%.",
};

const tarifs = [
  { label: "Séance individuelle (1h)", prix: 55, badge: null },
  { label: "Séance duo/binôme (1h)", prix: 75, badge: "37,50€/pers" },
  { label: "Petit groupe 3-4 (1h)", prix: 100, badge: "dès 25€/pers" },
  { label: "Pack 5 séances individuelles", prix: 245, badge: "-11%" },
  { label: "Pack 10 séances individuelles", prix: 450, badge: "-18%" },
  { label: "Abonnement mensuel (4 séances)", prix: 190, badge: "/mois" },
  { label: "Cours en visio (1h)", prix: 35, badge: null },
];

export default function VovinamPage() {
  return (
    <div className="pt-16 bg-[#0A0A0A]">
      {/* HERO */}
      <div className="relative min-h-[80vh] flex items-center justify-center py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(204,32,39,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(26,58,143,0.1) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,197,24,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="text-6xl mb-6">🥋</div>
          <div className="inline-flex items-center gap-2 bg-[#CC2027]/20 border border-[#CC2027]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-montserrat font-bold text-[#CC2027] uppercase tracking-wider">
              Art Martial Vietnamien
            </span>
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider text-white mb-4">
            Vovinam Viet Vo Dao
          </h1>
          <h2 className="font-bebas text-2xl md:text-3xl tracking-wider text-[#F5C518] mb-6">
            L&apos;art martial vietnamien du guerrier moderne
          </h2>
          <blockquote className="text-gray-400 italic text-lg mb-10 max-w-2xl mx-auto">
            &ldquo;La main d&apos;acier sur un cœur de bonté&rdquo; — Maître Nguyễn Lộc
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reserver"
              className="inline-flex items-center gap-2 bg-[#CC2027] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all"
            >
              Réserver un cours <ArrowRight size={20} />
            </a>
            <a
              href="#discipline"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-[#F5C518] hover:text-[#F5C518] transition-all"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* PRÉSENTATION INSTRUCTEUR */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Photo placeholder */}
              <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-[#CC2027]/20 to-[#1A3A8F]/20 border border-white/10 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-4">🥋</div>
                  <p className="font-bebas text-2xl tracking-wider">Anim&apos;Action33</p>
                  <p className="text-gray-400 text-sm">Photo à venir</p>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="font-bebas text-4xl tracking-wider mb-2 text-[#F5C518]">
                Gwen — 3e Dan
              </h2>
              <p className="text-gray-400 text-lg mb-6">Votre instructeur, 3e Dan — 10 ans d&apos;expérience</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Award size={14} />, label: "3e Dang d'État FFKDA" },
                  { icon: <Shield size={14} />, label: "TFP MKWDA" },
                  { icon: <Award size={14} />, label: "BAFD" },
                  { icon: <Shield size={14} />, label: "3e Dang École Vovinam" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm"
                  >
                    <span className="text-[#F5C518]">{b.icon}</span>
                    <span className="text-gray-300">{b.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Né en 1999 à Libourne, l&apos;instructeur cumule 10 ans de pratique et d&apos;enseignement des arts
                martiaux. Il intervient à domicile ou sur terrain privé dans tout le Libournais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LA DISCIPLINE */}
      <section id="discipline" className="py-16 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl tracking-wider text-white mb-3">
              La Discipline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fondé en 1938 au Vietnam par Maître Nguyễn Lộc, le Vovinam est un art martial
              complet alliant techniques de combat, éthique martiale et développement personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">
              <h3 className="font-bebas text-2xl tracking-wider text-[#CC2027] mb-4">
                Ce que tu vas apprendre
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {[
                  "Techniques de frappe (poing, pied, coude, genou)",
                  "Projections et balayages",
                  "Ciseaux volants (technique signature du Vovinam)",
                  "Armes traditionnelles (bâton, couteau)",
                  "Travail au sol et clés articulaires",
                  "Kata et formes codifiées",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={14} className="text-[#F5C518] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">
              <h3 className="font-bebas text-2xl tracking-wider text-[#F5C518] mb-4">
                Les bienfaits
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "💪", label: "Forme physique" },
                  { icon: "🧠", label: "Discipline & focus" },
                  { icon: "🤝", label: "Esprit d'équipe" },
                  { icon: "🛡", label: "Confiance en soi" },
                  { icon: "🌱", label: "Dépassement" },
                  { icon: "🎯", label: "Précision" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span>{b.icon}</span> {b.label}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-2 text-sm">Pour qui ?</h4>
                <div className="flex flex-wrap gap-2">
                  {["Enfants dès 6 ans", "Ados", "Adultes", "Seniors"].map((p) => (
                    <span key={p} className="bg-[#CC2027]/20 text-[#CC2027] text-xs px-3 py-1 rounded-full border border-[#CC2027]/30">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-bebas text-4xl tracking-wider text-center text-white mb-10">
            Formats de cours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="font-bebas text-2xl tracking-wider text-[#F5C518] mb-2">
                Cours particulier à domicile
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                L&apos;instructeur vient directement chez toi. Idéal pour maximiser le temps d&apos;apprentissage
                et adapter chaque séance à ton niveau et tes objectifs. Éligible au crédit d&apos;impôt.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#F5C518] text-sm font-semibold">
                <Shield size={14} /> Crédit d&apos;impôt 50% applicable
              </div>
            </div>
            <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10">
              <div className="text-3xl mb-4">🌳</div>
              <h3 className="font-bebas text-2xl tracking-wider text-[#CC2027] mb-2">
                Cours en groupe
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sur terrain privé à Libourne ou dans un espace de votre choix. Petits groupes de
                2 à 4 personnes maximum pour un suivi personnalisé.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
                <Check size={14} /> Maximum 4 personnes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-bebas text-4xl tracking-wider text-center text-white mb-4">
            Tarifs
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Tous les cours sont dispensés par un moniteur certifié d&apos;État
          </p>

          <div className="bg-[#111827] rounded-3xl overflow-hidden border border-white/10">
            <div className="divide-y divide-white/5">
              {tarifs.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-gray-300">{t.label}</span>
                  <div className="flex items-center gap-3">
                    {t.badge && (
                      <span className="text-xs bg-[#F5C518]/20 text-[#F5C518] px-2 py-0.5 rounded-full">
                        {t.badge}
                      </span>
                    )}
                    <span className="font-bebas text-2xl text-[#CC2027]">{t.prix}€</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crédit d'impôt */}
          <div className="mt-6 bg-[#F5C518]/10 border-2 border-[#F5C518]/30 rounded-3xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-[#F5C518] font-bold text-lg mb-2">
                  Crédit d&apos;impôt 50% pour les cours à domicile !
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  En tant que service à la personne déclaré, vos cours à domicile ouvrent droit
                  à un crédit d&apos;impôt de 50%. Votre séance à{" "}
                  <strong className="text-white">55€ ne vous coûte réellement que 27,50€</strong> après
                  remboursement fiscal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTOILES */}
      <section className="py-12 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#F5C518" color="#F5C518" />)}
          </div>
          <blockquote className="text-xl text-gray-300 italic mb-4">
            &ldquo;Soyez le premier à partager votre expérience !&rdquo;
          </blockquote>
          <p className="font-bold text-[#F5C518]">— Anim&apos;Action33, Libourne</p>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="reserver" className="py-16 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl tracking-wider text-white mb-2">
              Réserver un cours de Vovinam
            </h2>
            <p className="text-gray-400">Disponible 7j/7</p>
          </div>
          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10">
            <ContactForm defaultType="Cours Arts Martiaux" dark={true} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-bebas text-3xl tracking-wider text-center text-white mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "À partir de quel âge peut-on commencer ?",
                a: "Le Vovinam est accessible dès 6 ans pour les enfants. Pas d'âge maximum — des adultes commencent à 50 ans !",
              },
              {
                q: "Faut-il du matériel spécifique ?",
                a: "Non, pour les premiers cours une tenue de sport suffit. Tout le matériel pédagogique est fourni.",
              },
              {
                q: "Comment se déroule la première séance ?",
                a: "Premier cours d'évaluation : on définit ensemble votre niveau, vos objectifs et l'approche pédagogique adaptée. Séance d'essai possible.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres disciplines */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-bebas text-3xl tracking-wider text-center text-white mb-8">
            Autres disciplines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { href: "/arts-martiaux/kick-boxing", label: "Sports de combat", emoji: "🥊", desc: "Combat dynamique et cardio" },
              { href: "/arts-martiaux/self-defense", label: "Self-Défense", emoji: "🛡", desc: "Protection et confiance au quotidien" },
            ].map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group bg-[#111827] rounded-2xl p-6 border border-white/10 hover:border-[#CC2027]/30 transition-all card-hover"
              >
                <div className="text-4xl mb-3">{d.emoji}</div>
                <div className="font-bebas text-2xl tracking-wider text-[#CC2027] group-hover:text-[#F5C518] transition-colors">
                  {d.label}
                </div>
                <div className="text-sm text-gray-400 mt-1">{d.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
