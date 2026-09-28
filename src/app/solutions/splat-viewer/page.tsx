import ProjectVideo from '@/app/components/ProjectVideo'
import { renovationMedia, splatViewerMedia } from '@/app/data/media'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Splat Viewer',
  description:
    'A Hypercliq tool for exploring Gaussian splats and LiDAR scans on desktop or in VR, measuring spaces, and extracting building structure.',
  robots: { index: false, follow: false },
}

const features = [
  {
    number: '01',
    title: 'Explore captured spaces',
    text: 'Open Gaussian splats and LiDAR scans in PLY, LAS, LAZ, or E57 format. Explore them on desktop or with an OpenXR runtime and VR headset.',
  },
  {
    number: '02',
    title: 'Measure and annotate',
    text: 'Measure distances and areas, pin typed or dictated notes to a viewpoint, and play back a recorded camera path.',
  },
  {
    number: '03',
    title: 'Extract building geometry',
    text: 'In suitable scans, find walls, floors, ceilings, doors, windows, and rooms. Export the detected geometry as DXF or IFC4.',
  },
  {
    number: '04',
    title: 'Capture and create',
    text: 'Export a 360° panorama PNG from the current viewpoint, or train a Gaussian splat from a LiDAR scan and reference photos.',
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
            A viewer we are building for 3D Gaussian splats and large LiDAR
            scans. You can inspect a captured space on a desktop or, with an
            OpenXR runtime and headset, in VR. The work began in LUMINOUS’s
            architectural design review pilot and is continuing beyond it.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <section aria-labelledby="renovation-title">
          <div className="mb-8 max-w-3xl">
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Renovation example
            </p>
            <h2
              id="renovation-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              An apartment through renovation
            </h2>
            <p className="text-foreground/75 mt-5 text-lg leading-8">
              The apartment was scanned at several stages of a renovation, and
              each capture was turned into a Gaussian splat. This edit joins
              separate Splat Viewer recordings, from the original rooms through
              exposed surfaces to the finished bathroom. In the viewer, each
              stage is loaded and explored on its own.
            </p>
          </div>
          <div className="max-w-5xl">
            <ProjectVideo
              media={renovationMedia}
              caption="1 min · Edited from separate viewer recordings"
            />
          </div>
        </section>

        <section className="mt-20" aria-labelledby="features-title">
          <div className="border-foreground/15 bg-surface border">
            <div className="px-6 py-8 sm:px-8">
              <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                Current build
              </p>
              <h2
                id="features-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                What Splat Viewer can do
              </h2>
            </div>
            <div className="bg-foreground/15 grid gap-px md:grid-cols-2">
              {features.map((item) => (
                <div key={item.number} className="bg-surface p-6 sm:p-8">
                  <p className="text-accent text-sm font-semibold">
                    {item.number}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-foreground/75 mt-4 leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-foreground/15 mt-20 border-t pt-10"
          aria-labelledby="walkthrough-title"
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Tool walkthrough
            </p>
            <h2
              id="walkthrough-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
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
