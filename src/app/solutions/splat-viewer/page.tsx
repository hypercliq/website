import ContentLink from '@/app/components/ContentLink'
import ContactCTA from '@/app/components/ContactCTA'
import ProjectVideo from '@/app/components/ProjectVideo'
import {
  apartmentRecognitionMedia,
  constructionRecognitionMedia,
  renovationMedia,
  splatViewerMedia,
} from '@/app/data/media'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Splat Viewer',
  description:
    'A Hypercliq tool for exploring Gaussian splats and LiDAR scans on desktop or in VR, measuring spaces, and extracting building structure.',
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

const recognitionDemos = [
  {
    title: 'Construction site',
    description:
      'YOLO-World marks backpacks and bottles in the rendered view. Splat Viewer places the detections in coloured 3D boxes.',
    media: constructionRecognitionMedia,
    caption: '1 min 2 sec · Backpacks and bottles',
  },
  {
    title: 'Apartment renovation',
    description:
      'The viewer marks candidate pipes and shows their positions in the apartment scan.',
    media: apartmentRecognitionMedia,
    caption: '56 sec · Plumbing pipes',
  },
]

export default function SplatViewer() {
  return (
    <main>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-standard">
          <ContentLink href="/solutions" variant="back">
            All projects
          </ContentLink>
          <p className="text-accent eyebrow mt-14">3DGS and LiDAR</p>
          <h1 className="heading-project mt-4 max-w-4xl">Splat Viewer</h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-3xl">
            Splat Viewer opens 3D Gaussian splats and large LiDAR scans on
            desktop and, with an OpenXR runtime and headset, in VR. It provides
            tools for inspection, measurement, annotation, and extracting
            building geometry. We developed its scan processing workflow for
            LUMINOUS’s architectural design review pilot.
          </p>
          <ContentLink
            href="/solutions/luminous"
            className="mt-8 inline-block"
            variant="action"
          >
            Explore the LUMINOUS work
          </ContentLink>
        </div>
      </header>

      <div className="site-container section-standard">
        <section aria-labelledby="renovation-title">
          <div className="mb-8 max-w-3xl">
            <p className="text-accent eyebrow">Renovation example</p>
            <h2 id="renovation-title" className="heading-section-compact mt-3">
              An apartment through renovation
            </h2>
            <p className="text-foreground/75 type-body mt-5">
              The apartment was scanned at several stages of a renovation, and
              each capture was turned into a Gaussian splat. This edit joins
              separate Splat Viewer recordings, from the original rooms through
              exposed surfaces to the finished bathroom. In the viewer, each
              stage is loaded and explored on its own.
            </p>
          </div>
          <div className="max-w-4xl">
            <ProjectVideo
              media={renovationMedia}
              caption="1 min · Edited from separate viewer recordings"
            />
          </div>
        </section>

        <section className="mt-20" aria-labelledby="features-title">
          <div className="border-divider bg-surface border">
            <div className="px-6 py-8 sm:px-8">
              <p className="text-accent eyebrow">Capabilities</p>
              <h2 id="features-title" className="heading-section-compact mt-3">
                What Splat Viewer can do
              </h2>
            </div>
            <div className="bg-foreground/15 grid gap-px md:grid-cols-2">
              {features.map((item) => (
                <div key={item.number} className="bg-surface p-6 sm:p-8">
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
          </div>
        </section>

        <section
          className="border-divider mt-20 border-t pt-10"
          aria-labelledby="object-recognition-title"
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-accent eyebrow">Object recognition</p>
            <h2
              id="object-recognition-title"
              className="heading-section-compact mt-3"
            >
              Find objects in captured spaces
            </h2>
            <p className="text-foreground/75 type-body mt-5">
              These short demos show how YOLO-World detections appear in Splat
              Viewer, with coloured 3D boxes and matching positions on the scan
              overview.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {recognitionDemos.map((demo) => (
              <article key={demo.title} className="min-w-0">
                <h3 className="heading-item">{demo.title}</h3>
                <p className="text-foreground/75 type-prose mt-3 mb-5">
                  {demo.description}
                </p>
                <ProjectVideo media={demo.media} caption={demo.caption} />
              </article>
            ))}
          </div>
        </section>

        <section
          className="border-divider mt-20 border-t pt-10"
          aria-labelledby="walkthrough-title"
        >
          <div className="mb-8 max-w-3xl">
            <p className="text-accent eyebrow">Tool walkthrough</p>
            <h2 id="walkthrough-title" className="heading-section-compact mt-3">
              See the viewer in use
            </h2>
            <p className="text-foreground/75 type-body mt-5">
              This longer walkthrough moves from a Gaussian splat to large point
              clouds, room detection, measurements, and export. It ends with a
              splat trained from a scan and photos.
            </p>
          </div>
          <div className="max-w-5xl">
            <ProjectVideo
              media={splatViewerMedia}
              caption="4 min 42 sec · Feature walkthrough"
            />
          </div>
          <ContentLink
            href="/solutions/luminous"
            className="mt-6 inline-block"
            variant="action"
          >
            Watch the Ricoh E57 example in LUMINOUS
          </ContentLink>
        </section>
      </div>
      <ContactCTA />
    </main>
  )
}
