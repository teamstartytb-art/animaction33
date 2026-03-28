"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Eye, ExternalLink } from "lucide-react";

const activites = [
  {
    id: "ninja",
    titre: "Anniversaire Ninja",
    lien: "/animation/anniversaires/ninja",
    categorie: "Anniversaires",
    emoji: "🥷",
    description: "Mission secrète, défis ninja, tir à l'arc mousse",
    age: "5-12 ans",
    duree: "2h ou 3h",
  },
  {
    id: "koh-lanta",
    titre: "Anniversaire Koh Lanta",
    lien: "/animation/anniversaires/koh-lanta",
    categorie: "Anniversaires",
    emoji: "🏝️",
    description: "Épreuves de survie, poteaux, conseil de tribu",
    age: "7-14 ans",
    duree: "2h ou 3h",
  },
  {
    id: "guerrier",
    titre: "Guerrier Vietnamien",
    lien: "/animation/anniversaires/guerrier-vietnamien",
    categorie: "Anniversaires",
    emoji: "⚔️",
    description: "Arts martiaux adaptés, initiation Vovinam",
    age: "8-14 ans",
    duree: "2h ou 3h",
  },
  {
    id: "fort-boyard",
    titre: "Fort Boyard",
    lien: "/animation/anniversaires/fort-boyard",
    categorie: "Anniversaires",
    emoji: "🏰",
    description: "Énigmes, défis, coffre au trésor",
    age: "6-14 ans",
    duree: "2h ou 3h",
  },
  {
    id: "super-heros",
    titre: "Super Héros",
    lien: "/animation/anniversaires/super-heros",
    categorie: "Anniversaires",
    emoji: "🦸",
    description: "Formation de héros, mission impossible",
    age: "4-10 ans",
    duree: "2h ou 3h",
  },
  {
    id: "olympiades",
    titre: "Olympiades",
    lien: "/animation/anniversaires/olympiades",
    categorie: "Anniversaires",
    emoji: "🏅",
    description: "Compétitions, relais, cérémonies des médailles",
    age: "6-14 ans",
    duree: "2h ou 3h",
  },
  {
    id: "grands-jeux",
    titre: "Grands Jeux",
    lien: "/animation/grands-jeux",
    categorie: "Événements",
    emoji: "🎯",
    description: "Jeux outdoor pour groupes scolaires et associations",
    age: "Tous âges",
    duree: "1h à journée",
  },
  {
    id: "stages",
    titre: "Stages Vacances",
    lien: "/animation/stages-vacances",
    categorie: "Stages",
    emoji: "🌲",
    description: "Arts martiaux et outdoor pendant les vacances scolaires",
    age: "6-16 ans",
    duree: "Journée ou semaine",
  },
  {
    id: "team-building",
    titre: "Team Building",
    lien: "/animation/team-building",
    categorie: "Entreprises",
    emoji: "🏢",
    description: "Cohésion d'équipe, défis collectifs pour entreprises",
    age: "Adultes",
    duree: "2h à journée",
  },
  {
    id: "vovinam",
    titre: "Vovinam Viet Vo Dao",
    lien: "/arts-martiaux/vovinam",
    categorie: "Arts Martiaux",
    emoji: "🥋",
    description: "Cours individuel et collectif, 3e Dan",
    age: "8 ans et +",
    duree: "1h par séance",
  },
  {
    id: "kick-boxing",
    titre: "Sports de combat",
    lien: "/arts-martiaux/kick-boxing",
    categorie: "Arts Martiaux",
    emoji: "🥊",
    description: "Boxe, kick-boxing, sports de percussion",
    age: "14 ans et +",
    duree: "1h par séance",
  },
  {
    id: "self-defense",
    titre: "Self-Défense",
    lien: "/arts-martiaux/self-defense",
    categorie: "Arts Martiaux",
    emoji: "🛡️",
    description: "Techniques réelles, stages femmes, gestion de situation",
    age: "Adultes",
    duree: "2h ou stage",
  },
];

type EditData = Record<string, { description: string; age: string; duree: string }>;

