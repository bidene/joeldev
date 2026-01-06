"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Quels sont vos délais de livraison typiques ?",
      answer:
        "Les délais varient selon la complexité du projet. Un site vitrine simple peut être livré en 1-2 semaines, tandis qu'une application web complète peut prendre 4-8 semaines. Je fournis toujours un planning détaillé après l'analyse de vos besoins.",
    },
    {
      question: "Proposez-vous un service de maintenance ?",
      answer:
        "Oui, je propose des contrats de maintenance mensuels incluant les mises à jour de sécurité, l'optimisation des performances, et le support technique. Des options personnalisées sont disponibles selon vos besoins.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer:
        "Absolument ! Je travaille avec des clients du monde entier. Je suis flexible sur les fuseaux horaires et je communique efficacement en français et en anglais.",
    },
    {
      question: "Quelles technologies utilisez-vous principalement ?",
      answer:
        "Je me spécialise dans la stack moderne JavaScript/TypeScript avec React, Next.js pour le frontend, et Node.js pour le backend. J'utilise également MySQL et des services cloud comme Vercel et GitHub.",
    },
    {
      question: "Comment se déroule le processus de développement ?",
      answer:
        "Je suis une approche agile : découverte et planification, design et prototypage, développement itératif avec revues régulières, tests et optimisation, déploiement et formation, puis support continu.",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Mes tarifs varient selon la complexité et la durée du projet. Je propose des tarifs horaires ou forfaitaires. Contactez-moi pour un devis personnalisé gratuit. Je m'adapte également aux budgets des startups et petites entreprises.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-muted-foreground leading-relaxed">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
