'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

interface VersionSelectorProps {
  versions: string[];
}

export default function VersionSelector({ versions }: VersionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const currentVersion = (params.version as string) || 'v1';
  const currentLocale = (params.locale as string) || 'en';

  const changeVersion = (newVersion: string) => {
    const pathParts = pathname.split('/').filter(Boolean);
    // Replace version in path
    const newPath = pathParts.map((part) =>
      versions.includes(part) ? newVersion : part
    );
    return '/' + newPath.join('/');
  };

  return (
    <div className="relative">
      <button
        data-testid="version-selector"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-theme border border-gray-300 dark:border-gray-600 text-sm font-medium flex items-center gap-2"
        aria-label="Select version"
      >
        {currentVersion}
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700 min-w-[120px]">
          {versions.map((version) => (
            <Link
              key={version}
              href={changeVersion(version)}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                currentVersion === version
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold'
                  : ''
              }`}
              data-testid={`version-option-${version}`}
            >
              {version}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
