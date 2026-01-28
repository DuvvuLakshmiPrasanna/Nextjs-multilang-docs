import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TableOfContents from '@/components/TableOfContents';
import CodeBlock from '@/components/CodeBlock';
import FeedbackWidget from '@/components/FeedbackWidget';
import VersionSelector from '@/components/VersionSelector';
import { getDocBySlug, getAllDocSlugs, getDocNavigation, extractHeadings, getVersions } from '@/lib/docs';
import { LOCALES } from '@/lib/utils';

interface DocPageParams {
  locale: string;
  version: string;
  slug?: string[];
}

export async function generateStaticParams() {
  const params: DocPageParams[] = [];

  for (const locale of LOCALES) {
    const versions = await getVersions();
    for (const version of versions) {
      const slugs = await getAllDocSlugs(locale, version);
      for (const slug of slugs) {
        params.push({
          locale,
          version,
          slug: [slug],
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: DocPageParams;
}): Promise<Metadata> {
  const { locale, version, slug: slugParam } = params;
  const slug = Array.isArray(slugParam) ? slugParam?.[0] : slugParam || 'introduction';
  
  const doc = await getDocBySlug(locale, version, slug);

  if (!doc) {
    return { title: 'Not Found' };
  }

  return {
    title: `${doc.title} | Documentation`,
    description: doc.frontmatter.description || `Documentation: ${doc.title}`,
  };
}

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function DocPage({ params }: { params: DocPageParams }) {
  const { locale, version, slug: slugParam } = params;
  const slug = Array.isArray(slugParam) ? slugParam?.[0] : slugParam || 'introduction';

  const doc = await getDocBySlug(locale, version, slug);

  if (!doc) {
    notFound();
  }

  const navigation = await getDocNavigation(locale, version);
  const headings = await extractHeadings(doc.content);
  const versions = await getVersions();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar navigation={navigation} />

        {/* Main Content */}
        <main className="flex-1 w-full overflow-hidden">
          <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 gap-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {doc.title}
                </h1>
                {doc.frontmatter.description && (
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    {doc.frontmatter.description}
                  </p>
                )}
              </div>
              <VersionSelector versions={versions} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
              {/* Main Content */}
              <div
                data-testid="doc-content"
                className="lg:col-span-3 prose dark:prose-invert max-w-none"
              >
                <DocContent content={doc.content} headings={headings} />
              </div>

              {/* Table of Contents */}
              <aside className="lg:col-span-1">
                <TableOfContents headings={headings} />
              </aside>
            </div>

            {/* Feedback Widget */}
            <FeedbackWidget />
          </article>
        </main>
      </div>
    </div>
  );
}

interface DocContentProps {
  content: string;
  headings: Array<{ level: number; text: string; slug: string }>;
}

function DocContent({ content, headings }: DocContentProps) {
  // Process content with proper heading IDs
  let processedContent = content;
  
  // Add IDs to headings
  headings.forEach((heading) => {
    const pattern = new RegExp(`^(#{1,6}) ${heading.text}$`, 'm');
    processedContent = processedContent.replace(
      pattern,
      `$1 ${heading.text}\n{#${heading.slug}}`
    );
  });

  // Simple markdown to HTML conversion with support for code blocks
  const parts = processedContent.split(/```/);
  
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          // Regular markdown content
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{
                __html: part
                  .replace(/^# (.*?)$/gm, (_, text) => `<h1 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h1>`)
                  .replace(/^## (.*?)$/gm, (_, text) => `<h2 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h2>`)
                  .replace(/^### (.*?)$/gm, (_, text) => `<h3 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h3>`)
                  .replace(/^#### (.*?)$/gm, (_, text) => `<h4 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h4>`)
                  .replace(/^##### (.*?)$/gm, (_, text) => `<h5 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h5>`)
                  .replace(/^###### (.*?)$/gm, (_, text) => `<h6 id="${text.toLowerCase().replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-')}">${text}</h6>`)
                  .replace(/^\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^- (.*?)$/gm, '<li>$1</li>')
                  .replace(/(<li>.*?<\/li>)/s, '<ul>$1</ul>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(.*?)$/gm, (match) => {
                    if (match.match(/^<[/]?(h[1-6]|p|ul|li|ol|blockquote)/)) return match;
                    if (match.trim() === '') return '';
                    return `<p>${match}</p>`;
                  }),
              }}
            />
          );
        } else {
          // Code block
          const [languageLine, ...codeLines] = part.trim().split('\n');
          const language = languageLine || 'text';
          const code = codeLines.join('\n');
          
          return (
            <CodeBlock
              key={index}
              code={code}
              language={language.toLowerCase()}
            />
          );
        }
      })}
    </>
  );
}
