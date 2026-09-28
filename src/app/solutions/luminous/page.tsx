import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia } from '@/app/data/media'
import type { Metadata } from 'next'
import Link from 'next/link'

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
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <Link
            href="/solutions"
            className="text-accent text-sm font-semibold hover:underline"
          >
            ← All projects
          </Link>
          <p className="text-accent mt-14 text-xs font-semibold tracking-[0.18em] uppercase">
            Horizon Europe · LUMINOUS
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Spatial tools for architectural review
          </h1>
          <p className="text-foreground/75 mt-7 max-w-3xl text-xl leading-8">
            LUMINOUS is a Horizon Europe project building XR systems people can
            use through natural language. Hypercliq authored its system
            architecture and helps connect the voice, knowledge, and interaction
            layers. For the architectural design review pilot, we developed
            Splat Viewer to inspect captured spaces and extract building
            structure from suitable scans.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Use Case 3 · Ricoh capture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From an E57 scan to a room model
          </h2>
          <p className="text-foreground/75 mt-5 text-lg leading-8">
            Ricoh captured the space. In this short video, our Splat Viewer
            opens the E57 file, lets us move through the scan, and identifies
            walls, floors, doors, windows, and rooms.
          </p>
        </div>
        <ProjectVideo
          media={luminousMedia}
          caption="44 sec · Scan captured by Ricoh"
        />

        <section
          className="border-foreground/15 mt-20 border-t pt-10"
          aria-labelledby="contributions-title"
        >
          <h2
            id="contributions-title"
            className="text-3xl font-semibold tracking-tight"
          >
            Hypercliq’s role
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {contributions.map((item) => (
              <div key={item.number}>
                <p className="text-accent text-sm font-semibold">
                  {item.number}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/75 mt-4 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-foreground/15 mt-20 grid gap-8 border-t pt-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold tracking-tight">
            About LUMINOUS
          </h2>
          <div className="max-w-2xl space-y-5 text-lg leading-8">
            <p>
              The project brings together partners to develop language-augmented
              XR systems. Its three pilots cover neurorehabilitation, safety
              training, and architectural design review.
            </p>
            <p className="text-foreground/70 text-base leading-7">
              LUMINOUS is funded by the European Union’s Horizon Europe
              programme under grant agreement 101135724.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-base font-semibold">
              <a
                href="https://luminous-horizon.eu/"
                className="border-accent text-accent border-b-2 pb-1"
              >
                LUMINOUS project ↗
              </a>
              <Link
                href="/solutions/splat-viewer"
                className="border-accent text-accent border-b-2 pb-1"
              >
                Explore Splat Viewer ↗
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
