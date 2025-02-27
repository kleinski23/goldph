"use client"

export function HeroSection() {
  return (
    <div className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <div className="z-10 w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="pointer-events-none bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent dark:from-yellow-200 dark:via-amber-400 dark:to-yellow-300 sm:text-5xl md:text-6xl lg:text-7xl">
          Philippine Gold Reserves
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
          Track the historical changes in Philippine gold reserves from 1980 to 2024. Analyze trends, impacts, and the current state of our national gold holdings. Discover how policy decisions and economic events have shaped our country's precious metal reserves over four decades.
        </p>
      </div>
    </div>
  );
} 