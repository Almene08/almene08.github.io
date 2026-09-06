"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
      setCanScrollUp(scrollTop > 0)
      setCanScrollDown(scrollTop < scrollHeight - clientHeight - 1)
    }
  }

  useEffect(() => {
    checkScrollability()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollability)
      return () => container.removeEventListener("scroll", checkScrollability)
    }
  }, [])

  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -120,
        behavior: "smooth",
      })
    }
  }

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 120,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
        </div>

        {/* <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        > */}
          {/* <div className="relative h-[550px] md:h-120">
            <Image
              src="/almene-headshot.jpg?height=1200&width=700"
              alt="Almene De Meran Meguimtsop"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div> */}
  <div
  ref={ref}
  className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>

<div className="relative w-full aspect-[3/4]">
  <Image
    src="/almene-headshot.jpg"
    alt="Almene De Meran Meguimtsop"
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div>
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
  I am a Ph.D. student in Computer Science at the University of Colorado
  Boulder, advised by{" "}
  <a
    href="https://www.colorado.edu/cs/daniel-acuna"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    Prof. Daniel Acuña
  </a>
  . My research focuses on AI safety and alignment, particularly how to
  evaluate and improve the reliability of large language models and agentic
  AI systems in scientific and other high-stakes settings. I develop
  benchmarks and evaluation methods to study how AI systems respond to
  adversarial, ambiguous, and norm-sensitive requests, with current work
  spanning research integrity, model disparities, and trustworthy AI for
  science.
</p>

<p className="text-gray-600 mb-6 leading-relaxed">
  More broadly, I am interested in understanding why failures emerge in
  increasingly capable AI systems and developing methods that help them
  behave reliably under real-world constraints. My work draws on natural
  language processing, red teaming, machine learning, and alignment methods,
  and I am particularly interested in research that connects rigorous
  evaluation with practical safeguards.
</p>
<p className="text-gray-600 mb-6">
  My path to computer science has been interdisciplinary. Before starting my Ph.D., 
  I earned a Master’s in Physics, a Master’s in Data Science, and a postgraduate diploma 
  in Quantitative Life Sciences, experiences that exposed me to different ways of 
  approaching scientific problems. This background continues to shape my research and 
  my interest in developing AI systems that can support scientific work reliably and 
  responsibly.
