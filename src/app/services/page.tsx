import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Data platforms, analysis tools, applied AI, and research software by Hypercliq.',
}

const services = [
  {
    title: 'Data platforms',
    body: 'We design the structure behind complex information: how it is collected, connected, searched, and kept useful. The result may be a repository, a research platform, or a product data system.',
  },
  {
    title: 'Analysis and visualization',
    body: 'We turn data into interfaces people can inspect. That includes dashboards, 3D data tools, and visual systems for exploring patterns and discussing findings.',
  },
  {
    title: 'Applied AI',
    body: 'When a project calls for it, we build machine learning into a wider workflow. We pay attention to the data, the task, and how a person will review the output.',
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
            We help teams organize information, make sense of it, and build the
            software they need to work with it.
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
