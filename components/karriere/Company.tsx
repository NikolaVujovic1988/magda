import React from 'react';
import { Heart, Users, Award, Sparkles, Star } from 'lucide-react';

const Company = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F9F7FC] via-white to-[#F3ECFA] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-4 h-4 text-[#986AC6]" />
              <span className="text-sm font-medium text-[#986AC6]">Über uns</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Über Magda
              <span className="block bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
                Ambulante Pflege
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Seit über <span className="font-semibold text-[#986AC6]">1 Jahr</span> steht Magda Ambulante Pflege GmbH für qualitativ
                hochwertige und einfühlsame Pflege in <span className="font-semibold text-gray-900">Remscheid und Umgebung</span>. Wir betreuen
                unsere Patienten mit höchster Professionalität und menschlicher Wärme.
              </p>
              <p>
                Unser erfahrenes Team aus examinierten Pflegefachkräften sorgt dafür,
                dass Menschen in ihrer gewohnten Umgebung die Betreuung erhalten,
                die sie benötigen und verdienen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-600 font-medium">Jahre Erfahrung</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">100+</div>
                <div className="text-gray-600 font-medium">Zufriedene Patienten</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-gray-600 font-medium">Pflegekräfte im Team</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Erreichbarkeit</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Unsere Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir ermöglichen Menschen ein würdevolles Leben in den eigenen vier Wänden
                    durch professionelle und liebevolle Betreuung.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Unsere Werte</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Respekt, Empathie und Professionalität prägen unseren Umgang mit
                    Patienten, Angehörigen und im Team.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Qualität</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zertifiziert nach den höchsten Standards und regelmäßig vom
                    Medizinischen Dienst geprüft und empfohlen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
