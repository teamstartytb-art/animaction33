import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SplashScreen } from "@/components/layout/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://animaction33.fr"),
  title: {
    template: "%s | AnimAction33",
    default: "AnimAction33 — Vivez l'Animation Autrement | Libourne, Gironde",
  },
  description:
    "Animateur événementiel professionnel à Libourne et dans toute la Gironde. Anniversaires, mariages, EVG/EVF, team building, grands jeux, écoles. Créateur d'expériences immersives — AnimAction33.",
  keywords: [
    "animateur Libourne",
    "animation anniversaire Gironde",
    "grands jeux Bordeaux",
    "team building Gironde",
    "EVG animation",
    "AnimAction33",
  ],
  authors: [{ name: "AnimAction33" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://animaction33.fr",
    siteName: "AnimAction33",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-body">
        <SplashScreen />
        <Header />
        <main className="pt-20 lg:pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
