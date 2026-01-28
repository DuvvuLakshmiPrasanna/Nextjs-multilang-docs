---
title: Getting Started - Version 2
description: Get started with Documentation v2
---

# Getting Started - Version 2

This guide covers the essentials for v2 of our documentation platform.

## Installation

Install v2 with the latest features:

\`\`\`bash
npm install next@latest
npm update
\`\`\`

## Key v2 Features

### 1. Faster Search

The search algorithm in v2 is 2x faster:

\`\`\`javascript
// New search configuration
const searchConfig = {
  indexing: 'optimized',
  caching: true,
  limit: 20
};
\`\`\`

### 2. Better Offline Support

Documentation can now be used offline with service workers.

### 3. Enhanced Mobile Experience

Improvements for mobile devices:

- Touch-friendly navigation
- Mobile-optimized layout
- Faster load times

## Configuration Changes

### New Environment Variables

\`\`\`
NEXT_PUBLIC_SEARCH_LIMIT=20
NEXT_PUBLIC_CACHE_DURATION=3600
NEXT_PUBLIC_OFFLINE_MODE=true
\`\`\`

### Updated Settings

Check `tailwind.config.ts` for new color options:

\`\`\`javascript
colors: {
  primary: '#0066CC',  // Updated blue
  secondary: '#1A1A1A', // Darker secondary
}
\`\`\`

## Upgrading from v1

1. Update dependencies
2. Review configuration changes
3. Test the new features
4. Deploy when ready

## Next Steps

- Explore [v2 Features](./features)
- Read the [v2 FAQ](./faq)
- Check API docs at [/api-reference](/api-reference)
