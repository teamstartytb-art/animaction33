import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

const articles: Record<string, { titre: string; categorie: string; date: string; lecture: string; emoji: string; contenu: string }> = {
  "idees-anniversaire-ninja": {
    titre: "10 idées d'activités pour un anniversaire ninja inoubliable",
    categorie: "Animation",
    date: "15 janvier 2026",
    lecture: "5 min",
    emoji: "🥷",
    contenu: `Un anniversaire ninja, c'est bien plus qu'un thème — c'est une aventure complète qui transforme votre jardin en dojo secret et vos enfants en véritables guerriers de l'ombre.

## 1. L'arrivée secrète du Maître Ninja
Commencez fort : le Maître Ninja (votre animateur) entre en furtif, comme surgi de nulle part. Les enfants sont stupéfaits, et l'immersion est immédiate.

## 2. Le Scroll de Mission
Remettez à chaque enfant un parchemin calligraphié avec leur "mission du jour". Cela crée une immersion narrative instantanée et donne un objectif à l'animation.

## 3. L'initiation aux techniques
Adaptées à l'âge (6-12 ans), les techniques ninja deviennent des jeux : déplacements silencieux, esquives, positions de base. Les enfants adorent se sentir "comme les vrais ninjas".

## 4. Fabrication d'étoiles en mousse
Activité manuelle qui calme le jeu au milieu de l'animation : chaque enfant fabrique ses propres étoiles de ninja velcro. Puis on s'en sert pour les défis !

## 5. Le Parcours du Ninja
Le clou du spectacle : un parcours d'obstacles spécialement conçu. Ramper sous les lasers (cordes), franchir des obstacles, atteindre la cible finale. Chronométré pour plus d'adrénaline.

## 6. Le Combat des Ninjas
Encadré strictement, avec des protections mousse, ce "duel" est adoré des enfants. Règles claires, arbitre en costume, et beaucoup de rires garantis.

## 7. L'épreuve de la concentration
Un défi d'équilibre et de concentration : tenir une position, traverser le "champ de lasers" sans déclencher l'alarme... La tension est palpable !

## 8. La Cérémonie des Grades
Moment solennel et adoré : chaque enfant reçoit son diplôme de Ninja (personnalisé avec son prénom). Gwendal remet les grades avec le cérémonial martial. Frissons garantis.

## 9. La Surprise pour l'Enfant Fêté
Un cadeau spécial, une attention particulière. Le héros de la fête se sent vraiment au centre de tout.

## 10. Les Photos Souvenirs
En fin d'animation, une séance photos en groupes avec les costumes et accessoires ninja. Des images inoubliables que vous garderez longtemps.

---

**Vous voulez vivre ça ?** GwenViet organise des anniversaires ninja dans tout le Libournais. Réponse sous 2h, dès 199€.`,
  },
  "pourquoi-initier-vovinam": {
    titre: "Pourquoi initier son enfant au Vovinam Viet Vo Dao ?",
    categorie: "Arts Martiaux",
    date: "22 janvier 2026",
    lecture: "7 min",
    emoji: "🥋",
    contenu: `Le Vovinam Viet Vo Dao est l'art martial national du Vietnam, fondé en 1938 par Maître Nguyễn Lộc. Moins connu que le judo ou le karaté, il offre pourtant des bénéfices uniques pour les enfants.

## Un art martial complet
Le Vovinam travaille sur toutes les distances de combat : debout, au sol, avec armes. Cette polyvalence développe des capacités motrices complètes et une adaptabilité remarquable.

## Les valeurs au cœur de la pratique
"La main d'acier sur un cœur de bonté" — cette devise résume l'essence du Vovinam. Discipline, respect, dépassement de soi : des valeurs qui s'appliquent bien au-delà du dojo.

## À partir de quel âge ?
Dès 6 ans pour les enfants. Les exercices sont adaptés à chaque tranche d'âge. Les plus jeunes travaillent principalement la motricité, l'équilibre et l'écoute.

## Les bénéfices observés
Les parents qui viennent témoigner chez GwenViet rapportent régulièrement les mêmes améliorations : meilleure concentration à l'école, plus grande confiance en soi, et surtout une vraie discipline personnelle.

## Pourquoi les cours particuliers ?
L'avantage du cours particulier est la progression ultra-personnalisée. Gwendal adapte chaque séance au profil de l'enfant : son rythme, ses forces, ses difficultés. Impossible en cours collectif.

## Le crédit d'impôt, un vrai bonus
Les cours à domicile bénéficient d'un crédit d'impôt de 50%. Une séance à 55€ revient à 27,50€ réels. Cet argument convainc souvent les familles hésitantes.`,
  },
  "anniversaire-koh-lanta-organisation": {
    titre: "Anniversaire Koh Lanta : comment organiser le meilleur des défis ?",
    categorie: "Animation",
    date: "5 février 2026",
    lecture: "6 min",
    emoji: "🏝",
    contenu: `Koh Lanta est l'une des émissions préférées des enfants depuis des années. Un anniversaire sur ce thème est une valeur sûre, à condition de bien le mettre en scène.

## Le décor et l'ambiance
Même dans un jardin ordinaire, quelques éléments suffisent à créer l'ambiance : fanions de couleurs, "totem" symbolique, zones délimitées pour chaque "tribu".

## Les épreuves à adapter
Les épreuves de l'émission sont géniales, mais certaines nécessitent des adaptations pour les enfants. Gwendal a développé une dizaine d'épreuves physiques et intellectuelles adaptées à chaque âge.

## Les alliances, un jeu dans le jeu
Former des tribus au début, gérer les alliances, voter au conseil — cette dimension stratégique passionne les enfants de 8-12 ans. Pour les plus jeunes, on simplifie.

## Le Conseil Tribal
Moment de conclusion dramatique : les enfants votent en toute équité. Pas d'élimination brutale — chez GwenViet, tout le monde repart gagnant avec son diplôme !

## La clé du succès : un animateur immersif
Tout repose sur l'animateur qui incarne le présentateur. Gwendal joue le jeu à fond, crée la tension, l'humour, les retournements de situation. C'est ça qui fait la différence.`,
  },
  "team-building-arts-martiaux": {
    titre: "Team building arts martiaux : une expérience qui unit les équipes",
    categorie: "Entreprise",
    date: "18 février 2026",
    lecture: "5 min",
    emoji: "🏢",
    contenu: `Le team building arts martiaux est une formule qui surprend toujours, et qui séduit ensuite. Voici pourquoi de plus en plus d'entreprises font appel à GwenViet pour leurs événements RH.

## Briser la glace autrement
Les activités arts martiaux créent une vulnérabilité partagée : tout le monde est débutant. Ce nivellement par le bas (temporaire) est extraordinairement fédérateur.

## Révéler les leaders cachés
On observe souvent des profils qui émergent lors des exercices : celui qui encourage les autres, celui qui structure, celui qui ose. Des révélations précieuses pour les RH.

## Adapter l'intensité à tous les profils
Aucune condition physique requise. Gwendal adapte systématiquement les exercices pour inclure tout le monde : les sportifs comme les sédentaires.

## Le format idéal
2h minimum pour un vrai impact. La demi-journée permet d'aller plus loin : techniques, cohésion, moments de réflexion partagés. La journée complète intègre un repas commun et des ateliers théoriques.

## Le retour sur investissement
Des témoignages d'entreprises clientes : ambiance améliorée en réunion, meilleure communication inter-services, anecdotes partagées encore des semaines après.`,
  },
  "stage-vacances-aventure-ete": {
    titre: "Stage vacances aventure : pourquoi choisir GwenViet cet été",
    categorie: "Animation",
    date: "1er mars 2026",
    lecture: "4 min",
    emoji: "🌲",
    contenu: `L'été arrive et les parents cherchent des activités de qualité pour leurs enfants pendant les vacances. Les stages GwenViet proposent une expérience unique qui combine sport, nature et arts martiaux.

## Qu'est-ce qu'un stage vacances GwenViet ?
Une semaine (ou quelques journées) encadrées par Gwendal, mixant des activités outdoor, des initiations aux arts martiaux et des grands jeux collectifs. Le tout dans une atmosphère d'aventure et de bienveillance.

## Un programme équilibré
Matin sportif (initiations, jeux), après-midi ludique (grands jeux, défis). Les journées sont rythmées, jamais ennuyeuses. Les enfants rentrent épuisés et heureux.

## Des groupes petits pour un vrai suivi
Maximum 15 enfants par session. Cette limite garantit que Gwendal connaît chaque enfant par prénom et peut adapter les activités à ses besoins spécifiques.

## Les dates d'été 2026
Les inscriptions sont ouvertes ! Places limitées, réservation fortement recommandée au moins 3-4 semaines à l'avance pour les sessions d'été.

## Le prix, un vrai avantage
Dès 55€/journée, 230€ la semaine — un rapport qualité-prix exceptionnel pour un encadrement certifié BAFD, en groupes réduits.`,
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };
  return {
    title: `${article.titre} | Blog GwenViet`,
    description: `Article de blog GwenViet : ${article.titre}`,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">404</p>
          <p className="text-gray-500 mb-4">Article non trouvé</p>
          <Link href="/blog" className="text-[#1A3A8F] font-semibold hover:underline">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  const paragraphs = article.contenu.split("\n\n").filter(Boolean);

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3A8F] to-[#111827] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">{article.emoji}</div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${article.categorie === "Arts Martiaux" ? "bg-red-900/50 text-red-300" : "bg-blue-900/50 text-blue-300"}`}>
            {article.categorie}
          </span>
          <h1 className="font-baloo font-bold text-3xl md:text-4xl text-white mb-4 mt-3">
            {article.titre}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.lecture} de lecture</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1A3A8F] mb-8 transition-colors">
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i} className="font-baloo font-bold text-2xl text-[#1A3A8F] mt-8 mb-4">{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("---")) {
                return <hr key={i} className="border-gray-200 my-8" />;
              }
              if (para.startsWith("**") && para.endsWith("**")) {
                return <p key={i} className="font-bold text-[#1F2937]">{para.replace(/\*\*/g, "")}</p>;
              }
              return <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#F0F4FF] rounded-3xl p-8 border border-[#1A3A8F]/20">
            <h3 className="font-baloo font-bold text-xl text-[#1A3A8F] mb-2">
              Envie d&apos;essayer ?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Gwendal répond à toutes vos questions sous 2h — disponible 7j/7.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#CC2027] text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
            >
              Réserver <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
