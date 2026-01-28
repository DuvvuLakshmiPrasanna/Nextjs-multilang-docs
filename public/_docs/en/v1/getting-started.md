---
title: Getting Started
description: Get started with the Documentation Portal
---

# Getting Started

This guide will help you get started with our documentation portal in just a few minutes.

## Installation

First, clone the repository and install dependencies:

\`\`\`bash
git clone https://github.com/example/docs-portal
cd docs-portal
npm install
\`\`\`

## Running Locally

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

The project is organized as follows:

\`\`\`
src/
├── app/              # Next.js App Router
├── components/       # Reusable React components
├── lib/             # Utility functions
└── styles/          # Global styles
public/
├── _docs/          # Documentation content (markdown)
└── locales/        # Translation files
\`\`\`

## Configuration

### Environment Variables

Create a `.env.local` file:

\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### Adding a New Page

1. Create a new markdown file in `public/_docs/[language]/[version]/`
2. Add frontmatter metadata:

\`\`\`yaml
---
title: Page Title
description: Page description
---
\`\`\`

3. Write your content in markdown
4. The page will be automatically available at `/[locale]/docs/[version]/[slug]`

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Docker Deployment

Build and run with Docker:

\`\`\`bash
docker-compose up --build
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Theme Colors

Edit `tailwind.config.ts` to customize colors:

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

### Adding Translations

Add translation files in `public/locales/[language]/`:

\`\`\`json
{
  "key": "value"
}
\`\`\`

## Troubleshooting

### Port 3000 already in use

Use a different port:

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Build fails

Clear the build cache:

\`\`\`bash
rm -rf .next
npm run build
\`\`\`

## Next Steps

- Explore [the features](/#features)
- Read the [FAQ](./faq)
- Check out the [API Reference](/api-reference)
