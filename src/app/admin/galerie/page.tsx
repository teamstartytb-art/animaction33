"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Trash2, Eye, X, Image as ImageIcon } from "lucide-react";

type Photo = {
  id: string;
  src: string;
  legende: string;
  categorie: string;
  date: string;
};

const CATEGORIES = ["Anniversaires", "Stages", "Arts Martiaux", "Team Building", "Coulisses"];

export default function AdminGaleriePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<Photo | null>(null);
  const [uploading, setUploading] = useState(false);
  const [categorie, setCategorie] = useState(CATEGORIES[0]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("gw_admin");
    if (auth === "1") setAuthenticated(true);
    const saved = localStorage.getItem("gw_galerie");
    if (saved) setPhotos(JSON.parse(saved));
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Non autorisé. <Link href="/admin" className="text-[#1A3A8F] underline">Se connecter</Link></p>
      </div>
    );
  }

  const savePhotos = (data: Photo[]) => {
    localStorage.setItem("gw_galerie", JSON.stringify(data));
    setPhotos(data);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    const fileArray = Array.from(files);
    let processed = 0;
    const newPhotos: Photo[] = [];

    fileArray.forEach((file) => {
      if (!file.type.startsWith("image/")) { processed++; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        // Compress via canvas
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxW = 1200;
          const ratio = img.width > maxW ? maxW / img.width : 1;
          canvas.width = img.width * ratio;
          canvas.height = img.height * ratio;
          canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL("image/jpeg", 0.7);
          newPhotos.push({
            id: Date.now().toString() + Math.random(),
            src: compressed,
            legende: file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
            categorie,
            date: new Date().toISOString().split("T")[0],
          });
          processed++;
          if (processed === fileArray.length) {
            setUploading(false);
            const updated = [...photos, ...newPhotos];
            savePhotos(updated);
          }
        };
        img.src = src;
      };
      reader.readAsDataURL(file);
    });
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [photos, categorie]);

  const handleDelete = (id: string) => {
    if (!confirm("Supprimer cette photo ?")) return;
    savePhotos(photos.filter((p) => p.id !== id));
  };

  const updateLegende = (id: string, legende: string) => {
    savePhotos(photos.map((p) => p.id === id ? { ...p, legende } : p));
  };

  const updateCategorie = (id: string, cat: string) => {
    savePhotos(photos.map((p) => p.id === id ? { ...p, categorie: cat } : p));
  };

  const sizeKB = Math.round(JSON.stringify(photos).length / 1024);
  const sizeWarning = sizeKB > 4000;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-16 bg-[#111827] min-h-screen flex flex-col items-center py-6">
        <Link href="/admin" className="flex flex-col leading-none items-center">
          <span className="font-bebas text-sm text-[#F5C518]">A</span>
          <span className="font-bebas text-sm text-white">33</span>
        </Link>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-500 hover:text-[#1A3A8F]">
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="font-baloo font-bold text-2xl text-[#1F2937]">Galerie Photos</h1>
                <p className="text-gray-500 text-sm">{photos.length} photo{photos.length > 1 ? "s" : ""} · {sizeKB} Ko utilisés</p>
              </div>
            </div>
            <Link
              href="/galerie"
              target="_blank"
              className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm hover:bg-gray-50"
            >
              <Eye size={15} /> Voir la galerie
            </Link>
          </div>

          {sizeWarning && (
            <div className="mb-4 bg-orange-50 border border-orange-200 rounded-2xl p-4 text-sm text-orange-700">
              ⚠️ Vous approchez de la limite de stockage ({sizeKB} Ko). Supprimez des photos ou réduisez leur qualité.
            </div>
          )}

          {/* Catégorie pour l'upload */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-600">Catégorie pour les nouvelles photos :</span>
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3A8F]"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Zone drag-and-drop */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all mb-8 ${
              dragging
                ? "border-[#1A3A8F] bg-blue-50 scale-[1.02]"
                : "border-gray-300 hover:border-[#1A3A8F] hover:bg-gray-50"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#1A3A8F] border-t-transparent rounded-full animate-spin" />
                <p className="text-[#1A3A8F] font-semibold">Compression en cours...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#1A3A8F]/10 rounded-2xl flex items-center justify-center">
                  <Upload size={28} className="text-[#1A3A8F]" />
                </div>
                <p className="font-bold text-[#1F2937]">Glissez vos photos ici</p>
                <p className="text-gray-500 text-sm">ou cliquez pour choisir des fichiers</p>
                <p className="text-gray-400 text-xs">JPG, PNG — plusieurs fichiers acceptés — compressés automatiquement</p>
              </div>
            )}
          </div>

          {/* Grille photos */}
          {photos.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <ImageIcon size={48} className="mx-auto mb-3 opacity-30" />
              <p>Aucune photo pour l&apos;instant.</p>
              <p className="text-sm mt-1">Glissez des photos dans la zone ci-dessus pour commencer.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  {/* Image */}
                  <div
                    className="aspect-square overflow-hidden cursor-pointer"
                    onClick={() => setPreview(photo)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.legende}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Infos éditables */}
                  <div className="p-2 space-y-1.5">
                    <input
                      value={photo.legende}
                      onChange={(e) => updateLegende(photo.id, e.target.value)}
                      className="w-full text-xs font-semibold text-gray-700 border border-gray-100 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#1A3A8F] bg-gray-50"
                      placeholder="Légende..."
                    />
                    <select
                      value={photo.categorie}
                      onChange={(e) => updateCategorie(photo.id, e.target.value)}
                      className="w-full text-xs text-gray-500 border border-gray-100 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#1A3A8F] bg-gray-50"
                    >
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Supprimer */}
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Lightbox preview */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview.src} alt={preview.legende} className="max-w-full max-h-[80vh] object-contain rounded-2xl" />
            <p className="text-white text-center mt-3 font-semibold">{preview.legende}</p>
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
