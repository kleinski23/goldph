"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export function Background() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-white dark:bg-neutral-950" />
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={30}
        ease={70}
        color={color}
        refresh={false}
      />
    </div>
  )
} 