"use client"

import { useInView } from "react-intersection-observer"
import {
  Calendar,
  Briefcase,
  ExternalLink,
} from "lucide-react"

// -----------------------------------------------------------------------------
// PROFESSIONAL INVOLVEMENT
// -----------------------------------------------------------------------------

const involvementData = [
  {
    id: 1,

    organization:
      "AAAI Conference on Artificial Intelligence (AAAI-27)",

    position: "Program Committee Member",

    duration: "September 2026",

    description: [
      "Selected to serve as a Program Committee member for the 41st AAAI Conference on Artificial Intelligence (AAAI-27), reviewing submissions and contributing to the conference peer-review process.",
    ],

    website:
      "https://aaai.org/conference/aaai/aaai-27/",
  },

  {
    id: 2,

    organization:
      "CU Café Program, BioFrontiers Institute, University of Colorado Boulder",

    position: "Lead",

    duration: "Fall 2026 – Spring 2027",

    description: [
      "Lead a graduate student and postdoc STEM community, organizing student-driven panels, faculty conversations, and professional development events.",
      "Recruit speakers and coordinate campus discussions on topics including AI ethics, equity in AI, and issues identified by the graduate research community.",
    ],

    website:
      "https://www.colorado.edu/biofrontiers/education/cu-cafe",
  },

  {
    id: 3,

    organization:
      "SMART Program, Office of Graduate Access and Retention, University of Colorado Boulder",

    position: "Professional Development Chair",

    duration: "Summer 2026",

    description: [
      "Coordinated professional development programming for undergraduate STEM researchers, working with graduate mentors, speakers, and panelists.",
      "Mentored two undergraduate research interns throughout the 10-week summer research program.",
    ],

    website:
      "https://www.colorado.edu/support/gar/undergraduate-stem-research/smart-program-information",
  },

  {
    id: 4,

    organization:
      "Graduate Student Advisory Board (GSAB), College of Engineering and Applied Science, University of Colorado Boulder",

    position: "Computer Science Representative",

    duration: "2026 – 2027",

    description: [
      "Represent Computer Science graduate students, advocate for departmental needs, and contribute to college-wide initiatives supporting the graduate student community.",
    ],

    website:
      "https://www.colorado.edu/engineering/graduate-student-advisory-board-gsab",
  },

  {
    id: 5,

    organization:
      "Newton Leadership Fellowship, Center for Leadership, University of Colorado Boulder",

    position: "Newton Leadership Fellow",

    duration: "2026 – 2027",

    description: [
      "Selected for a leadership development fellowship combining individualized coaching, experiential learning, professional development, and an interdisciplinary cohort experience.",
    ],

    website:
      "https://www.colorado.edu/lead/our-programs/newton-fellowship",
  },

  {
    id: 6,

    organization:
      "Partnerships for Informal Science Education in the Community (PISEC), University of Colorado Boulder",

    position: "University Educator (UE) / Mentor",

    duration: "Spring 2026 – Present",

    description: [
      "Support inquiry-based STEM learning with K–12 students through hands-on activities and mentorship.",
      "Help foster scientific curiosity, confidence, science identity, and a sense of belonging among participating students.",
    ],

    website:
      "https://www.colorado.edu/outreach/pisec/",
  },

  {
    id: 7,

    organization:
      "Boulder Black Blossoms, Office of Graduate Access and Retention, University of Colorado Boulder",

    position: "Lead",

    duration: "Fall 2025 – Spring 2026",

    description: [
      "Led a graduate community initiative focused on uplifting the achievements of Black women in STEM and Education through peer support, community building, and leadership programming.",
    ],

    website:
      "https://www.colorado.edu/support/gar/current-graduate-students/boulder-black-blossoms",
  },

  {
    id: 8,

    organization:
      "Additional Academic & Professional Service",

    position: "Peer Reviewer & Science Judge",

    duration: "2025 – Present",

    description: [
      "Serve as a peer reviewer for Humanities and Social Sciences Communications, the International Conference on Computational Social Science (IC2S2), and Deep Learning Indaba.",
      "Serve as a poster and science judge for undergraduate research and pre-college STEM competitions, including the Undergraduate Research Expo, Eco-Innovation Challenge, Buckeye Science & Engineering Fair, Ohio Academy of Science Virtual Science Day, and Texas DECA.",
    ],

    website: "",
  },
]

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

interface Involvement {
  id: number
  organization: string
  position: string
  duration: string
  description: string[]
  website: string
}

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------

export default function Involvement() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="involvement" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Involvement
          </h2>

          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Leadership, mentoring, academic service, and community engagement
            within and beyond CU Boulder.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-500">

            <div className="space-y-8">
              {involvementData.map((involvement, index) => (
                <InvolvementItem
                  key={involvement.id}
                  involvement={involvement}
                  index={index}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------------------------------------
// INDIVIDUAL INVOLVEMENT ITEM
// -----------------------------------------------------------------------------

interface InvolvementItemProps {
  involvement: Involvement
  index: number
}

function InvolvementItem({
  involvement,
  index,
}: InvolvementItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 100,
  })

  return (
    <div
      ref={ref}
      className={`pb-8 last:pb-0 border-b last:border-b-0 border-gray-300 transition-all duration-500 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="space-y-4">

        {/* ORGANIZATION */}
        <div className="flex items-start">

          {involvement.website ? (
            <a
              href={involvement.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {involvement.organization}
              </h4>

              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-700 shrink-0" />
            </a>
          ) : (
            <h4 className="text-xl font-bold text-gray-900">
              {involvement.organization}
            </h4>
          )}

        </div>

        {/* POSITION + DURATION */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600">

          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 shrink-0" />

            <span>
              {involvement.position}
            </span>
          </div>

          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 shrink-0" />

            <span className="font-medium">
              {involvement.duration}
            </span>
          </div>

        </div>

        {/* DESCRIPTION */}
        <ul className="space-y-2">

          {involvement.description.map((item, idx) => (
            <li
              key={`${involvement.id}-${idx}`}
              className="text-gray-600 flex items-start"
            >
              <span className="text-blue-600 mr-3 mt-2 text-xs">
                ●
              </span>

              <span className="leading-relaxed">
                {item}
              </span>
            </li>
          ))}

        </ul>

      </div>
    </div>
  )
}