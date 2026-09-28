import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="border-b border-foreground/10 bg-surface">
      <div className="mx-auto flex min-h-[36rem] max-w-7xl flex-col justify-center px-4 py-20 md:px-8 md:py-28">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Hypercliq · Athens, Greece
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Data systems and applied AI for complex problems.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/75 sm:text-xl">
          We design and build data platforms, analysis tools, and research
          software with partners across Europe.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/solutions"
            className="rounded-md bg-accent px-5 py-3 font-semibold text-onAccent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Explore our work
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-foreground/25 px-5 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Discuss a project
          </Link>
        </div>
      </div>
    </section>
  )
}
