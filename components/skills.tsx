"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML/CSS", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Back-end & Bases de données",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "MySQL", level: 85 },
      { name: "API REST", level: 80 },
    ],
  },
  {
    title: "Autres Compétences",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 75 },
      { name: "SEO", level: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Mes Compétences</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Une expertise technique solide acquise au fil des années et des projets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-5 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary">{category.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 sm:h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
