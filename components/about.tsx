import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">À propos de moi</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto" />
        </div>

        <Card className="p-6 sm:p-8 md:p-12">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            Moi c'est <span className="text-primary font-semibold">Joël</span>, développeur web Full-Stack, spécialisé dans la conception de sites web et d'applications modernes, performantes et orientées utilisateur.
          </p>

            <p>
              Au cours de mon parcours, j'ai eu l'opportunité de travailler sur plus de{" "}
              <span className="text-primary font-semibold">70 projets variés</span>, allant de sites vitrines à des applications web complexes.
            </p>

            <p>
              Je maîtrise plusieurs technologies front-end et back-end, notamment{" "}
              <span className="text-accent font-semibold">HTML, CSS, JavaScript, React, Next.js et MySQL</span>, avec pour objectif de proposer des solutions web qui allient esthétique, performance et expérience utilisateur optimale.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
