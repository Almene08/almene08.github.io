import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kelechi Ezema - AI Researcher & PhD Student",
  description:
    "PhD student in Computer Science at University of Colorado Boulder, specializing in NLP applied to educational enviornment. Research published in CHI 2025.",
  keywords: [
    "Kelechi Ezema",
    "CU Boulder",
    "CU",
    "AI Research",
    "PhD Student",
    "Computer Science",
    "University of Colorado Boulder",
    "Speech Recognition",
    "Educational Technology",
    "AI Bias",
    "Machine Learning",
    "NLP",
    "CHI Conference",
    "Inclusive AI",
  ],
  authors: [{ name: "Kelechi Ezema" }],
  creator: "Kelechi Ezema",
  publisher: "Kelechi Ezema",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kelechiezema.com", // Replace with your actual domain
    title: "Kelechi Ezema - AI Researcher & PhD Student",
    description:
      "PhD student in Computer Science at University of Colorado Boulder, specializing in NLP, educational technology, and speech recognition systems.",
    siteName: "Kelechi Ezema Portfolio",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kelechi Ezema - AI Researcher and PhD Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelechi Ezema - AI Researcher & PhD Student",
    description:
      "PhD student in Computer Science at University of Colorado Boulder, specializing in AI bias mitigation and educational technology.",
    images: ["/hero-image.jpg"],
    creator: "@kelechi_ezema", // Replace with your actual Twitter handle if you have one
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://kelechiezema.com", // Replace with your actual domain
  },
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon-website.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-website.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-website.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-website.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon-website.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-website.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon-website.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon-website.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon-website.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon-website.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon-website.png", sizes: "57x57", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon-website.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-website.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-website.png" />
        <link rel="shortcut icon" href="/favicon-website.png" />

        {/* Apple Touch Icons for various iOS devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-website.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-website.png" />

        {/* Precomposed icon for older iOS versions */}
        <link rel="apple-touch-icon-precomposed" href="/favicon-website.png" />

        {/* iOS Safari specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Kelechi Ezema" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
