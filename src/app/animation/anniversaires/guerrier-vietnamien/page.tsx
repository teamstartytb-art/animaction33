import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Anniversaire Guerrier Vietnamien — Animation enfants | Anim'Action33 Libourne",
  description: "Anniversaire Guerrier Vietnamien à Libourne. Anim'Action33, animateur BAFD. Dès 199€, zone Gironde.",
};

export default function Page() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-red-900 to-yellow-900 py-24 text-center text-white">
        <div className="text-6xl mb-4">⚔️</div>
        <h1 className="font-baloo font-extrabold text-5xl mb-4">Anniversaire Guerrier Vietnamien</h1>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">7-14 ans</span>
          <span className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">Dès 199€</span>
        </div>
        <a href="#reserver" className="inline-flex items-center gap-2 bg-[#CC2027] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all">
          Réserver ce thème <ArrowRight size={20} />
        </a>
      </div>
      <section id="reserver" className="py-16 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-center mb-8">Réserver l&apos;anniversaire Guerrier Vietnamien</h2>
          <ContactForm defaultType="Animation Anniversaire" themePreset="Guerrier Vietnamien" />
        </div>
      </section>
    </div>
  );
}
