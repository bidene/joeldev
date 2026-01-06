"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Prêt à démarrer votre projet
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Transformons votre idée en réalité
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à créer une solution web
              performante et sur mesure.
            </p>

            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="group bg-white text-primary hover:bg-white/90"
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