</p>
            <div className="flex space-x-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Me
              </a>
              <a
              href="/Almene_Meguimtsop_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
            >
              View CV
            </a>
            </div>

            {/* Enhanced Recent News Section with Scrollable Feature */}
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4" style={{ borderBottom: "#42368D 1px solid" }}>
                Recent News
              </h3>

              {/* Scroll Controls */}
              <div className="absolute right-0 top-0 flex flex-col gap-1 z-10">
                <button
                  onClick={scrollUp}
                  disabled={!canScrollUp}
                  className={`p-1 rounded-full transition-all duration-200 ${canScrollUp
                    ? "bg-blue-100 hover:bg-blue-200 text-blue-600 shadow-sm"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  aria-label="Scroll up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollDown}
                  disabled={!canScrollDown}
                  className={`p-1 rounded-full transition-all duration-200 ${canScrollDown
                    ? "bg-blue-100 hover:bg-blue-200 text-blue-600 shadow-sm"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  aria-label="Scroll down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable News Container */}
              <div className="relative">
                {/* Top Fade Indicator */}
                <div
                  className={`absolute top-0 left-0 right-8 h-4 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollUp ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Scrollable Content */}
                {/* <div
                  ref={scrollContainerRef}
                  className="space-y-3 text-gray-600 max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#d1d5db #f3f4f6",
                  }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border-l-4 border-purple-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🚀 [2/17/26] Excited to be joining {" "}
                      <a
                        href="https://www.microsoft.com/applied-sciences"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Microsoft
                      </a>{" "}  at the Redmond HQ campus as an Applied Science PhD Intern for Summer 2026!
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-teal-50 to-transparent rounded-lg border-l-4 border-teal-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🌍✨ [01/20/26] Two papers accepted to{" "}
                      <a
                        href="https://2026.eacl.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        EACL 2026
                      </a>
                      : AfriVox (speech recognition for African accents) and AfriMMT-EA (machine translation for East African languages).
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border-l-4 border-yellow-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      📊 [11/20/25] Presented my reseach on ASR and NLP systems at the{" "}
                      <a
                        href="https://na.eventscloud.com/website/88204/graduate-student-workshop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Summit for AI Institutes Leadership (SAIL) Workshop
                      </a>{" "}
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border-l-4 border-red-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🗣️ [8/25/25] Presented my internship findings on the <strong>Pedagogical and Cultural Alignment</strong> of Rori AI to the Anthropic and Rising Academies teams
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      📜 [8/20/25] Excited to share that our paper on linguistic alignment was accepted to the{" "}
                      <a
                        href="https://2025.emnlp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        EMNLP 2025 conference
                      </a>{" "}
                      as a main finding.
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🤝 [6/1/25] Excited to join Rising Academy as a research intern, working on enhancing{" "}
                      <a
                        href="https://rori.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Rori
                      </a>{" "}
                      and Tari learning products.
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border-l-4 border-purple-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🌍 [4/15/25] Honored to be elected the inaugural president of the{" "}
                      <a
                        href="https://africangradbuffs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        African Graduate Student Association (AGSA)
                      </a>{" "}
                      at CU Boulder.
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border-l-4 border-yellow-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🏆 [3/10/25] Proud to share that our{" "}
                      <a
                        href="https://dl.acm.org/doi/10.1145/3706598.3714059"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        CHI paper
                      </a>{" "}
                      received an Honorable Mention Award.
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border-l-4 border-red-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      🎤 [3/2/25] Had the privilege of speaking at the Blacks in AI Panel Session on emerging leaders in
                      AI graduate preparation.
                    </p>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg border-l-4 border-indigo-400 hover:shadow-sm transition-shadow duration-200">
                    <p className="text-sm">
                      📊 [2/15/25] Presented our research findings at the Winter Text and Discourse Conference,
                      receiving positive feedback from the academic community.
                    </p>
                  </div>
                </div> */}

                <div
  ref={scrollContainerRef}
  className="space-y-3 text-gray-600 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
  style={{
    scrollbarWidth: "thin",
    scrollbarColor: "#d1d5db #f3f4f6",
  }}
>
  {/* CU Cafe */}
  <div className="p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-lg border-l-4 border-orange-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      ☕ <strong>[09/2026]</strong> I am serving as Lead of{" "}
      <a
        href="https://www.colorado.edu/biofrontiers/education/cu-cafe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        CU Café
      </a>
      , a graduate student and postdoc community at CU Boulder focused on
      mentoring, professional development, and community building.
    </p>
  </div>

  {/* ICSSI + MLSS */}
  <div className="p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border-l-4 border-purple-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      🔬 <strong>[06–07/2026]</strong> Presented{" "}
      <em>
        How Willing Are LLMs to Commit Scientific Fraud? A Study of 16
        Commercial and Open Models
      </em>{" "}
      as a talk at{" "}
      <a
        href="https://icssi.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        ICSSI 2026
      </a>{" "}
      and as a poster at the{" "}
      <a
        href="https://cfe.columbia.edu/events/machine-learning-summer-school-2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Machine Learning Summer School 2026
      </a>{" "}
      at Columbia University.
    </p>
  </div>

  {/* SciIntBench preprint */}
  <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      📝 <strong>[05/2026]</strong> Our new preprint{" "}
      <a
        href="https://arxiv.org/abs/2605.29468"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 hover:text-blue-800 underline"
      >
        <em>
          SciIntBench: Measuring LLM Compliance with Research Integrity Norms
          Under Adversarial Framing
        </em>
      </a>{" "}
      is now available on arXiv and is under review at ACL Rolling Review.{" "}
      <a
        href="https://sciosci.github.io/sciintbench/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Project Page
      </a>
      {" · "}
      <a
        href="https://github.com/sciosci/SciIntBench-research-integrity"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Code & Data
      </a>
    </p>
  </div>

  {/* Disparate Beliefs */}
  <div className="p-3 bg-gradient-to-r from-teal-50 to-transparent rounded-lg border-l-4 border-teal-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      🤖 <strong>[05/2026]</strong> Our paper{" "}
      <em>
        The Disparate Beliefs of Large Language Models About Science and
        Scientists
      </em>{" "}
      is under review at the Proceedings of the National Academy of Sciences.
    </p>
  </div>

  {/* SMART Program */}
<div className="p-3 bg-gradient-to-r from-pink-50 to-transparent rounded-lg border-l-4 border-pink-400 hover:shadow-sm transition-shadow duration-200">
  <p className="text-sm">
    🌱 <strong>[04/2026]</strong> Nominated as the Professional Development
    Chair for CU Boulder&apos;s{" "}
    <a
      href="https://www.colorado.edu/support/gar/undergraduate-stem-research/smart-program-information"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline"
    >
      SMART Program
    </a>
    , coordinating professional development programming and mentoring
    undergraduate STEM researchers throughout the summer research program.
  </p>
</div>

  {/* GSAB */}
  <div className="p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      🎓 <strong>[04/2026]</strong> Selected as the Computer Science
      representative on CU Boulder&apos;s{" "}
      <a
        href="https://www.colorado.edu/engineering/graduate-student-advisory-board-gsab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Graduate Student Advisory Board
      </a>{" "}
      for the College of Engineering and Applied Science.
    </p>
  </div>

  {/* Newton Leadership Fellowship */}
  <div className="p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border-l-4 border-yellow-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      🏆 <strong>[03/2026]</strong> Selected as a{" "}
      <a
        href="https://www.colorado.edu/lead/our-programs/newton-fellowship"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        2026–2027 Newton Leadership Fellow
      </a>{" "}
      at the University of Colorado Boulder.
    </p>
  </div>

  {/* ATLC */}
  <div className="p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border-l-4 border-red-400 hover:shadow-sm transition-shadow duration-200">
    <p className="text-sm">
      🎤 <strong>[05/2025]</strong> Presented{" "}
      <em>Disparities in Large Language Models for and About Science</em> at
      the{" "}
      <a
        href="https://atlconf.spp.gatech.edu/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Atlanta Conference on Science and Innovation Policy
      </a>
      .
    </p>
  </div>
</div>

                {/* Bottom Fade Indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-8 h-4 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollDown ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>

              {/* Scroll Progress Indicator */}
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-8 rounded-full transition-all duration-300 ${index === 0 && canScrollUp === false
                        ? "bg-blue-400"
                        : index === 1 && canScrollUp && canScrollDown
                          ? "bg-blue-400"
                          : index === 2 && canScrollDown === false && canScrollUp
                            ? "bg-blue-400"
                            : "bg-gray-200"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
