import { Card } from "@/components/ui/card"
import { Code, Smartphone, Database, HardDrive } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description:
      "Création de sites web et applications modernes, responsives et performantes avec les dernières technologies.",
  },
  {
    icon: Smartphone,
    title: "Applications Responsives",
    description:
      "Développement d'applications qui s'adaptent parfaitement à tous les appareils (mobile, tablette, desktop).",
  },
  {
    icon: Database,
    title: "Bases de Données",
    description: "Conception et gestion de bases de données performantes et sécurisées pour vos applications.",
  },
  {
    icon: HardDrive,
    title: "Installation OS",
    description: "Installation de systèmes d'exploitation (Windows, Ubuntu, Kali Linux) et configuration complète.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Mes Services</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Des solutions complètes pour tous vos besoins en développement web et technique
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
