import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function WhyTrustMe() {
  const reasons = [
    {
      title: "Approche Pragmatique",
      description: "Une méthodologie structurée qui garantit la réussite de chaque projet",
    },
    {
      title: "Design & Fonctionnalité",
      description: "Un équilibre parfait entre esthétique moderne et performances optimales",
    },
    {
      title: "Logique Métier",
      description: "Des solutions adaptées aux besoins spécifiques de votre entreprise",
    },
    {
      title: "Engagement Qualité",
      description: "Un code propre, maintenable et évolutif pour vos projets digitaux",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Pourquoi me faire confiance pour votre projet ?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            En tant que développeur Full-Stack passionné, je m'engage à transformer vos idées en solutions digitales
            performantes et esthétiques. Mon approche pragmatique et structurée garantit des projets bien conçus,
            alliant design, fonctionnalité et logique métier pour répondre aux besoins spécifiques de chaque client.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
