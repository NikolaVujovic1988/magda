import Link from "next/link";
import Image from "next/image";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center w-fit">
            <Image
              src="/Magda-violet-transparent.png"
              alt="Magda Ambulante Pflege Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700">
                Magda Ambulante Pflege GmbH<br />
                Freiheitstraße 21<br />
                42853 Remscheid
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vertreten durch</h2>
              <p className="text-gray-700">
                Geschäftsführerin: Magdalena Nesic
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Telefon: 02191 / 942-5393<br />
                Mobil: 0155 / 610-24244<br />
                E-Mail: info@ambulanter-pflegedienst-magda.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h2>
              <p className="text-gray-700">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Wuppertal<br />
                Registernummer: HRB 34527<br />
                IK-Nummer: 462521732
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE368450152
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Zuständige Aufsichtsbehörde</h2>
              <p className="text-gray-700">
                Gesundheitsamt Remscheid<br />
                Hastener Str. 15<br />
                42855 Remscheid
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-gray-700">
                Berufsbezeichnung: Ambulanter Pflegedienst<br />
                Zuständige Kammer: IHK Wuppertal-Solingen-Remscheid<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
              <p className="text-gray-700">
                Name und Sitz des Versicherers:<br />
                Continentale Versicherung<br />
                Ruhrallee 92<br />
                44139 Dortmund
              </p>
              <p className="text-gray-700 mt-2">
                Geltungsraum der Versicherung: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bildnachweise</h2>
              <p className="text-gray-700">
                Die auf dieser Website verwendeten Bilder stammen von folgenden Quellen:<br /><br />
                <strong>Hero-Bild (Startseite):</strong><br />
                Foto von <a href="https://www.pexels.com/@yaroslav-shuraev/" target="_blank" rel="noopener noreferrer" className="text-[#B797D7] hover:underline">Yaroslav Shuraev</a> auf <a href="https://www.pexels.com/photo/adult-woman-checking-the-man-s-blood-pressure-8088863/" target="_blank" rel="noopener noreferrer" className="text-[#B797D7] hover:underline">Pexels</a><br />
                Titel: "Adult Woman Checking the Man's Blood Pressure"<br />
                Foto-ID: 8088863<br />
                Lizenz: <a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer" className="text-[#B797D7] hover:underline">Pexels Lizenz</a> - Kostenlose kommerzielle Nutzung, keine Namensnennung erforderlich
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-gray-700">
                Magdalena Nesic<br />
                Freiheitstraße 21<br />
                42853 Remscheid
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-[#B797D7] hover:text-[#9A7BC0] font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
