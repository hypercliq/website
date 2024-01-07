import About from '@/app/sections/about'
import Contact from '@/app/sections/contact'
import Hero from '@/app/sections/hero'
import Services from '@/app/sections/services'
import Solutions from '@/app/sections/solutions'

export default function Home() {
  return (
    <main>
      {/* <section id="hero">
        <h1 className="text-4xl">Hello, We are Hypercliq!</h1>
      </section> */}
      <Hero />
      {/* </div> */}
      {/* <section id="about">
        <p>
          We are a team of data scientists, software engineers, and business
          developers who work together to build data-driven solutions.
        </p>
      </section> */}
      <About />
      {/* <Divider /> */}
      {/* <section id="services">
        <p>
          We leverage Machine Learning and Artificial Intelligence to transform
          data into actionable insights.
        </p>
      </section> */}
      <Services />
      {/* <section id="projects">
        <p>
          Our expertise lies in delivering data-driven solutions, helping
          businesses unlock their potential. With a strong presence in European
          research projects, we partner with leading institutions and companies
          to face and overcome new challenges.
        </p>
      </section> */}
      <Solutions />
      <Contact />
      {/* <section id="contact">
        <p>
          We are always looking for new challenges and opportunities. If you
          want to know more about us, please email us at email@example
          {'<!--.example -->'}.com
        </p>
      </section> */}
      {/* <Divider /> */}
      {/* <P5Sketch /> */}
    </main>
  )
}
