import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    template: "%s | Anim'Action33 — Animation & Arts Martiaux Libourne",
    default: "Anim'Action33 — Animation Outdoor & Arts Martiaux | Libourne, Gironde",
  },
  description:
    "Animations anniversaires sur thème, stages vacances, team building et sports de combat (Vovinam, Self-Défense) à Libourne et en Gironde. Animateur professionnel certifié BAFD.",
  keywords: [
    "animation anniversaire enfant Libourne",
    "anniversaire ninja Gironde",
    "anniversaire koh lanta enfant Bordeaux",
    "stage vacances enfant Libourne",
    "cours arts martiaux Libourne",
    "vovinam Libourne",
    "cours particulier self défense Gironde",
    "team building outdoor Bordeaux",
    "animateur grand jeux extérieur Gironde",
    "sports de combat cours particulier Bordeaux",
  ],
  authors: [{ name: "Anim'Action33" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gwenviet.fr",
    siteName: "Anim'Action33",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col font-nunito">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
