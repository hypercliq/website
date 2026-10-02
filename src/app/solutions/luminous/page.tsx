import ContentLink from '@/app/components/ContentLink'
import ContactCTA from '@/app/components/ContactCTA'
import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia } from '@/app/data/media'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spatial tools for LUMINOUS',
  description:
    'Hypercliq’s work on LUMINOUS, from platform architecture to viewing and processing a Ricoh E57 scan for architectural design review.',
}

const contributions = [
  {
    number: '01',
    title: 'Platform architecture',
    text: 'We authored the main system architecture deliverable, D1.2, for the language-augmented XR platform.',
  },
  {
    number: '02',
    title: 'System integration',
    text: 'We worked on connecting the voice, knowledge, and interaction layers across the platform.',
  },
  {
    number: '03',
    title: 'Spatial tools',
    text: 'For the architectural design review pilot, we developed Splat Viewer to inspect captured spaces and extract building structure from suitable scans.',
  },
]

export default function Luminous() {
  return (
    <main>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-standard">
          <ContentLink href="/solutions" variant="back">
            All projects
          </ContentLink>
          <p className="text-accent eyebrow mt-14">Horizon Europe · LUMINOUS</p>
          <h1 className="heading-project mt-4 max-w-4xl">
            Spatial tools for architectural review
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-3xl">
            LUMINOUS is a Horizon Europe project building XR systems people can
            use through natural language. Hypercliq authored its system
            architecture and helps connect the voice, knowledge, and interaction
            layers. For the architectural design review pilot, we developed
            Splat Viewer to inspect captured spaces and extract building
            structure from suitable scans.
          </p>
        </div>
      </header>

      <div className="site-container section-standard">
        <div className="mb-8 max-w-3xl">
          <p className="text-accent eyebrow">Use Case 3 · Ricoh capture</p>
          <h2 className="heading-section-compact mt-3">
            From an E57 scan to a room model
          </h2>
          <p className="text-foreground/75 type-body mt-5">
            Ricoh captured the space. In this short video, our Splat Viewer
            opens the E57 file, lets us move through the scan, and identifies
            walls, floors, doors, windows, and rooms.
          </p>
        </div>
        <div className="max-w-5xl">
          <ProjectVideo
            media={luminousMedia}
            caption="44 sec · Scan captured by Ricoh"
          />
        </div>

        <section
          className="border-divider mt-20 border-t pt-10"
          aria-labelledby="contributions-title"
        >
          <h2 id="contributions-title" className="heading-subsection">
            Hypercliq’s role
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {contributions.map((item) => (
              <div key={item.number}>
                <p className="text-accent text-sm font-semibold">
                  {item.number}
                </p>
                <h3 className="heading-item mt-4">{item.title}</h3>
                <p className="text-foreground/75 type-prose mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-divider mt-20 grid gap-8 border-t pt-10 md:grid-cols-[1fr_2fr]">
          <h2 className="heading-subsection">About LUMINOUS</h2>
          <div className="type-body max-w-2xl space-y-5">
            <p>
              The project brings together partners to develop language-augmented
              XR systems. Its three pilots cover neurorehabilitation, safety
              training, and architectural design review.
            </p>
            <p className="text-foreground/70 type-prose text-base">
              LUMINOUS is funded by the European Union’s Horizon Europe
              programme under grant agreement 101135724.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-base font-semibold">
              <ContentLink href="https://luminous-horizon.eu/" variant="action">
                LUMINOUS project
              </ContentLink>
              <ContentLink href="/solutions/splat-viewer" variant="action">
                Explore Splat Viewer
              </ContentLink>
            </div>
          </div>
        </section>
      </div>
      <ContactCTA />
    </main>
  )
}
