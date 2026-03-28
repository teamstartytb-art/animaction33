"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, Eye } from "lucide-react";

type TarifLine = { id: string; label: string; prix: string; badge?: string };

const defaultTarifs: TarifLine[] = [
  { id: "1", label: "Anniversaire Découverte 2h (10 enfants)", prix: "199", badge: "" },
  { id: "2", label: "Anniversaire Aventure 3h (12 enfants)", prix: "259", badge: "Populaire" },
  { id: "3", label: "Anniversaire Épique 3h+ (12 enfants + 2 options)", prix: "329", badge: "" },
  { id: "4", label: "Stage Vacances — Journée", prix: "55", badge: "" },
  { id: "5", label: "Stage Vacances — Semaine", prix: "230", badge: "" },
  { id: "6", label: "Cours Vovinam individuel (1h)", prix: "55", badge: "" },
  { id: "7", label: "Cours Sports de combat individuel (1h)", prix: "55", badge: "" },
  { id: "8", label: "Pack 5 séances", prix: "245", badge: "-11%" },
  { id: "9", label: "Pack 10 séances", prix: "450", badge: "-18%" },
];

export default function AdminTarifsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tarifs, setTarifs] = useState<TarifLine[]>(defaultTarifs);
  const [saved, setSaved] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    const saved = localStorage.getItem("gw_tarifs");
    if (saved) setTarifs(JSON.parse(saved));
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Non autorisé. <Link href="/admin" className="text-[#1A3A8F] underline">Se connecter</Link></p>
      </div>
    );
  }

  const handleSave = () => {
    localStorage.setItem("gw_tarifs", JSON.stringify(tarifs));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setEditingId(null);
  };

  const handleChange = (id: string, field: keyof TarifLine, value: string) => {
    setTarifs((prev) => prev.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  };

  const handleAdd = () => {
    const newId = Date.now().toString();
    setTarifs((prev) => [...prev, { id: newId, label: "Nouvelle prestation", prix: "0" }]);
    setEditingId(newId);
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer cette ligne ?")) {
      setTarifs((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar mini */}
      <aside className="w-16 bg-[#111827] min-h-screen flex flex-col items-center py-6 gap-4">
        <Link href="/admin" className="text-[#F5C518]">
          <div className="flex flex-col leading-none items-center">
            <span className="font-bebas text-lg text-[#F5C518]">G</span>
            <span className="font-bebas text-lg text-white">V</span>
          </div>
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
                <h1 className="font-baloo font-bold text-2xl text-[#1F2937]">Gestion des Tarifs</h1>
                <p className="text-gray-500 text-sm">Cliquez sur une ligne pour modifier · Les changements sont sauvegardés localement</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/tarifs"
                target="_blank"
                className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm hover:bg-gray-50"
              >
                <Eye size={15} /> Prévisualiser
              </Link>
              <button
                onClick={handleSave}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-sm transition-all ${saved ? "bg-green-500 text-white" : "bg-[#1A3A8F] text-white hover:bg-blue-800"}`}
              >
                <Save size={15} /> {saved ? "Sauvegardé !" : "Enregistrer"}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {tarifs.map((t) => (
                <div
                  key={t.id}
                  className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ${editingId === t.id ? "bg-blue-50" : ""}`}
                  onClick={() => setEditingId(editingId === t.id ? null : t.id)}
                >
                  {editingId === t.id ? (
                    <>
                      <input
                        value={t.label}
                        onChange={(e) => handleChange(t.id, "label", e.target.value)}
                        className="flex-1 px-3 py-2 border border-[#1A3A8F] rounded-lg text-sm focus:outline-none"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <input
                        value={t.badge || ""}
                        onChange={(e) => handleChange(t.id, "badge", e.target.value)}
                        placeholder="Badge (optionnel)"
                        className="w-28 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex items-center gap-1">
                        <input
                          value={t.prix}
                          onChange={(e) => handleChange(t.id, "prix", e.target.value)}
                          className="w-20 px-3 py-2 border border-[#CC2027] rounded-lg text-sm font-bold text-[#CC2027] text-right focus:outline-none"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span className="text-gray-500 text-sm">€</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-gray-700 text-sm">{t.label}</span>
                      {t.badge && (
                        <span className="text-xs bg-[#F5C518]/20 text-[#F5C518] px-2 py-0.5 rounded-full">{t.badge}</span>
                      )}
                      <span className="font-bold text-xl text-[#1A3A8F] w-20 text-right">{t.prix}€</span>
                    </>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(t.id); }}
                    className="text-gray-300 hover:text-red-500 transition-colors ml-2"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100">
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 text-[#1A3A8F] font-semibold text-sm hover:underline"
              >
                <Plus size={16} /> Ajouter une ligne
              </button>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-2xl p-5 text-sm text-[#1A3A8F]">
            <strong>Comment ça marche :</strong> Cliquez sur une ligne pour la modifier directement.
            Changez le texte et le prix. Cliquez sur &quot;Enregistrer&quot; quand vous avez terminé.
            Les modifications sont sauvegardées localement — pour les appliquer sur le site en ligne,
            il faut mettre à jour le fichier <code>content/tarifs/tarifs.json</code> et redéployer.
          </div>
        </div>
      </main>
    </div>
  );
}
