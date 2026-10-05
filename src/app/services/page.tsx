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
    body: 'We build tools to inspect 3D scans, Gaussian splats, and other complex data. Our current work includes viewing captured spaces, measuring them, and extracting building geometry.',
    example: {
      href: '/work/splat-viewer',
      label: 'See Splat Viewer',
    },
  },
  {
    title: 'Data platforms',
    body: 'We design the structure behind complex information: how it is collected, connected, searched, and kept useful. The result may be a repository, a research platform, or a product data system.',
    example: {
      href: '/work/sustainable-design-data-management-platform',
      label: 'See the Sport Infinity platform',
    },
  },
  {
    title: 'Research software and applied AI',
    body: 'We develop software for research projects, including machine learning workflows when the task calls for them. We pay attention to the data, the task, and how people review the output.',
    example: {
      href: '/work/visual-repository-for-agricultural-rd-innovation',
      label: 'See the agricultural research repository',
    },
  },
  {
    title: 'Research and technical consulting',
    body: 'We help shape technical approaches, system architectures, and collaborative research proposals. Our portfolio includes work in European research programmes.',
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
            Useful systems for complicated work.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            Our work ranges from 3D viewers and analysis tools to data platforms
            and research software.
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
            The scope depends on the problem. We can discuss an early idea or an
            existing system that needs work.
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
