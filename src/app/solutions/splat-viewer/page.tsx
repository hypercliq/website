import ProjectVideo from '@/app/components/ProjectVideo'
import { splatViewerMedia } from '@/app/data/media'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Splat Viewer',
  description:
    'A Hypercliq desktop tool for exploring Gaussian splats and LiDAR scans, measuring spaces, and extracting building structure.',
  robots: { index: false, follow: false },
}

const capabilities = [
  {
    number: '01',
    title: 'Explore',
    text: 'Move through Gaussian splats and LiDAR point clouds. The current viewer opens PLY, LAS, LAZ, and E57 files.',
  },
  {
    number: '02',
    title: 'Examine',
    text: 'Take measurements, attach notes to a view, and find walls, openings, and rooms in suitable scans.',
  },
  {
    number: '03',
    title: 'Use the results',
    text: 'Export detected building geometry as DXF or IFC4, or train a Gaussian splat using a scan and reference photos.',
  },
]

export default function SplatViewer() {
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
            Current work · 3DGS and LiDAR
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Splat Viewer
          </h1>
          <p className="text-foreground/75 mt-7 max-w-3xl text-xl leading-8">
            A desktop tool we are building to explore 3D Gaussian splats and
            large LiDAR scans. It began as part of our work on LUMINOUS’s
            architectural design review pilot, and we are developing it for
            wider use too.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Tool walkthrough
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            See the viewer in use
          </h2>
          <p className="text-foreground/75 mt-5 text-lg leading-8">
            This longer walkthrough moves from a Gaussian splat to large point
            clouds, room detection, measurements, and export. It ends with an
            E57 example.
          </p>
        </div>
        <ProjectVideo
          media={splatViewerMedia}
          caption="5 min 22 sec · Feature walkthrough"
        />

        <section
          className="border-foreground/15 mt-20 border-t pt-10"
          aria-labelledby="capabilities-title"
        >
          <h2
            id="capabilities-title"
            className="text-3xl font-semibold tracking-tight"
          >
            What it can do now
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {capabilities.map((item) => (
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
            In development
          </h2>
          <div className="max-w-2xl space-y-5 text-lg leading-8">
            <p>
              The current build can export detected building geometry as an IFC4
              model. Viewing existing BIM models directly in the tool is planned
              work.
            </p>
            <p>
              The Ricoh E57 scan was part of our work for LUMINOUS. The viewer
              itself is also growing beyond that project.
            </p>
            <Link
              href="/solutions/luminous"
              className="border-accent text-accent inline-block border-b-2 pb-1 text-base font-semibold"
            >
              Explore the LUMINOUS work ↗
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
