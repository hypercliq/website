import ContentLink from '@/app/components/ContentLink'
import { staticImage } from '@/app/data/image'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hypercliq is an Athens based team building spatial tools, data systems, and research software.',
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
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">About Hypercliq</p>
          <h1 className="heading-page mt-4 max-w-4xl">
            A small team for complex work.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            Founded in 2011, Hypercliq designs data systems and research
            software. We work from Athens with partners across Europe.
          </p>
        </div>
      </header>
      <section className="site-container section-standard">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="heading-subsection">How we work</h2>
          <div className="text-foreground/75 type-body max-w-2xl space-y-5">
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
            <ContentLink href="/work" variant="action">
              See our work
            </ContentLink>
          </div>
        </div>
      </section>
      <section className="border-divider bg-surface border-t">
        <div className="site-container section-standard">
          <p className="text-accent eyebrow">People</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The founders
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {people.map((person) => (
              <article
                key={person.name}
                className="border-boundary border-t pt-6"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  className="h-40 w-40 rounded-full object-cover grayscale"
                  sizes="160px"
                />
                <p className="text-accent eyebrow-compact mt-6">
                  {person.role}
                </p>
                <h3 className="heading-item mt-2">{person.name}</h3>
                <p className="text-foreground/75 type-prose mt-3">
                  {person.detail}
                </p>
                <ContentLink
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block"
                  variant="action"
                >
                  LinkedIn
                </ContentLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
