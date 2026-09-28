import { staticImage } from '@/app/data/image'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hypercliq is an Athens based team working on data systems, applied AI, and research software.',
}

const Florendia = staticImage('Florendia_r', 180, 180)
const George = staticImage('George_r', 180, 180)
const Mirco = staticImage('Mirco_r', 180, 180)

const people = [
  {
    name: 'Florendia Fourlì',
    role: 'Co-founder',
    image: Florendia,
    detail: 'Works on AI applications and research projects.',
    link: 'https://www.linkedin.com/in/florendia',
  },
  {
    name: 'Mirco Sanguineti',
    role: 'Co-founder',
    image: Mirco,
    detail: 'Works on software architecture, analysis, and AI.',
    link: 'https://www.linkedin.com/in/mirco-sanguineti',
  },
  {
    name: 'George Kartsounis',
    role: 'Co-founder',
    image: George,
    detail:
      'Works on industrial research and European projects, with a background in robotic vision and automation.',
    link: 'https://www.linkedin.com/in/george-kartsounis-0954422a/',
  },
]

export default function About() {
  return (
    <main>
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            About Hypercliq
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            A small team for complex work.
          </h1>
          <p className="text-foreground/75 mt-7 max-w-2xl text-xl leading-8">
            Founded in 2011, Hypercliq designs data systems and research
            software. We work from Athens with partners across Europe.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <div className="text-foreground/75 max-w-2xl space-y-5 text-lg leading-8">
            <p>
              We bring software engineering, data work, and research experience
              into the same conversation. Our role changes with the project:
              sometimes we help define the technical approach; sometimes we
              build the tools.
            </p>
            <p>
              We collaborate with specialists in other fields when a project
              calls for it. Recent work includes spatial tools and construction
              technology, alongside earlier projects in workplace health and
              product design.
            </p>
          </div>
        </div>
      </section>
      <section className="border-foreground/15 bg-surface border-t">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            People
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The founders
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {people.map((person) => (
              <article
                key={person.name}
                className="border-foreground/20 border-t pt-6"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  className="h-40 w-40 rounded-full object-cover grayscale"
                  sizes="160px"
                />
                <p className="text-accent mt-6 text-xs font-semibold tracking-[0.16em] uppercase">
                  {person.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="text-foreground/75 mt-3 leading-7">
                  {person.detail}
                </p>
                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-accent text-accent mt-5 inline-block border-b pb-1 font-semibold"
                >
                  LinkedIn ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
