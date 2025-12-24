import React from 'react';
import { MapPin, Clock, Euro, Sparkles, ArrowRight, Briefcase } from 'lucide-react';

const KarriereHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7FC] via-white to-[#F3ECFA]" />

      {/* Subtle Ambient Background Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#986AC6]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#986AC6]/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Briefcase className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">
              Karriere bei Magda Ambulante Pflege
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="block text-gray-900 mb-2">Werden Sie Teil unseres</span>
            <span className="block bg-gradient-to-r from-[#986AC6] via-[#B084D6] to-[#986AC6] bg-clip-text text-transparent">
              Pflegeteams
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10 font-light">
            Wir suchen engagierte Pflegefachkräfte, die mit Herz und Kompetenz
            unseren Patienten eine erstklassige ambulante Betreuung bieten möchten.
          </p>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-[#986AC6]/20">
              <MapPin className="w-5 h-5 text-[#986AC6]" />
              <span className="text-gray-700 font-medium">Remscheid & Umgebung</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-[#986AC6]/20">
              <Clock className="w-5 h-5 text-[#986AC6]" />
              <span className="text-gray-700 font-medium">Vollzeit & Teilzeit</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-[#986AC6]/20">
              <Euro className="w-5 h-5 text-[#986AC6]" />
              <span className="text-gray-700 font-medium">Attraktive Vergütung</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#bewerbung"
              className="group relative bg-[#986AC6] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[#986AC6]/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8357B8] to-[#986AC6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3">
                Jetzt bewerben
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            <a
              href="#stellenausschreibung"
              className="group border-2 border-[#986AC6] text-[#986AC6] bg-white/80 backdrop-blur-sm px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-[#F3ECFA] hover:border-[#8357B8] transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Mehr erfahren
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default KarriereHero;
