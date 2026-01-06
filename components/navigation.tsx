"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Accueil", id: "hero", color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" },
    { label: "À propos", id: "about", color: "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300" },
    { label: "Services", id: "services", color: "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300" },
    { label: "Projets", id: "projects", color: "text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300" },
    { label: "Blog", id: "blog", color: "text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300" },
    { label: "Contact", id: "contact", color: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            {"<JoëlDev />"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${item.color || 'text-muted-foreground hover:text-foreground hover:bg-accent/10'}
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  md:text-base`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex flex-col gap-3 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all
                    font-medium ${item.color || 'text-foreground'}
                    hover:bg-accent/20 active:bg-accent/30
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
