"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const stats = [
  { label: "Années d'expérience", value: 4, suffix: "+" },
  { label: "Projets réalisés", value: 70, suffix: "+" },
  { label: "Clients satisfaits", value: 90, suffix: "+" },
  { label: "Technologies maîtrisées", value: 100, suffix: "+" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
