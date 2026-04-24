export interface BlogArticle {
  id: string;
  slug: string;
  titre: string;
  description: string;
  contenu: string;
  categorie: string;
  tags: string[];
  datePublication: string;
  publie: boolean;
  imageAlt: string;
  tempsLecture?: number;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "idees-anniversaire-enfant-8-ans-libourne",
    titre:
      "10 idées d'animations pour un anniversaire enfant de 8 ans à Libourne",
    description:
      "Koh-Lanta, escape game, olympiades... Découvrez les meilleures animations pour un anniversaire enfant inoubliable à Libourne et en Gironde.",
    contenu: `## Votre enfant fête ses 8 ans : comment créer un anniversaire mémorable ?

À 8 ans, les enfants veulent de l'action, du suspense et des défis. Les goûters d'anniversaire classiques ne suffisent plus. Voici 10 idées d'animations testées et approuvées par AnimAction33 en Gironde.

### 1. Le Koh-Lanta Junior
Des épreuves physiques adaptées, des alliances, un conseil tribal : la magie opère. Les enfants adorent se prendre pour des aventuriers le temps d'un après-midi.

### 2. L'Escape Game Extérieur
Énigmes, indices dissimulés, minuteur : l'adrénaline est au rendez-vous. Parfait pour les cerveaux en ébullition.

### 3. Les Olympiades colorées
Défis sportifs et créatifs en équipe. Chacun son talent — même les moins sportifs brillent sur les épreuves créatives.

### 4. La Chasse au Trésor scénarisée
Indices, zones secrètes, trésor final. On adapte le scénario au lieu et aux personnages préférés de l'enfant.

### 5. Le Parcours Ninja
Obstacles, chrono, médaille. Efficace pour dépenser l'énergie des plus actifs.

### 6. La Murder Party Junior
Une enquête immersive adaptée aux 10-13 ans : chaque enfant a un rôle, un secret, une mission.

### 7. Le Blind Test musical
Toutes les musiques du moment + défis. Ambiance boom garantie.

### 8. Le Jeu de Rôle géant
Une mission, un univers, des personnages. 2h de dépaysement total.

### 9. La Bataille Navale humaine
Chaque enfant est une case — physique, stratégique et hilarant.

### 10. Le Fugitif
Poursuite en équipe dans un parc. Le plus grand jeu de cache-cache jamais inventé.

---

**Envie de tester l'une de ces animations à Libourne, Bordeaux ou ailleurs en Gironde ?**
Demandez un devis gratuit à AnimAction33 — réponse sous 48h.
`,
    categorie: "Anniversaires",
    tags: ["anniversaire", "8 ans", "Libourne", "animation enfant"],
    datePublication: "2026-04-01",
    publie: true,
    imageAlt: "Enfants jouant au Koh-Lanta pour un anniversaire à Libourne",
    tempsLecture: 5,
  },
  {
    id: "2",
    slug: "combien-coute-animateur-mariage-gironde",
    titre:
      "Combien coûte un animateur pour un mariage en Gironde en 2026 ?",
    description:
      "Prix, formules et conseils pour choisir votre animateur de mariage en Gironde. Transparence totale sur les tarifs d'AnimAction33.",
    contenu: `## Les tarifs d'un animateur mariage en Gironde

Le budget animation est souvent négligé dans l'organisation d'un mariage. Pourtant, c'est ce qui fait la différence entre une réception ordinaire et une soirée dont vos invités parleront pendant des années.

### Les fourchettes de prix en Gironde

Un animateur professionnel en Gironde se situe entre **349€ et 1500€** selon la durée et les prestations.

- **Vin d'honneur animé** (2h) : à partir de 349€
- **Soirée complète** (4h) : à partir de 549€
- **Journée entière** : sur devis selon le programme

### Ce qui influence le tarif

- Durée de la prestation
- Nombre d'invités (enfants + adultes)
- Type d'animations (quiz, blind test, karaoké, jeux intergénérationnels)
- Distance depuis Libourne
- Matériel additionnel (DJ partenaire, photo booth, machine à fumée)

### Ce qui est toujours inclus chez AnimAction33

✓ Animateur diplômé BAFA/BAFD
✓ Tout le matériel (sono, micros, jeux)
✓ Préparation sur-mesure selon vos envies
✓ Devis transparent sans surprise

---

**Vous préparez votre mariage en Gironde ?**
Demandez un devis personnalisé — réponse sous 48h.
`,
    categorie: "Mariages",
    tags: ["mariage", "tarif animateur", "Gironde", "animation mariage"],
    datePublication: "2026-04-10",
    publie: true,
    imageAlt: "Animation jeux lors d'un mariage en Gironde",
    tempsLecture: 4,
  },
];
