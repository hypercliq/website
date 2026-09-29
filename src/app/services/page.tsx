import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Spatial tools, data platforms, and research software by Hypercliq.',
}

const services = [
  {
    title: 'Spatial data and visualization',
    body: 'We build tools for inspecting captured spaces. Splat Viewer opens Gaussian splats and LiDAR scans for measurement and building geometry extraction.',
  },
  {
    title: 'Data platforms',
    body: 'We design platforms for collecting and connecting research data. For Sport Infinity, we linked product samples, engineering properties, manufacturing processes, and sustainability measures. We also built a repository for agricultural field images.',
  },
  {
    title: 'Research software and applied AI',
    body: 'Our research software ranges from wearable movement analysis to object detection in 3D scans. BIONIC supported ergonomic assessment; Splat Viewer places YOLO-World detections in captured spaces.',
  },
  {
    title: 'Research and technical consulting',
    body: 'We help shape system architectures and collaborative research proposals. This includes LUMINOUS’s platform architecture, HumanTech’s construction site data architecture, and Sport Infinity’s research concept and funding application.',
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
