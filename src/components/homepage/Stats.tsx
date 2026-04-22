"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Événements animés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 10, suffix: "", label: "Ans d'expérience" },
  { value: 30, suffix: "+", label: "Jeux en catalogue" },
];

export function Stats() {
  return (
    <section className="bg-aa-ink text-aa-paper py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-hand text-3xl text-aa-yellow mb-2 -rotate-1 inline-block">
            Les chiffres parlent
          </p>
          <h2
            className="font-display tracking-tight"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95 }}
          >
            On anime la <span className="text-aa-yellow">Gironde</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-display text-aa-yellow tracking-tight"
                style={{ fontSize: "clamp(56px, 9vw, 112px)", lineHeight: 1 }}
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-aa-paper/70 text-sm md:text-base uppercase tracking-widest font-semibold mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
