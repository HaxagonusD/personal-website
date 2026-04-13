import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
