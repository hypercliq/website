import Link from 'next/link'

export default function About() {
  return (
    <section
      className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28"
      aria-labelledby="about-title"
    >
      <div>
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
          About Hypercliq
        </p>
        <h2
          id="about-title"
          className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          The work starts with understanding the problem.
        </h2>
      </div>
      <div className="text-foreground/75 max-w-xl text-lg leading-8">
        <p>
          Research and product teams work with very different kinds of data. Our
          projects range from viewers for captured spaces to analysis tools for
          movement data and platforms for product records.
        </p>
        <p className="mt-5">
          Founded in 2011, Hypercliq is based in Athens and works with research
          partners across Europe.
        </p>
        <Link
          href="/about"
          className="border-accent text-accent mt-7 inline-block border-b-2 pb-1 text-base font-semibold"
        >
          About Hypercliq ↗
        </Link>
      </div>
    </section>
  )
}
