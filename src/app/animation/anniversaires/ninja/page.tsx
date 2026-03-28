import type { Metadata } from "next";
import Link from "next/link";
import { Star, Check, Download, ArrowRight, Phone, MessageCircle } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Anniversaire Ninja — Animation sur thème pour enfants 6-12 ans",
  description:
    "Un anniversaire ninja inoubliable à Libourne ! L'animateur vient chez vous avec son costume, ses accessoires et son scénario. Dès 199€, zone Gironde.",
};

const formules = [
  {
    nom: "Découverte",
    duree: "2h",
    prix: 199,
    max: 10,
    populaire: false,
    inclus: [
      "1 Maître Ninja en costume",
      "Scénario narratif sur mesure",
      "Tous les accessoires (étoiles mousse, parcours)",
      "Diplôme personnalisé pour chaque enfant",
      "Cadeau surprise pour l'enfant fêté",
    ],
  },
  {
    nom: "Aventure",
    duree: "3h",
    prix: 259,
    max: 12,
    populaire: true,
    inclus: [
      "Tout de Découverte",
      "Pause goûter encadrée",
      "Photos souvenirs de l'animation",
      "Animation ouverture des cadeaux",
    ],
  },
  {
    nom: "Épique",
    duree: "3h+",
    prix: 329,
    max: 12,
    populaire: false,
    inclus: [
      "Tout de Aventure",
      "2 options au choix",
      "Décoration thématique à l'arrivée",
    ],
  },
];

const otherThemes = [
  { href: "/animation/anniversaires/koh-lanta", label: "Koh Lanta", emoji: "🏝", ages: "6-14 ans" },
  { href: "/animation/anniversaires/guerrier-vietnamien", label: "Guerrier Vietnamien", emoji: "⚔️", ages: "7-14 ans" },
  { href: "/animation/anniversaires/super-heros", label: "Super Héros", emoji: "🦸", ages: "5-10 ans" },
];

