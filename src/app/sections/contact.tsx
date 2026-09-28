import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="bg-accent text-onAccent">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-28">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-85">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A problem worth working through?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 opacity-85">
            Tell us about the work and the questions behind it.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-fit border-b-2 border-current pb-1 text-lg font-semibold"
        >
          Contact us ↗
        </Link>
      </div>
    </section>
  )
}
