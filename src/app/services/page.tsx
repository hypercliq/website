import ContentLink from '@/app/components/ContentLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Spatial tools, data platforms, and research software by Hypercliq.',
}

const services = [
  {
    title: 'Spatial data and visualization',
    body: 'We build tools for exploring 3D scans and Gaussian splats. Our current work supports inspection, measurement, and the extraction of building geometry from captured spaces.',
    example: {
      href: '/work/splat-viewer',
      label: 'See Splat Viewer',
    },
  },
  {
    title: 'Data platforms',
    body: 'We design how information is collected, connected, searched, and maintained. Our work includes research repositories and product data platforms that help teams use related records together.',
    example: {
      href: '/work/sustainable-design-data-management-platform',
      label: 'See the Sport Infinity platform',
    },
  },
  {
    title: 'Research software and applied AI',
    body: 'We develop tools for collecting, processing, and reviewing research data, including machine learning workflows where they suit the task. We design around the data available and the people who need to interpret the results.',
    example: {
      href: '/work/visual-repository-for-agricultural-rd-innovation',
      label: 'See the agricultural research repository',
    },
  },
  {
    title: 'Research and technical consulting',
    body: 'We help teams develop technical approaches, design system architectures, and shape collaborative research proposals. Our experience includes European research programmes.',
    example: {
      href: '/work/system-architecture-design-for-construction-automation',
      label: 'See the HumanTech architecture work',
    },
  },
]

export default function Services() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">Services</p>
          <h1 className="heading-page mt-4 max-w-4xl">
            Software built around your data.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            We design and build spatial tools, data platforms, and research
            software, and help teams define the technical approach behind them.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-label="Services"
      >
        <div className="grid gap-x-16 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border-boundary border-t py-8 md:py-10"
            >
              <span className="text-accent text-sm font-semibold">
                0{index + 1}
              </span>
              <h2 className="heading-subsection mt-4">{service.title}</h2>
              <p className="text-foreground/75 type-prose mt-4 max-w-lg">
                {service.body}
              </p>
              <ContentLink
                href={service.example.href}
                className="mt-4 inline-block"
                variant="action"
              >
                {service.example.label}
              </ContentLink>
            </article>
          ))}
        </div>
        <div className="border-divider mt-12 border-t pt-10">
          <p className="type-body max-w-xl">
            Whether you have an early idea or an existing system that needs
            work, tell us what you want to achieve and where you need help.
          </p>
          <ContentLink
            href="/contact"
            className="mt-6 inline-block"
            variant="action"
          >
            Discuss a project
          </ContentLink>
        </div>
      </section>
    </main>
  )
}
