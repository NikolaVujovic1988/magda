import React from 'react';
import { Euro, Calendar, GraduationCap, Coffee, Shield, Trophy, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Euro,
      title: "Attraktive Vergütung",
      description: "Leistungsgerechte Bezahlung nach Tarif plus Zulagen",
      highlight: "bis zu 4.500€ brutto"
    },
    {
      icon: Calendar,
      title: "Flexible Arbeitszeiten",
      description: "Individuelle Schichtplanung und Work-Life-Balance",
      highlight: "Wunschdienstplan möglich"
    },
    {
      icon: GraduationCap,
      title: "Fort- & Weiterbildung",
      description: "Regelmäßige Schulungen und Karriereentwicklung",
      highlight: "100% Kostenübernahme"
    },
    {
      icon: Coffee,
      title: "Teamgeist",
      description: "Familiäres Arbeitsklima und regelmäßige Teamevents",
      highlight: "Starker Zusammenhalt"
    },
    {
      icon: Shield,
      title: "Sozialleistungen",
      description: "Betriebliche Altersvorsorge und Gesundheitsförderung",
      highlight: "Umfassender Schutz"
    },
    {
      icon: Trophy,
      title: "Anerkennung",
      description: "Wertschätzung Ihrer Arbeit und Entwicklungsmöglichkeiten",
      highlight: "Ihre Leistung zählt"
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Benefits</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Was wir Ihnen
            <span className="block bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
              bieten
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Entdecken Sie die vielen Vorteile einer Karriere bei Magda Ambulante Pflege
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-2xl mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              <span className="inline-block bg-[#986AC6]/10 text-[#986AC6] px-4 py-2 rounded-full text-sm font-semibold border border-[#986AC6]/20">
                {benefit.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
