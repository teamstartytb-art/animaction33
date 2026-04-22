"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { AAButton } from "@/components/ui/AAButton";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous intervenons principalement à Libourne et dans toute la Gironde (Bordeaux, Saint-Émilion, Arcachon, Médoc...). Les déplacements plus éloignés sont possibles sur devis, en fonction de la distance et du projet.",
  },
  {
    q: "À partir de quel âge pour les animations enfants ?",
    a: "Nos animations anniversaires sont adaptées dès 3 ans. Les jeux et activités sont calibrés par tranche d'âge pour que chaque enfant vive une expérience à sa mesure — sécurisée et inclusive.",
  },
  {
    q: "Comment se passe la réservation ?",
    a: "Étape 1 — Vous nous contactez (formulaire, téléphone, WhatsApp). Étape 2 — On échange pour cerner votre projet. Étape 3 — Vous recevez un devis personnalisé sous 24h. Étape 4 — Confirmation avec acompte : votre date est bloquée.",
  },
  {
    q: "Avez-vous une assurance ?",
    a: "Oui. AnimAction33 est couverte par une assurance Responsabilité Civile Professionnelle complète. Notre animateur est titulaire du BAFA, BAFD, et des formations PSC1 et PSE1 (premiers secours).",
  },
  {
    q: "Proposez-vous des animations sur mesure ?",
    a: "Absolument. Nous créons des scénarios personnalisés : thème, décor, mécaniques de jeu... Un anniversaire Harry Potter ? Un EVG pirate ? Un team building escape-game sur vos valeurs d'entreprise ? On signe.",
  },
  {
    q: "Quels sont vos tarifs ?",
    a: "Les animations anniversaires démarrent à 199€. Chaque événement étant unique (durée, nombre de participants, matériel, lieu), nous établissons un devis gratuit et personnalisé sous 24h — sans engagement.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-aa-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-ink/70 mb-2 rotate-1 inline-block">
            Les questions qui reviennent
          </p>
          <h2
            className="font-display text-aa-ink tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95 }}
          >
            Vos <span className="text-aa-red">questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={cn(
                  "bg-aa-paper border-3 border-aa-ink rounded-2xl shadow-pop-md overflow-hidden transition-colors",
                  isOpen && "bg-aa-cream"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg md:text-xl uppercase tracking-tight text-aa-ink">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="shrink-0 w-10 h-10 bg-aa-yellow border-2 border-aa-ink rounded-full flex items-center justify-center shadow-pop-sm"
                  >
                    <Plus size={20} className="text-aa-ink" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-aa-ink/80 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <AAButton variant="ghost" size="md" href="/faq">
            Voir toutes les FAQ →
          </AAButton>
        </div>
      </div>
    </section>
  );
}
