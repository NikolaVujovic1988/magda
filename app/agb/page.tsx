import Link from "next/link";

export default function AGB() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center space-x-3 w-fit">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Magda</span>
              <span className="text-sm text-gray-600">Ambulante Pflege</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-gray-700">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Pflegeleistungen, die von der
                Magda Ambulante Pflege GmbH (nachfolgend "Pflegedienst" genannt) erbracht werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
              <p className="text-gray-700">
                Der Pflegevertrag kommt durch die schriftliche Vereinbarung zwischen dem Pflegedienst und
                dem Pflegebedürftigen bzw. dessen gesetzlichem Vertreter zustande. Der Vertrag regelt Art,
                Umfang und Dauer der zu erbringenden Pflegeleistungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 3 Leistungsumfang</h2>
              <p className="text-gray-700 mb-4">
                Der Pflegedienst erbringt folgende Leistungen:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Grundpflegerische Leistungen</li>
                <li>Behandlungspflegerische Leistungen</li>
                <li>Hauswirtschaftliche Versorgung</li>
                <li>Betreuungsleistungen</li>
                <li>Beratungsleistungen</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Die konkreten Leistungen werden im individuellen Pflegevertrag festgelegt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 4 Leistungserbringung</h2>
              <p className="text-gray-700">
                Der Pflegedienst erbringt die vereinbarten Leistungen durch qualifiziertes Fachpersonal.
                Die Leistungen werden zu den vereinbarten Zeiten in der häuslichen Umgebung des
                Pflegebedürftigen erbracht. Terminverschiebungen werden rechtzeitig mitgeteilt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 5 Pflichten des Pflegedienstes</h2>
              <p className="text-gray-700 mb-4">
                Der Pflegedienst verpflichtet sich:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Die vereinbarten Leistungen fachgerecht und zuverlässig zu erbringen</li>
                <li>Nur qualifiziertes Personal einzusetzen</li>
                <li>Die Pflegedokumentation ordnungsgemäß zu führen</li>
                <li>Die Schweigepflicht einzuhalten</li>
                <li>Qualitätsstandards einzuhalten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 6 Pflichten des Pflegebedürftigen</h2>
              <p className="text-gray-700 mb-4">
                Der Pflegebedürftige bzw. dessen gesetzlicher Vertreter verpflichtet sich:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dem Pflegepersonal Zutritt zur Wohnung zu gewähren</li>
                <li>Notwendige Informationen zur Gesundheit mitzuteilen</li>
                <li>Änderungen der persönlichen Verhältnisse unverzüglich mitzuteilen</li>
                <li>Die vereinbarten Entgelte fristgerecht zu zahlen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 7 Vergütung</h2>
              <p className="text-gray-700">
                Die Vergütung richtet sich nach den mit den Pflegekassen vereinbarten Vergütungssätzen bzw.
                nach der individuellen Vereinbarung bei Privatleistungen. Die Abrechnung erfolgt monatlich.
                Bei Kostenübernahme durch die Pflegekasse rechnet der Pflegedienst direkt mit dieser ab.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 8 Verhinderung</h2>
              <p className="text-gray-700">
                Ist der Pflegebedürftige verhindert (z.B. durch Krankenhausaufenthalt), ist dies dem
                Pflegedienst unverzüglich mitzuteilen. Bereits erbrachte Leistungen werden in Rechnung gestellt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 9 Kündigung</h2>
              <p className="text-gray-700">
                Der Pflegevertrag kann von beiden Seiten mit einer Frist von 14 Tagen zum Monatsende
                gekündigt werden. Die Kündigung bedarf der Schriftform. Eine fristlose Kündigung aus
                wichtigem Grund bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 10 Haftung</h2>
              <p className="text-gray-700">
                Der Pflegedienst haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges
                Handeln seiner Mitarbeiter entstehen. Für leichte Fahrlässigkeit wird nur bei Verletzung
                wesentlicher Vertragspflichten gehaftet. Der Pflegedienst ist durch eine
                Berufshaftpflichtversicherung abgesichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 11 Datenschutz</h2>
              <p className="text-gray-700">
                Der Pflegedienst verpflichtet sich, alle datenschutzrechtlichen Bestimmungen einzuhalten.
                Personenbezogene Daten werden nur im Rahmen der Leistungserbringung erhoben, verarbeitet
                und genutzt. Details regelt unsere Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 12 Salvatorische Klausel</h2>
              <p className="text-gray-700">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die
                Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung
                tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am
                nächsten kommt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 13 Anwendbares Recht und Gerichtsstand</h2>
              <p className="text-gray-700">
                Es gilt ausschließlich das Recht der Bundesrepublik Deutschland. Gerichtsstand ist,
                soweit gesetzlich zulässig, der Sitz des Pflegedienstes.
              </p>
            </section>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <p className="text-gray-700">
                <strong>Stand:</strong> Oktober 2025<br />
                <strong>Magda Ambulante Pflege GmbH</strong><br />
                Musterstraße 123, 67059 Ludwigshafen am Rhein
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
