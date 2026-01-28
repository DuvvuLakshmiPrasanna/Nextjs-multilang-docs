'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DocFile {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
  title?: string;
}

const docsDirectory = path.join(process.cwd(), 'public', '_docs');

export async function getAllDocSlugs(locale: string, version: string): Promise<string[]> {
  try {
    const versionPath = path.join(docsDirectory, locale, version);
    
    if (!fs.existsSync(versionPath)) {
      return [];
    }

    const files = fs.readdirSync(versionPath);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error(`Error reading docs for ${locale}/${version}:`, error);
    return [];
  }
}

export async function getDocBySlug(
  locale: string,
  version: string,
  slug: string
): Promise<DocFile | null> {
  try {
    const filePath = path.join(docsDirectory, locale, version, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
      title: data.title || slug,
    };
  } catch (error) {
    console.error(`Error reading doc ${slug}:`, error);
    return null;
  }
}

export async function getAllDocs(locale: string, version: string): Promise<DocFile[]> {
  const slugs = await getAllDocSlugs(locale, version);
  const docs = await Promise.all(
    slugs.map(slug => getDocBySlug(locale, version, slug))
  );
  return docs.filter((doc): doc is DocFile => doc !== null);
}

export async function getVersions(): Promise<string[]> {
  try {
    const enPath = path.join(docsDirectory, 'en');
    
    if (!fs.existsSync(enPath)) {
      return [];
    }

    const versions = fs.readdirSync(enPath)
      .filter(file => fs.statSync(path.join(enPath, file)).isDirectory())
      .sort();
    
    return versions;
  } catch (error) {
    console.error('Error getting versions:', error);
    return [];
  }
}

export async function getLanguages(): Promise<string[]> {
  try {
    if (!fs.existsSync(docsDirectory)) {
      return [];
    }

    const languages = fs.readdirSync(docsDirectory)
      .filter(file => fs.statSync(path.join(docsDirectory, file)).isDirectory());
    
    return languages;
  } catch (error) {
    console.error('Error getting languages:', error);
    return [];
  }
}

export async function getDocNavigation(locale: string, version: string): Promise<Array<{ slug: string; title: string }>> {
  const docs = await getAllDocs(locale, version);
  return docs.map(doc => ({
    slug: doc.slug,
    title: doc.title || doc.slug,
  }));
}

export async function extractHeadings(content: string): Promise<Array<{ level: number; text: string; slug: string }>> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; slug: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    headings.push({ level, text, slug });
  }

  return headings;
}
