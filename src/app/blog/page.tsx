import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conseils animation & arts martiaux | GwenViet",
  description: "Articles, conseils et actualités sur l'animation enfant, les anniversaires sur thème et les arts martiaux par GwenViet à Libourne.",
};

const articles = [
  {
    slug: "idees-anniversaire-ninja",
    titre: "10 idées d'activités pour un anniversaire ninja inoubliable",
    categorie: "Animation",
    date: "2026-01-15",
    lecture: "5 min",
    resume: "Découvrez nos meilleures idées pour transformer votre salon en dojo ninja et offrir à votre enfant un anniversaire mémorable.",
    emoji: "🥷",
  },
  {
    slug: "pourquoi-initier-vovinam",
    titre: "Pourquoi initier son enfant au Vovinam Viet Vo Dao ?",
    categorie: "Arts Martiaux",
    date: "2026-01-22",
    lecture: "7 min",
    resume: "Discipline, confiance, valeurs — le Vovinam est bien plus qu'un art martial. Voici pourquoi de plus en plus de parents le choisissent pour leurs enfants.",
    emoji: "🥋",
  },
  {
    slug: "anniversaire-koh-lanta-organisation",
    titre: "Anniversaire Koh Lanta : comment organiser le meilleur des défis ?",
    categorie: "Animation",
    date: "2026-02-05",
    lecture: "6 min",
    resume: "Alliances, épreuves de confort, conseil tribal — voici comment reproduire l'ambiance de l'émission pour un anniversaire de folie.",
    emoji: "🏝",
  },
  {
    slug: "team-building-arts-martiaux",
    titre: "Team building arts martiaux : une expérience qui unit les équipes",
    categorie: "Entreprise",
    date: "2026-02-18",
    lecture: "5 min",
    resume: "Le team building arts martiaux brise les silences, révèle les leaders et crée des souvenirs. Retour d'expérience et conseils pratiques.",
    emoji: "🏢",
  },
  {
    slug: "stage-vacances-aventure-ete",
    titre: "Stage vacances aventure : pourquoi choisir GwenViet cet été",
    categorie: "Animation",
    date: "2026-03-01",
    lecture: "4 min",
    resume: "Activités outdoor, arts martiaux, nature et sport — un programme de stage vacances unique dans le Libournais pour l'été 2026.",
    emoji: "🌲",
  },
];

const catColors: Record<string, string> = {
  "Animation": "bg-blue-100 text-blue-700",
  "Arts Martiaux": "bg-red-100 text-red-700",
  "Entreprise": "bg-gray-100 text-gray-700",
  "Conseils Parents": "bg-green-100 text-green-700",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#1A3A8F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl text-white mb-3">Le Blog GwenViet</h1>
          <p className="text-blue-200">Conseils, idées et actualités pour animer vos événements</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Featured */}
          <div className="mb-12">
            <Link href={`/blog/${articles[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#F0F4FF] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center p-12 bg-gradient-to-br from-[#1A3A8F] to-blue-900">
                <span className="text-9xl">{articles[0].emoji}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${catColors[articles[0].categorie]}`}>{articles[0].categorie}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={12} /> {articles[0].lecture}</span>
                </div>
                <h2 className="font-baloo font-bold text-2xl text-[#1F2937] mb-3 group-hover:text-[#1A3A8F] transition-colors">
                  {articles[0].titre}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{articles[0].resume}</p>
                <span className="inline-flex items-center gap-1 text-[#1A3A8F] font-semibold text-sm group-hover:gap-2 transition-all">
                  Lire l&apos;article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((art) => (
              <Link key={art.slug} href={`/blog/${art.slug}`} className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow card-hover">
                <div className="flex items-center justify-center h-36 bg-gradient-to-br from-gray-900 to-gray-800">
                  <span className="text-6xl">{art.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${catColors[art.categorie] || "bg-gray-100 text-gray-700"}`}>{art.categorie}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={10} /> {art.lecture}</span>
                  </div>
                  <h3 className="font-baloo font-bold text-lg text-[#1F2937] mb-2 group-hover:text-[#1A3A8F] transition-colors line-clamp-2">
                    {art.titre}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{art.resume}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
