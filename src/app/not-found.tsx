"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AAButton } from "@/components/ui/AAButton";
import { AASticker } from "@/components/ui/AASticker";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-aa-yellow bg-dots flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Confettis décoratifs */}
      {Array.from({ length: 18 }).map((_, i) => {
        const colors = ["#E8252C", "#1C5FD8", "#0F1B3D", "#FFFDF6"];
        const left = `${(i * 53) % 100}%`;
        const top = `${(i * 71) % 100}%`;
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-sm"
            style={{ backgroundColor: colors[i % 4], left, top }}
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
          />
        );
      })}

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 inline-block"
        >
          <Image
            src="/logo-icon.png"
            alt="AnimAction33"
            width={180}
            height={180}
            sizes="180px"
            className="object-contain h-auto w-[180px] drop-shadow-lg"
          />
        </motion.div>

        <AASticker text="Oups !" color="#E8252C" rotate={-10} className="mb-4 text-aa-paper" />

        <h1 className="font-display text-6xl md:text-8xl text-aa-ink mb-4 text-stroke-sm">
          404
        </h1>
        <p className="font-display text-2xl md:text-3xl text-aa-ink mb-2 uppercase">
          Page introuvable
        </p>
        <p className="font-hand text-2xl text-aa-ink/80 mb-10">
          Le singe a mangé cette page... 🐵
        </p>

        <AAButton variant="primary" size="lg" href="/">
          Retour à l&apos;accueil
        </AAButton>
      </div>
    </div>
  );
}
