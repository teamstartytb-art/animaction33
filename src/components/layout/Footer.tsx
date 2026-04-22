import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { AAButton } from "@/components/ui/AAButton";

const footerLinks = {
  prestations: [
    { label: "Anniversaires", href: "/prestations/anniversaires" },
    { label: "Mariages", href: "/prestations/mariages" },
    { label: "EVG / EVF", href: "/prestations/evg-evf" },
    { label: "Team Building", href: "/prestations/team-building" },
    { label: "Grands Jeux", href: "/prestations/grands-jeux" },
    { label: "Écoles & Loisirs", href: "/prestations/ecoles-loisirs" },
  ],
  infos: [
    { label: "À propos", href: "/a-propos" },
    { label: "Galerie photos", href: "/galerie" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-aa-ink text-aa-paper border-t-5 border-aa-ink">
      {/* CTA final */}
      <div className="bg-aa-yellow border-b-4 border-aa-ink py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="font-hand text-4xl text-aa-ink mb-3 -rotate-1 inline-block">
            Prêt à vivre l&apos;animation autrement&nbsp;?
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-aa-ink mb-6">
            Réservez votre date dès maintenant
          </h2>
          <p className="text-aa-ink/70 text-lg mb-8">
            Devis gratuit et personnalisé sous 24h — Disponible 7j/7 en Gironde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AAButton variant="primary" size="lg" href="/contact">
              Demander un devis gratuit
            </AAButton>
            <AAButton variant="ghost" size="lg" href="tel:0677243675" icon={<Phone size={20} />}>
              06 77 24 36 75
            </AAButton>
          </div>
        </div>
      </div>

      {/* Body footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo-white.svg"
              alt="AnimAction33"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-aa-yellow">ANIMACTION</span>
              <span className="font-display text-xl text-aa-red">33</span>
            </div>
          </div>
          <p className="text-aa-paper/70 text-sm leading-relaxed mb-5">
            Créateur d&apos;expériences immersives et animateur événementiel en Gironde. Vivez
            l&apos;animation autrement.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/animaction33", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com/animaction33", label: "Facebook" },
              { Icon: Youtube, href: "https://youtube.com/@animaction33", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 bg-aa-paper/10 hover:bg-aa-yellow hover:text-aa-ink text-aa-paper border border-aa-paper/20 rounded-xl flex items-center justify-center transition-all duration-150"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Prestations */}
        <div>
          <h3 className="font-display text-aa-yellow mb-4 uppercase text-sm tracking-widest">
            Prestations
          </h3>
          <ul className="space-y-2">
            {footerLinks.prestations.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-aa-paper/70 hover:text-aa-yellow text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Infos */}
        <div>
          <h3 className="font-display text-aa-yellow mb-4 uppercase text-sm tracking-widest">
            Informations
          </h3>
          <ul className="space-y-2">
            {footerLinks.infos.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-aa-paper/70 hover:text-aa-yellow text-sm transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-aa-yellow mb-4 uppercase text-sm tracking-widest">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-aa-paper/70">
              <MapPin size={16} className="text-aa-yellow mt-0.5 shrink-0" />
              <span>
                Libourne, Gironde (33)
                <br />
                Intervention dans toute la Gironde
              </span>
            </li>
            <li>
              <a
                href="tel:0677243675"
                className="flex items-center gap-3 text-sm text-aa-paper/70 hover:text-aa-yellow transition-colors"
              >
                <Phone size={16} className="text-aa-yellow shrink-0" />
                06 77 24 36 75
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@animaction33.fr"
                className="flex items-center gap-3 text-sm text-aa-paper/70 hover:text-aa-yellow transition-colors"
              >
                <Mail size={16} className="text-aa-yellow shrink-0" />
                contact@animaction33.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas footer */}
      <div className="border-t border-aa-paper/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-aa-paper/40">
          <p>© {new Date().getFullYear()} AnimAction33 — SIRET 99048354700016</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-aa-paper/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
