'use client';

import { useState } from 'react';

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Was this page helpful?</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          data-testid="feedback-input"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your feedback..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={3}
        />
        <button
          data-testid="feedback-submit"
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
        >
          Submit Feedback
        </button>
        {submitted && (
          <div
            data-testid="feedback-success-message"
            className="px-4 py-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
          >
            ✓ Thank you for your feedback!
          </div>
        )}
      </form>
    </div>
  );
}
