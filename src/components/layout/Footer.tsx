import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-bebas text-3xl tracking-widest text-[#F5C518]">ANIM&apos;</span>
              <span className="font-bebas text-3xl tracking-widest text-white">ACTION33</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Animation outdoor &amp; arts martiaux à Libourne et en Gironde.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/animaction33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#CC2027] transition-colors text-white text-xs font-bold"
                aria-label="Instagram Anim'Action33"
              >
                IG
              </a>
              <a
                href="https://facebook.com/animaction33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1A3A8F] transition-colors text-white text-xs font-bold"
                aria-label="Facebook Anim'Action33"
              >
                FB
              </a>
              <a
                href="https://wa.me/33677243675"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Animations */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-sm uppercase tracking-wider mb-4 text-[#F5C518]">
              Animations
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/animation/anniversaires/ninja", label: "Anniversaire Ninja" },
                { href: "/animation/anniversaires/koh-lanta", label: "Anniversaire Koh Lanta" },
                { href: "/animation/anniversaires/guerrier-vietnamien", label: "Guerrier Vietnamien" },
                { href: "/animation/grands-jeux", label: "Grands Jeux" },
                { href: "/animation/stages-vacances", label: "Stages Vacances" },
                { href: "/animation/team-building", label: "Team Building" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#F5C518] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Arts Martiaux */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-sm uppercase tracking-wider mb-4 text-[#CC2027]">
              Arts Martiaux
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/arts-martiaux/vovinam", label: "Vovinam Viet Vo Dao" },
                { href: "/arts-martiaux/kick-boxing", label: "Sports de combat" },
                { href: "/arts-martiaux/self-defense", label: "Self-Défense" },
                { href: "/tarifs", label: "Tarifs & Formules" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/contact", label: "Réserver" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#F5C518] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F5C518] mt-0.5 shrink-0" />
                <span>Libourne, Gironde</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F5C518] shrink-0" />
                <a href="tel:0677243675" className="hover:text-[#F5C518] transition-colors">
                  06 77 24 36 75
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F5C518] shrink-0" />
                <a href="mailto:gwenviet33@gmail.com" className="hover:text-[#F5C518] transition-colors">
                  gwenviet33@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-green-400 shrink-0" />
                <a
                  href="https://wa.me/33677243675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#1A3A8F]/30 rounded-lg border border-[#1A3A8F]/50">
              <p className="text-xs text-gray-400">
                Zone d&apos;intervention : <span className="text-white font-semibold">Libourne &amp; Gironde</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Disponible <span className="text-[#F5C518] font-semibold">7j/7</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Anim&apos;Action33 — SIRET 99048354700016</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-gray-300">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300">Confidentialité</Link>
            <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
