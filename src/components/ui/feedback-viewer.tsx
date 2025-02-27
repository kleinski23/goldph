"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Feedback {
  id: string;
  feedback: string;
  timestamp: string;
}

export function FeedbackViewer() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeedback = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/feedback');
      if (!response.ok) throw new Error('Failed to fetch feedback');
      const data = await response.json();
      setFeedbacks(data.feedbacks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load feedback');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          onClick={fetchFeedback}
        >
          View Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Feedback History</DialogTitle>
          <DialogDescription>
            View all submitted feedback
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {isLoading && <p className="text-center">Loading feedback...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {!isLoading && !error && feedbacks.length === 0 && (
            <p className="text-center text-neutral-500">No feedback submitted yet</p>
          )}
          {feedbacks.map((item) => (
            <div 
              key={item.id} 
              className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
            >
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {new Date(item.timestamp).toLocaleString()}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100">{item.feedback}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 