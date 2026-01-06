"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogPreview() {
  const articles = [
    {
      title: "Les meilleures pratiques React en 2024",
      excerpt: "Découvrez les patterns modernes et les techniques d'optimisation pour vos applications React.",
      category: "React",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "/react-code-screen.jpg",
    },
    {
      title: "Guide complet: TypeScript pour débutants",
      excerpt: "Apprenez TypeScript de zéro avec des exemples pratiques et des cas d'usage réels.",
      category: "TypeScript",
      date: "10 Mars 2024",
      readTime: "8 min",
      image: "/typescript-development.jpg",
    },
    {
      title: "Optimisation des performances Next.js",
      excerpt: "Techniques avancées pour améliorer les performances de vos applications Next.js.",
      category: "Next.js",
      date: "5 Mars 2024",
      readTime: "6 min",
      image: "/nextjs-performance.jpg",
    },
  ]

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            Blog & Articles
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Derniers Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Partage de connaissances et d'expériences sur le développement web
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">{article.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="group">
            
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
