'use client';

import { useState } from 'react';

export default function CodeBlock({ code, language = 'text' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      data-testid="code-block"
      className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden my-4 border border-gray-300 dark:border-gray-700"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
        <span className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase">
          {language}
        </span>
        <button
          data-testid="copy-code-button"
          onClick={handleCopy}
          className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto m-0 rounded-none">
        <code className="font-mono text-sm text-gray-800 dark:text-gray-200">{code}</code>
      </pre>
    </div>
  );
}
