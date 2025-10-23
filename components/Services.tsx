import { Home, Heart, Stethoscope, Users, Clock, Utensils, Baby, Pill, ActivitySquare, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Grundpflege (SGB XI)",
      description: "Professionelle Unterstützung bei allen Aktivitäten des täglichen Lebens in Ihrem vertrauten Zuhause.",
      features: [
        "Körperpflege & Hygiene",
        "An- und Auskleiden",
        "Mobilisation & Lagerung",
        "Hilfe bei der Nahrungsaufnahme"
      ]
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "Behandlungspflege (SGB V)",
      description: "Medizinische Versorgung nach ärztlicher Verordnung durch examiniertes Fachpersonal.",
      features: [
        "Medikamentengabe & Injektionen",
        "Verbandswechsel",
        "Wundversorgung",
        "Blutdruck- & Blutzuckermessung"
      ]
    },
    // {
    //   icon: <Users className="w-10 h-10" />,
    //   title: "Verhinderungspflege",
    //   description: "Entlastung für pflegende Angehörige bei Urlaub, Krankheit oder persönlichen Auszeiten.",
    //   features: [
    //     "Stundenweise Betreuung",
    //     "Tageweise Vertretung",
    //     "Bis zu 6 Wochen/Jahr",
    //     "Flexible Einsatzplanung"
    //   ]
    // },
    // {
    //   icon: <Clock className="w-10 h-10" />,
    //   title: "24-Stunden-Betreuung",
    //   description: "Rundum-Versorgung für Menschen mit besonderem Pflegebedarf rund um die Uhr.",
    //   features: [
    //     "Permanent verfügbare Pflegekraft",
    //     "Tag- und Nachtbereitschaft",
    //     "Individuelle Pflege & Betreuung",
    //     "Notfallversorgung jederzeit"
    //   ]
    // },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Hauswirtschaftliche Versorgung",
      description: "Unterstützung im Haushalt für ein gepflegtes und angenehmes Wohnumfeld.",
      features: [
        "Reinigung der Wohnung",
        "Wäschepflege",
        "Einkaufsservice",
        "Zubereitung von Mahlzeiten"
      ]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Betreuungsleistungen §45b",
      description: "Aktivierende Betreuung und soziale Teilhabe für mehr Lebensqualität im Alltag.",
      features: [
        "Gedächtnistraining",
        "Spaziergänge & Ausflüge",
        "Gespräche & Gesellschaft",
        "Freizeitgestaltung"
      ]
    },
    // {
    //   icon: <Baby className="w-10 h-10" />,
    //   title: "Spezialisierte Pflege",
    //   description: "Fachpflege für besondere Anforderungen und spezielle Krankheitsbilder.",
    //   features: [
    //     "Demenzbetreuung",
    //     "Palliativpflege",
    //     "Intensivpflege",
    //     "Kinderkrankenpflege"
    //   ]
    // },
    {
      icon: <Pill className="w-10 h-10" />,
      title: "Pflegeberatung",
      description: "Kompetente Beratung zu allen Fragen rund um Pflege, Leistungen und Hilfsmittel.",
      features: [
        "Pflegegradermittlung",
        "Hilfsmittelberatung",
        "Kostenklärung",
        "Wohnraumanpassung"
      ]
    },
    {
      icon: <ActivitySquare className="w-10 h-10" />,
      title: "Kurzzeitpflege & Tagespflege",
      description: "Temporäre Pflege und Betreuung zur Überbrückung oder Entlastung.",
      features: [
        "Nach Krankenhausaufenthalt",
        "Übergangsweise Pflege",
        "Tagesstruktur",
        "Soziale Aktivitäten"
      ]
    }
  ];

  return (
    <section id="leistungen" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F9F7FC] to-white" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Unser Leistungsspektrum</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professionelle Pflege für
            <span className="block bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
              jeden Bedarf
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Von der Grundpflege bis zur Pflegeberatung – wir bieten Ihnen das komplette Spektrum
            ambulanter Pflegeleistungen nach höchsten Qualitätsstandards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#986AC6] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-[#986AC6] to-[#8357B8] rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Haben Sie Fragen zu unseren Leistungen?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Wir beraten Sie gerne persönlich und unverbindlich zu allen Pflegeleistungen
              und erstellen gemeinsam mit Ihnen ein individuelles Pflegekonzept.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-white text-[#986AC6] px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 group"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
