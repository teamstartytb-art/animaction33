"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Quelle zone géographique couvrez-vous ?",
    a: "J'interviens principalement sur Libourne et dans un rayon de 15 km (zone gratuite). Au-delà, je me déplace dans toute la Gironde avec un supplément de 0,50€/km à partir de 15 km.",
  },
  {
    q: "Que se passe-t-il en cas de pluie ?",
    a: "La plupart des animations peuvent être adaptées en intérieur (salle, garage, grande pièce dégagée). Je vous contacte 48h avant si la météo est incertaine pour trouver ensemble la meilleure solution.",
  },
  {
    q: "Les parents doivent-ils rester pendant l'animation ?",
    a: "Non, c'est justement l'avantage ! Je gère les enfants de A à Z. Les parents peuvent profiter du moment, préparer le goûter ou simplement souffler. Je m'occupe de tout.",
  },
  {
    q: "Êtes-vous assuré ?",
    a: "Oui, je suis titulaire d'une assurance RC Pro complète. Mes diplômes (BAFA, BAFD, TFP MKWDA, 3e Dang d'État) garantissent une pratique encadrée et sécurisée.",
  },
  {
    q: "Comment réserver ?",
    a: "Remplissez le formulaire de réservation en ligne, envoyez un message WhatsApp ou appelez directement. Je vous réponds sous 2h avec un devis personnalisé. Acompte de 30% à la confirmation.",
  },
];

export default function FAQRapide() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-4xl text-[#1F2937] mb-3">
            Questions fréquentes
          </h2>
          <p className="text-gray-500">Les réponses aux questions que tout le monde se pose</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1F2937] pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#1A3A8F] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[#1A3A8F] font-semibold hover:underline"
          >
            Voir toutes les questions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
