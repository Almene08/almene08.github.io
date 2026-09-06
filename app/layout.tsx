import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Fixes the metadataBase warning you saw during pnpm build
  metadataBase: new URL("https://almene08.github.io"),

  title: {
    default: "Almene De Meran Meguimtsop | AI Safety Researcher",
    template: "%s | Almene De Meran Meguimtsop",
  },

  description:
    "Ph.D. student in Computer Science at the University of Colorado Boulder researching AI safety and alignment, LLM evaluation and red teaming, agentic AI, and trustworthy AI for science.",

  keywords: [
    "Almene De Meran Meguimtsop",
    "Almene Meguimtsop",
    "AI Safety",
    "AI Alignment",
    "LLM Evaluation",
    "Red Teaming",
    "Agentic AI",
    "AI for Science",
    "Trustworthy AI",
    "Responsible AI",
    "Large Language Models",
    "Natural Language Processing",
    "Machine Learning",
    "Research Integrity",
    "University of Colorado Boulder",
    "CU Boulder",
    "Computer Science",
    "SciIntBench",
  ],

  authors: [
    {
      name: "Almene De Meran Meguimtsop",
      url: "https://almene08.github.io",
    },
  ],

  creator: "Almene De Meran Meguimtsop",
  publisher: "Almene De Meran Meguimtsop",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://almene08.github.io",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almene08.github.io",

    title: "Almene De Meran Meguimtsop | AI Safety Researcher",

    description:
      "Ph.D. student in Computer Science at the University of Colorado Boulder researching AI safety and alignment, LLM evaluation and red teaming, agentic AI, and trustworthy AI for science.",

    siteName: "Almene De Meran Meguimtsop",

    images: [
      {
        url: "/almene-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Almene De Meran Meguimtsop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Almene De Meran Meguimtsop | AI Safety Researcher",

    description:
      "Ph.D. student researching AI safety and alignment, LLM evaluation, agentic AI, and trustworthy AI for science.",

    images: ["/almene-headshot.jpg"],
  },

  icons: {
  icon: "/icon.svg",
  shortcut: "/icon.svg",
},
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2937",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}