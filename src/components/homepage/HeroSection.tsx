"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-left hero-texture">
      {/* Background decor */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-[#F5C518]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-16 w-40 h-40 bg-[#CC2027]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#1A3A8F]/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F5C518]/20 border border-[#F5C518]/40 rounded-full px-4 py-2 mb-8">
          <Star size={14} fill="#F5C518" color="#F5C518" />
          <span className="text-xs font-montserrat font-bold text-[#1A3A8F] uppercase tracking-wider">
            Animation Outdoor &middot; Libourne &amp; Gironde
          </span>
        </div>

        <h1 className="font-baloo font-extrabold text-5xl md:text-7xl lg:text-8xl text-[#1A3A8F] leading-tight mb-2 animate-slide-in-left">
          Des aventures
        </h1>
        <h2 className="font-baloo font-extrabold text-5xl md:text-7xl lg:text-8xl text-[#CC2027] leading-tight mb-8 animate-slide-in-right">
          inoubliables
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {["🎂 Anniversaires", "🌲 Stages", "🎯 Grands Jeux", "🏢 Team Building", "🥋 Arts Martiaux"].map((tag) => (
            <span
              key={tag}
              className="bg-white/80 backdrop-blur-sm text-[#1A3A8F] text-sm font-bold px-4 py-2 rounded-full border border-[#1A3A8F]/20 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[#1F2937]/70 text-xl mb-10 max-w-2xl mx-auto">
          Des animations sur-mesure pour vos enfants, vos équipes et vos événements.
          L&apos;animateur se déplace chez vous dans tout le Libournais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/animation"
            className="inline-flex items-center justify-center gap-2 bg-[#1A3A8F] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all hover:gap-3 shadow-lg hover:shadow-blue-200"
          >
            Voir les animations <ArrowRight size={20} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F5C518] text-[#1A3A8F] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
          >
            Réserver maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
