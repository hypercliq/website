import About from '@/app/sections/about'
import Contact from '@/app/sections/contact'
import Hero from '@/app/sections/hero'
import Services from '@/app/sections/services'
import Solutions from '@/app/sections/solutions'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Contact />
    </main>
  )
}
