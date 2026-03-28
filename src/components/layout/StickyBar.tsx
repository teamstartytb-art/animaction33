"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function StickyBar() {
  return (
    <div className="sticky-mobile-bar lg:hidden">
      <a
        href="tel:0677243675"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[#1A3A8F] hover:bg-blue-50 transition-colors"
      >
        <Phone size={20} />
        <span className="text-xs font-bold">Appeler</span>
      </a>
      <a
        href="https://wa.me/33677243675?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20vos%20prestations."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-green-600 hover:bg-green-50 transition-colors border-x border-gray-100"
      >
        <MessageCircle size={20} />
        <span className="text-xs font-bold">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-[#CC2027] text-white hover:bg-red-700 transition-colors"
      >
        <Calendar size={20} />
        <span className="text-xs font-bold">Réserver</span>
      </Link>
    </div>
  );
}
