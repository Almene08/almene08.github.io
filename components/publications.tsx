"use client"

import type React from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import {
  ExternalLink,
  Github,
  FileText,
  Calendar,
  MapPin,
  ImageIcon,
} from "lucide-react"

// -----------------------------------------------------------------------------
// RESEARCH & PUBLICATIONS
// -----------------------------------------------------------------------------

const researchPublications = [
  {
    id: 1,
    featured: true,

    title:
      "SciIntBench: Measuring LLM Compliance with Research Integrity Norms Under Adversarial Framing",

    description:
      "An adversarial benchmark for evaluating whether large language models uphold research integrity norms under overt, covert, and benign framing.",

    authors: (
      <>
        <strong>Almene De Meran Meguimtsop</strong>, Maria Leonor Pacheco,
        Daniel E. Acuña
      </>
    ),

    venue: "arXiv preprint, 2026",

    status: "Preprint · Under review at ACL Rolling Review",

    links: [
      {
        type: "paper",
        url: "https://arxiv.org/abs/2605.29468",
        label: "Paper",
      },
      {
        type: "project",
        url: "https://sciosci.github.io/sciintbench/",
        label: "Project Page",
      },
      {
        type: "github",
        url: "https://github.com/sciosci/SciIntBench-research-integrity",
        label: "Code & Data",
      },
    ],
  },

  {
    id: 2,
    featured: false,

    title:
      "The Disparate Beliefs of Large Language Models About Science and Scientists",

    description:
      "Examines disparities in how large language models represent and reason about science and scientists.",

    authors: (
      <>
        <strong>Almene De Meran Meguimtsop</strong>, C. E. Ojukwu,
        P. Taechoyotin, C. Chávez-Ruelas, R. Burke, A. Clauset,
        Daniel E. Acuña
      </>
    ),

    venue: "Proceedings of the National Academy of Sciences (PNAS)",

    status: "Under review",

    links: [],
  },

  {
    id: 3,
    featured: false,

    title:
      "Do LLMs Know When Science Has Been Retracted? Evaluating Retraction Awareness for Trustworthy Science Automation",

    description:
      "Evaluates retraction awareness in large language models as a component of trustworthy AI-assisted scientific workflows.",

    authors: (
      <>
        P. Taechoyotin, Y. Tian,{" "}
        <strong>Almene De Meran Meguimtsop</strong>, Daniel E. Acuña
      </>
    ),

    venue: "Manuscript",

    status: "Under resubmission",

    links: [],
  },

  {
    id: 4,
    featured: false,

    title:
      "Audio Penalty: Evaluating Clinical Safety of Multimodal LLMs Across Text and Speech in Low-Resource Languages",

    description:
      "Examines the clinical safety of multimodal large language models across text and speech in low-resource language settings.",

    authors: (
      <>
        M. Oduwole, T. Abdullahi, T. Olatunji, G. A. Katuka, M. Mgonzo,
        C. Okocha, T. Oko-Odion, K. Ezema,{" "}
        <strong>Almene De Meran Meguimtsop</strong>, L. E. Ismaila
      </>
    ),

    venue: "ACL Rolling Review",

    status: "Under review",

    links: [],
  },
]

// -----------------------------------------------------------------------------
// TALKS & PRESENTATIONS
// -----------------------------------------------------------------------------

