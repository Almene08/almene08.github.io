"use client"

import { useInView } from "react-intersection-observer"

const skillsData = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "TypeScript", percentage: 85 },
  { name: "Swift", percentage: 75 },
  { name: "UI/UX Design", percentage: 70 },
  { name: "Python", percentage: 65 },
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Skills</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-x-12 gap-y-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView ? `${skill.percentage}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
