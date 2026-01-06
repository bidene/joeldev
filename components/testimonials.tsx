"use client"

import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO, TechStart",
    content:
      "Joël a transformé notre vision en une application web moderne et performante. Son expertise technique et sa capacité d'écoute sont exceptionnelles.",
    rating: 5,
    image: "/professional-woman-diverse.png", // Image existante
  },
  {
    name: "Pierre Martin",
    role: "Directeur Marketing, E-Shop",
    content:
      "Un développeur talentueux qui livre toujours à temps. Notre site e-commerce a vu ses conversions augmenter de 40% grâce à son travail.",
    rating: 5,
    image: "/professional-man.jpg", // Image existante
  },
  {
    name: "Aminata Diallo",
    role: "Fondatrice, DigiHub",
    content:
      "Collaboration exceptionnelle du début à la fin. Joël comprend vraiment les besoins business et les traduit en solutions techniques élégantes.",
    rating: 5,
    image: "/professional-african-woman.png", // Image existante
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Digital, InnovTech",
    content:
      "Un professionnel à l'écoute et réactif. Les solutions proposées sont toujours adaptées à nos besoins et livrées dans les délais. Je recommande vivement !",
    rating: 5,
    image: "/professional-woman-diverse.png", // Utilisation d'une image similaire
  },
  {
    name: "Thomas Moreau",
    role: "CTO, WebSolutions",
    content:
      "Expertise technique remarquable et grande capacité d'adaptation. Joël a su relever des défis complexes avec brio et professionnalisme.",
    rating: 5,
    image: "/professional-man.jpg", // Utilisation de l'image de l'homme professionnel existante
  },
  {
    name: "Camille Leroy",
    role: "Chef de Projet, DigitalAgency",
    content:
      "Une collaboration fluide et efficace. Les livrables étaient toujours conformes aux attentes, avec une attention particulière portée aux détails et aux performances.",
    rating: 5,
    image: "/professional-african-woman.png", // Utilisation de l'image de la femme africaine professionnelle existante
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="embla__slide flex-[0_0_100%] min-w-0 px-2">
    <Card className="p-6 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.content}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback en cas d'erreur de chargement de l'image
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/default-avatar.png';
            }}
          />
        </div>
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  </div>
);

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    inViewThreshold: 0.7
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;
    
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Ce que disent mes clients
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            La satisfaction client est ma priorité. Découvrez les retours de ceux avec qui j'ai travaillé.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 p-2 rounded-full bg-background/80 shadow-md hover:bg-primary/10 transition-colors z-10"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 p-2 rounded-full bg-background/80 shadow-md hover:bg-primary/10 transition-colors z-10"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
