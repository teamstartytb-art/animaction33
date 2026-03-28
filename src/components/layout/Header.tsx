"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";

const animationLinks = [
  { href: "/animation/anniversaires/ninja", label: "Anniversaire Ninja" },
  { href: "/animation/anniversaires/koh-lanta", label: "Koh Lanta" },
  { href: "/animation/anniversaires/guerrier-vietnamien", label: "Guerrier Vietnamien" },
  { href: "/animation/anniversaires/fort-boyard", label: "Fort Boyard" },
  { href: "/animation/anniversaires/super-heros", label: "Super Héros" },
  { href: "/animation/anniversaires/olympiades", label: "Olympiades" },
  { href: "/animation/grands-jeux", label: "Grands Jeux" },
  { href: "/animation/stages-vacances", label: "Stages Vacances" },
  { href: "/animation/team-building", label: "Team Building" },
];

const martialsLinks = [
  { href: "/arts-martiaux/vovinam", label: "Vovinam Viet Vo Dao" },
  { href: "/arts-martiaux/kick-boxing", label: "Sports de combat" },
  { href: "/arts-martiaux/self-defense", label: "Self-Défense" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animDropdown, setAnimDropdown] = useState(false);
  const [martialDropdown, setMartialDropdown] = useState(false);
  const [mobileAnim, setMobileAnim] = useState(false);
  const [mobileMartial, setMobileMartial] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-white/80 backdrop-blur-md text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col leading-none">
              <span className="font-bebas text-2xl tracking-widest text-[#F5C518]">
                ANIM&apos;
              </span>
              <span
                className="font-bebas text-2xl tracking-widest text-[#1A3A8F]"
              >
                ACTION33
              </span>
            </div>
            <div className="w-px h-10 bg-current opacity-30 hidden sm:block" />
            <div
              className="hidden sm:flex flex-col text-xs leading-tight text-gray-600"
            >
              <span>Animation</span>
              <span>Arts Martiaux</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Animations dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAnimDropdown(true)}
              onMouseLeave={() => setAnimDropdown(false)}
            >
              <button
                className="flex items-center gap-1 font-medium text-sm transition-colors hover:text-[#F5C518] text-gray-700"
              >
                Animations <ChevronDown size={14} />
              </button>
              {animDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-3 py-1 text-xs font-montserrat font-bold text-[#1A3A8F] uppercase tracking-wider">
                    Anniversaires
                  </div>
                  {animationLinks.slice(0, 6).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1A3A8F]"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  <div className="px-3 py-1 text-xs font-montserrat font-bold text-[#1A3A8F] uppercase tracking-wider">
                    Autres
                  </div>
                  {animationLinks.slice(6).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1A3A8F]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Arts Martiaux dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMartialDropdown(true)}
              onMouseLeave={() => setMartialDropdown(false)}
            >
              <button
                className="flex items-center gap-1 font-medium text-sm transition-colors hover:text-[#F5C518] text-gray-700"
              >
                Arts Martiaux <ChevronDown size={14} />
              </button>
              {martialDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-gray-900 rounded-xl shadow-xl py-2 z-50">
                  {martialsLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-[#F5C518]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/tarifs", label: "Tarifs" },
              { href: "/a-propos", label: "À Propos" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-medium text-sm transition-colors hover:text-[#F5C518] text-gray-700"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0677243675"
              className="flex items-center gap-2 text-sm font-semibold transition-colors text-[#1A3A8F]"
            >
              <Phone size={16} />
              06 77 24 36 75
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#CC2027] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
            >
              <Calendar size={15} />
              Réserver
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:0677243675"
              className="p-2 rounded-lg text-[#1A3A8F]"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-screen overflow-y-auto">
          <div className="p-4 space-y-1">
            {/* Animations */}
            <button
              onClick={() => setMobileAnim(!mobileAnim)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-blue-50"
            >
              <span>Animations</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileAnim ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAnim && (
              <div className="pl-4 space-y-1">
                {animationLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1A3A8F]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Arts Martiaux */}
            <button
              onClick={() => setMobileMartial(!mobileMartial)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50"
            >
              <span>Arts Martiaux</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileMartial ? "rotate-180" : ""}`}
              />
            </button>
            {mobileMartial && (
              <div className="pl-4 space-y-1">
                {martialsLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1A3A8F]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {[
              { href: "/tarifs", label: "Tarifs" },
              { href: "/a-propos", label: "À Propos" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-800 font-semibold hover:bg-gray-50"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:0677243675"
                className="flex items-center justify-center gap-2 w-full bg-[#1A3A8F] text-white py-3 rounded-xl font-bold"
              >
                <Phone size={18} /> 06 77 24 36 75
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#CC2027] text-white py-3 rounded-xl font-bold"
              >
                <Calendar size={18} /> Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
