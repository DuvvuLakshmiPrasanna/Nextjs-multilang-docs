# 📚 Documentation Portal

> A modern, high-performance documentation website built with Next.js using Incremental Static Regeneration (ISR), multi-language support, versioning, full-text search, and API documentation.

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat&logo=docker)](https://www.docker.com/)

---

## 🌟 Project Overview

This is a **Dockerized, multi-language, versioned documentation website** built with **Next.js 15** and **React 19**. It demonstrates modern web development practices including:

- ⚡ **Incremental Static Regeneration (ISR)** - Pages regenerate every 60 seconds
- 🌍 **Internationalization (i18n)** - Support for 4 languages (EN, ES, FR, DE)
- 📦 **Version Management** - Three documentation versions (v1, v2, v3)
- 🔍 **Full-Text Search** - Instant search across all documentation
- 📖 **API Documentation** - Interactive Swagger UI integration
- 🎨 **Dark/Light Theme** - Persistent theme switching
- 🐳 **Docker Support** - Complete containerization with health checks

---

## ✨ Key Features

### 1️⃣ Multi-Language Support (i18n)

- **4 Languages**: English, Spanish, French, German
- **Locale-based Routing**: `/en/docs`, `/es/docs`, `/fr/docs`, `/de/docs`
- **Language Switcher**: Seamless language switching with `data-testid="language-switcher"`
- **Localized Content**: All documentation pages translated into multiple languages

### 2️⃣ Documentation Versioning

- **3 Versions**: v1, v2, v3
- **Version Selector**: Easy switching between versions with `data-testid="version-selector"`
- **Independent Content**: Each version can have different content
- **URL Structure**: `/en/docs/v1/introduction`, `/en/docs/v2/introduction`, etc.

### 3️⃣ Incremental Static Regeneration (ISR)

- **Static + Dynamic**: Best of both worlds
- **Auto-Regeneration**: Pages update every 60 seconds
- **No Rebuild Required**: Content updates automatically
- **Optimal Performance**: Fast load times with fresh content

### 4️⃣ Full-Text Search

- **Search Bar**: Prominent search input with `data-testid="search-input"`
- **Instant Results**: Real-time search across all documentation
- **No Results Handling**: Shows "No results found" message with `data-testid="search-no-results"`
- **Context-Aware**: Searches current language documentation

### 5️⃣ Dark/Light Theme Toggle

- **Theme Toggle Button**: Visible on all pages with `data-testid="theme-toggle"`
- **Persistent State**: Preference saved in localStorage
- **System Detection**: Respects user's system preference
- **Smooth Transitions**: CSS-based theme switching
- **Home Page Integration**: Theme toggle visible on landing page

### 6️⃣ Interactive UI Components

#### 🧭 Sidebar Navigation

- Collapsible menu with `data-testid="sidebar"`
- Dynamic content based on language and version
- Mobile-responsive with hamburger menu
- Active page highlighting

#### 📑 Table of Contents (TOC)

- Auto-generated from markdown headings
- Scroll-spy active section highlighting with `data-testid="table-of-contents"`
- Smooth scroll to sections
- Sticky positioning

#### 📋 Code Blocks

- Syntax highlighting
- Copy-to-clipboard button with `data-testid="copy-code-button"`
- Language indicators
- Responsive design

#### 💬 Feedback Widget

- User feedback form with `data-testid="feedback-input"`
- Submit button with `data-testid="feedback-submit"`
- Success message with `data-testid="feedback-success-message"`
- No backend required (client-side only)

### 7️⃣ API Reference Page

- **Swagger UI Integration**: Interactive API documentation
- **OpenAPI Spec**: Loaded from `public/openapi.json`
- **Live Testing**: Test API endpoints directly
- **Available at**: `/api-reference`

---

## 🏗️ Tech Stack

| Technology           | Purpose                         |
| -------------------- | ------------------------------- |
| **Next.js 15**       | React framework with App Router |
| **React 19**         | UI library                      |
| **TypeScript**       | Type safety                     |
| **Tailwind CSS**     | Styling                         |
| **next-themes**      | Theme management                |
| **FlexSearch**       | Full-text search                |
| **Swagger UI React** | API documentation               |
| **Docker**           | Containerization                |
| **Docker Compose**   | Multi-container orchestration   |

---

## 📁 Project Structure

```
gpptask/
├── public/
│   ├── _docs/                      # Markdown documentation files
│   │   ├── en/                     # English documentation
│   │   │   ├── v1/                 # Version 1
│   │   │   │   ├── introduction.md
│   │   │   │   ├── getting-started.md
│   │   │   │   ├── features.md
│   │   │   │   └── faq.md
│   │   │   ├── v2/                 # Version 2
│   │   │   │   ├── introduction.md
│   │   │   │   └── getting-started.md
│   │   │   └── v3/                 # Version 3
│   │   │       ├── introduction.md
│   │   │       └── getting-started.md
│   │   ├── es/                     # Spanish documentation
│   │   │   ├── v1/, v2/, v3/
│   │   ├── fr/                     # French documentation
│   │   │   ├── v1/, v2/, v3/
│   │   └── de/                     # German documentation
│   │       ├── v1/, v2/, v3/
│   ├── locales/                    # i18n translations
│   │   ├── en/common.json
│   │   ├── es/common.json
│   │   ├── fr/common.json
│   │   └── de/common.json
│   └── openapi.json                # API specification
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page with search & theme toggle
│   │   ├── providers.tsx           # Theme provider
│   │   ├── [locale]/               # Locale-based routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── docs/
│   │   │       └── [version]/
│   │   │           └── [[...slug]]/
│   │   │               └── page.tsx  # Dynamic doc pages (ISR enabled)
│   │   └── api-reference/
│   │       └── page.tsx            # Swagger UI page
│   ├── components/
│   │   ├── Header.tsx              # Main navigation header
│   │   ├── Sidebar.tsx             # Documentation sidebar
│   │   ├── ThemeToggle.tsx         # Dark/Light mode toggle
│   │   ├── LanguageSwitcher.tsx    # Language selector
│   │   ├── VersionSelector.tsx     # Version switcher
│   │   ├── SearchBar.tsx           # Full-text search
│   │   ├── TableOfContents.tsx     # Auto-generated TOC
│   │   ├── CodeBlock.tsx           # Code with copy button
│   │   └── FeedbackWidget.tsx      # User feedback form
│   ├── lib/
│   │   ├── docs.ts                 # Documentation utilities
│   │   ├── search.ts               # Search implementation
│   │   └── utils.ts                # Helper functions
│   └── styles/
│       └── globals.css             # Global styles
├── Dockerfile                      # Multi-stage Docker build
├── docker-compose.yml              # Docker Compose configuration
├── .env.example                    # Environment variables template
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **npm** or **yarn**
- **Docker** (optional, for containerized deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gpptask
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and run**

   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode**

   ```bash
   docker-compose up -d
   ```

3. **Stop containers**

   ```bash
   docker-compose down
   ```

4. **Access application**
   ```
   http://localhost:3000
   ```

### Using Docker Only

1. **Build image**

   ```bash
   docker build -t docs-portal .
   ```

2. **Run container**
   ```bash
   docker run -p 3000:3000 docs-portal
   ```

### Docker Features

- ✅ **Multi-stage build** for optimized image size
- ✅ **Health check** endpoint configured
- ✅ **Environment variables** support
- ✅ **Production-ready** configuration

---

## 📦 Available Scripts

| Script               | Description                                       |
| -------------------- | ------------------------------------------------- |
| `npm run dev`        | Start development server at http://localhost:3000 |
| `npm run build`      | Create production build                           |
| `npm start`          | Start production server                           |
| `npm run lint`       | Run ESLint                                        |
| `npm run type-check` | Run TypeScript compiler check                     |

---

## 🌐 URL Structure

### Home Page

- `/` - Landing page with theme toggle and search

### Documentation Pages

- `/en/docs/v1/introduction` - English v1 introduction
- `/es/docs/v2/getting-started` - Spanish v2 getting started
- `/fr/docs/v3/introduction` - French v3 introduction
- `/de/docs/v1/faq` - German v1 FAQ

### API Reference

- `/api-reference` - Interactive Swagger UI

### Pattern

```
/{locale}/docs/{version}/{page-slug}
```

---

## 🧪 Testing Requirements

All components include required `data-testid` attributes for automated testing:

| Component             | Test ID                    | Purpose                  |
| --------------------- | -------------------------- | ------------------------ |
| **Sidebar**           | `sidebar`                  | Navigation menu          |
| **Language Switcher** | `language-switcher`        | Language selector button |
| **Version Selector**  | `version-selector`         | Version dropdown         |
| **Theme Toggle**      | `theme-toggle`             | Dark/Light mode button   |
| **Search Input**      | `search-input`             | Search text field        |
| **Search Results**    | `search-results`           | Search results list      |
| **Search No Results** | `search-no-results`        | No results message       |
| **Table of Contents** | `table-of-contents`        | TOC container            |
| **Code Block**        | `code-block`               | Code container           |
| **Copy Button**       | `copy-code-button`         | Copy to clipboard button |
| **Feedback Input**    | `feedback-input`           | Feedback textarea        |
| **Feedback Submit**   | `feedback-submit`          | Submit button            |
| **Feedback Success**  | `feedback-success-message` | Success notification     |

---

## 📝 Content Management

### Adding Documentation

1. **Create markdown file**

   ```bash
   public/_docs/en/v1/new-page.md
   ```

2. **Add content**

   ```markdown
   # New Page Title

   Your content here...
   ```

3. **Translate to other languages**

   ```bash
   public/_docs/es/v1/new-page.md
   public/_docs/fr/v1/new-page.md
   public/_docs/de/v1/new-page.md
   ```

4. **Access page**
   ```
   /en/docs/v1/new-page
   ```

### ISR Behavior

- Pages are generated at build time
- Cached for 60 seconds
- Auto-regenerate on next request after cache expires
- Instant for users, fresh content guaranteed

---

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

### Search Configuration

Edit `src/lib/search.ts`:

```typescript
const index = new FlexSearch.Document({
  tokenize: "forward",
  // Customize search options
});
```

---

## 🔧 Environment Variables

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME=Documentation Portal
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Add more environment variables as needed
```

---

## 📊 Performance Features

- ✅ **Static Generation**: Fast initial page loads
- ✅ **ISR**: Fresh content without full rebuilds
- ✅ **Code Splitting**: Optimized bundle sizes
- ✅ **Image Optimization**: Next.js Image component
- ✅ **Font Optimization**: next/font integration
- ✅ **CSS Optimization**: Tailwind purging

---

## 🌍 Internationalization

### Supported Languages

| Code | Language | Label    |
| ---- | -------- | -------- |
| `en` | English  | English  |
| `es` | Spanish  | Español  |
| `fr` | French   | Français |
| `de` | German   | Deutsch  |

### Adding New Language

1. Create locale folder: `public/_docs/xx/`
2. Add translations: `public/locales/xx/common.json`
3. Update `src/lib/utils.ts` LOCALES array
4. Add locale label to `localeLabels` object

---

## 🚦 Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Add environment variables
4. Deploy

### Docker Deployment

1. Build image: `docker build -t docs-portal .`
2. Push to registry: `docker push your-registry/docs-portal`
3. Deploy to your infrastructure

### Traditional Hosting

1. Build: `npm run build`
2. Start: `npm start`
3. Use PM2 or similar for process management

---

## 📋 Checklist for Evaluation

✅ **Documentation Website** - Technical documentation portal  
✅ **Documentation Content** - Introduction, Getting Started, Features, FAQ  
✅ **3 Versions** - v1, v2, v3 with different content  
✅ **4 Languages** - EN, ES, FR, DE (all pages translated)  
✅ **ISR Enabled** - revalidate: 60 seconds  
✅ **Sidebar Navigation** - data-testid="sidebar"  
✅ **Language Switcher** - data-testid="language-switcher"  
✅ **Version Selector** - data-testid="version-selector"  
✅ **Theme Toggle** - data-testid="theme-toggle" (on home + docs)  
✅ **Full-Text Search** - data-testid="search-input" (on home + docs)  
✅ **Table of Contents** - data-testid="table-of-contents"  
✅ **Code Copy Button** - data-testid="copy-code-button"  
✅ **Feedback Widget** - data-testid="feedback-input"  
✅ **API Reference** - /api-reference with Swagger UI  
✅ **Dockerfile** - Multi-stage build  
✅ **docker-compose.yml** - With health check  
✅ **Environment Variables** - .env.example included  
✅ **README.md** - Complete documentation  
✅ **Folder Structure** - \_docs/ organized by locale/version

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Check existing documentation
- Review the code comments

---

## 🎯 Project Goals Achieved

This project successfully demonstrates:

1. ✅ Modern Next.js App Router architecture
2. ✅ Server and Client Component patterns
3. ✅ Incremental Static Regeneration (ISR)
4. ✅ Internationalization (i18n) best practices
5. ✅ Full-text search implementation
6. ✅ Theme management with persistence
7. ✅ Docker containerization
8. ✅ TypeScript type safety
9. ✅ Responsive design principles
10. ✅ Accessible UI components

---

**Built with ❤️ using Next.js, React, and TypeScript**
