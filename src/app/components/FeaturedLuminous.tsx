import ContentLink from '@/app/components/ContentLink'
import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia } from '@/app/data/media'

export default function FeaturedLuminous() {
  return (
    <article className="border-divider bg-background mt-12 grid overflow-hidden border lg:grid-cols-[1.3fr_1fr]">
      <ProjectVideo
        media={luminousMedia}
        caption="44 sec · Scan captured by Ricoh"
      />
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-accent eyebrow">LUMINOUS · Pilot 3</p>
        <h3 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Platform architecture and tools for spatial review
        </h3>
        <p className="text-foreground/75 type-body mt-5 max-w-lg">
          Our LUMINOUS work connects platform architecture, voice interaction,
          and spatial review. We developed Splat Viewer for the architectural
          review pilot; the video shows it processing a scan captured by Ricoh.
        </p>
        <ContentLink
          href="/work/luminous"
          className="mt-8 w-fit"
          variant="action"
        >
          Explore our LUMINOUS work
        </ContentLink>
      </div>
    </article>
  )
}
