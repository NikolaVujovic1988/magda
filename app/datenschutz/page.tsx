import Link from "next/link";

export default function Datenschutz() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Allgemeine Hinweise</h3>
              <p className="text-gray-700">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
              <p className="text-gray-700 mb-2 font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="text-gray-700">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="text-gray-700 mb-2 font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
              <p className="text-gray-700">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-gray-700 mt-2">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs).
              </p>

              <p className="text-gray-700 mb-2 font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
              <p className="text-gray-700">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <p className="text-gray-700 mb-2 font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hosting</h2>
              <p className="text-gray-700">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Externes Hosting</h3>
              <p className="text-gray-700">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a.
                um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Datenschutz</h3>
              <p className="text-gray-700">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-700">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-gray-700 mt-2">
                Magda Ambulante Pflege GmbH<br />
                Musterstraße 123<br />
                67059 Ludwigshafen am Rhein<br />
                <br />
                Telefon: 0621 / 123 456 78<br />
                E-Mail: info@magda-pflege.de
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Speicherdauer</h3>
              <p className="text-gray-700">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
              <p className="text-gray-700">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-gray-700">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                Anliegens bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-gray-700">
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                <li>Recht auf Berichtigung unrichtiger personenbezogener Daten</li>
                <li>Recht auf Löschung Ihrer gespeicherten Daten</li>
                <li>Recht auf Einschränkung der Datenverarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-gray-700">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung.
              </p>
            </section>
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
