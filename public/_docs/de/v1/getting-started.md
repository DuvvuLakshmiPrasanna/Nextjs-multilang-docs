---
title: Erste Schritte
description: Erste Schritte mit dem Dokumentationsportal
---

# Erste Schritte

Dieser Leitfaden hilft Ihnen, in wenigen Minuten mit unserem Dokumentationsportal zu beginnen.

## Installation

Klonen Sie zunächst das Repository und installieren Sie die Abhängigkeiten:

\`\`\`bash
git clone https://github.com/example/docs-portal
cd docs-portal
npm install
\`\`\`

## Lokal Ausführen

Starten Sie den Entwicklungsserver:

\`\`\`bash
npm run dev
\`\`\`

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um das Ergebnis zu sehen.

## Projektstruktur

Das Projekt ist wie folgt organisiert:

\`\`\`
src/
├── app/              # Next.js App Router
├── components/       # Wiederverwendbare React-Komponenten
├── lib/             # Hilfsfunktionen
└── styles/          # Globale Stile
public/
├── _docs/          # Dokumentationsinhalte (Markdown)
└── locales/        # Übersetzungsdateien
\`\`\`

## Konfiguration

### Umgebungsvariablen

Erstellen Sie eine `.env.local` Datei:

\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### Neue Seite Hinzufügen

1. Erstellen Sie eine neue Markdown-Datei in `public/_docs/[sprache]/[version]/`
2. Fügen Sie Frontmatter-Metadaten hinzu:

\`\`\`yaml
---
title: Seitentitel
description: Seitenbeschreibung
---
\`\`\`

3. Schreiben Sie Ihren Inhalt in Markdown
4. Die Seite ist automatisch unter `/[locale]/docs/[version]/[slug]` verfügbar

## Für die Produktion Erstellen

\`\`\`bash
npm run build
npm start
\`\`\`

## Docker-Bereitstellung

Mit Docker erstellen und ausführen:

\`\`\`bash
docker-compose up --build
\`\`\`

Besuchen Sie [http://localhost:3000](http://localhost:3000)

## Anpassung

### Designfarben

Bearbeiten Sie `tailwind.config.ts`, um die Farben anzupassen:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1F2937',
    },
  },
}
\`\`\`

### Übersetzungen Hinzufügen

Fügen Sie Übersetzungsdateien in `public/locales/[language]/` hinzu:

\`\`\`json
{
  "schlüssel": "wert"
}
\`\`\`

## Fehlerbehebung

### Port 3000 wird bereits verwendet

Verwenden Sie einen anderen Port:

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Build schlägt fehl

Löschen Sie den Build-Cache:

\`\`\`bash
rm -rf .next
npm run build
\`\`\`

## Nächste Schritte

- Erkunden Sie [die Funktionen](./features)
- Lesen Sie die [FAQ](./faq)
- Überprüfen Sie die [API-Referenz](/api-reference)
