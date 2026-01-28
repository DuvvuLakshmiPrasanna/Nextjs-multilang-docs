---
title: Getting Started - Version 3
description: Get started with Documentation v3
---

# Getting Started - Version 3

This guide covers the new features and setup for v3 (Developer Preview).

## Prerequisites

- Node.js 20+
- Modern browser with ES2022 support
- Docker (optional)

## Installation

\`\`\`bash
npm install --legacy-peer-deps
npm run dev
\`\`\`

## Exploring v3 Features

### AI-Powered Search

Try asking natural language questions:

\`\`\`
"How do I configure dark mode?"
"Show me examples of ISR"
"What's new in v3?"
\`\`\`

### Real-time Collaboration

Enable collaborative editing:

\`\`\`javascript
const collab = {
  enabled: true,
  realtime: true,
  users: 'unlimited'
};
\`\`\`

### Analytics Dashboard

Access usage analytics:

\`\`\`bash
http://localhost:3000/analytics
\`\`\`

## Configuration

### v3 Environment Variables

\`\`\`
NEXT_PUBLIC_AI_ENABLED=true
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_COLLAB_ENABLED=true
NEXT_PUBLIC_v3_FEATURES=all
\`\`\`

## Development

Start development mode:

\`\`\`bash
npm run dev
\`\`\`

Hot reload is enabled for all v3 features.

## Deployment

Deploy v3 with Docker:

\`\`\`bash
docker-compose up --build
\`\`\`

## Known Issues

- AI features require API keys
- Real-time sync may have latency
- Analytics still in beta

## Next Steps

- Explore [v3 Features](./features)
- Check [v3 FAQ](./faq)
- Report issues on GitHub
