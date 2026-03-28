"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite des informations sur vos prestations."
  );

  return (
    <a
      href={`https://wa.me/33677243675?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn hidden lg:flex"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={28} color="white" />
    </a>
  );
}
