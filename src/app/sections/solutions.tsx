import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia, renovationMedia } from '@/app/data/media'
import Link from 'next/link'

const featuredProjects = [
  {
    name: 'Splat Viewer',
    category: '3D Gaussian splats · LiDAR',
    description:
      'Explore captured spaces and follow an apartment through renovation.',
    href: '/solutions/splat-viewer',
    linkLabel: 'Explore Splat Viewer',
    media: renovationMedia,
    caption: '1 min · Apartment renovation stages',
  },
  {
    name: 'LUMINOUS',
    category: 'LUMINOUS · Pilot 3',
    description:
      'See an E57 scan become a room model for architectural review.',
    href: '/solutions/luminous',
    linkLabel: 'Explore the LUMINOUS work',
    media: luminousMedia,
    caption: '44 sec · Scan captured by Ricoh',
  },
]

export default function Solutions() {
  return (
    <section
      className="border-foreground/15 bg-surface border-t py-20 md:py-28"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Selected work
            </p>
            <h2
              id="work-title"
              className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Work you can look through.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="border-accent text-accent w-fit border-b-2 pb-1 font-semibold"
          >
            All projects ↗
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.href}
              className="border-foreground/15 bg-background flex flex-col overflow-hidden border"
            >
              <ProjectVideo
                media={project.media}
                caption={project.caption}
                compact
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>
                <p className="text-foreground/75 mt-4 leading-7">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="border-accent text-accent focus-visible:outline-accent mt-6 w-fit border-b-2 pb-1 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {project.linkLabel} ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
