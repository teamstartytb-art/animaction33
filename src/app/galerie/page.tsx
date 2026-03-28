"use client";

import { useState, useEffect } from "react";

const CATEGORIES = ["Tous", "Anniversaires", "Stages", "Arts Martiaux", "Team Building", "Coulisses"];

type Photo = {
  id: string;
  src: string;
  legende: string;
  categorie: string;
  date: string;
};

const placeholders = [
  { emoji: "🥷", label: "Anniversaire Ninja", categorie: "Anniversaires", bg: "from-blue-900 to-slate-900" },
  { emoji: "🏝️", label: "Koh Lanta", categorie: "Anniversaires", bg: "from-amber-900 to-orange-900" },
  { emoji: "🌲", label: "Stage Vacances", categorie: "Stages", bg: "from-green-900 to-emerald-900" },
  { emoji: "🥋", label: "Cours Vovinam", categorie: "Arts Martiaux", bg: "from-red-900 to-slate-900" },
  { emoji: "🏢", label: "Team Building", categorie: "Team Building", bg: "from-slate-900 to-blue-900" },
  { emoji: "🦸", label: "Super Héros", categorie: "Anniversaires", bg: "from-purple-900 to-blue-900" },
];

export default function GaleriePage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filtre, setFiltre] = useState("Tous");
  const [preview, setPreview] = useState<Photo | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gw_galerie");
    if (saved) setPhotos(JSON.parse(saved));
    setLoaded(true);
  }, []);

  const photosFiltrees = filtre === "Tous" ? photos : photos.filter((p) => p.categorie === filtre);

  return (
    <div className="pt-16">
      <div className="bg-[#1A3A8F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl text-white mb-3">Galerie Photos</h1>
          <p className="text-blue-200">Les moments forts d&apos;Anim&apos;Action33 en images</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Filtres */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${
                  filtre === cat
                    ? "bg-[#1A3A8F] text-white"
                    : "border border-gray-200 text-gray-600 hover:border-[#1A3A8F] hover:text-[#1A3A8F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille de vraies photos */}
          {loaded && photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photosFiltrees.map((photo) => (
                <div
                  key={photo.id}
                  className="group aspect-square rounded-2xl overflow-hidden cursor-pointer relative shadow-sm hover:shadow-lg transition-all"
                  onClick={() => setPreview(photo)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.legende}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <p className="w-full text-white text-xs font-semibold px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 bg-gradient-to-t from-black/60 to-transparent">
                      {photo.legende}
                    </p>
                  </div>
                </div>
              ))}
              {photosFiltrees.length === 0 && (
                <div className="col-span-full text-center py-16 text-gray-400">
                  <p>Aucune photo dans cette catégorie.</p>
                </div>
              )}
            </div>
          ) : (
            /* Placeholders si aucune photo */
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {placeholders.map((item, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center`}
                  >
                    <span className="text-5xl mb-2">{item.emoji}</span>
                    <span className="text-white text-xs font-semibold text-center px-2">{item.label}</span>
                    <span className="text-white/50 text-xs mt-1">{item.categorie}</span>
                  </div>
                ))}
              </div>

              <div className="text-center p-8 bg-[#F0F4FF] rounded-3xl border border-blue-100">
                <p className="text-[#1A3A8F] font-baloo font-bold text-xl mb-2">Photos à venir !</p>
                <p className="text-gray-500 text-sm">
                  Les vraies photos seront ajoutées depuis l&apos;interface admin.
                  Connectez-vous sur <span className="font-semibold">/admin/galerie</span> pour uploader vos photos.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div className="max-w-4xl max-h-[90vh] text-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview.src}
              alt={preview.legende}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-white mt-3 font-semibold">{preview.legende}</p>
            <p className="text-white/50 text-xs mt-1">{preview.categorie}</p>
            <button
              onClick={() => setPreview(null)}
              className="mt-4 px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors text-sm"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
