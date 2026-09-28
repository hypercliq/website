import Link from 'next/link'

export default function Hero() {
  return (
    <section className="border-foreground/15 bg-surface border-b">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 py-20 md:min-h-[40rem] md:grid-cols-[2fr_1fr] md:px-8 md:py-28">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Hypercliq · Athens, Greece
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Thoughtful software for difficult data.
          </h1>
          <p className="text-foreground/75 mt-8 max-w-2xl text-xl leading-8">
            We build spatial tools, data platforms, and research software with
            partners across Europe.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/solutions"
              className="bg-accent text-onAccent focus-visible:outline-accent inline-flex items-center px-6 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              See our work ↗
            </Link>
            <Link
              href="/contact"
              className="border-accent text-accent inline-flex items-center border-b-2 font-semibold"
            >
              Get in touch ↗
            </Link>
          </div>
        </div>
        <div className="border-foreground/25 hidden border-t pt-5 md:block">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Our focus
          </p>
          <p className="mt-4 text-lg leading-8">
            Clear structures. Useful interfaces. Careful implementation.
          </p>
        </div>
      </div>
    </section>
  )
}
