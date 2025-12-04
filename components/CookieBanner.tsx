"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings, Shield, TrendingUp, Megaphone } from "lucide-react";
import { getStoredConsent, setStoredConsent, type CookieConsent } from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }

    // Listen for manual open events
    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);

    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setStoredConsent(consent);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setStoredConsent(consent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    setStoredConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookieConsent) => {
    if (key === "necessary") return; // Can't toggle necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-in fade-in duration-300" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-[#986AC6]/20 overflow-hidden">
          {!showSettings ? (
            // Main Banner View
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-2xl flex items-center justify-center shadow-lg">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Wir schätzen Ihre Privatsphäre!
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Um Ihnen die <span className="font-semibold text-[#986AC6]">bestmögliche Erfahrung</span> zu bieten,
                    verwenden wir Cookies zur Personalisierung von Inhalten und zur Analyse unserer Website-Nutzung.
                    Damit helfen Sie uns, unsere Dienstleistungen für Sie zu <span className="font-semibold text-[#986AC6]">verbessern</span>.
                  </p>
                </div>
              </div>

              {/* Benefits - Subtle persuasion */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 bg-gradient-to-br from-[#986AC6]/5 to-[#B084D6]/5 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-[#986AC6] flex-shrink-0" />
                  <span className="text-gray-700">Sicher & verschlüsselt</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-[#986AC6] flex-shrink-0" />
                  <span className="text-gray-700">Optimierte Nutzererfahrung</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Megaphone className="w-4 h-4 text-[#986AC6] flex-shrink-0" />
                  <span className="text-gray-700">Relevante Informationen</span>
                </div>
              </div>

              {/* Buttons - Accept All is most prominent */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-[2] bg-gradient-to-r from-[#986AC6] to-[#8357B8] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <span className="relative z-10">Alle akzeptieren</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B084D6] to-[#986AC6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:border-[#986AC6] hover:text-[#986AC6] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  Einstellungen
                </button>

                <button
                  onClick={handleRejectAll}
                  className="flex-1 text-gray-500 px-6 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  Ablehnen
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Mehr erfahren Sie in unserer{" "}
                <a href="/datenschutz" className="text-[#986AC6] hover:underline">
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          ) : (
            // Settings View
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Notwendige Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Erforderlich für grundlegende Funktionen der Website. Können nicht deaktiviert werden.
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-12 h-6 bg-[#986AC6] rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Funktionale Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Ermöglichen erweiterte Funktionen und Personalisierung.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("functional")}
                      className="ml-4 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          preferences.functional
                            ? "bg-[#986AC6] justify-end"
                            : "bg-gray-300 justify-start"
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Analyse-Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className="ml-4 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          preferences.analytics
                            ? "bg-[#986AC6] justify-end"
                            : "bg-gray-300 justify-start"
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Marketing-Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Werden verwendet, um relevante Werbung anzuzeigen.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className="ml-4 flex-shrink-0"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                          preferences.marketing
                            ? "bg-[#986AC6] justify-end"
                            : "bg-gray-300 justify-start"
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-[#986AC6] to-[#8357B8] text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-white border-2 border-[#986AC6] text-[#986AC6] px-6 py-4 rounded-xl font-semibold hover:bg-[#986AC6] hover:text-white transition-all duration-300"
                >
                  Auswahl speichern
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
