"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function KarriereHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Magda-violet-transparent.png"
                alt="Magda Ambulante Pflege Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#stellenausschreibung" className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium">
              Stellenausschreibung
            </a>
            <a href="#voraussetzungen" className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium">
              Voraussetzungen
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium">
              Vorteile
            </a>
            <a
              href="#bewerbung"
              className="bg-[#986AC6] text-white px-6 py-2.5 rounded-full hover:bg-[#8357B8] transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Jetzt bewerben
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#986AC6] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#stellenausschreibung"
                className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Stellenausschreibung
              </a>
              <a
                href="#voraussetzungen"
                className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Voraussetzungen
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-[#986AC6] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Vorteile
              </a>
              <a
                href="#bewerbung"
                className="bg-[#986AC6] text-white px-6 py-2.5 rounded-full hover:bg-[#8357B8] transition-all duration-300 font-medium text-center shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Jetzt bewerben
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