const talksAndPresentations = [
  {
    id: 1,

    title:
      "How Willing Are LLMs to Commit Scientific Fraud? A Study of 16 Commercial and Open Models",

    description:
      "Presented findings from our evaluation of large language models' responses to requests involving scientific misconduct and research integrity.",

    // Later:
    // Put your image in public/icssi-2026.jpg
    // Then change this to: "/icssi-2026.jpg"
    thumbnail: "/icssi-2026.jpeg",

    venue:
      "5th International Conference on the Science of Science and Innovation (ICSSI 2026)",

    location: "Boulder, Colorado",

    date: "July 2026",

    type: "Lightning Talk",

    links: [
      {
        type: "program",
        url: "https://icssi.org/",
        label: "Conference",
      },
      {
        type: "program",
        url: "https://assets.ctfassets.net/gcs3fgznvwmj/6vZkJcm6cZkhWnn03cN1CX/21486c2a1bcac63fb45cf979b2b4aa5f/ICSSI_2026_Program_Full_v7.pdf",
        label: "Program",
      },
    ],
  },

  {
    id: 2,

    title:
      "How Willing Are LLMs to Commit Scientific Fraud? A Study of 16 Commercial and Open Models",

    description:
      "Presented a research poster on the safety and reliability of large language models when assisting with requests that may violate scientific integrity norms.",

    // Later:
    // Put your image in public/mlss-2026.jpg
    // Then change this to: "/mlss-2026.jpg"
    thumbnail: "/mlss-2026.jpg",

    venue: "Machine Learning Summer School (MLSS) 2026",

    location: "Columbia University, New York City",

    date: "June 2026",

    type: "Poster Presentation",

    links: [
      {
        type: "program",
        url: "https://cfe.columbia.edu/events/machine-learning-summer-school-2026",
        label: "MLSS 2026",
      },
    ],
  },

  {
    id: 3,

    title:
      "Disparities in Large Language Models for and About Science",

    description:
      "Presented research examining disparities in large language models in scientific and academic contexts.",

    // Later:
    // Put your image in public/atlc-2025.jpg
    // Then change this to: "/atlc-2025.jpg"
    thumbnail: "/atlc-2025.jpg",

    venue:
      "Atlanta Conference on Science and Innovation Policy (ATLC 2025)",

    location: "Atlanta, Georgia",

    date: "May 2025",

    type: "Conference Talk",

    links: [
      {
        type: "program",
        url: "https://easychair.org/smart-program/ATLC25/",
        label: "Program",
      },
    ],
  },
]

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

interface ResearchPublication {
  id: number
  featured: boolean
  title: string
  description: string
  authors: React.ReactNode
  venue: string
  status: string

  links: Array<{
    type: string
    url: string
    label: string
  }>
}

interface TalkPresentation {
  id: number
  title: string
  description: string
  thumbnail: string
  venue: string
  location: string
  date: string
  type: string

  links: Array<{
    type: string
    url: string
    label: string
  }>
}

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------

export default function Publications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="h-4 w-4" />

      case "paper":
        return <FileText className="h-4 w-4" />

      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  const getLinkColor = (type: string) => {
    switch (type) {
      case "github":
        return "bg-gray-900 hover:bg-gray-800 text-white"

      case "paper":
        return "bg-blue-600 hover:bg-blue-700 text-white"

      case "project":
        return "bg-purple-600 hover:bg-purple-700 text-white"

      default:
        return "bg-gray-100 hover:bg-gray-200 text-gray-800"
    }
  }

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Research & Publications
          </h2>

          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            My research focuses on AI safety, evaluation, alignment, and
            trustworthy AI for scientific and other high-stakes settings.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-10 transition-all duration-1000 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ResearchPublicationsCard
            publications={researchPublications}
            getLinkIcon={getLinkIcon}
            getLinkColor={getLinkColor}
          />

          <TalksAndPresentationsCard
            presentations={talksAndPresentations}
            getLinkIcon={getLinkIcon}
            getLinkColor={getLinkColor}
          />
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------------------------------------
// RESEARCH PUBLICATIONS CARD
// -----------------------------------------------------------------------------

interface ResearchPublicationsCardProps {
  publications: ResearchPublication[]
  getLinkIcon: (type: string) => React.ReactNode
  getLinkColor: (type: string) => string
}

