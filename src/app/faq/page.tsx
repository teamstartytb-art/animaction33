"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const categories = [
  {
    icon: "📍",
    label: "Zone & Déplacement",
    questions: [
      { q: "Quelle zone géographique couvrez-vous ?", a: "J'interviens principalement sur Libourne et dans un rayon de 15 km (zone gratuite). Au-delà, je me déplace dans toute la Gironde avec un supplément de 0,50€/km à partir de 15 km." },
      { q: "Intervenez-vous hors Gironde ?", a: "Oui, sur demande particulière pour les entreprises ou les grands événements. N'hésitez pas à me contacter pour un devis." },
      { q: "Y a-t-il des frais de déplacement ?", a: "Non jusqu'à 15 km de Libourne. Au-delà, 0,50€/km aller-retour depuis Libourne." },
      { q: "Venez-vous sur les sites de vacances ou locations de vacances ?", a: "Oui ! Gîtes, campings, locations, châteaux — tant qu'il y a un espace suffisant, je m'adapte." },
    ],
  },
  {
    icon: "📅",
    label: "Réservation & Annulation",
    questions: [
      { q: "Comment réserver ?", a: "Remplissez le formulaire en ligne, envoyez un WhatsApp ou appelez le 06 77 24 36 75. Je vous envoie un devis sous 2h, puis vous confirmez par virement d'un acompte de 30%." },
      { q: "Combien de temps à l'avance réserver ?", a: "Idéalement 2-3 semaines pour une animation. Pour les week-ends de vacances scolaires, 1 mois recommandé. Les cours d'arts martiaux peuvent commencer très rapidement." },
      { q: "Quelle est la politique d'annulation ?", a: "Annulation 7 jours avant : remboursement complet. Entre 3 et 7 jours : avoir de 50%. Moins de 3 jours : acompte non remboursé (sauf cas de force majeure)." },
      { q: "Peut-on reporter une date ?", a: "Oui, dans la limite des disponibilités. Merci de me prévenir au plus tôt." },
      { q: "Acceptez-vous les chèques vacances ANCV ?", a: "Oui, j'accepte les chèques ANCV pour les stages vacances et les animations familiales." },
    ],
  },
  {
    icon: "🎂",
    label: "Animations Anniversaires",
    questions: [
      { q: "De quel espace ai-je besoin ?", a: "Un jardin, parc ou grande pièce de minimum 50 m² pour la plupart des animations. Je m'adapte à votre espace." },
      { q: "Les parents doivent-ils rester ?", a: "Non ! Je gère les enfants de A à Z. Les parents peuvent profiter du moment ou préparer le goûter." },
      { q: "Y a-t-il une limite d'âge ?", a: "Chaque thème a ses âges recommandés (indiqués sur les pages). En général, les animations sont pour 5-14 ans. Je peux adapter selon le groupe." },
      { q: "Que fait-on si le nombre d'enfants est dépassé ?", a: "Chaque enfant supplémentaire au-delà du maximum est facturé 10€. Je peux accepter jusqu'à 20 enfants selon le thème." },
      { q: "Fournissez-vous le goûter et le gâteau ?", a: "Non, le goûter et le gâteau sont fournis par les parents. Je peux proposer des options barbe à papa ou candy bar en supplément." },
      { q: "Les invitations sont-elles incluses ?", a: "Oui ! Je fournis des invitations numériques gratuites et un PDF imprimable personnalisé au thème de l'anniversaire." },
    ],
  },
  {
    icon: "🌲",
    label: "Stages Vacances",
    questions: [
      { q: "Où ont lieu les stages ?", a: "Sur mon terrain privé à Libourne ou dans un espace que vous proposez. Je peux aussi organiser des stages sur des sites partenaires." },
      { q: "Quelle est la taille des groupes ?", a: "Minimum 4 enfants, maximum 15 pour un suivi de qualité. Au-delà, un assistant animateur peut être mobilisé (inclus dans le tarif)." },
      { q: "Les enfants ont-ils besoin d'affaires spéciales ?", a: "Tenue de sport confortable, chaussures fermées, gourde d'eau. Une liste détaillée est envoyée à la réservation." },
      { q: "Que se passe-t-il en cas de mauvaise météo ?", a: "J'ai des alternatives indoor prévues. En cas d'intempéries sévères, on adapte le programme ou on reporte avec priorité sur la prochaine session." },
      { q: "Les stages sont-ils accessibles aux enfants handicapés ?", a: "Oui, je m'adapte à tous les profils. Merci de me préciser les besoins spécifiques à la réservation pour que je puisse préparer les activités en conséquence." },
    ],
  },
  {
    icon: "🥋",
    label: "Arts Martiaux",
    questions: [
      { q: "À partir de quel âge peut-on commencer ?", a: "Le Vovinam est accessible dès 6 ans pour les enfants. Pour les sports de combat, à partir de 12-14 ans selon le profil. Pas d'âge maximum !" },
      { q: "Faut-il du matériel spécifique ?", a: "Non pour les premiers cours. Une tenue de sport suffit. Je fournis les protections et le matériel pédagogique." },
      { q: "Les cours à domicile ouvrent-ils droit au crédit d'impôt ?", a: "Oui ! En tant que prestataire de services à la personne agréé, vos cours à domicile bénéficient d'un crédit d'impôt de 50%. Séance à 55€ = 27,50€ réels après crédit." },
      { q: "Peut-on préparer une compétition ?", a: "Oui, je propose des préparations spécifiques à la compétition. Sélection préalable requise." },
      { q: "Les cours en visio sont-ils efficaces ?", a: "Pour les cours théoriques, les katas et certains exercices de conditionnement, oui. Je recommande de combiner avec des sessions en présentiel pour le sparring." },
      { q: "Proposez-vous des cours en famille ?", a: "Absolument ! Les cours en duo ou petit groupe parent-enfant sont excellents pour créer du lien tout en apprenant ensemble." },
    ],
  },
  {
    icon: "🏢",
    label: "Team Building",
    questions: [
      { q: "Le team building est-il adapté à toutes les entreprises ?", a: "Oui. Les activités sont entièrement personnalisables et ne nécessitent aucune condition physique particulière." },
      { q: "Pouvez-vous venir dans nos locaux ?", a: "Oui, si vous avez un espace intérieur ou extérieur disponible. Sinon, je peux proposer des sites partenaires." },
      { q: "Fournissez-vous un compte-rendu/synthèse ?", a: "Sur demande, je peux préparer un compte-rendu d'activité et des photos pour vos communications internes." },
      { q: "Y a-t-il un minimum de participants ?", a: "Oui, 6 participants minimum pour organiser un team building. Maximum 50 personnes pour une demi-journée." },
    ],
  },
  {
    icon: "⚖️",
    label: "Légal & Assurances",
    questions: [
      { q: "Êtes-vous assuré ?", a: "Oui, je dispose d'une assurance Responsabilité Civile Professionnelle complète. Attestation fournie sur demande." },
      { q: "Quels sont vos diplômes ?", a: "TFP MKWDA (Moniteur Sports de combat), BAFD, BAFA, 3e Dang d'État FFKDA, DIF, 3e Dang École Vovinam, PSE1, PSE2. Tous les diplômes sont disponibles sur demande." },
      { q: "Anim'Action33 est-elle une micro-entreprise ?", a: "Oui. SIRET : 99048354700016, APE : 8551Z (Enseignement de disciplines sportives et d'activités de loisirs)." },
    ],
  },
];

