import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Réservez votre animation ou votre cours | Anim'Action33",
  description: "Contactez Anim'Action33 pour réserver une animation anniversaire, un stage, un team building ou des cours d'arts martiaux à Libourne. Disponible 7j/7.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#1A3A8F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl text-white mb-3">Contactez Anim&apos;Action33</h1>
          <p className="text-blue-200 text-lg">Disponible 7j/7 — Devis personnalisé gratuit</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="font-baloo font-bold text-2xl text-[#1F2937] mb-6">Envoyer un message</h2>
              <div className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100">
                <ContactForm />
              </div>
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-baloo font-bold text-2xl text-[#1F2937] mb-6">Informations</h2>

              <div className="space-y-4 mb-8">
                <a href="tel:0677243675" className="flex items-center gap-4 p-4 bg-[#F0F4FF] rounded-2xl hover:bg-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-[#1A3A8F] rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} color="white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Téléphone</p>
                    <p className="font-bold text-[#1A3A8F] text-lg">06 77 24 36 75</p>
                  </div>
                </a>

                <a href="https://wa.me/33677243675" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={20} color="white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                    <p className="font-bold text-green-700">Réponse rapide</p>
                  </div>
                </a>

                <a href="mailto:gwenviet33@gmail.com" className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} color="white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <p className="font-bold text-gray-800 text-sm">gwenviet33@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-2xl">
                  <div className="w-12 h-12 bg-[#CC2027] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} color="white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Zone</p>
                    <p className="font-semibold text-gray-800 text-sm">Libourne, Gironde</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-2xl">
                  <div className="w-12 h-12 bg-[#F5C518] rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} color="#1F2937" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Disponibilité</p>
                    <p className="font-semibold text-gray-800 text-sm">7j/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A3A8F] rounded-2xl p-5 text-white text-sm">
                <p className="font-bold mb-1">Zone d&apos;intervention</p>
                <p className="text-blue-200">Libourne + 15 km gratuit</p>
                <p className="text-blue-200">Au-delà : 0,50€/km supplémentaire</p>
                <p className="text-blue-200 mt-2">Toute la Gironde couverte</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
