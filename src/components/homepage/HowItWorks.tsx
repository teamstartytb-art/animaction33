"use client";
import { motion } from "framer-motion";
import { AACard } from "@/components/ui/AACard";

const steps = [
  {
    num: "01",
    emoji: "📞",
    title: "Vous contactez",
    desc: "Formulaire, WhatsApp ou appel — Gratuit & sans engagement.",
    color: "#FFC91F",
  },
  {
    num: "02",
    emoji: "💬",
    title: "On échange",
    desc: "On définit votre projet ensemble — Réponse sous 24h.",
    color: "#6B9AEA",
  },
  {
    num: "03",
    emoji: "📋",
    title: "Devis personnalisé",
    desc: "Tarif transparent, adapté à vos besoins, sans mauvaise surprise.",
    color: "#F07278",
  },
  {
    num: "04",
    emoji: "🎉",
    title: "On s'occupe de tout",
    desc: "Matériel, animation, sourires garantis — vous profitez.",
    color: "#FFE082",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-aa-paper py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-ink/70 mb-2 rotate-1 inline-block">
            Simple, rapide, efficace
          </p>
          <h2
            className="font-display text-aa-ink tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95 }}
          >
            Comment ça <span className="text-aa-red">marche ?</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Ligne pointillée desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-1"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #FFC91F 0 14px, transparent 14px 26px)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-28 h-28 rounded-full border-3 border-aa-ink shadow-pop-md flex items-center justify-center mb-5 relative z-10"
                  style={{ backgroundColor: s.color }}
                >
                  <span className="text-5xl">{s.emoji}</span>
                </div>
                <AACard color="#FFFDF6" className="w-full">
                  <span className="font-display text-aa-red text-4xl block mb-1">
                    {s.num}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-tight text-aa-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="text-aa-ink/70 text-sm leading-relaxed">{s.desc}</p>
                </AACard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