export default function NinjaPage() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #F5C518 0%, transparent 50%), radial-gradient(circle at 75% 50%, #CC2027 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5C518]/20 border border-[#F5C518]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-montserrat font-bold text-[#F5C518] uppercase tracking-wider">
              Anniversaire sur thème
            </span>
          </div>
          <div className="text-6xl mb-4">🥷</div>
          <h1 className="font-baloo font-extrabold text-5xl md:text-6xl mb-4">
            Anniversaire Ninja
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Une mission secrète pour de vrais guerriers. Votre enfant et ses amis deviennent
            de véritables ninjas pour un après-midi d&apos;aventure inoubliable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="bg-white/10 px-4 py-2 rounded-xl text-sm font-semibold">
              🎯 Idéal 6 — 12 ans
            </span>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#F5C518" color="#F5C518" />)}
              <span className="text-sm ml-1 text-gray-300">5/5</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reserver"
              className="inline-flex items-center gap-2 bg-[#CC2027] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all"
            >
              Réserver ce thème <ArrowRight size={20} />
            </a>
            <a
              href="/invitations/invitation-ninja.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#F5C518] text-[#1F2937] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all"
            >
              <Download size={20} /> Invitation gratuite PDF
            </a>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-4">Le scénario</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Le Clan des Ombres a volé le précieux parchemin des anciens ninjas. Votre mission,
                si vous l&apos;acceptez : former une équipe d&apos;élite, maîtriser les techniques secrètes,
                et récupérer le parchemin avant que la nuit tombe...
              </p>

              <h3 className="font-baloo font-bold text-xl text-[#1A3A8F] mb-3">Ce qu&apos;on va faire</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "🥷 Initiation aux techniques ninja (déplacements, esquives, bases)",
                  "⭐ Fabrication d'étoiles de ninja en mousse",
                  "🎯 Challenge d'adresse : lancer de shuriken velcro",
                  "🏃 Parcours du ninja : obstacles, ramper, franchir",
                  "⚔️ Combat ninja contrôlé avec protections",
                  "🎖️ Cérémonie de remise des grades ninja",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-baloo font-bold text-xl text-[#1A3A8F] mb-3">Ce qui est inclus</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "1 Maître Ninja en costume pendant toute la durée",
                  "Tout le matériel (étoiles mousse, costumes, protections)",
                  "Diplôme personnalisé pour chaque enfant",
                  "Cadeau surprise pour l'enfant fêté",
                  "Invitations numériques + PDF à imprimer gratuites",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-[#F0F4FF] rounded-2xl p-5">
                <h3 className="font-baloo font-bold text-lg text-[#1A3A8F] mb-3">À prévoir</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>📍 Espace extérieur ou intérieur dégagé (min 50 m²)</li>
                  <li>🎂 Goûter et gâteau fournis par les parents</li>
                  <li>👟 Tenues confortables pour les enfants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-2">
              Choisissez votre formule
            </h2>
            <p className="text-gray-500">Zone gratuite : Libourne + 15 km. Au-delà : 0,50€/km</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formules.map((f) => (
              <div
                key={f.nom}
                className={`relative rounded-3xl overflow-hidden border-2 transition-all ${
                  f.populaire
                    ? "border-[#CC2027] shadow-xl shadow-red-100"
                    : "border-gray-200 hover:border-[#1A3A8F]/30"
                }`}
              >
                {f.populaire && (
                  <div className="bg-[#CC2027] text-white text-xs font-bold text-center py-2 font-montserrat tracking-wider uppercase">
                    ★ Plus Populaire
                  </div>
                )}
                <div className="p-7 bg-white">
                  <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-1">{f.nom}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {f.duree} · jusqu&apos;à {f.max} enfants
                  </p>
                  <div className="text-4xl font-bebas text-[#1A3A8F] mb-6">
                    {f.prix}€
                  </div>
                  <ul className="space-y-2 mb-6">
                    {f.inclus.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reserver"
                    className={`block text-center py-3 rounded-xl font-bold transition-colors ${
                      f.populaire
                        ? "bg-[#CC2027] text-white hover:bg-red-700"
                        : "border-2 border-[#1A3A8F] text-[#1A3A8F] hover:bg-[#1A3A8F] hover:text-white"
                    }`}
                  >
                    Choisir cette formule
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Options */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-[#1F2937] mb-4">Options supplémentaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                { nom: "Piñata artisanale", prix: 35 },
                { nom: "Machine barbe à papa", prix: 45 },
                { nom: "Parcours Ninja Warrior", prix: 40 },
                { nom: "Atelier armes mousse", prix: 30 },
                { nom: "Maquillage camouflage", prix: 25 },
                { nom: "Enfant supplémentaire", prix: 10 },
              ].map((o) => (
                <div key={o.nom} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-gray-700">{o.nom}</span>
                  <span className="font-bold text-[#1A3A8F]">+{o.prix}€</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="py-12 bg-[#F0F4FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-3">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#F5C518" color="#F5C518" />)}
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4">
            &ldquo;Soyez le premier à partager votre expérience d&apos;anniversaire Ninja !&rdquo;
          </blockquote>
          <p className="font-bold text-[#1A3A8F]">— Anim&apos;Action33, Libourne</p>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="reserver" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-2">
              Réserver l&apos;anniversaire Ninja
            </h2>
            <p className="text-gray-500">Remplissez le formulaire — devis gratuit</p>
          </div>
          <div className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100">
            <ContactForm defaultType="Animation Anniversaire" themePreset="Ninja" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center text-sm text-gray-500">
            <a href="tel:0677243675" className="flex items-center gap-2 hover:text-[#1A3A8F]">
              <Phone size={16} /> 06 77 24 36 75
            </a>
            <a
              href="https://wa.me/33677243675?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20un%20anniversaire%20Ninja%20pour%20mon%20enfant."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-2xl text-center text-[#1F2937] mb-8">
            Questions spécifiques
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Faut-il que les enfants aient une expérience en arts martiaux ?",
                a: "Non ! L'animation est conçue pour tous les niveaux. Les techniques sont adaptées en jeux, totalement accessibles.",
              },
              {
                q: "Combien de temps à l'avance réserver ?",
                a: "Idéalement 2 à 3 semaines. Pour les week-ends de vacances, 1 mois recommandé.",
              },
              {
                q: "L'animation peut-elle se faire en intérieur ?",
                a: "Oui ! Une grande pièce, un garage ou une salle polyvalente de 50 m² minimum convient parfaitement.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-[#1F2937] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES THÈMES */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-2xl text-center text-[#1F2937] mb-8">
            Autres thèmes d&apos;anniversaire
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherThemes.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group bg-[#F0F4FF] rounded-2xl p-6 text-center card-hover border border-transparent hover:border-[#1A3A8F]/20"
              >
                <div className="text-4xl mb-3">{t.emoji}</div>
                <div className="font-bold text-[#1A3A8F] group-hover:underline">{t.label}</div>
                <div className="text-xs text-gray-500 mt-1">{t.ages}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
