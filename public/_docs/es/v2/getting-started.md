---
title: Primeros Pasos - Versión 2
description: Comience con la Documentación v2
---

# Primeros Pasos - Versión 2

Esta guía cubre lo esencial para v2 de nuestra plataforma de documentación.

## Instalación

Instale v2 con las características más recientes:

\`\`\`bash
npm install next@latest
npm update
\`\`\`

## Características clave de v2

### 1. Búsqueda más rápida

El algoritmo de búsqueda en v2 es 2 veces más rápido:

\`\`\`javascript
// Nueva configuración de búsqueda
const searchConfig = {
  indexing: 'optimized',
  caching: true,
  limit: 20
};
\`\`\`

### 2. Mejor soporte sin conexión

La documentación ahora se puede utilizar sin conexión con trabajadores de servicio.

### 3. Experiencia móvil mejorada

Mejoras para dispositivos móviles:

- Navegación amigable
- Diseño optimizado para móvil
- Tiempos de carga más rápidos

## Cambios de Configuración

### Nuevas Variables de Entorno

\`\`\`
NEXT_PUBLIC_SEARCH_LIMIT=20
NEXT_PUBLIC_CACHE_DURATION=3600
NEXT_PUBLIC_OFFLINE_MODE=true
\`\`\`

## Próximos Pasos

- Explore [Características v2](./features)
- Lea el [FAQ v2](./faq)
- Ver documentos API en [/api-reference](/api-reference)
