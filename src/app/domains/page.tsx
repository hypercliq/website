import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Areas of work',
  description:
    'Hypercliq works with spatial data, construction technology, workplace health, and product design.',
}

const domains = [
  {
    name: 'Spatial data and XR',
    detail:
      'Tools for exploring Gaussian splats and LiDAR scans, measuring spaces, and reviewing captured environments.',
    link: '/solutions/splat-viewer',
  },
  {
    name: 'Construction',
    detail:
      'Spatial review tools and system architecture connecting site data, workers, and automated equipment.',
    link: '/solutions/luminous',
  },
  {
    name: 'Workplace health',
    detail:
      'Movement data and research tools for assessing ergonomic conditions at work.',
    link: '/solutions/3d-motion-tracking-for-ergonomic-movement-assessment',
  },
  {
    name: 'Product design',
    detail:
      'Materials data, body shape analysis, and product configuration for teams designing physical goods.',
    link: '/solutions/sustainable-design-data-management-platform',
  },
]

export default function Domains() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">Areas of work</p>
          <h1 className="heading-page mt-4 max-w-4xl">
            Different fields. Similar questions about data.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            Our methods travel across sectors. The details come from working
            closely with people who know each field.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-label="Areas of work"
      >
        <div className="grid gap-x-16 md:grid-cols-2">
          {domains.map((domain, index) => (
            <article
              key={domain.name}
              className="border-boundary border-t py-8 md:py-10"
            >
              <span className="text-accent text-sm font-semibold">
                0{index + 1}
              </span>
              <h2 className="heading-subsection mt-4">{domain.name}</h2>
              <p className="text-foreground/75 type-prose mt-4 max-w-lg">
                {domain.detail}
              </p>
              <ContentLink
                href={domain.link}
                className="mt-6 inline-block"
                variant="action"
              >
                See related work
              </ContentLink>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
