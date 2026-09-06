import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Publications from "@/components/publications"
import Experience from "@/components/experience"
import Involvement from "@/components/involvement"
import Miscellaneous from "@/components/miscellaneous"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Navbar />
      <About />
      <Publications />
      <Experience />
      <Involvement />
      <Miscellaneous />
      <Footer />
    </main>
  )
}
