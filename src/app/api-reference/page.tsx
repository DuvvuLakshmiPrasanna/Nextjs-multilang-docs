'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(
  async () => {
    const mod = await import('swagger-ui-react');
    return mod.default;
  },
  {
    ssr: false,
    loading: () => <div className="p-8 text-center">Loading API documentation...</div>,
  }
);

import 'swagger-ui-react/swagger-ui.css';

export default function ApiReferencePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            API Reference
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Interactive API documentation with Swagger UI
          </p>
        </div>

        {isClient && (
          <div className="swagger-ui-wrapper">
            <SwaggerUI
              url="/openapi.json"
              deepLinking={true}
            />
          </div>
        )}
      </div>

      <style jsx global>{`
        .swagger-ui-wrapper .swagger-ui {
          background: transparent;
          color: inherit;
        }

        .swagger-ui-wrapper .topbar {
          background-color: transparent;
          border-bottom: 1px solid #e5e7eb;
        }

        .dark .swagger-ui-wrapper .topbar {
          border-bottom-color: #374151;
        }

        .swagger-ui-wrapper .swagger-ui .btn {
          border-color: currentColor;
          color: currentColor;
        }

        .swagger-ui-wrapper .swagger-ui .btn:hover {
          background-color: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .swagger-ui-wrapper textarea,
        .swagger-ui-wrapper input,
        .swagger-ui-wrapper select {
          background-color: white;
          color: #111827;
          border-color: #d1d5db;
        }

        .dark .swagger-ui-wrapper textarea,
        .dark .swagger-ui-wrapper input,
        .dark .swagger-ui-wrapper select {
          background-color: #1f2937;
          color: #f3f4f6;
          border-color: #374151;
        }

        .swagger-ui-wrapper .scheme-container {
          background-color: transparent;
          border: none;
        }

        .swagger-ui-wrapper .info .title {
          color: inherit;
        }
      `}</style>
    </div>
  );
}
