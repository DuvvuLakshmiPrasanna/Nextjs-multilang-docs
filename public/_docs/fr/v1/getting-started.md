---
title: Commencer
description: Commencez avec le portail de documentation
---

# Commencer

Ce guide vous aidera à commencer avec notre portail de documentation en quelques minutes seulement.

## Installation

Tout d'abord, clonez le référentiel et installez les dépendances:

\`\`\`bash
git clone https://github.com/example/docs-portal
cd docs-portal
npm install
\`\`\`

## Exécuter Localement

Démarrez le serveur de développement:

\`\`\`bash
npm run dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Structure du Projet

Le projet est organisé comme suit:

\`\`\`
src/
├── app/              # Routeur Next.js App
├── components/       # Composants React réutilisables
├── lib/             # Fonctions utilitaires
└── styles/          # Styles globaux
public/
├── _docs/          # Contenu de documentation (markdown)
└── locales/        # Fichiers de traduction
\`\`\`

## Configuration

### Variables d'Environnement

Créez un fichier `.env.local`:

\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### Ajouter une Nouvelle Page

1. Créez un nouveau fichier markdown dans `public/_docs/[langue]/[version]/`
2. Ajoutez les métadonnées frontmatter:

\`\`\`yaml
---
title: Titre de la Page
description: Description de la page
---
\`\`\`

3. Écrivez votre contenu en markdown
4. La page sera automatiquement disponible à `/[locale]/docs/[version]/[slug]`

## Construire pour la Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Déploiement Docker

Construire et exécuter avec Docker:

\`\`\`bash
docker-compose up --build
\`\`\`

Visitez [http://localhost:3000](http://localhost:3000)

## Personnalisation

### Couleurs du Thème

Modifiez `tailwind.config.ts` pour personnaliser les couleurs:

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

### Ajouter des Traductions

Ajoutez des fichiers de traduction dans `public/locales/[language]/`:

\`\`\`json
{
  "clé": "valeur"
}
\`\`\`

## Dépannage

### Le port 3000 est déjà utilisé

Utilisez un port différent:

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### La construction échoue

Effacez le cache de construction:

\`\`\`bash
rm -rf .next
npm run build
\`\`\`

## Prochaines Étapes

- Explorez [les fonctionnalités](./features)
- Lisez la [FAQ](./faq)
- Consultez la [Référence API](/api-reference)
