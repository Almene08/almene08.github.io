"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY

      if (position > window.innerHeight - 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = ["home", "about", "publications", "experience", "involvement", "miscellaneous", "contact"]
      const sectionElements = sections.map((id) =>
        id === "home" ? document.querySelector("main") : document.getElementById(id),
      )

      sectionElements.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (position >= sectionTop - 200 && position < sectionTop + sectionHeight - 200) {
          setActiveSection(sections[index])
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = sectionId === "home" ? document.querySelector("main") : document.getElementById(sectionId)

    if (section) {
      window.scrollTo({
        top: sectionId === "home" ? 0 : section.offsetTop - 70,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto">
              <NavLink
                href="#about"
                active={activeSection === "about"}
                scrolled={scrolled}
                onClick={() => scrollToSection("about")}
              >
                About
              </NavLink>
              <NavLink
                href="#publications"
                active={activeSection === "publications"}
                scrolled={scrolled}
                onClick={() => scrollToSection("publications")}
              >
                Publications
              </NavLink>
              <NavLink
                href="#experience"
                active={activeSection === "experience"}
                scrolled={scrolled}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </NavLink>
              <NavLink
                href="#involvement"
                active={activeSection === "involvement"}
                scrolled={scrolled}
                onClick={() => scrollToSection("involvement")}
              >
                Involvement
              </NavLink>
              {/* <NavLink
                href="#miscellaneous"
                active={activeSection === "miscellaneous"}
                scrolled={scrolled}
                onClick={() => scrollToSection("miscellaneous")}
              >
                Misc
              </NavLink> */}
              {/*
              <NavLink
                href="#contact"
                active={activeSection === "contact"}
                scrolled={scrolled}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavLink>
              */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavLinkProps {
  href: string
  active: boolean
  scrolled: boolean
  onClick: () => void
  children: React.ReactNode
}

function NavLink({ href, active, scrolled, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
        active
          ? scrolled
            ? "text-gray-900 border-b-2 border-gray-900"
            : "text-white border-b-2 border-white"
          : scrolled
            ? "text-gray-500 hover:text-gray-900"
            : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}
