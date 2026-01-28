'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  headings: Array<{ level: number; text: string; slug: string }>;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    // Observe all heading elements
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav
      data-testid="table-of-contents"
      className="space-y-2 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto"
    >
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
        On this page
      </h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            style={{ marginLeft: `${(heading.level - 2) * 0.75}rem` }}
          >
            <Link
              href={`#${heading.slug}`}
              data-testid={`toc-link-${heading.slug}`}
              data-active={activeSlug === heading.slug ? 'true' : 'false'}
              className={`block py-1 px-2 rounded transition-colors ${
                activeSlug === heading.slug
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
