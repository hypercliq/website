import Link from 'next/link'
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
    <main>
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Areas of work
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Different fields. Similar questions about data.
          </h1>
          <p className="text-foreground/75 mt-7 max-w-2xl text-xl leading-8">
            Our methods travel across sectors. The details come from working
            closely with people who know each field.
          </p>
        </div>
      </header>
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24"
        aria-label="Areas of work"
      >
        <div className="grid gap-x-16 md:grid-cols-2">
          {domains.map((domain, index) => (
            <article
              key={domain.name}
              className="border-foreground/20 border-t py-8 md:py-10"
            >
              <span className="text-accent text-sm font-semibold">
                0{index + 1}
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {domain.name}
              </h2>
              <p className="text-foreground/75 mt-4 max-w-lg leading-7">
                {domain.detail}
              </p>
              <Link
                href={domain.link}
                className="border-accent text-accent mt-6 inline-block border-b pb-1 font-semibold"
              >
                See related work ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
