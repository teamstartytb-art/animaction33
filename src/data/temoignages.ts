export interface Temoignage {
  id: string;
  prenom: string;
  ville: string;
  activite: string;
  texte: string;
  date: string;
  affiche: boolean;
  source: "google" | "direct" | "facebook";
}

export const temoignages: Temoignage[] = [];
