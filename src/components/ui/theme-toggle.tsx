"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Moon className="absolute inset-0 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute inset-0 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}