import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#986AC6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#986AC6]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Image
                src="/Magda-white-transparent.png"
                alt="Magda Ambulante Pflege Logo"
                width={180}
                height={60}
                className="h-14 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed max-w-md">
                Ihr professioneller und herzlicher Pflegedienst in Remscheid und Umgebung.
                Mit Kompetenz, Empathie und höchsten Qualitätsstandards für Ihre Gesundheit und Ihr Wohlbefinden.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a href="tel:021919425393" className="flex items-center gap-3 text-gray-300 hover:text-[#986AC6] transition-colors group">
                <div className="w-10 h-10 bg-[#986AC6]/20 rounded-lg flex items-center justify-center group-hover:bg-[#986AC6] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Telefon</div>
                  <div className="font-semibold">02191 / 942-5393</div>
                </div>
              </a>

              <a href="mailto:info@ambulanter-pflegedienst-magda.de" className="flex items-center gap-3 text-gray-300 hover:text-[#986AC6] transition-colors group">
                <div className="w-10 h-10 bg-[#986AC6]/20 rounded-lg flex items-center justify-center group-hover:bg-[#986AC6] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">E-Mail</div>
                  <div className="font-semibold text-sm">info@ambulanter-pflegedienst-magda.de</div>
                </div>
              </a>

              <a href="https://maps.google.com/?q=Freiheitstraße+21+42853+Remscheid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#986AC6] transition-colors group">
                <div className="w-10 h-10 bg-[#986AC6]/20 rounded-lg flex items-center justify-center group-hover:bg-[#986AC6] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Adresse</div>
                  <div className="font-semibold">Freiheitstraße 21, 42853 Remscheid</div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Magda-Ambulante-Pflege-61557578319882/" target="_blank" className="w-10 h-10 bg-[#986AC6]/20 hover:bg-[#986AC6] rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pflegedienst_magda?igsh=azEyb2phYzh4MG5w" target="_blank" className="w-10 h-10 bg-[#986AC6]/20 hover:bg-[#986AC6] rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="#leistungen" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#ueber-uns" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="https://karriere-magda.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-300 hover:text-[#986AC6] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#986AC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Magda Ambulante Pflege GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="flex items-center gap-2">
              <span>Remscheid</span>
              <span>•</span>
              <a href="tel:015561024244" className="hover:text-[#986AC6] transition-colors">
                24/7 Erreichbar: 0155 / 610-24244
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
