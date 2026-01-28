---
title: Features
description: Explore the features of the Documentation Portal
---

# Features

Our documentation portal comes packed with modern features designed for an excellent user experience.

## Performance Features

### Incremental Static Regeneration (ISR)

Pages are statically generated at build time and automatically regenerated every 60 seconds, ensuring:

- **Lightning-fast load times** from static content
- **Fresh content** without full rebuilds
- **Optimal SEO** with pre-rendered pages

\`\`\`javascript
// This enables ISR with 60-second revalidation
export const revalidate = 60;
\`\`\`

### Code Splitting

Dynamic imports reduce bundle size:

\`\`\`javascript
const Component = dynamic(() => import('./Component'));
\`\`\`

## User Experience Features

### Dark Mode

Automatic detection of system preferences with manual override:

- \`light\` - Light theme
- \`dark\` - Dark theme
- \`system\` - Follow system preference (default)

Theme preference is saved to localStorage.

### Multi-Language Support

Full internationalization support for:

- 🇬🇧 English
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch

### Full-Text Search

Instant search across all documentation:

- Client-side search (no backend required)
- Real-time results
- Highlighting of matches

### Version Selector

Maintain multiple documentation versions:

- v1 - Stable release
- v2 - Latest features
- v3 - Development version

## Content Features

### Table of Contents

Automatically generated table of contents with:

- Smooth scrolling links
- Active section highlighting
- Scroll tracking

### Code Blocks

Professional code display:

- Syntax highlighting
- Language badges
- Copy-to-clipboard button

### Markdown Support

Full markdown support including:

- Headings
- Lists
- Tables
- Code blocks
- Blockquotes
- Links and images

## Developer Features

### Docker Integration

Containerized deployment:

- Multi-stage builds
- Health checks
- Docker Compose orchestration

### Environment Configuration

Easy configuration through environment variables:

\`\`\`
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_DEFAULT_LOCALE
\`\`\`

### API Reference

Interactive API documentation using Swagger UI:

- Built from OpenAPI specs
- Interactive endpoint testing
- Request/response examples

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels
- High contrast in both themes
- Screen reader friendly

## Mobile Features

- Responsive design
- Touch-friendly navigation
- Mobile-optimized sidebar
- Collapsible menu

## SEO Features

- Pre-rendered pages
- Meta tags support
- Sitemap ready
- Clean URLs
- Semantic HTML

## Security

- No hardcoded secrets in code
- Environment variable configuration
- Docker image security
- Content Security Policy ready

---

All these features work together to provide a world-class documentation experience!
