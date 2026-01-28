---
title: Primeros Pasos
description: Comience con el Portal de Documentación
---

# Primeros Pasos

Esta guía le ayudará a comenzar con nuestro portal de documentación en solo unos minutos.

## Instalación

Primero, clone el repositorio e instale las dependencias:

\`\`\`bash
git clone https://github.com/example/docs-portal
cd docs-portal
npm install
\`\`\`

## Ejecutar Localmente

Inicie el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) en su navegador para ver el resultado.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

\`\`\`
src/
├── app/              # Next.js App Router
├── components/       # Componentes React reutilizables
├── lib/             # Funciones de utilidad
└── styles/          # Estilos globales
public/
├── _docs/          # Contenido de documentación (markdown)
└── locales/        # Archivos de traducción
\`\`\`

## Configuración

### Variables de Entorno

Cree un archivo `.env.local`:

\`\`\`
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

### Agregar una Nueva Página

1. Cree un nuevo archivo markdown en `public/_docs/[idioma]/[versión]/`
2. Agregue metadatos de frontmatter:

\`\`\`yaml
---
title: Título de la Página
description: Descripción de la página
---
\`\`\`

3. Escriba su contenido en markdown
4. La página estará disponible automáticamente en `/[locale]/docs/[version]/[slug]`

## Construir para Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## Implementación de Docker

Construya y ejecute con Docker:

\`\`\`bash
docker-compose up --build
\`\`\`

Visite [http://localhost:3000](http://localhost:3000)

## Personalización

### Colores de Tema

Edite `tailwind.config.ts` para personalizar los colores:

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

### Agregar Traducciones

Agregue archivos de traducción en `public/locales/[language]/`:

\`\`\`json
{
  "clave": "valor"
}
\`\`\`

## Solución de Problemas

### El puerto 3000 ya está en uso

Use un puerto diferente:

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### La compilación falla

Borre el caché de compilación:

\`\`\`bash
rm -rf .next
npm run build
\`\`\`

## Próximos Pasos

- Explore [las características](./features)
- Lea el [FAQ](./faq)
- Verifique la [Referencia de API](/api-reference)
