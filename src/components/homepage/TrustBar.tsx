"use client";
import { Award, Shield, Sparkles, MapPin, Star, Flame } from "lucide-react";

const trustItems = [
  { Icon: Award, label: "BAFA + BAFD" },
  { Icon: Flame, label: "3e Dan Vovinam" },
  { Icon: Shield, label: "PSC1 & PSE1" },
  { Icon: Sparkles, label: "10 ans d'expérience" },
  { Icon: Star, label: "Assuré RC Pro" },
  { Icon: MapPin, label: "Libourne & Gironde" },
];

export function TrustBar() {
  const loop = [...trustItems, ...trustItems];

  return (
    <section className="bg-aa-ink text-aa-paper border-y-3 border-aa-ink py-6 overflow-hidden relative">
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {loop.map(({ Icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-3 font-display uppercase tracking-widest text-sm md:text-base text-aa-paper shrink-0"
          >
            <Icon size={20} className="text-aa-yellow" />
            <span>{label}</span>
            <span className="text-aa-red text-xl">★</span>
          </div>
        ))}
      </div>
    </section>
  );
}
