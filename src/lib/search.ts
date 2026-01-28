'use server';

import Document from 'flexsearch/dist/module';
import { getAllDocs, getVersions } from './docs';

let searchIndex: Document | null = null;
let searchData: Array<{ id: string; content: string; title: string; version: string; locale: string }> = [];

export async function initializeSearch(locale: string): Promise<Document> {
  const index = new Document({
    tokenize: 'full',
    resolution: 9,
    language: 'english',
    distance: 'cjk',
  });

  const versions = await getVersions();
  searchData = [];

  for (const version of versions) {
    const docs = await getAllDocs(locale, version);
    docs.forEach((doc, idx) => {
      const docId = `${locale}-${version}-${doc.slug}`;
      searchData.push({
        id: docId,
        content: doc.content,
        title: doc.title || doc.slug,
        version,
        locale,
      });

      // Index the document
      index.add(idx, {
        title: doc.title || doc.slug,
        content: doc.content.substring(0, 1000), // Index first 1000 chars
        slug: doc.slug,
      });
    });
  }

  searchIndex = index;
  return index;
}

export async function searchDocs(
  query: string,
  locale: string
): Promise<Array<{ title: string; slug: string; version: string; excerpt: string }>> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  // Initialize search if needed
  if (!searchIndex) {
    await initializeSearch(locale);
  }

  if (!searchIndex) {
    return [];
  }

  try {
    const results = searchIndex.search(query, {
      limit: 10,
      enrich: true,
    });

    const processed: Array<{ title: string; slug: string; version: string; excerpt: string }> = [];
    const seen = new Set<string>();

    results.forEach((result: any) => {
      const docData = searchData.find((d) =>
        d.content.includes(result.title || '') && d.locale === locale
      );

      if (docData && !seen.has(docData.id)) {
        seen.add(docData.id);
        const excerpt = docData.content.substring(0, 150).replace(/\n/g, ' ') + '...';
        processed.push({
          title: docData.title,
          slug: docData.id.split('-')[2],
          version: docData.version,
          excerpt,
        });
      }
    });

    // If flexsearch doesn't find results, try simple string search
    if (processed.length === 0) {
      searchData
        .filter((d) => d.locale === locale)
        .forEach((docData) => {
          if (
            docData.title.toLowerCase().includes(query.toLowerCase()) ||
            docData.content.toLowerCase().includes(query.toLowerCase())
          ) {
            if (!seen.has(docData.id)) {
              seen.add(docData.id);
              const excerpt = docData.content.substring(0, 150).replace(/\n/g, ' ') + '...';
              processed.push({
                title: docData.title,
                slug: docData.id.split('-')[2],
                version: docData.version,
                excerpt,
              });
            }
          }
        });
    }

    return processed.slice(0, 10);
  } catch (error) {
    console.error('Search error:', error);
    // Fallback to simple string search
    return searchData
      .filter((d) => d.locale === locale)
      .filter((d) =>
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.content.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 10)
      .map((d) => ({
        title: d.title,
        slug: d.id.split('-')[2],
        version: d.version,
        excerpt: d.content.substring(0, 150).replace(/\n/g, ' ') + '...',
      }));
  }
}
