// // "use client"

// // import { useEffect, useRef } from "react"
// // import Image from "next/image"

// // export default function Hero() {
// //   const heroRef = useRef<HTMLDivElement>(null)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (heroRef.current) {
// //         const scrollPosition = window.scrollY
// //         const opacity = 1 - scrollPosition * 0.003
// //         heroRef.current.style.opacity = Math.max(opacity, 0).toString()
// //       }
// //     }

// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
// //       <div className="absolute inset-0 bg-black/30 z-10"></div>
// //       <Image
// //         src="/hero-image.jpg"
// //         alt="Kelechi Ezema Professional Headshot"
// //         fill
// //         priority
// //         className="object-cover object-center"
// //       />
// //       <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-8 md:px-16">
// //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-1">Kelechi Ezema</h1>
// //         <h5 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8">
// //           Researcher • Developer • Educator
// //         </h5>
// //         <div className="flex flex-row gap-2 sm:gap-4">
// //           <a
// //             href="https://www.linkedin.com/in/kelechi-ezema"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
// //           >
// //             LinkedIn
// //           </a>
// //           <a
// //             href="https://github.com/kehcss"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
// //           >
// //             GitHub
// //           </a>
// //           <a
// //             href="#contact"
// //             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
// //             onClick={(e) => {
// //               e.preventDefault()
// //               const contactSection = document.getElementById("contact")
// //               if (contactSection) {
// //                 contactSection.scrollIntoView({ behavior: "smooth" })
// //               }
// //             }}
// //           >
// //             Contact Me
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"

// export default function Hero() {
//   const heroRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (heroRef.current) {
//         const scrollPosition = window.scrollY
//         const opacity = 1 - scrollPosition * 0.003
//         heroRef.current.style.opacity = Math.max(opacity, 0).toString()
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
//       <div className="absolute inset-0 bg-black/30 z-10"></div>

//       <Image
//         src="/hero-image.jpg"
//         alt="Almene De Meran Meguimtsop"
//         fill
//         priority
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-8 md:px-16">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-1">
//           Almene De Meran Meguimtsop
//         </h1>

//         <h5 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8">
//           AI Safety & Alignment • LLM Evaluation & Red Teaming • AI for Science
//         </h5>

//         <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
//           <a
//             href="/Meguimtsop, Almene De Meran_CV.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
//           >
//             CV
//           </a>

//           <a
//             href="https://www.linkedin.com/in/almene-de-meran-meguimtsop/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="https://github.com/Almene08"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
//           >
//             GitHub
//           </a>

//           <a
//             href="#contact"
//             className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
//             onClick={(e) => {
//               e.preventDefault()
//               const contactSection = document.getElementById("contact")
//               if (contactSection) {
//                 contactSection.scrollIntoView({ behavior: "smooth" })
//               }
//             }}
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        const opacity = 1 - scrollPosition * 0.003
        heroRef.current.style.opacity = Math.max(opacity, 0).toString()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* extra left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10"></div>

      <Image
        src="/hero-image.jpg"
        alt="Almene De Meran Meguimtsop"
        fill
        priority
        className="object-cover scale-001"
        style={{ objectPosition: "100% 15%" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 max-w-5xl">
          Almene De Meran Meguimtsop
        </h1>

        <h5 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-4xl">
          AI Safety & Alignment • LLM Evaluation & Red Teaming • AI for Science
        </h5>

        <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
          <a
            href="/Almene_Meguimtsop_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            CV
          </a>

          <a
            href="https://www.linkedin.com/in/almene-de-meran-meguimtsop/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Almene08"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors text-center text-xs sm:text-sm md:text-base whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}