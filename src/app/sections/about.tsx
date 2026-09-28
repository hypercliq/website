export default function About() {
  return (
    <section
      id="about"
      className="m-auto flex max-w-7xl flex-col items-start py-10 md:py-16 lg:flex-row"
    >
      <header className="w-full px-4 md:w-1/2 md:px-0 md:pl-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          What we do
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Making complex information usable
        </h2>
      </header>
      <div className="mt-6 w-full px-4 text-lg leading-8 text-foreground/75 md:w-1/2 md:px-0 md:pl-8 lg:mt-0">
        <p>
          We work at the intersection of data engineering, applied AI, and
          research. We turn complex information into tools people can use.
        </p>
        <p className="mt-4">
          Our published work spans product design, workplace ergonomics,
          construction, and agriculture.
        </p>
      </div>
    </section>
  )
}
