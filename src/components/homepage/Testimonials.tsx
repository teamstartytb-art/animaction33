"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AACard } from "@/components/ui/AACard";
import { AAButton } from "@/components/ui/AAButton";

const testimonials: Array<{ name: string; event: string; text: string; rating: number }> = [];

export function Testimonials() {
  return (
    <section className="bg-aa-cream py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-ink/70 mb-2 rotate-1 inline-block">
            La preuve par l&apos;avis
          </p>
          <h2
            className="font-display text-aa-ink tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95 }}
          >
            Ils nous <span className="text-aa-red">font confiance</span>
          </h2>

          {/* Note Google */}
          <a
            href="https://g.page/animaction33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-aa-paper border-3 border-aa-ink rounded-full px-6 py-3 shadow-pop-md pop-shadow-hover"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} className="fill-aa-yellow stroke-aa-ink" />
              ))}
            </div>
            <span className="font-display text-lg text-aa-ink">4.9 / 5</span>
            <span className="text-aa-ink/60 text-sm font-semibold uppercase tracking-wider">
              Avis Google
            </span>
          </a>
        </motion.div>

        {testimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[0, 1, 2].map((i) => (
                <AACard
                  key={i}
                  color="#FFFDF6"
                  tilt={i % 2 === 0 ? -1 : 1}
                  className="opacity-40"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} className="fill-aa-yellow/40 stroke-aa-ink/40" />
                    ))}
                  </div>
                  <p className="text-aa-ink/50 italic mb-6">
                    &ldquo;Votre avis apparaîtra ici...&rdquo;
                  </p>
                  <p className="font-display uppercase text-sm text-aa-ink/50 tracking-wider">
                    — À venir
                  </p>
                </AACard>
              ))}
            </div>

            <AACard color="#FFF5D6" className="text-center max-w-2xl mx-auto">
              <p className="font-hand text-3xl text-aa-ink mb-2">
                Soyez le premier à nous laisser un avis&nbsp;!
              </p>
              <p className="text-aa-ink/70 text-base mb-6">
                Votre retour compte — et aide d&apos;autres familles à nous découvrir.
              </p>
              <AAButton
                href="https://g.page/r/animaction33/review"
                variant="primary"
                size="md"
                className="bg-green-500 text-aa-paper hover:bg-green-600"
              >
                Laisser un avis Google
              </AAButton>
            </AACard>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AACard key={i} color="#FFFDF6" tilt={i % 2 === 0 ? -1 : 1}>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-aa-yellow stroke-aa-ink" />
                  ))}
                </div>
                <p className="text-aa-ink/80 italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="font-display uppercase text-sm text-aa-ink tracking-wider">
                  — {t.name}
                </p>
                <p className="text-aa-ink/50 text-xs">{t.event}</p>
              </AACard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
