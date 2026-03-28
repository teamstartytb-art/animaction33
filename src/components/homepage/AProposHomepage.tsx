import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export default function AProposHomepage() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="w-40 h-40 bg-gradient-to-br from-[#1A3A8F] to-[#CC2027] rounded-full flex items-center justify-center text-7xl shadow-xl">
              🥋
            </div>
            <div>
              <h2 className="font-baloo font-bold text-3xl text-[#1F2937] mb-1">
                Gwen — Anim&apos;Action33
              </h2>
              <p className="text-[#CC2027] font-semibold mb-3">
                Animateur certifié · 3e Dan Vovinam · Libourne
              </p>
              <p className="text-gray-600 leading-relaxed">
                Né à Libourne en 1999, passionné d&apos;arts martiaux et d&apos;animation depuis 10 ans.
                BAFD, DEJEPS KDA, TFP MKWDA — tout est mis au service de vos enfants et équipes.
              </p>
            </div>
          </div>

          {/* Diplômes clés + CTA */}
          <div className="space-y-4">
            {[
              { annee: "2020", label: "BAFA — Animateur certifié" },
              { annee: "2023", label: "3e Dan Vovinam · TFP MKWDA" },
              { annee: "2023", label: "BAFD — Directeur certifié" },
              { annee: "2024", label: "DEJEPS KDA (VAE en cours)" },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-[#1A3A8F] rounded-xl flex items-center justify-center shrink-0">
                  <Award size={22} className="text-[#F5C518]" />
                </div>
                <div>
                  <span className="font-bebas text-xl text-[#CC2027]">{d.annee}</span>
                  <p className="text-gray-700 text-sm font-semibold">{d.label}</p>
                </div>
              </div>
            ))}

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 mt-2 text-[#1A3A8F] font-bold hover:gap-3 transition-all text-sm"
            >
              Découvrir mon parcours complet <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
