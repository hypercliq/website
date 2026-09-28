import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Data platforms, analysis tools, applied AI, and research software by Hypercliq.',
}

const services = [
  {
    title: 'Spatial data and visualization',
    body: 'We build tools to inspect 3D scans, Gaussian splats, and other complex data. Our current work includes viewing captured spaces, measuring them, and extracting building geometry.',
  },
  {
    title: 'Data platforms',
    body: 'We design the structure behind complex information: how it is collected, connected, searched, and kept useful. The result may be a repository, a research platform, or a product data system.',
  },
  {
    title: 'Research software and applied AI',
    body: 'We develop software for research projects, including machine learning workflows when the task calls for them. We pay attention to the data, the task, and how people review the output.',
  },
  {
    title: 'Research and technical consulting',
    body: 'We help shape technical approaches, system architectures, and collaborative research proposals. Our portfolio includes work in European research programmes.',
  },
]

export default function Services() {
  return (
    <main>
      <header className="border-foreground/15 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Useful systems for complicated work.
          </h1>
          <p className="text-foreground/75 mt-7 max-w-2xl text-xl leading-8">
            Our work ranges from 3D viewers and analysis tools to data platforms
            and research software.
          </p>
        </div>
      </header>
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24"
        aria-label="Services"
      >
        <div className="grid gap-x-16 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border-foreground/20 border-t py-8 md:py-10"
            >
              <span className="text-accent text-sm font-semibold">
                0{index + 1}
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {service.title}
              </h2>
              <p className="text-foreground/75 mt-4 max-w-lg leading-7">
                {service.body}
              </p>
            </article>
          ))}
        </div>
        <div className="border-foreground/15 mt-12 border-t pt-10">
          <p className="max-w-xl text-lg leading-8">
            The scope depends on the problem. We can discuss an early idea or an
            existing system that needs work.
          </p>
          <Link
            href="/contact"
            className="border-accent text-accent mt-6 inline-block border-b-2 pb-1 font-semibold"
          >
            Discuss a project ↗
          </Link>
        </div>
      </section>
    </main>
  )
}
