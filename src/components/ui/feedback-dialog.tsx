"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) throw new Error('Failed to submit feedback');

      setStatus('success');
      setFeedback('');
      setTimeout(() => {
        setOpen(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="default" 
          className="text-[14px]"
        >
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send us feedback</DialogTitle>
          <DialogDescription>
            Help us improve our data visualization and analysis. Your feedback is valuable to us.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts, suggestions, or report issues..."
            aria-label="Send feedback"
            disabled={isSubmitting}
          />
          <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400 my-auto">
                Feedback submitted successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400 my-auto">
                Failed to submit feedback. Please try again.
              </p>
            )}
            <Button 
              type="submit" 
              disabled={isSubmitting || !feedback.trim()}
            >
              {isSubmitting ? 'Sending...' : 'Send feedback'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 