"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { AAButton } from "@/components/ui/AAButton";
import { AABadge } from "@/components/ui/AABadge";
import { AASticker } from "@/components/ui/AASticker";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] bg-aa-paper bg-dots overflow-hidden flex items-center py-16 lg:py-20">
      {/* Diagonal lines overlay */}
      <div className="absolute inset-0 bg-diagonal-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
        {/* Left: copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AABadge color="#FFC91F" size="lg" className="mb-6">
              🎪 Animateur Événementiel • Libourne & Gironde
            </AABadge>
          </motion.div>

          <motion.h1
            className="font-display leading-[0.9] tracking-tight text-aa-ink mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Des anims qui
            <br />
            <span className="text-aa-red inline-block">déchirent.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-aa-ink/80 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Anniversaires, mariages, EVG, koh-lanta, escape game, grands jeux... On
            s&apos;occupe de tout — vous profitez.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AAButton variant="primary" size="lg" href="/contact">
              Réserver ma date
            </AAButton>
            <AAButton variant="ghost" size="lg" href="/prestations">
              Voir les prestations
            </AAButton>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="font-display text-4xl text-aa-ink">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-sm text-aa-ink/60 uppercase tracking-wider font-semibold">
                Événements animés
              </p>
            </div>
            <div>
              <div className="font-display text-4xl text-aa-ink flex items-center gap-1">
                <Star size={28} className="fill-aa-yellow stroke-aa-ink" />
                4.9
              </div>
              <p className="text-sm text-aa-ink/60 uppercase tracking-wider font-semibold">
                Note moyenne
              </p>
            </div>
            <div>
              <div className="font-display text-4xl text-aa-ink">7j/7</div>
              <p className="text-sm text-aa-ink/60 uppercase tracking-wider font-semibold">
                Disponible
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: mascot + stickers */}
        <div className="relative flex items-center justify-center min-h-[320px] lg:min-h-[500px]">
          <motion.div
            className="absolute -top-6 left-0 z-20"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.6 }}
          >
            <AASticker text="On arrive !" color="#E8252C" rotate={-12} size="md" className="text-aa-paper" />
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-0 z-20"
            initial={{ opacity: 0, scale: 0, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.8 }}
          >
            <AASticker text="★ Fun garanti" color="#1C5FD8" rotate={8} size="md" className="text-aa-paper" />
          </motion.div>

          <motion.div
            className="relative z-10"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/logo-final.svg"
              alt="Mascotte AnimAction33"
              width={520}
              height={520}
              className="object-contain drop-shadow-2xl max-w-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-aa-ink/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-hand text-xl">Scroll</span>
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
