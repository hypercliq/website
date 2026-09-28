import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia } from '@/app/data/media'
import Link from 'next/link'

export default function FeaturedLuminous() {
  return (
    <article className="border-foreground/15 bg-background mt-12 grid overflow-hidden border lg:grid-cols-[1.3fr_1fr]">
      <ProjectVideo
        media={luminousMedia}
        caption="44 sec · Scan captured by Ricoh"
      />
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
          LUMINOUS · Pilot 3
        </p>
        <h3 className="mt-5 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          From scan to spatial data
        </h3>
        <p className="text-foreground/75 mt-5 max-w-lg text-lg leading-8">
          Our viewer opens a Ricoh E57 scan and identifies walls, rooms, doors,
          and windows. We developed this work for LUMINOUS’s architectural
          design review pilot.
        </p>
        <Link
          href="/solutions/luminous"
          className="border-accent text-accent mt-8 w-fit border-b-2 pb-1 font-semibold"
        >
          Explore the LUMINOUS work ↗
        </Link>
      </div>
    </article>
  )
}
