export interface GaleriePhoto {
  id: string;
  src: string;
  alt: string;
  legende?: string;
  categorie:
    | "anniversaires"
    | "mariages"
    | "evg-evf"
    | "team-building"
    | "grands-jeux"
    | "ecoles"
    | "coulisses";
  ordre: number;
  homepage?: boolean;
}

export const galeriePhotos: GaleriePhoto[] = [];

export const galerieCategories = [
  { slug: "all", label: "Tous", emoji: "📸" },
  { slug: "anniversaires", label: "Anniversaires", emoji: "🎂" },
  { slug: "mariages", label: "Mariages", emoji: "💍" },
  { slug: "evg-evf", label: "EVG / EVF", emoji: "🥂" },
  { slug: "team-building", label: "Team Building", emoji: "🏢" },
  { slug: "grands-jeux", label: "Grands Jeux", emoji: "🎯" },
  { slug: "ecoles", label: "Écoles", emoji: "🏫" },
  { slug: "coulisses", label: "Coulisses", emoji: "🎬" },
] as const;
