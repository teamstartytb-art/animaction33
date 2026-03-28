export default function TrustBar() {
  const badges = [
    { icon: "🥋", label: "3e Dang Vovinam d'État" },
    { icon: "🏅", label: "TFP MKWDA (Moniteur Pro)" },
    { icon: "🏕", label: "BAFA + BAFD" },
    { icon: "⭐", label: "+100 familles satisfaites" },
    { icon: "🛡", label: "Assuré RC Pro" },
    { icon: "📍", label: "Libourne & Gironde" },
  ];

  return (
    <div className="gradient-trust py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...badges, ...badges].map((b, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 text-white font-montserrat font-semibold text-sm"
          >
            <span className="text-lg">{b.icon}</span>
            <span>{b.label}</span>
            <span className="text-[#F5C518] mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
