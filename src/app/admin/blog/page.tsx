"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit2, Trash2, Eye, Save } from "lucide-react";

type Article = {
  id: string;
  titre: string;
  slug: string;
  categorie: string;
  statut: "publié" | "brouillon";
  date: string;
  resume: string;
  contenu: string;
};

const CATEGORIES = ["Animation", "Arts Martiaux", "Conseils Parents", "Actualités"];

const exampleArticles: Article[] = [
  { id: "1", titre: "10 idées pour un anniversaire ninja inoubliable", slug: "idees-anniversaire-ninja", categorie: "Animation", statut: "brouillon", date: new Date().toISOString().split("T")[0], resume: "Découvrez nos meilleures idées pour organiser un anniversaire ninja épique.", contenu: "" },
];

export default function AdminBlogPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [articles, setArticles] = useState<Article[]>(exampleArticles);
  const [editing, setEditing] = useState<Article | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    const saved = localStorage.getItem("gw_blog");
    if (saved) setArticles(JSON.parse(saved));
  }, []);

  if (!authenticated) return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Non autorisé. <Link href="/admin" className="text-[#1A3A8F] underline">Se connecter</Link></p>
    </div>
  );

  const handleSave = () => {
    if (!editing) return;
    setArticles((prev) => {
      const exists = prev.find((a) => a.id === editing.id);
      if (exists) return prev.map((a) => a.id === editing.id ? editing : a);
      return [...prev, editing];
    });
    localStorage.setItem("gw_blog", JSON.stringify(articles));
    setSaved(true);
    setTimeout(() => { setSaved(false); setEditing(null); }, 1500);
  };

  const handleNew = () => {
    setEditing({
      id: Date.now().toString(),
      titre: "",
      slug: "",
      categorie: "Animation",
      statut: "brouillon",
      date: new Date().toISOString().split("T")[0],
      resume: "",
      contenu: "",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Supprimer cet article ?")) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    }
  };

  if (editing) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setEditing(null)} className="flex items-center gap-2 text-gray-500 hover:text-[#1A3A8F]">
              <ArrowLeft size={18} /> Retour à la liste
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm ${saved ? "bg-green-500 text-white" : "bg-[#1A3A8F] text-white hover:bg-blue-800"}`}
            >
              <Save size={15} /> {saved ? "Sauvegardé !" : "Enregistrer"}
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Titre *</label>
              <input
                value={editing.titre}
                onChange={(e) => setEditing({ ...editing, titre: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") })}
                placeholder="Titre de l'article"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Catégorie</label>
                <select
                  value={editing.categorie}
                  onChange={(e) => setEditing({ ...editing, categorie: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Statut</label>
                <select
                  value={editing.statut}
                  onChange={(e) => setEditing({ ...editing, statut: e.target.value as "publié" | "brouillon" })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
                >
                  <option value="brouillon">Brouillon</option>
                  <option value="publié">Publié</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Résumé (affiché dans la liste)</label>
              <textarea
                value={editing.resume}
                onChange={(e) => setEditing({ ...editing, resume: e.target.value })}
                rows={2}
                placeholder="Courte description de l'article..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F] resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contenu</label>
              <textarea
                value={editing.contenu}
                onChange={(e) => setEditing({ ...editing, contenu: e.target.value })}
                rows={15}
                placeholder="Rédigez votre article ici. Vous pouvez utiliser du texte simple ou du Markdown (** pour gras, # pour titre, etc.)"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F] resize-none font-mono"
              />
            </div>
            <p className="text-xs text-gray-400">Slug URL : /blog/{editing.slug || "..."}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-16 bg-[#111827] min-h-screen flex flex-col items-center py-6">
        <Link href="/admin" className="flex flex-col leading-none items-center">
          <span className="font-bebas text-lg text-[#F5C518]">G</span>
          <span className="font-bebas text-lg text-white">V</span>
        </Link>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-500 hover:text-[#1A3A8F]"><ArrowLeft size={20} /></Link>
              <div>
                <h1 className="font-baloo font-bold text-2xl text-[#1F2937]">Blog</h1>
                <p className="text-gray-500 text-sm">{articles.length} articles</p>
              </div>
            </div>
            <button
              onClick={handleNew}
              className="flex items-center gap-2 bg-[#CC2027] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors"
            >
              <Plus size={16} /> Nouvel article
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            {articles.length === 0 ? (
              <div className="p-12 text-center text-gray-400">
                <p className="mb-4">Aucun article pour l&apos;instant</p>
                <button onClick={handleNew} className="inline-flex items-center gap-2 text-[#1A3A8F] font-semibold">
                  <Plus size={16} /> Créer le premier article
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {articles.map((art) => (
                  <div key={art.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${art.statut === "publié" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {art.statut}
                        </span>
                        <span className="text-xs text-gray-400">{art.categorie}</span>
                      </div>
                      <p className="font-semibold text-[#1F2937] text-sm">{art.titre}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{art.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditing(art)} className="p-2 text-gray-400 hover:text-[#1A3A8F] transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <Link href={`/blog/${art.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Eye size={16} />
                      </Link>
                      <button onClick={() => handleDelete(art.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
