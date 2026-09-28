import { renovationMedia } from '@/app/data/media'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedSplatViewer() {
  return (
    <article className="border-foreground/15 bg-background mt-12 grid overflow-hidden border lg:grid-cols-[1.3fr_1fr]">
      <div className="bg-surface relative min-h-64 lg:min-h-96">
        <Image
          src={renovationMedia.poster}
          alt="An apartment renovation scan open in Splat Viewer"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>
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
