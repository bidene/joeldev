import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { WhyTrustMe } from "@/components/why-trust-me"
import { TechStack } from "@/components/tech-stack"
import { Services } from "@/components/services"
import { Certifications } from "@/components/certifications"
import { Projects } from "@/components/projects"
import { BlogPreview } from "@/components/blog-preview"
import { Testimonials } from "@/components/testimonials"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { FAQ } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <WhyTrustMe />
      <TechStack />
      <Services />
      <Certifications />
      <Projects />
      <BlogPreview />
      <Testimonials />
      <AvailabilityCalendar />
      <FAQ />
      <CtaSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
