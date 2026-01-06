"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const fullText = "<JoëlDev />"

  useEffect(() => {
    // Typing animation
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main text */}
              <div className="font-mono text-4xl md:text-6xl font-bold mb-8 relative">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </div>

              {/* Loading bar */}
              <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2 justify-center mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
