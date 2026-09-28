import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Working with Hypercliq on data, software, and research projects.',
}

export default function Careers() {
  return (
    <main className="min-h-[65vh]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
          Careers
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Work with us.
        </h1>
        <p className="text-foreground/75 mt-8 max-w-2xl text-xl leading-8">
          Our projects sit between software engineering, data, and applied
          research. If your experience fits that kind of work, we would like to
          hear from you.
        </p>
        <div className="border-foreground/15 mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-foreground/75 mt-4 max-w-xl leading-7">
            Send a short introduction and your CV to{' '}
            <a
              className="text-accent font-semibold underline underline-offset-4"
              href="mailto:info@hypercliq.com"
            >
              info@hypercliq.com
            </a>
            . Tell us what you have worked on and what interests you.
          </p>
        </div>
      </div>
    </main>
  )
}
