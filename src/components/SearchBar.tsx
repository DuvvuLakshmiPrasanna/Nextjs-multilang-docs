'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { searchDocs } from '@/lib/search';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ title: string; slug: string; version: string; excerpt: string }>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const locale = (params.locale as string) || 'en';

  useEffect(() => {
    if (query.trim().length > 0) {
      // Call searchDocs as a server action
      searchDocs(query, locale).then(searchResults => {
        setResults(searchResults);
      });
    } else {
      setResults([]);
    }
  }, [query, locale]);

  return (
    <div className="relative flex-1 max-w-md">
      <div className="relative">
        <input
          data-testid="search-input"
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div data-testid="search-results" className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((result) => (
                <Link
                  key={`${result.version}-${result.slug}`}
                  href={`/${locale}/docs/${result.version}/${result.slug}`}
                  onClick={() => {
                    setQuery('');
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    {result.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {result.excerpt}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    {result.version}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              data-testid="search-no-results"
              className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
            >
              {`No results found for "${query}"`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
