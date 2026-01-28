'use client';

import Link from 'next/link';
import { LOCALES } from '@/lib/utils';
import ThemeToggle from '@/components/ThemeToggle';
import SearchBar from '@/components/SearchBar';

export default function RootPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with Theme Toggle and Search */}
      <div className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-theme">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                📚 Docs Portal
              </h2>
            </div>

            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            📚 Documentation Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, high-performance documentation site built with Next.js. Features
            Incremental Static Regeneration (ISR), Internationalization (i18n), and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                🚀 Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast pages with ISR, optimized images, and smart caching
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                🌍 Multi-Language
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support for English, Spanish, French, and German with seamless switching
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                🎨 Themes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful dark and light modes with smooth transitions
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                🔍 Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instant full-text search across all documentation
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            {LOCALES.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}/docs/v1/introduction`}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-block"
              >
                {locale.toUpperCase()} →
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">ISR Enabled</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pages auto-regenerate every 60 seconds
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Version Control</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Switch between v1, v2, and v3 docs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Responsive</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perfect on mobile, tablet, and desktop
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">API Docs</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Interactive Swagger UI for API reference
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">TOC Auto-Gen</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Automatic table of contents generation
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Feedback Form</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  User feedback on every page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
