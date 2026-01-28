---
title: FAQ
description: Frequently Asked Questions
---

# Frequently Asked Questions

## General Questions

### What is this documentation portal?

This is a modern, high-performance documentation site built with Next.js that showcases best practices in web development. It features Incremental Static Regeneration (ISR), internationalization (i18n), and a responsive design.

### Why is it so fast?

We use several performance optimization techniques:

- **Static Generation**: Pages are pre-rendered at build time
- **ISR**: Content automatically updates without full rebuilds
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Only load what's needed

### What languages are supported?

The documentation is available in:

- English
- Spanish (Español)
- French (Français)
- German (Deutsch)

## Technical Questions

### Can I use this for my own documentation?

Absolutely! The source code is available on GitHub. You can:

1. Clone the repository
2. Customize the branding and colors
3. Add your own documentation content
4. Deploy using Docker

### How do I add new documentation pages?

1. Create a markdown file in `public/_docs/[language]/[version]/`
2. Add frontmatter with title and description
3. Write your content
4. The page will be automatically available

### How do I add new translations?

1. Create translation files in `public/locales/[language]/`
2. Use the LanguageSwitcher component
3. Update the locale configuration

### Can I use a different theme?

Yes! The styling uses Tailwind CSS, so you can:

1. Edit `tailwind.config.ts`
2. Modify color schemes
3. Adjust spacing and sizing
4. Add custom components

## Deployment Questions

### How do I deploy this?

The application is containerized with Docker:

\`\`\`bash
docker-compose up --build
\`\`\`

You can deploy to:

- Docker
- Kubernetes
- Vercel
- Netlify
- AWS, Azure, GCP

### Can I use this on Vercel?

Yes! Vercel natively supports Next.js:

\`\`\`bash
vercel
\`\`\`

### What are the system requirements?

- Node.js 18+
- npm or yarn
- Docker (for containerized deployment)

## Feature Questions

### Can I disable dark mode?

Yes, edit the theme provider in the layout:

\`\`\`javascript
<ThemeProvider attribute="class" defaultTheme="light">
  {children}
</ThemeProvider>
\`\`\`

### Can I add more languages?

Yes:

1. Add language code to `LOCALES` in `src/lib/utils.ts`
2. Create translation files
3. Add documentation in that language
4. Update the language switcher

### How do I integrate with an API?

1. Create API routes in `src/app/api/`
2. Use fetch or axios to make requests
3. Handle loading and error states

### Can I use a database?

Yes! You can integrate with:

- PostgreSQL
- MongoDB
- Supabase
- Firebase
- Prisma ORM

## Search Questions

### How does search work?

The search uses flexsearch, a client-side full-text search library that:

- Indexes all documentation at runtime
- Works without a backend
- Provides instant results
- Uses tokenization for better matching

### Can I use Algolia instead?

Yes! You can replace the search implementation with Algolia:

1. Sign up for Algolia
2. Get your API keys
3. Index your documentation
4. Update the SearchBar component

### Does search work offline?

The current implementation requires JavaScript, but the search is entirely client-side. It doesn't require internet access for indexed content.

## Support Questions

### Where can I get help?

- Check the [Getting Started](./getting-started) guide
- Read the [Features](./features) documentation
- Open an issue on GitHub
- Check the documentation pages

### How do I report a bug?

1. Visit the GitHub repository
2. Open an issue with:
   - Description of the bug
   - Steps to reproduce
   - Expected behavior
   - Screenshots (if applicable)

### Can I contribute?

Yes! The project welcomes contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Version Questions

### What's the difference between v1, v2, and v3?

This documentation demonstrates version management:

- **v1**: Stable release with core features
- **v2**: Enhanced features and improvements
- **v3**: Latest development features

You can view any version using the version selector.

### How do I manage multiple versions?

1. Organize documentation by version in `public/_docs/`
2. Use the VersionSelector component
3. The version is part of the URL: `/docs/[version]/[page]`

---

Can't find your answer? Check out the [Getting Started](./getting-started) guide or open an issue on GitHub!
