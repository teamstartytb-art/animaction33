export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Choisissez",
      desc: "Parcourez nos activités, thèmes et disciplines. Trouvez la formule parfaite pour votre projet.",
      color: "bg-blue-50 border-[#1A3A8F]/20",
      numColor: "text-[#1A3A8F]",
    },
    {
      number: "02",
      icon: "📅",
      title: "Réservez",
      desc: "Remplissez le formulaire en 2 minutes. Vous recevez un devis personnalisé sous 2h.",
      color: "bg-yellow-50 border-[#F5C518]/40",
      numColor: "text-[#F5C518]",
    },
    {
      number: "03",
      icon: "🎉",
      title: "Profitez",
      desc: "L'animateur s'occupe de tout. Vous vivez le moment, lui gère l'animation.",
      color: "bg-red-50 border-[#CC2027]/20",
      numColor: "text-[#CC2027]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-montserrat font-bold text-xs text-[#1A3A8F] uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">
            Simple comme bonjour
          </span>
          <h2 className="font-baloo font-bold text-4xl text-[#1F2937] mt-4 mb-3">
            Comment ça marche ?
          </h2>
          <p className="text-gray-500 text-lg">En 3 étapes, votre aventure est organisée.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Arrow connectors */}
          <div className="hidden md:block absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="#D1D5DB" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="hidden md:block absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <svg width="40" height="20" viewBox="0 0 40 20">
              <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="#D1D5DB" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border-2 ${step.color} transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`font-bebas text-6xl ${step.numColor} leading-none mb-4 opacity-30`}>
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="font-baloo font-bold text-xl text-[#1F2937] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
