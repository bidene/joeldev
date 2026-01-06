"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      color: "bg-blue-500",
      technologies: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Avancé" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
      ],
    },
    {
      category: "Backend",
      color: "bg-green-500",
      technologies: [
        { name: "Node.js", level: "Expert" },
        { name: "API REST", level: "Expert" },
      ],
    },
    {
      category: "Database",
      color: "bg-purple-500",
      technologies: [
        { name: "PostgreSQL", level: "Avancé" },
        { name: "MySQL", level: "Avancé" },
        { name: "SQL", level: "Avancé" },
      ],
    },
    {
      category: "DevOps & Tools",
      color: "bg-orange-500",
      technologies: [
        { name: "Git", level: "Expert" },
        { name: "GitHub", level: "Expert" },
        { name: "Vercel", level: "Expert" },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            Stack Technique
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Technologies Maîtrisées</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un écosystème complet de technologies modernes pour vos projets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 ${category.color} rounded-full`} />
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm">{tech.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
