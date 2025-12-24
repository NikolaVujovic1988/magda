import { Heart, Users, Clock, Award, Sparkles, HandHeart } from 'lucide-react';

const JobDescription = () => {
    return (
        <section id="stellenausschreibung" className="relative py-24 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
                        <Sparkles className="w-4 h-4 text-[#986AC6]" />
                        <span className="text-sm font-medium text-[#986AC6]">Stellenausschreibung</span>
                    </div>
<div className="flex1">
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
    Offene{" "}
    <span className="bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
      Stellen
    </span>
  </h2>
</div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Für unseren ambulanten Pflegedienst suchen wir qualifizierte und empathische
                        Mitarbeiter, die unsere Patienten in ihrer gewohnten Umgebung betreuen.
                    </p>
                </div>

                {/* Pflegefachkraft */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Pflegefachkraft (m/w/d)
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    Ihre Aufgaben
                                </h4>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Grundpflege und Behandlungspflege bei Patienten zu Hause</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Medikamentengabe und Wundversorgung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Dokumentation der Pflegeleistungen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Beratung von Patienten und Angehörigen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Zusammenarbeit mit Ärzten und Therapeuten</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    Arbeitszeiten
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-[#F9F7FC] to-white p-6 rounded-xl border border-[#986AC6]/20">
                                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Vollzeit</h5>
                                        <p className="text-gray-600">35 Stunden/Woche</p>
                                        <p className="text-gray-600">Flexible Schichtmodelle</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#F9F7FC] to-white p-6 rounded-xl border border-[#986AC6]/20">
                                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Teilzeit</h5>
                                        <p className="text-gray-600">20-30 Stunden/Woche</p>
                                        <p className="text-gray-600">Nach Absprache</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="relative bg-gradient-to-br from-[#986AC6] to-[#8357B8] text-white p-10 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20" />

                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-6 flex items-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        Warum Magda Ambulante Pflege?
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Familiäres Arbeitsklima in einem engagierten Team</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Moderne Ausstattung und digitale Pflegedokumentation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Kontinuierliche Fort- und Weiterbildungen</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Flexible Arbeitszeiten und Work-Life-Balance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Firmenwagen, auch zur privaten Nutzung</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    Unser Team
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Bei Magda Ambulante Pflege arbeiten Sie in einem motivierten Team von
                                    erfahrenen Pflegefachkräften. Wir legen großen Wert auf gegenseitige
                                    Unterstützung und professionelle Entwicklung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center mb-24">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#986AC6]/30 to-transparent w-full max-w-2xl" />
                </div>

                {/* Pflegehelfer LG1-LG2 */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Pflegehelfer LG1-LG2 (m/w/d)
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            mit Zusatzqualifikation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-[#F9F7FC] to-white border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <HandHeart className="w-6 h-6 text-white" />
                                    </div>
                                    Ihre Aufgaben
                                </h4>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Unterstützung bei der Körperpflege und Mobilisation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Hilfe beim An- und Auskleiden sowie bei der Nahrungsaufnahme</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Einfache behandlungspflegerische Maßnahmen (Medikamentengabe, Blutzuckermessung)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">An- und Ausziehen von Kompressionsstrümpfen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Dokumentation der durchgeführten Leistungen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#986AC6] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="leading-relaxed">Hauswirtschaftliche Versorgung und Begleitung</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    Arbeitszeiten
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-[#F9F7FC] to-white p-6 rounded-xl border border-[#986AC6]/20">
                                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Vollzeit</h5>
                                        <p className="text-gray-600">35 Stunden/Woche</p>
                                        <p className="text-gray-600">Flexible Schichtmodelle</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#F9F7FC] to-white p-6 rounded-xl border border-[#986AC6]/20">
                                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Teilzeit</h5>
                                        <p className="text-gray-600">20-30 Stunden/Woche</p>
                                        <p className="text-gray-600">Nach Absprache</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="relative bg-gradient-to-br from-[#986AC6] to-[#8357B8] text-white p-10 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20" />

                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-6 flex items-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        Warum Magda Ambulante Pflege?
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Familiäres Arbeitsklima in einem engagierten Team</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Moderne Ausstattung und digitale Pflegedokumentation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Kontinuierliche Fort- und Weiterbildungen</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Flexible Arbeitszeiten und Work-Life-Balance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-white/70 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="leading-relaxed">Firmenwagen, auch zur privaten Nutzung</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    Unser Team
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Bei Magda Ambulante Pflege arbeiten Sie in einem motivierten Team von
                                    erfahrenen Pflegefachkräften. Wir legen großen Wert auf gegenseitige
                                    Unterstützung und professionelle Entwicklung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDescription;
