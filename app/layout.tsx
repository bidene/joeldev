import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { PageLoader } from "@/components/page-loader"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AMOUSSOU Joël Sagbo Côme - Développeur Full-Stack | React, Next.js, Node.js",
  description:
    "Portfolio de AMOUSSOU Joël Sagbo Côme, développeur web Full-Stack avec 4+ ans d'expérience. Spécialisé en React, Next.js, Node.js et MySQL. Création d'applications web modernes et performantes. Disponible pour vos projets.",
  keywords: [
    "développeur full-stack",
    "développeur web",
    "React",
    "Next.js",
    "Node.js",
    "MySQL",
    "TypeScript",
    "développeur freelance",
    "Afrique de l'ouest",
    "Bénin",
    "développement web",
    "applications web",
  ],
  authors: [{ name: "AMOUSSOU Joël Sagbo Côme" }],
  creator: "AMOUSSOU Joël Sagbo Côme",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votre-domaine.com",
    title: "AMOUSSOU Joël Sagbo Côme - Développeur Full-Stack",
    description:
      "Développeur web Full-Stack avec 4+ ans d'expérience. Création d'applications web modernes avec React, Next.js et Node.js.",
    siteName: "Portfolio de Joël AMOUSSOU",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "AMOUSSOU Joël Sagbo Côme - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMOUSSOU Joël Sagbo Côme - Développeur Full-Stack",
    description: "Développeur web Full-Stack avec 4+ ans d'expérience en React, Next.js et Node.js.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="joel-portfolio-theme"
        >
          <PageLoader />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
