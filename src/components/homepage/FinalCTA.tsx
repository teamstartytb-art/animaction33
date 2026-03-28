import Link from "next/link";
import { Calendar, Swords, Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="gradient-cta py-20 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-baloo font-bold text-4xl md:text-5xl text-white mb-4">
          Prêt à vivre une aventure inoubliable ?
        </h2>
        <p className="text-white/80 text-xl mb-10">
          Disponible 7j/7 — Devis personnalisé gratuit
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/animation"
            className="flex items-center justify-center gap-3 bg-[#F5C518] text-[#1A3A8F] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg"
          >
            <Calendar size={22} />
            Réserver une animation
          </Link>
          <Link
            href="/arts-martiaux"
            className="flex items-center justify-center gap-3 bg-white text-[#CC2027] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            <Swords size={22} />
            Prendre un cours
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <a
            href="tel:0677243675"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={18} />
            <span className="font-semibold">06 77 24 36 75</span>
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <a
            href="https://wa.me/33677243675"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle size={18} />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
