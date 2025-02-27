"use client";

export function Footer() {
  return (
    <footer className="w-full mt-16 bg-white dark:bg-neutral-900">
      <div className="w-full py-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-neutral-700 dark:text-neutral-300 text-center">
          Copyright, All rights reserved {new Date().getFullYear()} noobgfx.
        </p>
      </div>
    </footer>
  );
}