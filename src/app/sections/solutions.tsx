import ContentLink from '@/app/components/ContentLink'
import ProjectVideo from '@/app/components/ProjectVideo'
import { luminousMedia, renovationMedia } from '@/app/data/media'

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
      className="border-divider bg-surface section-generous border-t"
      aria-labelledby="work-title"
    >
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-accent eyebrow">Selected work</p>
            <h2 id="work-title" className="heading-section mt-4 max-w-2xl">
              Work you can look through.
            </h2>
          </div>
          <ContentLink href="/solutions" className="w-fit" variant="action">
            All projects
          </ContentLink>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.href}
              className="border-divider bg-background flex flex-col overflow-hidden border"
            >
              <ProjectVideo
                media={project.media}
                caption={project.caption}
                compact
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-accent eyebrow">{project.category}</p>
                <h3 className="heading-item mt-4 sm:text-3xl">
                  {project.name}
                </h3>
                <p className="text-foreground/75 type-prose mt-4">
                  {project.description}
                </p>
                <ContentLink
                  href={project.href}
                  className="mt-6 w-fit"
                  variant="action"
                >
                  {project.linkLabel}
                </ContentLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
