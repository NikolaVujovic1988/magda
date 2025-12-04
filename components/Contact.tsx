"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fehler beim Senden der Nachricht");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      primary: "02191 / 942-5393",
      secondary: "Mobil: 0155 / 610-24244",
      href: "tel:021919425393"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-Mail",
      primary: "info@ambulanter-pflegedienst-magda.de",
      secondary: "",
      href: "mailto:info@ambulanter-pflegedienst-magda.de"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      primary: "Freiheitstraße 21",
      secondary: "42853 Remscheid",
      href: "https://maps.google.com/?q=Freiheitstraße+21+42853+Remscheid"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Öffnungszeiten",
      primary: "Mo - Fr: 08:00 - 18:00 Uhr",
      secondary: "24/7 Notfall-Erreichbarkeit",
      href: null
    }
  ];

  return (
    <section id="kontakt" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F9F7FC] to-white" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#986AC6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#986AC6]/20 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-[#986AC6]" />
            <span className="text-sm font-medium text-[#986AC6]">Kontakt</span>
          </div>

         <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
  Nehmen Sie{" "}
  <span className="bg-gradient-to-r from-[#986AC6] to-[#B084D6] bg-clip-text text-transparent">
    Kontakt auf
  </span>
</h2>


          <p className="text-xl text-gray-600 leading-relaxed">
            Wir sind jederzeit für Sie da. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
            oder eine individuelle Pflegeberatung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              So erreichen Sie uns
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#986AC6] to-[#B084D6] rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="text-[#986AC6] hover:text-[#8357B8] transition-colors font-medium block">
                        {info.primary}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{info.primary}</p>
                    )}
                    {info.secondary && (
                      <p className="text-sm text-gray-500 mt-1">{info.secondary}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#986AC6]/10 to-[#B084D6]/10 border border-[#986AC6]/30 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#986AC6] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Notfall-Hotline</h4>
                  <p className="text-gray-600 mb-2">Im Notfall sind wir rund um die Uhr für Sie erreichbar:</p>
                  <a href="tel:015561024244" className="text-2xl font-bold text-[#986AC6] hover:text-[#8357B8] transition-colors">
                    0155 / 610-24244
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm border border-[#986AC6]/20 rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nachricht senden
            </h3>

            {isSubmitted ? (
              <div className="bg-gradient-to-br from-[#986AC6]/10 to-[#B084D6]/10 border border-[#986AC6]/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#986AC6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <p className="text-[#986AC6] font-bold text-xl mb-2">
                  Vielen Dank für Ihre Nachricht!
                </p>
                <p className="text-gray-600">
                  Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#986AC6] focus:border-transparent transition-all bg-white"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#986AC6] focus:border-transparent transition-all bg-white"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#986AC6] focus:border-transparent transition-all bg-white"
                    placeholder="0155 / 610-24244"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#986AC6] focus:border-transparent transition-all resize-none bg-white"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full bg-gradient-to-r from-[#986AC6] to-[#8357B8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isLoading ? "Wird gesendet..." : "Nachricht senden"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Pflichtfelder
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
