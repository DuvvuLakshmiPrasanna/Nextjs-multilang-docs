'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { localeLabels, LOCALES } from '@/lib/utils';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params.locale as string) || 'en';

  const changeLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    return `/${newLocale}${pathWithoutLocale || '/'}`;
  };

  return (
    <div className="relative">
      <button
        data-testid="language-switcher"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-theme flex items-center gap-2"
        aria-label="Switch language"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.47 5.6a.75.75 0 010 1.06L1.97 9.13h16.28a.75.75 0 010 1.5H1.97l2.5 2.47a.75.75 0 11-1.06 1.06L.22 10.53a.75.75 0 010-1.06l3.19-3.19a.75.75 0 011.06 0zm11.06 9.8a.75.75 0 010-1.06l2.5-2.47H1.75a.75.75 0 010-1.5h16.28l-2.5-2.47a.75.75 0 111.06-1.06l3.19 3.19a.75.75 0 010 1.06l-3.19 3.19a.75.75 0 01-1.06 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
          {LOCALES.map((locale) => (
            <Link
              key={locale}
              href={changeLocale(locale)}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                currentLocale === locale
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold'
                  : ''
              }`}
              data-testid={`language-option-${locale}`}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
