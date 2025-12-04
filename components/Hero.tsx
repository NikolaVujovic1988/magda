import React from "react";
import { Heart, Phone, Star, CheckCircle, ArrowRight, Sparkles, Award, Clock, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-30 md:mt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7FC] via-white to-[#F3ECFA]" />

      {/* Subtle Ambient Background Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#986AC6]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#986AC6]/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#986AC6]/5 to-transparent rounded-full" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-3 h-3 bg-[#986AC6]/20 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-500">
          <div className="w-2 h-2 bg-[#986AC6]/30 rounded-full" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float delay-1000">
          <div className="w-4 h-4 bg-[#986AC6]/15 rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Quality Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-500 group">
          <Sparkles className="w-4 h-4 text-[#986AC6] group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-medium text-[#986AC6]">
            Die MDK-Prüfung mit 1,2 bestanden
          </span>
          <Sparkles className="w-4 h-4 text-[#986AC6] group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Headline */}
        <header className="space-y-8 mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
            <span className="block text-gray-900 mb-2">Magda Ambulante Pflege -</span>
            <span className="block bg-gradient-to-r from-[#986AC6] via-[#B084D6] to-[#986AC6] bg-clip-text text-transparent animate-gradient-x">
              mit Vertrauen & Herz
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
            Ihr verlässlicher Partner für individuelle, würdevolle Pflege in
            <span className="font-semibold text-[#986AC6]">
              {" "}
              Remscheid und Umgebung
            </span>
            . Wir begleiten Sie mit Herz, Kompetenz und Menschlichkeit – direkt
            in Ihrem Zuhause.
          </p>
        </header>

        {/* CTA Buttons with Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a
            href="#kontakt"
            className="group relative bg-[#986AC6] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[#986AC6]/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8357B8] to-[#986AC6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-3">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Beratungstermin vereinbaren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          <a
            href="#leistungen"
            className="group border-2 border-[#986AC6] text-[#986AC6] bg-white/80 backdrop-blur-sm px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-[#F3ECFA] hover:border-[#8357B8] transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Unsere Leistungen
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Jahre Erfahrung", icon: Award },
            { number: "24/7", label: "Erreichbarkeit", icon: Clock },
            { number: "100%", label: "Zufriedenheit", icon: Star },
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent">
                      {item.number}
                    </div>
                    <div className="text-gray-600 font-medium mt-2">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 opacity-70">
          {[
            "MDK Geprüft",
            "Pflegekassen Zugelassen",
            "ISO Zertifiziert",
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#986AC6]/20"
            >
              <CheckCircle className="w-4 h-4 text-[#986AC6]" />
              <span className="text-sm text-gray-600 font-medium">{badge}</span>
            </div>
          ))}
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

      {/* Scroll Arrow Indicator */}
      <div className="absolute bottom-20 right-12 transform -translate-x-1/2 animate-bounce text-[#986AC6]">
        <ChevronDown className="w-10 h-10 opacity-70" />
      </div>
    </section>
  );
}
