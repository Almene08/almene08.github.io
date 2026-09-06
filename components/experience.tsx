"use client"

import { useInView } from "react-intersection-observer"
import {
  Calendar,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Users,
  BookOpen,
} from "lucide-react"

const experienceData = [
  {
    id: 1,

    title: "Graduate Research Assistant",

    company:
      "Science of Science & Computational Discovery Lab, University of Colorado Boulder",

    period: "August 2024 – Present",

    category: "Research",

    description: [
      "Conduct research on AI safety, alignment, reliability, and disparities in large language models, with a focus on scientific and other high-stakes workflows.",
      "Develop benchmarks and evaluation frameworks to assess the safety, reliability, and research-integrity behavior of frontier LLMs and agentic AI systems.",
      "Evaluate commercial and open-weight models using red teaming, adversarial prompting, and large-scale model evaluation pipelines.",
      "Investigate model monitoring, mechanistic interpretability, and scalable oversight methods for understanding and mitigating failures in LLMs and agentic systems.",
    ],

    website: "https://scienceofscience.org/",

    icon: "research",
  },

  {
    id: 2,

    title: "Graduate Teaching Assistant",

    company: "Department of Computer Science, University of Colorado Boulder",

    period: "Fall 2024 · Spring 2026 · Fall 2026",

    category: "Teaching",

    description: [
      "Teaching Assistant for Machine Learning, Intro to Data Science with Probability & Statistics, and Intro to Computational Thinking.",
      "Support students through office hours, teaching sessions, project mentoring, and technical guidance in machine learning, data science, statistics, and Python programming.",
      "Grade quizzes, assignments, projects, and exams while helping students strengthen problem-solving and computational skills.",
    ],

    website: "https://www.colorado.edu/cs/",

    icon: "teaching",
  },

  {
    id: 3,

    title: "Tutor",

    company: "African Institute for Mathematical Sciences (AIMS)",

    period: "Spring 2026",

    category: "Research Mentoring",

    description: [
      "Mentored two AIMS students on research essay projects in collaboration with their supervisors.",
      "Provided research guidance on low-resource automatic speech recognition and Chichewa machine translation using traditional machine translation systems and large language models.",
    ],

    website: "https://aims-cameroon.org/",

    icon: "mentoring",
  },

  {
    id: 4,

    title: "Teaching Assistant, Physics",

    company: "University of Dschang",

    period: "November 2020 – May 2022",

    category: "Teaching",

    description: [
      "Delivered tutorials in optoelectronics to first-year Master's students and supported assessment and grading.",
      "Led undergraduate physics laboratory sessions, guided students through experiments, and graded assignments.",
    ],

    website: "https://www.univ-dschang.org/",

    icon: "physics",
  },
]

interface Experience {
  id: number
  title: string
  company: string
  period: string
  category: string
  description: string[]
  website: string
  icon: string
}

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getExperienceIcon = (icon: string) => {
    switch (icon) {
      case "research":
        return <FlaskConical className="h-5 w-5" />

      case "teaching":
        return <GraduationCap className="h-5 w-5" />

      case "mentoring":
        return <Users className="h-5 w-5" />

      case "physics":
        return <BookOpen className="h-5 w-5" />

      default:
        return <FlaskConical className="h-5 w-5" />
    }
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Selected Experience
          </h2>

          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Research, teaching, and mentoring experiences spanning AI safety,
            machine learning, data science, and interdisciplinary scientific
            computing.
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
          <div className="space-y-6">

            {experienceData.map((experience) => (
              <div
                key={experience.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10">

                  {/* LEFT COLUMN */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
                      {getExperienceIcon(experience.icon)}
                      <span>{experience.category}</span>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2 shrink-0" />
                      <span className="font-medium">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {experience.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-5">
                      <p className="text-base md:text-lg text-gray-700 font-medium">
                        {experience.company}
                      </p>

                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${experience.company}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors shrink-0"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <ul className="space-y-3">
                      {experience.description.map((item, index) => (
                        <li
                          key={`${experience.id}-${index}`}
                          className="text-gray-600 flex items-start"
                        >
                          <span className="text-blue-500 mr-3 mt-2">
                            •
                          </span>

                          <span className="leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}