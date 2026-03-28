import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anniversaire Koh Lanta — Animation enfants 6-14 ans | Anim'Action33",
  description: "Anniversaire Koh Lanta à Libourne : épreuves, alliances, conseil tribal. Anim'Action33, animateur BAFD. Dès 199€, zone Gironde.",
};

export default function KohLantaPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-amber-900 to-orange-800 py-24 text-center text-white">
        <div className="text-6xl mb-4">🏝</div>
        <h1 className="font-baloo font-extrabold text-5xl mb-4">Anniversaire Koh Lanta</h1>
        <p className="text-amber-200 text-xl max-w-2xl mx-auto mb-8">Épreuves, alliances et conseil tribal pour des survivants en herbe. Une aventure collective inoubliable.</p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold">6 - 14 ans</span>
          <span className="bg-amber-500/30 px-4 py-2 rounded-xl text-sm font-semibold">Dès 199€</span>
        </div>
        <a href="#reserver" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all">
          Réserver ce thème <ArrowRight size={20} />
        </a>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-6">Au programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["🏃 Épreuves de confort chronométrées", "🤝 Formation des tribus et alliances", "🧩 Énigmes et défis intellectuels", "💪 Challenges physiques adaptés", "🗳️ Conseil tribal (sans élimination !)", "🏅 Remise des colliers de récompense"].map((item) => (
              <div key={item} className="bg-amber-50 rounded-2xl p-4 text-gray-700 font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserver" className="py-16 bg-[#F9FAFB]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-baloo font-bold text-3xl text-center mb-8">Réserver l&apos;anniversaire Koh Lanta</h2>
          <ContactForm defaultType="Animation Anniversaire" themePreset="Koh Lanta" />
        </div>
      </section>
    </div>
  );
}
