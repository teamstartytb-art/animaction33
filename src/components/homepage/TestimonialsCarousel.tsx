"use client";

import { Star, MessageSquare, ExternalLink } from "lucide-react";

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-[#F0F4FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-baloo font-bold text-4xl text-[#1F2937] mb-3">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-500">Libourne et Gironde</p>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <MessageSquare size={48} className="text-[#1A3A8F]/20 mx-auto mb-6" />
          <h3 className="font-baloo font-bold text-2xl text-[#1F2937] mb-3">
            Soyez le premier à nous laisser un avis !
          </h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Les témoignages de nos clients apparaîtront ici. Si vous avez déjà bénéficié de nos prestations, partagez votre expérience !
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A3A8F] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
          >
            <Star size={16} fill="white" color="white" />
            Laisser un avis Google
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
