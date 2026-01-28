'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  navigation: Array<{ slug: string; title: string }>;
}

export default function Sidebar({ navigation }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const currentSlug = (params.slug as string[] | string)?.[0] || '';
  const locale = (params.locale as string) || 'en';
  const version = (params.version as string) || 'v1';

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-4 right-4 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        data-testid="sidebar"
        className={`fixed md:relative top-16 md:top-0 left-0 h-[calc(100vh-4rem)] md:h-full w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-transform transform z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-2">
          {navigation.length > 0 ? (
            navigation.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/docs/${version}/${item.slug}`}
                data-testid={`sidebar-nav-link-${item.slug}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentSlug === item.slug
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {item.title}
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
              No documentation found
            </p>
          )}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
