"use client";

import { FeedbackDialog } from "@/components/ui/feedback-dialog";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 right-0 p-4 z-50 flex items-center justify-end gap-8">
      <div className="flex-none mr-2">
        <FeedbackDialog />
      </div>
      <div className="flex-none mr-3">
        <ThemeToggle />
      </div>
    </header>
  );
}