export default function AdminActivitesPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [edits, setEdits] = useState<EditData>({});
  const [saved, setSaved] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    const saved = localStorage.getItem("gw_activites_edits");
    if (saved) setEdits(JSON.parse(saved));
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Non autorisé. <Link href="/admin" className="text-[#1A3A8F] underline">Se connecter</Link></p>
      </div>
    );
  }

  const getVal = (id: string, field: "description" | "age" | "duree", fallback: string) => {
    return edits[id]?.[field] ?? fallback;
  };

  const setVal = (id: string, field: "description" | "age" | "duree", value: string) => {
    setEdits((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSave = () => {
    localStorage.setItem("gw_activites_edits", JSON.stringify(edits));
    setSaved(true);
    setEditingId(null);
    setTimeout(() => setSaved(false), 2000);
  };

  const groupes = [...new Set(activites.map((a) => a.categorie))];

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
              <Link href="/admin" className="text-gray-500 hover:text-[#1A3A8F]">
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="font-baloo font-bold text-2xl text-[#1F2937]">Activités</h1>
                <p className="text-gray-500 text-sm">Cliquez sur une activité pour modifier sa description</p>
              </div>
            </div>
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${saved ? "bg-green-500 text-white" : "bg-[#1A3A8F] text-white hover:bg-blue-800"}`}
            >
              <Save size={15} /> {saved ? "Sauvegardé !" : "Enregistrer"}
            </button>
          </div>

          {groupes.map((groupe) => (
            <div key={groupe} className="mb-8">
              <h2 className="font-bold text-[#1A3A8F] uppercase tracking-wider text-sm mb-3">{groupe}</h2>
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                {activites.filter((a) => a.categorie === groupe).map((act) => (
                  <div
                    key={act.id}
                    className={`p-5 cursor-pointer hover:bg-gray-50 transition-colors ${editingId === act.id ? "bg-blue-50" : ""}`}
                    onClick={() => setEditingId(editingId === act.id ? null : act.id)}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl shrink-0">{act.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-[#1F2937]">{act.titre}</h3>
                          <Link
                            href={act.lien}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-[#1A3A8F] transition-colors"
                          >
                            <ExternalLink size={14} />
                          </Link>
                        </div>

                        {editingId === act.id ? (
                          <div className="space-y-3 mt-3" onClick={(e) => e.stopPropagation()}>
                            <div>
                              <label className="text-xs font-semibold text-gray-500 mb-1 block">Description courte</label>
                              <input
                                value={getVal(act.id, "description", act.description)}
                                onChange={(e) => setVal(act.id, "description", e.target.value)}
                                className="w-full px-3 py-2 border border-[#1A3A8F] rounded-xl text-sm focus:outline-none"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Âge</label>
                                <input
                                  value={getVal(act.id, "age", act.age)}
                                  onChange={(e) => setVal(act.id, "age", e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-semibold text-gray-500 mb-1 block">Durée</label>
                                <input
                                  value={getVal(act.id, "duree", act.duree)}
                                  onChange={(e) => setVal(act.id, "duree", e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
                                />
                              </div>
                            </div>
                            <p className="text-xs text-gray-400">
                              Note : ces informations sont mémorisées dans votre navigateur. Pour les appliquer définitivement, partagez les modifications avec votre développeur.
                            </p>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-600">
                            <p>{getVal(act.id, "description", act.description)}</p>
                            <div className="flex gap-4 mt-1">
                              <span className="text-gray-400 text-xs">{getVal(act.id, "age", act.age)}</span>
                              <span className="text-gray-400 text-xs">{getVal(act.id, "duree", act.duree)}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <Link
                        href={act.lien}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-[#1A3A8F] border border-[#1A3A8F]/20 px-2.5 py-1.5 rounded-lg hover:bg-blue-50 shrink-0 transition-colors"
                      >
                        <Eye size={12} /> Voir
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 rounded-2xl p-5 text-sm text-[#1A3A8F]">
            <strong>Astuce :</strong> Cliquez sur une activité pour modifier sa description, son âge cible et sa durée.
            Ces modifications sont sauvegardées localement pour référence. Pour modifier les vraies pages du site, contactez votre webmaster.
          </div>
        </div>
      </main>
    </div>
  );
}
