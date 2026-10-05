import ContentLink from '@/app/components/ContentLink'
import ProjectVideo from '@/app/components/ProjectVideo'
import { renovationMedia } from '@/app/data/media'

export default function FeaturedSplatViewer() {
  return (
    <article className="border-divider bg-background mt-12 grid overflow-hidden border lg:grid-cols-[1.3fr_1fr]">
      <ProjectVideo
        media={renovationMedia}
        caption="1 min · Apartment renovation stages"
      />
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-accent eyebrow">3D Gaussian splats · LiDAR</p>
        <h3 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Splat Viewer
        </h3>
        <p className="text-foreground/75 type-body mt-5 max-w-lg">
          We use Splat Viewer to inspect Gaussian splats and LiDAR scans,
          measure spaces, and extract building geometry. We developed it for
          LUMINOUS Pilot 3 and continue to extend it for other 3DGS work.
        </p>
        <ContentLink
          href="/work/splat-viewer"
          className="mt-8 w-fit"
          variant="action"
        >
          Explore Splat Viewer
        </ContentLink>
      </div>
    </article>
  )
}
