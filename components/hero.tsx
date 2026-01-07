"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

// Icônes pour les compétences
const skills = [
  { name: 'HTML', icon: '/images/html-5.png', color: 'bg-orange-500/20', iconClass: 'w-10 h-10 p-1.5' },
  { name: 'CSS', icon: '/images/css.png', color: 'bg-blue-600/20', iconClass: 'w-10 h-10 p-1.5' },
  { name: 'JavaScript', icon: '/images/javascript.png', color: 'bg-yellow-500/20', iconClass: 'w-10 h-10 p-1.5' },
  { name: 'Node.js', icon: '/images/nodejs.png', color: 'bg-green-500/20', iconClass: 'w-10 h-10 p-1.5' },
  { name: 'MySQL', icon: '/images/mysql.png', color: 'bg-blue-500/20', iconClass: 'w-10 h-10 p-1.5' }
]

export function Hero() {
  const [angle, setAngle] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    window.open("/cv.pdf", "_blank")
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 
                    bg-primary/10 rounded-full blur-3xl animate-float" 
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 
                    bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                          mb-4 sm:mb-6 text-balance leading-tight"
              >
                Hello 👋 !
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
                Je suis Joël, développeur Full-Stack.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 
                         leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Je conçois des sites web modernes et performants, en alliant design, 
                performance et logique métier pour des projets fiables, utiles et durables.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
                <Button 
                  size="lg" 
                  onClick={scrollToContact} 
                  className="group w-full sm:w-auto"
                >
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={downloadCV} 
                  className="w-full sm:w-auto bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger CV
                </Button>
              </div>
            </div>

            {/* Profile Image with Orbiting Icons */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
              <div className="relative group w-full max-w-md h-[24rem]">
                {/* Icônes en orbite */}
                {skills.map((skill, index) => {
                  const baseAngle = (index * Math.PI * 2) / skills.length - Math.PI / 2;
                  const currentAngle = baseAngle + (angle * Math.PI / 180);
                  const radius = 10; // Taille de l'orbite en rem
                  const x = Math.cos(currentAngle) * radius;
                  const y = Math.sin(currentAngle) * radius;
                  
                  return (
                    <div 
                      key={skill.name}
                      className={`absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center 
                                rounded-full ${skill.color} border-2 border-white/20 shadow-lg backdrop-blur-sm
                                transition-all duration-1000 group-hover:scale-110 hover:!scale-125 hover:z-10`}
                      style={{
                        transform: `translate(calc(-50% + ${x}rem), calc(-50% + ${y}rem))`,
                        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 10,
                      }}
                    >
                      <div className={skill.iconClass || 'w-10 h-10 p-1.5'}>
                        <Image 
                          src={skill.icon} 
                          alt={skill.name} 
                          width={40} 
                          height={40} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Photo de profil */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[24rem] aspect-square">
                  <div className="relative group w-full h-full">
                    <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 
                                rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" 
                    />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-gray-100 dark:bg-gray-800">
                      <Image
                        src="/images/smart.jpg"
                        alt="Joël Développeur Full-Stack"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                          objectPosition: 'center center',
                          transform: 'scale(1.05)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - hidden on mobile */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-muted-foreground rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
