"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const projectCategories = ["All", "Web", "Mobile", "Design"]

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete redesign of a corporate website focusing on user experience and brand identity.",
    link: "#",
  },
  {
    id: 4,
    title: "Task Management System",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Web-based task management system with team collaboration features.",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Dashboard for managing and analyzing social media accounts and campaigns.",
    link: "#",
  },
  {
    id: 6,
    title: "Travel Companion App",
    category: "Mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "Mobile app for planning trips, finding local attractions, and managing travel itineraries.",
    link: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Projects</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category ? "bg-gray-900 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  link: string
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative h-60">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.link} className="text-gray-900 font-medium hover:underline">
          View Project →
        </a>
      </div>
    </div>
  )
}
