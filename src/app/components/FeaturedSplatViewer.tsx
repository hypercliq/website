import ProjectVideo from '@/app/components/ProjectVideo'
import { renovationMedia } from '@/app/data/media'
import Link from 'next/link'

export default function FeaturedSplatViewer() {
  return (
    <article className="border-foreground/15 bg-background mt-12 grid overflow-hidden border lg:grid-cols-[1.3fr_1fr]">
      <ProjectVideo
        media={renovationMedia}
        caption="1 min · Apartment renovation stages"
      />
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
          3D Gaussian splats · LiDAR
        </p>
        <h3 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Splat Viewer
        </h3>
        <p className="text-foreground/75 mt-5 max-w-lg text-lg leading-8">
          We use Splat Viewer to inspect Gaussian splats and LiDAR scans,
          measure spaces, and extract building geometry. We developed it for
          LUMINOUS Pilot 3 and continue to extend it for other 3DGS work.
        </p>
        <Link
          href="/solutions/splat-viewer"
          className="border-accent text-accent mt-8 w-fit border-b-2 pb-1 font-semibold"
        >
          Explore Splat Viewer ↗
        </Link>
      </div>
    </article>
  )
}