function ResearchPublicationsCard({
  publications,
  getLinkIcon,
  getLinkColor,
}: ResearchPublicationsCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h3
        className="text-2xl font-bold text-gray-900 mb-8"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#42368D",
          textUnderlineOffset: "6px",
        }}
      >
        Selected Research
      </h3>

      <div className="space-y-6">
        {publications.map((publication) => (
          <div
            key={publication.id}
            className={`rounded-xl p-5 md:p-6 transition-all duration-200 ${
              publication.featured
                ? "border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-white"
                : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            {/* Status */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {publication.featured && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                  Featured Research
                </span>
              )}

              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
                {publication.status}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-tight">
              {publication.title}
            </h4>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              {publication.description}
            </p>

            {/* Authors */}
            <p className="text-sm text-gray-700 mb-1 leading-relaxed">
              {publication.authors}
            </p>

            {/* Venue */}
            <p className="text-sm text-gray-500 mb-4">
              {publication.venue}
            </p>

            {/* Links */}
            {publication.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {publication.links.map((link, linkIndex) => (
                  <a
                    key={`${publication.id}-${linkIndex}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${getLinkColor(
                      link.type
                    )}`}
                  >
                    {getLinkIcon(link.type)}

                    <span className="ml-2">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// TALKS & PRESENTATIONS CARD
// -----------------------------------------------------------------------------

interface TalksAndPresentationsCardProps {
  presentations: TalkPresentation[]
  getLinkIcon: (type: string) => React.ReactNode
  getLinkColor: (type: string) => string
}

function TalksAndPresentationsCard({
  presentations,
  getLinkIcon,
  getLinkColor,
}: TalksAndPresentationsCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h3
        className="text-2xl font-bold text-gray-900 mb-8"
        style={{
          textDecoration: "underline",
          textDecorationColor: "#42368D",
          textUnderlineOffset: "6px",
        }}
      >
        Selected Talks & Presentations
      </h3>

      <div className="space-y-6">
        {presentations.map((presentation, index) => (
          <PresentationItem
            key={presentation.id}
            presentation={presentation}
            index={index}
            getLinkIcon={getLinkIcon}
            getLinkColor={getLinkColor}
          />
        ))}
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// INDIVIDUAL PRESENTATION
// -----------------------------------------------------------------------------

interface PresentationItemProps {
  presentation: TalkPresentation
  index: number
  getLinkIcon: (type: string) => React.ReactNode
  getLinkColor: (type: string) => string
}

function PresentationItem({
  presentation,
  index,
  getLinkIcon,
  getLinkColor,
}: PresentationItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 100,
  })

  return (
    <div
      ref={ref}
      className={`border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-md transition-all duration-500 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid sm:grid-cols-4 gap-6 items-start">

        {/* ------------------------------------------------------------- */}
        {/* LEFT SIDE: PRESENTATION IMAGE */}
        {/* ------------------------------------------------------------- */}

        <div className="sm:col-span-1">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">

            {presentation.thumbnail ? (
              <Image
                src={presentation.thumbnail}
                alt={presentation.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 text-center px-4">
                <ImageIcon className="h-8 w-8 mb-2" />

                <span className="text-xs font-medium">
                  Presentation image
                </span>

                <span className="text-[11px] mt-1 text-gray-400">
                  Add photo later
                </span>
              </div>
            )}

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* RIGHT SIDE: PRESENTATION INFORMATION */}
        {/* ------------------------------------------------------------- */}

        <div className="sm:col-span-3">

          {/* Presentation Type */}
          <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-3">
            {presentation.type}
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {presentation.title}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {presentation.description}
          </p>

          {/* Venue + Date */}
          <div className="space-y-2 text-sm text-gray-500 mb-4">

            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />

              <span>
                {presentation.venue}
                <br />
                {presentation.location}
              </span>
            </div>

            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 shrink-0" />

              <span>{presentation.date}</span>
            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">

            {presentation.links.map((link, linkIndex) => (
              <a
                key={`${presentation.id}-${linkIndex}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 ${getLinkColor(
                  link.type
                )}`}
              >
                {getLinkIcon(link.type)}

                <span className="ml-2">
                  {link.label}
                </span>
              </a>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}