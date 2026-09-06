import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h2>

          <div className="w-16 h-1 bg-white mx-auto mt-4"></div>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            I am always happy to connect about research collaborations,
            internships, and opportunities related to AI safety and alignment, trustworthy AI, NLP,
            and AI for science. Feel free to reach out through any of the
            channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

          {/* Contact Information */}
          <div className="text-center md:text-left">

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center justify-center md:justify-start">

                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>

                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">
                    Email
                  </h4>

                  <a
                    href="mailto:almene.meguimtsop@colorado.edu"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    almene.meguimtsop@colorado.edu
                  </a>
                </div>

              </div>

              {/* Affiliation */}
              <div className="flex items-center justify-center md:justify-start">

                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                </div>

                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">
                    Department of Computer Science
                  </h4>

                  <p className="text-gray-300">
                    University of Colorado Boulder
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start">

                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>

                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">
                    Location
                  </h4>

                  <p className="text-gray-300">
                    Boulder, Colorado, USA
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Professional Links */}
          <div className="text-center md:text-right">

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Connect With Me
            </h3>

            <div className="flex flex-wrap justify-center md:justify-end gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/Almene08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex flex-col items-center p-4 min-w-[100px] bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <Github className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors" />

                <span className="text-sm text-gray-400 group-hover:text-gray-300 mt-2">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/almene-de-meran-meguimtsop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex flex-col items-center p-4 min-w-[100px] bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-8 w-8 text-gray-300 group-hover:text-blue-400 transition-colors" />

                <span className="text-sm text-gray-400 group-hover:text-gray-300 mt-2">
                  LinkedIn
                </span>
              </a>

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=Tp7u6w8AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="group flex flex-col items-center p-4 min-w-[100px] bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <GraduationCap className="h-8 w-8 text-gray-300 group-hover:text-green-400 transition-colors" />

                <span className="text-sm text-gray-400 group-hover:text-gray-300 mt-2">
                  Scholar
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">

          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Almene De Meran Meguimtsop.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Ph.D. Student in Computer Science • University of Colorado Boulder
          </p>

        </div>

      </div>
    </footer>
  )
}