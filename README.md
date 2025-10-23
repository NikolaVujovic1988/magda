# Magda Ambulante Pflege - Website

Eine moderne, professionelle Website für den ambulanten Pflegedienst Magda in Ludwigshafen.

## 🚀 Features

- ✅ Modernes, responsives Design mit Tailwind CSS
- ✅ Professionelle Hero-Section mit Call-to-Action
- ✅ Übersichtliche Darstellung aller Pflegeleistungen
- ✅ Über-uns-Sektion mit Unternehmenswerten
- ✅ Kontaktformular mit Validierung
- ✅ Mobile-First Design - optimiert für alle Geräte
- ✅ Impressum, Datenschutz und AGB Seiten
- ✅ SEO-optimiert
- ✅ Schnelle Ladezeiten mit Next.js 16
- ✅ TypeScript für bessere Code-Qualität

## 📦 Technologie-Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** SVG Icons
- **Deployment:** Bereit für Vercel, Netlify oder andere Hosting-Plattformen

## 🏃‍♂️ Installation und Start

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

## 🛠️ Weitere Befehle

- `npm run build` - Production Build erstellen
- `npm run start` - Production Server starten
- `npm run lint` - ESLint ausführen

## 📁 Projektstruktur

```
magda-app/
├── app/
│   ├── page.tsx              # Hauptseite
│   ├── layout.tsx            # Root Layout mit Metadata
│   ├── globals.css           # Globale Styles
│   ├── impressum/
│   │   └── page.tsx          # Impressum Seite
│   ├── datenschutz/
│   │   └── page.tsx          # Datenschutz Seite
│   └── agb/
│       └── page.tsx          # AGB Seite
├── components/
│   ├── Header.tsx            # Navigation Header
│   ├── Hero.tsx              # Hero Section
│   ├── Services.tsx          # Leistungen
│   ├── About.tsx             # Über uns
│   ├── Contact.tsx           # Kontaktformular
│   └── Footer.tsx            # Footer
└── public/                   # Statische Dateien (Bilder, etc.)
```

## 🎨 Anpassungen

### Farben ändern
Die Hauptfarben können in `app/globals.css` angepasst werden:
```css
:root {
  --primary: #2563eb;        /* Hauptfarbe (Blau) */
  --primary-dark: #1e40af;   /* Dunklere Hauptfarbe */
  --accent: #10b981;         /* Akzentfarbe (Grün) */
}
```

### Kontaktdaten ändern
Kontaktdaten können in folgenden Dateien angepasst werden:
- `components/Header.tsx` - Logo und Navigation
- `components/Contact.tsx` - Kontaktinformationen und Formular
- `components/Footer.tsx` - Footer Informationen
- `app/layout.tsx` - SEO Metadata
- `app/impressum/page.tsx` - Firmenangaben
- `app/datenschutz/page.tsx` - Datenschutzinformationen

### Logo hinzufügen
1. Logo-Datei in `public/` Ordner speichern (z.B. `public/logo.png`)
2. In `components/Header.tsx` das Logo-Element ersetzen:
```tsx
<Image src="/logo.png" alt="Magda Logo" width={48} height={48} />
```

### Bilder hinzufügen
1. Bilder in `public/` Ordner speichern
2. Next.js Image-Komponente verwenden:
```tsx
import Image from "next/image";
<Image src="/ihr-bild.jpg" alt="Beschreibung" width={800} height={600} />
```

## 📝 Content-Anpassungen

Alle Texte und Inhalte befinden sich direkt in den Komponenten:
- **Hero-Text:** `components/Hero.tsx`
- **Leistungen:** `components/Services.tsx`
- **Über uns:** `components/About.tsx`
- **Kontakt:** `components/Contact.tsx`

## 🚀 Deployment

### Vercel (empfohlen)
1. Repository auf GitHub pushen
2. Bei [Vercel](https://vercel.com) anmelden
3. Projekt importieren und deployen

### Andere Plattformen
```bash
npm run build
npm run start
```

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- 📱 Mobile Geräte (ab 320px)
- 📱 Tablets (ab 768px)
- 💻 Desktop (ab 1024px)
- 🖥️ Large Screens (ab 1280px)

## ✅ SEO Features

- Meta Tags optimiert
- Semantic HTML
- Schnelle Ladezeiten
- Mobile-First
- Strukturierte Daten bereit

## 🔐 Datenschutz & Rechtliches

- Impressum unter `/impressum`
- Datenschutzerklärung unter `/datenschutz`
- AGB unter `/agb`

**Wichtig:** Bitte passen Sie alle rechtlichen Texte an Ihre tatsächlichen Firmendaten an!

## 📞 Support

Bei Fragen zur Website wenden Sie sich an:
- E-Mail: info@magda-pflege.de
- Telefon: 0621 / 123 456 78

---

Erstellt mit ❤️ für Magda Ambulante Pflege
# magda
