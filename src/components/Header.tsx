'use client';

import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-theme">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              📚 Docs Portal
            </h1>
          </div>

          <SearchBar />

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
