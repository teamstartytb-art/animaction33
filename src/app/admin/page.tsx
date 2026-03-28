"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Target, DollarSign,
  MessageSquare, Image, Settings, LogOut,
  Plus, Eye, Upload
} from "lucide-react";

const navItems = [
  { href: "/admin", icon: <LayoutDashboard size={18} />, label: "Tableau de bord" },
  { href: "/admin/activites", icon: <Target size={18} />, label: "Activités & textes" },
  { href: "/admin/tarifs", icon: <DollarSign size={18} />, label: "Tarifs & prix" },
  { href: "/admin/temoignages", icon: <MessageSquare size={18} />, label: "Avis clients" },
  { href: "/admin/galerie", icon: <Image size={18} />, label: "Galerie photos" },
];

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPwd = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    if (pwd === adminPwd) {
      sessionStorage.setItem("gw_admin", "1");
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-10 w-full max-w-sm shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex flex-col leading-none items-center mb-2">
            <span className="font-bebas text-3xl tracking-widest text-[#F5C518]">ANIM&apos;</span>
            <span className="font-bebas text-3xl tracking-widest text-[#1A3A8F]">ACTION33</span>
          </div>
          <p className="text-gray-500 text-sm">Administration</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Mot de passe
            </label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F] ${error ? "border-red-500 bg-red-50" : "border-gray-200"}`}
              placeholder="••••••••"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-1">Mot de passe incorrect</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#1A3A8F] text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("gw_admin");
    setAuthenticated(false);
  };

  if (loading) return <div className="min-h-screen bg-[#111827] flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#F5C518] border-t-transparent rounded-full animate-spin" /></div>;

  if (!authenticated) return <AdminLogin onLogin={() => setAuthenticated(true)} />;

  const quickActions = [
    { label: "Voir le site", href: "/", icon: <Eye size={16} />, color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
    { label: "Uploader des photos", href: "/admin/galerie", icon: <Upload size={16} />, color: "bg-[#1A3A8F] text-white hover:bg-blue-800" },
    { label: "Ajouter un avis", href: "/admin/temoignages", icon: <Plus size={16} />, color: "bg-[#CC2027] text-white hover:bg-red-700" },
    { label: "Modifier les prix", href: "/admin/tarifs", icon: <DollarSign size={16} />, color: "bg-[#F5C518] text-[#1F2937] hover:bg-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] min-h-screen flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col leading-none">
            <span className="font-bebas text-2xl tracking-widest text-[#F5C518]">ANIM&apos;</span>
            <span className="font-bebas text-2xl tracking-widest text-white">ACTION33</span>
          </div>
          <p className="text-gray-400 text-xs mt-1">Administration</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-sm"
            >
              <span className="text-[#F5C518]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/10 hover:text-white transition-colors text-sm w-full"
          >
            <LogOut size={18} /> Déconnexion
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="font-baloo font-bold text-3xl text-[#1F2937]">Tableau de bord</h1>
            <p className="text-gray-500">Bonjour Gwen ! Que faisons-nous aujourd&apos;hui ?</p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            {quickActions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${a.color}`}
              >
                {a.icon} {a.label}
              </Link>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Activités & textes", count: "12 activités", desc: "Modifier descriptions, âges, durées", href: "/admin/activites", color: "bg-blue-50 border-blue-100", icon: <Target size={20} className="text-[#1A3A8F]" /> },
              { title: "Tarifs & prix", count: "9 lignes tarifaires", desc: "Cliquez pour modifier n'importe quel prix", href: "/admin/tarifs", color: "bg-yellow-50 border-yellow-100", icon: <DollarSign size={20} className="text-[#F5C518]" /> },
              { title: "Avis clients", count: "0 avis", desc: "Ajoutez les témoignages reçus", href: "/admin/temoignages", color: "bg-green-50 border-green-100", icon: <MessageSquare size={20} className="text-green-600" /> },
              { title: "Galerie photos", count: "Upload drag & drop", desc: "Glissez vos photos pour les ajouter", href: "/admin/galerie", color: "bg-purple-50 border-purple-100", icon: <Image size={20} className="text-purple-600" /> },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`rounded-3xl border-2 ${card.color} p-6 hover:shadow-md transition-all`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#1F2937] mb-1">{card.title}</h3>
                <p className="text-lg font-semibold text-[#1F2937]">{card.count}</p>
                <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
              </Link>
            ))}
          </div>

          {/* Checklist */}
          <div className="mt-8 bg-white rounded-3xl border border-gray-100 p-6">
            <h2 className="font-bold text-[#1F2937] mb-4 flex items-center gap-2">
              <Settings size={18} className="text-[#1A3A8F]" /> Checklist de lancement
            </h2>
            <div className="space-y-3">
              {[
                { label: "Ajouter vos vraies photos (dans la Galerie)", done: false },
                { label: "Configurer Resend avec votre domaine", done: false },
                { label: "Tester le formulaire de contact", done: false },
                { label: "Vérifier sur mobile (iPhone + Android)", done: false },
                { label: "Connecter Google Search Console", done: false },
                { label: "Ajouter votre Google Business Profile", done: false },
                { label: "Collecter les premiers vrais témoignages", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${item.done ? "bg-green-500 border-green-500" : "border-gray-300"}`}>
                    {item.done && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className={item.done ? "line-through text-gray-400" : "text-gray-700"}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
