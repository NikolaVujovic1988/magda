import React from 'react';
import { CheckCircle, GraduationCap, FileText, Car, Sparkles } from 'lucide-react';

const Requirements = () => {
  const requirements = [
    {
      icon: GraduationCap,
      title: "Ausbildung",
      description: "Abgeschlossene Ausbildung als Pflegefachkraft oder Gesundheits- und Krankenpfleger/in"
    },
    {
      icon: FileText,
      title: "Berufserfahrung",
      description: "Idealerweise Erfahrung in der ambulanten Pflege oder Bereitschaft zur Einarbeitung"
    },
    {
      icon: Car,
      title: "Mobilität",
      description: "Führerschein Klasse B"
    },
    {
      icon: CheckCircle,
      title: "Persönlichkeit",
      description: "Empathie, Verantwortungsbewusstsein und Teamgeist"
    }
  ];

  const desired = [
    "Fortbildungen in speziellen Pflegebereichen",
    "Erfahrung mit digitaler Pflegedokumentation",
    "Kenntnisse in der Palliativpflege",
    "Zusatzqualifikationen (z.B. Wundmanagement)"
  ];

  return (
    <section id="voraussetzungen" className="relative py-24 bg-gradient-to-br from-[#F9F7FC] via-white to-[#F3ECFA] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Voraussetzungen</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Was Sie
            <span className="block bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
              mitbringen sollten
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Wir suchen qualifizierte Fachkräfte mit Leidenschaft für die Pflege
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div key={index} className="group bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-2xl mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <req.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{req.title}</h3>
              <p className="text-gray-600 leading-relaxed">{req.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-3xl shadow-2xl p-10 md:p-12">
          <h3 className="md:text-3xl text-2xl font-bold text-gray-900 mb-8 text-center">
            Wünschenswerte Zusatzqualifikationen
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {desired.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-br from-[#F9F7FC] to-white p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#986AC6] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
