import { Shield, Heart, Award, Users, CheckCircle, Sparkles, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Herzlichkeit",
      description: "Wir behandeln jeden Patienten mit Respekt, Würde und aufrichtiger Fürsorge – wie ein Familienmitglied."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professionalität",
      description: "Examiniertes Fachpersonal mit langjähriger Erfahrung und regelmäßigen Fortbildungen."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualität",
      description: "MDK-Note 1,2 und höchste Pflegestandards in allen Bereichen unserer Dienstleistungen."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Individualität",
      description: "Jeder Pflegeplan wird individuell auf die Bedürfnisse und Wünsche unserer Patienten abgestimmt."
    }
  ];

  const certifications = [
    "Von allen Pflegekassen zugelassen",
    "MDK-Prüfung mit Note 1,2 bestanden",
  ];

  return (
    <section id="ueber-uns" className="relative py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Über uns</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Magda Ambulante Pflege –
            <span className="block bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
              Ihr Partner mit Herz
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Seit <span className="font-semibold text-[#986AC6]">Jahren</span> steht Magda Ambulante Pflege
                für professionelle und herzliche Pflege in <span className="font-semibold text-gray-900">Remscheid und Umgebung</span>.
                Als familiengeführtes Unternehmen legen wir besonderen Wert auf persönliche Betreuung und individuelle Pflegekonzepte.
              </p>
              <p>
                Unser erfahrenes Team aus examinierten Pflegefachkräften, Altenpflegern und Pflegehelfern
                steht Ihnen mit <span className="font-semibold text-gray-900">Kompetenz und Herzlichkeit</span> zur Seite.
                Wir verstehen, dass jeder Mensch einzigartig ist und individuelle Bedürfnisse hat.
              </p>
              <p>
                Mit der <span className="font-semibold text-[#986AC6]">MDK-Note 1,2</span> und der Zulassung
                aller Pflegekassen garantieren wir Ihnen höchste Pflegequalität. Ihre Zufriedenheit und
                Ihr Wohlbefinden stehen für uns im Mittelpunkt – Tag für Tag, rund um die Uhr.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="group relative bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 rounded-2xl p-2 md:p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600 font-medium">Jahre Erfahrung</div>
              </div>
              <div className="group relative bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 rounded-2xl p-2 md:p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-600 font-medium">Zufriedene Patienten</div>
              </div>
              <div className="group relative bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 rounded-2xl p-2 md:p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#986AC6] to-[#8357B8] bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600 font-medium">Fachkräfte</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Unsere Werte
            </h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="relative bg-gradient-to-br from-[#986AC6] to-[#8357B8] rounded-3xl p-12 overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Ausgezeichnete Qualität</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Zertifiziert und Zugelassen
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Wir erfüllen höchste Qualitätsstandards und sind offiziell von allen relevanten
                Institutionen geprüft und zugelassen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
