"use client";

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Pflegefachkraft Vollzeit',
    experience: '',
    message: '',
    _hp: '' // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/karriere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const j: { error?: string } = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Unbekannter Fehler");
      }

      setStatus("ok");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "Pflegefachkraft Vollzeit",
        experience: "",
        message: "",
        _hp: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setStatus("err");
        setErrorMsg(err.message);
      } else {
        setStatus("err");
        setErrorMsg("Senden fehlgeschlagen");
      }
    }
  };

  const disabled = status === "loading";

  return (
    <section id="bewerbung" className="relative py-24 bg-gradient-to-br from-[#F9F7FC] via-white to-[#F3ECFA] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Bewerbung</span>
          </div>
          <div className="flex1">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Jetzt{" "}
              <span className="bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
                bewerben
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Starten Sie Ihre Karriere bei Magda Ambulante Pflege und werden Sie Teil unseres Teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Kontaktieren Sie uns</h3>
              <div className="space-y-6">
                <a href="tel:+4921919425393" className="group flex items-start gap-4 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Telefon</p>
                    <p className="font-bold text-gray-900 text-lg">02191 / 942-5393</p>
                  </div>
                </a>

                <a href="mailto:info@ambulanter-pflegedienst-magda.de" className="group flex items-start gap-4 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-600 mb-1">E-Mail</p>
                    <p className="font-bold text-gray-900 text-lg break-all">info@ambulanter-pflegedienst-magda.de</p>
                  </div>
                </a>

                <div className="group flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Adresse</p>
                    <p className="font-bold text-gray-900">Freiheitstraße 21<br />42853 Remscheid</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bürozeiten</p>
                    <p className="font-bold text-gray-900">Mo-Fr: 8:00 - 16:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-10 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Bewerbungsprozess</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#986AC6] to-[#B084D6] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0">1</div>
                  <span className="text-gray-700 font-medium pt-1">Online-Bewerbung oder Anruf</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#986AC6] to-[#B084D6] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0">2</div>
                  <span className="text-gray-700 font-medium pt-1">Persönliches Gespräch</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#986AC6] to-[#B084D6] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md flex-shrink-0">3</div>
                  <span className="text-gray-700 font-medium pt-1">Schnellstmöglicher Einstieg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 p-10 rounded-3xl shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Online-Bewerbung</h3>

              {/* honeypot */}
              <input
                type="text"
                name="_hp"
                value={formData._hp}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={disabled}
                    className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={disabled}
                    className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                    placeholder="max@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={disabled}
                    className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                    placeholder="+49 30 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewünschte Position
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    disabled={disabled}
                    className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="Pflegefachkraft Vollzeit">Pflegefachkraft Vollzeit</option>
                    <option value="Pflegefachkraft Teilzeit">Pflegefachkraft Teilzeit</option>
                    <option value="Pflegehelfer LG1-LG2">Pflegehelfer LG1-LG2</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Berufserfahrung (in Jahren)
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  disabled={disabled}
                  className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                  placeholder="z.B. 3"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Persönliche Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  disabled={disabled}
                  className="w-full px-4 py-3 border border-[#986AC6]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#986AC6] focus:border-[#986AC6] transition-all duration-300 disabled:opacity-50"
                  placeholder="Erzählen Sie uns etwas über sich und Ihre Motivation..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={disabled}
                className="group relative w-full bg-[#986AC6] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[#986AC6]/25 transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8357B8] to-[#986AC6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  <span>{status === "loading" ? "Wird gesendet..." : "Bewerbung absenden"}</span>
                </div>
              </button>

              {status === "ok" && (
                <div className="flex items-center gap-3 bg-[#986AC6]/10 text-[#986AC6] px-6 py-4 rounded-2xl border border-[#986AC6]/20">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="font-medium">
                    Vielen Dank für Ihre Bewerbung! Wir melden uns zeitnah bei Ihnen.
                  </p>
                </div>
              )}
              {status === "err" && (
                <div className="flex items-center gap-3 bg-red-50 text-red-700 px-6 py-4 rounded-2xl border border-red-200">
                  <p className="font-medium">Senden fehlgeschlagen: {errorMsg}</p>
                </div>
              )}

              <p className="text-sm text-gray-600 text-center leading-relaxed">
                * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur für die Bewerbung verwendet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