export default function FAQPage() {
  const [openCat, setOpenCat] = useState<number | null>(0);
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <div className="bg-[#1A3A8F] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-baloo font-bold text-4xl text-white mb-3">Questions Fréquentes</h1>
          <p className="text-blue-200">Tout ce que vous avez besoin de savoir</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {categories.map((cat, ci) => (
              <div key={ci} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenCat(openCat === ci ? null : ci)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="font-baloo font-bold text-xl text-[#1F2937]">{cat.label}</span>
                    <span className="text-xs bg-[#1A3A8F]/10 text-[#1A3A8F] px-2 py-0.5 rounded-full">
                      {cat.questions.length}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#1A3A8F] transition-transform ${openCat === ci ? "rotate-180" : ""}`}
                  />
                </button>

                {openCat === ci && (
                  <div className="divide-y divide-gray-100">
                    {cat.questions.map((faq, qi) => {
                      const key = `${ci}-${qi}`;
                      return (
                        <div key={qi}>
                          <button
                            onClick={() => setOpenQ(openQ === key ? null : key)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-[#1F2937] pr-4 text-sm">{faq.q}</span>
                            <ChevronDown
                              size={16}
                              className={`shrink-0 text-gray-400 transition-transform ${openQ === key ? "rotate-180" : ""}`}
                            />
                          </button>
                          {openQ === key && (
                            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#F0F4FF] rounded-3xl p-8 text-center">
            <p className="font-baloo font-bold text-xl text-[#1F2937] mb-3">
              Votre question n&apos;est pas là ?
            </p>
            <a
              href="https://wa.me/33677243675?text=Bonjour%2C%20j'ai%20une%20question%20:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} /> Posez-la sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
