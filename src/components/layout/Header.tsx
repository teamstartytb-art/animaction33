"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AAButton } from "@/components/ui/AAButton";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Prestations",
    href: "/prestations",
    children: [
      { label: "🎂 Anniversaires", href: "/prestations/anniversaires" },
      { label: "💍 Mariages", href: "/prestations/mariages" },
      { label: "🥂 EVG / EVF", href: "/prestations/evg-evf" },
      { label: "🏢 Team Building", href: "/prestations/team-building" },
      { label: "🎯 Grands Jeux", href: "/prestations/grands-jeux" },
      { label: "🏫 Écoles & Loisirs", href: "/prestations/ecoles-loisirs" },
    ],
  },
  { label: "Galerie", href: "/galerie" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-aa-yellow",
          scrolled
            ? "border-b-4 border-aa-ink shadow-pop-md py-2"
            : "border-b-3 border-aa-ink py-3"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <motion.div
              whileHover={{ rotate: [-2, 2, -2, 0], transition: { duration: 0.4 } }}
            >
              <Image
                src="/logo-icon.svg"
                alt="AnimAction33"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl text-aa-blue tracking-tight">
                ANIMACTION
              </span>
              <span className="font-display text-2xl text-aa-red tracking-tight -mt-1">
                33
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-xl font-display text-sm uppercase tracking-wide text-aa-ink",
                    "hover:bg-aa-ink hover:text-aa-paper transition-all duration-150 border-2 border-transparent hover:border-aa-ink hover:shadow-pop-sm"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-aa-paper border-3 border-aa-ink rounded-2xl shadow-pop-lg overflow-hidden z-50"
                    >
                      {link.children.map((child, i) => (
                        <Link
                          key={i}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-sm font-body font-semibold text-aa-ink hover:bg-aa-yellow hover:pl-6 transition-all duration-150 border-b border-aa-ink/10 last:border-b-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0677243675"
              className="flex items-center gap-2 px-4 py-2 font-display text-sm text-aa-ink border-2 border-aa-ink rounded-xl hover:bg-aa-ink hover:text-aa-paper transition-all shadow-pop-sm"
            >
              <Phone size={16} />
              06 77 24 36 75
            </a>
            <AAButton variant="primary" size="sm" href="/contact">
              Devis gratuit
            </AAButton>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-aa-ink text-aa-paper rounded-xl border-2 border-aa-ink shadow-pop-sm"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-aa-ink flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-5 py-4 bg-aa-yellow border-3 border-aa-paper rounded-2xl font-display text-lg uppercase tracking-wide text-aa-ink shadow-pop-sm"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={20} />}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-2 flex flex-col gap-1">
                      {link.children.map((child, j) => (
                        <Link
                          key={j}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-4 py-2.5 bg-aa-paper/10 text-aa-paper rounded-xl font-body font-semibold text-sm hover:bg-aa-paper/20 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:0677243675"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-aa-paper text-aa-ink border-3 border-aa-paper rounded-2xl font-display uppercase text-lg shadow-pop-sm"
              >
                <Phone size={20} /> 06 77 24 36 75
              </a>
              <AAButton
                variant="accent"
                size="lg"
                href="/contact"
                onClick={() => setMobileOpen(false)}
              >
                Demander un devis gratuit
              </AAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
