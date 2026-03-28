"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  type: z.string().min(1),
  prenom: z.string().min(2, "Prénom requis"),
  nom: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Téléphone requis"),
  theme: z.string().optional(),
  date: z.string().optional(),
  nombreEnfants: z.string().optional(),
  ageEnfants: z.string().optional(),
  prenomEnfant: z.string().optional(),
  adresse: z.string().optional(),
  codePostal: z.string().optional(),
  message: z.string().min(10, "Message trop court"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  defaultType?: string;
  themePreset?: string;
  dark?: boolean;
}

const types = [
  "Animation Anniversaire",
  "Stage Vacances",
  "Grands Jeux",
  "Team Building",
  "Cours Arts Martiaux",
  "Autre",
];

export default function ContactForm({ defaultType = "", themePreset = "", dark = false }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: defaultType, theme: themePreset },
  });

  const selectedType = watch("type");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSent(true);
    } catch {
      alert("Erreur lors de l'envoi. Veuillez réessayer ou nous appeler.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A3A8F] ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-[#F5C518]"
      : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
  }`;
  const labelClass = `block text-sm font-semibold mb-1.5 ${dark ? "text-gray-300" : "text-gray-700"}`;
  const errorClass = "text-red-500 text-xs mt-1";

  if (sent) {
    return (
      <div className={`rounded-3xl p-10 text-center ${dark ? "bg-white/10" : "bg-green-50 border border-green-200"}`}>
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className={`font-baloo font-bold text-2xl mb-2 ${dark ? "text-white" : "text-[#1F2937]"}`}>
          Demande envoyée !
        </h3>
        <p className={dark ? "text-gray-300" : "text-gray-600"}>
          Nous vous répondons rapidement. Vérifiez vos spams si nécessaire.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Type */}
      <div>
        <label className={labelClass}>Type de demande *</label>
        <select {...register("type")} className={inputClass}>
          <option value="">-- Sélectionner --</option>
          {types.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.type && <p className={errorClass}>{errors.type.message}</p>}
      </div>

      {/* Anniversaire fields */}
      {selectedType === "Animation Anniversaire" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Prénom de l&apos;enfant fêté</label>
            <input {...register("prenomEnfant")} placeholder="Ex: Lucas" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Nombre d&apos;enfants</label>
            <input {...register("nombreEnfants")} type="number" placeholder="Ex: 10" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Âge moyen des enfants</label>
            <input {...register("ageEnfants")} placeholder="Ex: 8-10 ans" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Date souhaitée</label>
            <input {...register("date")} type="date" className={inputClass} />
          </div>
        </div>
      )}

      {/* Nom / Prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Prénom *</label>
          <input {...register("prenom")} placeholder="Votre prénom" className={inputClass} />
          {errors.prenom && <p className={errorClass}>{errors.prenom.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Nom *</label>
          <input {...register("nom")} placeholder="Votre nom" className={inputClass} />
          {errors.nom && <p className={errorClass}>{errors.nom.message}</p>}
        </div>
      </div>

      {/* Email / Tel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email *</label>
          <input {...register("email")} type="email" placeholder="votre@email.fr" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Téléphone *</label>
          <input {...register("telephone")} type="tel" placeholder="06 XX XX XX XX" className={inputClass} />
          {errors.telephone && <p className={errorClass}>{errors.telephone.message}</p>}
        </div>
      </div>

      {/* Adresse */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className={labelClass}>Adresse (si à domicile)</label>
          <input {...register("adresse")} placeholder="Adresse" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Code postal</label>
          <input {...register("codePostal")} placeholder="33XXX" className={inputClass} maxLength={5} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Décrivez votre projet, vos questions..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all ${
          dark
            ? "bg-[#CC2027] text-white hover:bg-red-700"
            : "bg-[#1A3A8F] text-white hover:bg-blue-800"
        } disabled:opacity-60`}
      >
        {loading ? (
          <><Loader2 size={20} className="animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send size={20} /> Envoyer ma demande</>
        )}
      </button>

      <p className={`text-xs text-center ${dark ? "text-gray-400" : "text-gray-500"}`}>
        Vos données sont utilisées uniquement pour répondre à votre demande.
      </p>
    </form>
  );
}
