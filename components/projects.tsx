import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
    {
      title: "Le Rocher Imprimerie",
      description: "Le Rocher Imprimerie est un site vitrine statique développé en HTML, CSS et JavaScript, hébergé sur GitHub Pages. Il présente les services de l'entreprise d'imprimerie de manière claire et professionnelle, avec une navigation fluide, un design responsive et un portfolio mettant en avant ses réalisations.",
      image: "/le-rocher-imprimerie.png", // remplacer par le screenshot réel du site
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://bidene.github.io/le-rocher-imprimerie/",
      github: "#", // si pas de repo public
    },

  {
    title: "Coach Grédis ",
    description: "Coach Grédis est un site vitrine statique développé en HTML, CSS et JavaScript, hébergé sur GitHub Pages. Il présente les services de coaching sportif professionnel, les programmes d’entraînement, la nutrition, une galerie de réalisations, les témoignages clients et un formulaire de contact pour une expérience utilisateur fluide et accessible.",
    image: "/Fitness.jpg", // remplacer par ton screenshot réel
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://bidene.github.io/Coach-Gr-dis/",
    github: "#", // si le code n'est pas public
  },

  {
    title: "AFG Assurance ",
    description: "AFG Assurance est un site vitrine statique développé en HTML, CSS et JavaScript, hébergé sur GitHub Pages. Il présente de manière claire et professionnelle les services d’assurance automobile, moto et assistance, avec des sections dédiées aux services, à l’entreprise et au contact pour faciliter la prise de devis et l’interaction avec les clients.",
    image: "/AFG-ASSURANCE.jpg", // remplacer par ton screenshot réel
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://bidene.github.io/AFG-ASSURANCE/",
    github: "#", // si le code n'est pas public
  },

  {
    title: "API REST Backend",
    description: "API backend robuste avec authentification JWT et documentation complète.",
    image: "/api-documentation-interface.jpg",
    tags: ["Node.js", "MySQL", "REST API"],
    link: "#",
    github: "#",
  },
  {
    title: "Application Mobile Responsive",
    description: "Application web mobile-first avec PWA pour une expérience native.",
    image: "/mobile-app-interface.png",
    tags: ["React", "Responsive"],
    link: "#",
    github: "#",
  },
    {
      title: "Well Steven - Site Vitrine pour cabinet d’avocat",
      description: "Well Steven est un site vitrine moderne développé avec Next.js et React, offrant un rendu côté serveur (SSR) pour des performances optimales et une indexation SEO efficace. Le site présente les services et l'expertise de l'entreprise de manière claire et professionnelle, avec une navigation fluide et un design responsive adapté à tous les appareils.",
      image: "/wellsteven-website.jpg", // remplacer par ton screenshot réel
      tags: ["Next.js", "React", "SSR", "SEO"],
      link: "https://www.wellsteven.com",
      github: "#", // si pas de repo public
    },

]

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Mes Projets</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 p-3 sm:p-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Voir</span>
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
