"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Star, Save, Eye, EyeOff } from "lucide-react";

type Temoignage = {
  id: string;
  prenom: string;
  ville: string;
  activite: string;
  note: number;
  texte: string;
  date: string;
  affiche: boolean;
};

const defaultTemoignages: Temoignage[] = [];

const ACTIVITES = ["Anniversaire Ninja", "Anniversaire Koh Lanta", "Stage Vacances", "Team Building", "Cours Vovinam", "Sports de combat", "Self-Défense", "Autre"];

export default function AdminTemoignagesPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [temoignages, setTemoignages] = useState<Temoignage[]>(defaultTemoignages);
  const [adding, setAdding] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<Partial<Temoignage>>({ note: 5, affiche: true, activite: "Anniversaire Ninja" });

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    const saved = localStorage.getItem("gw_temoignages");
    if (saved) setTemoignages(JSON.parse(saved));
  }, []);

  if (!authenticated) return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Non autorisé. <Link href="/admin" className="text-[#1A3A8F] underline">Se connecter</Link></p>
    </div>
  );

  const saveAll = (data: Temoignage[]) => {
    localStorage.setItem("gw_temoignages", JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleToggle = (id: string) => {
    const updated = temoignages.map((t) => t.id === id ? { ...t, affiche: !t.affiche } : t);
    setTemoignages(updated);
    saveAll(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer ce témoignage ?")) {
      const updated = temoignages.filter((t) => t.id !== id);
      setTemoignages(updated);
      saveAll(updated);
    }
  };

  const handleAdd = () => {
    if (!form.prenom || !form.texte) return;
    const newT: Temoignage = {
      id: Date.now().toString(),
      prenom: form.prenom || "",
      ville: form.ville || "",
      activite: form.activite || "Autre",
      note: form.note || 5,
      texte: form.texte || "",
      date: new Date().toISOString().split("T")[0],
      affiche: form.affiche !== false,
    };
    const updated = [...temoignages, newT];
    setTemoignages(updated);
    saveAll(updated);
    setAdding(false);
    setForm({ note: 5, affiche: true, activite: "Anniversaire Ninja" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-16 bg-[#111827] min-h-screen flex flex-col items-center py-6">
        <Link href="/admin" className="flex flex-col leading-none items-center">
          <span className="font-bebas text-sm text-[#F5C518]">A</span>
          <span className="font-bebas text-sm text-white">33</span>
        </Link>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-500 hover:text-[#1A3A8F]"><ArrowLeft size={20} /></Link>
              <div>
                <h1 className="font-baloo font-bold text-2xl text-[#1F2937]">Témoignages</h1>
                <p className="text-gray-500 text-sm">{temoignages.filter(t => t.affiche).length} affichés sur le site</p>
              </div>
            </div>
            <div className="flex gap-3">
              {saved && <span className="text-green-600 font-semibold text-sm flex items-center gap-1"><Save size={14} /> Sauvegardé</span>}
              <button
                onClick={() => setAdding(true)}
                className="flex items-center gap-2 bg-[#1A3A8F] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800"
              >
                <Plus size={16} /> Ajouter
              </button>
            </div>
          </div>

          {/* Form Ajout */}
          {adding && (
            <div className="bg-white rounded-3xl border-2 border-[#1A3A8F] p-6 mb-6">
              <h3 className="font-bold text-[#1F2937] mb-4">Nouveau témoignage</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Prénom + initiale</label>
                  <input value={form.prenom || ""} onChange={(e) => setForm({ ...form, prenom: e.target.value })} placeholder="Sophie M." className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Ville</label>
                  <input value={form.ville || ""} onChange={(e) => setForm({ ...form, ville: e.target.value })} placeholder="Libourne" className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Activité</label>
                  <select value={form.activite} onChange={(e) => setForm({ ...form, activite: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]">
                    {ACTIVITES.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Note</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <button key={s} onClick={() => setForm({ ...form, note: s })}>
                        <Star size={22} fill={s <= (form.note || 5) ? "#F5C518" : "none"} color="#F5C518" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Témoignage</label>
                <textarea value={form.texte || ""} onChange={(e) => setForm({ ...form, texte: e.target.value })} rows={3} placeholder="Texte du témoignage..." className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F] resize-none" />
              </div>
              <div className="flex gap-3">
                <button onClick={handleAdd} className="bg-[#1A3A8F] text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-blue-800">
                  Ajouter
                </button>
                <button onClick={() => setAdding(false)} className="border border-gray-200 text-gray-600 px-5 py-2 rounded-xl text-sm hover:bg-gray-50">
                  Annuler
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {temoignages.map((t) => (
              <div key={t.id} className={`bg-white rounded-2xl border p-5 flex gap-4 transition-all ${t.affiche ? "border-gray-200" : "border-gray-100 opacity-60"}`}>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-bold text-[#1F2937] text-sm">{t.prenom}</span>
                    <span className="text-gray-400 text-xs">{t.ville}</span>
                    <span className="text-xs bg-[#F0F4FF] text-[#1A3A8F] px-2 py-0.5 rounded-full">{t.activite}</span>
                    <div className="flex">
                      {[...Array(t.note)].map((_, i) => <Star key={i} size={12} fill="#F5C518" color="#F5C518" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{t.texte}"</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button onClick={() => handleToggle(t.id)} className={`p-2 rounded-lg transition-colors ${t.affiche ? "text-green-600 bg-green-50 hover:bg-green-100" : "text-gray-400 bg-gray-50 hover:bg-gray-100"}`}>
                    {t.affiche ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-300 hover:text-red-500 bg-gray-50 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
