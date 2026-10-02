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
          Architecture, voice, and spatial tools
        </h3>
        <p className="text-foreground/75 type-body mt-5 max-w-lg">
          For LUMINOUS, we authored the platform architecture, worked on its
          voice layer, and developed Splat Viewer for architectural review. The
          video shows the viewer processing a scan captured by Ricoh.
        </p>
        <ContentLink
          href="/solutions/luminous"
          className="mt-8 w-fit"
          variant="action"
        >
          Explore the LUMINOUS work
        </ContentLink>
      </div>
    </article>
  )
}
