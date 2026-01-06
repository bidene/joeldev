import { Github, Linkedin, Mail, MessageCircle, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{"<JoëlDev />"}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Développeur Full-Stack passionné par la création d'expériences web exceptionnelles.
            </p>
            <a
              href="https://wa.me/22997442048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:gomezjoel277@gmail.com"
                className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all hover:scale-110"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Bidene"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-black text-white rounded-lg transition-all hover:scale-110"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
                <a
                  href="https://linkedin.com/in/joel-amoussou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-110"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

              <a
                href="https://facebook.com/Bidene Bdn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/votre-serveur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all hover:scale-110"
                aria-label="Discord"
                title="Discord"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Joël Dev. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
