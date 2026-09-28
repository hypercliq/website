import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Hypercliq in Athens, Greece.',
}

export default function Contact() {
  return (
    <main className="min-h-[65vh]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
          Contact
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Tell us what you are working on.
        </h1>
        <p className="text-foreground/75 mt-7 max-w-2xl text-xl leading-8">
          A short email is enough to start a conversation. We read messages
          about projects, research collaborations, and technical questions.
        </p>
        <div className="border-foreground/20 mt-16 grid border-t md:grid-cols-2">
          <div className="py-8 md:py-10">
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Email
            </p>
            <a
              href="mailto:info@hypercliq.com"
              className="decoration-accent mt-4 inline-block text-2xl font-semibold tracking-tight underline underline-offset-8"
            >
              info@hypercliq.com
            </a>
            <p className="text-accent mt-8 text-xs font-semibold tracking-[0.18em] uppercase">
              Phone
            </p>
            <a href="tel:+302112128520" className="mt-4 inline-block text-xl">
              +30 211 212 8520
            </a>
          </div>
          <div className="border-foreground/20 border-t py-8 md:border-t-0 md:border-l md:py-10 md:pl-12">
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Office
            </p>
            <address className="mt-4 text-xl leading-8 not-italic">
              Prantouna 57
              <br />
              11525 Athens
              <br />
              Greece
            </address>
            <a
              className="border-accent text-accent mt-7 inline-block border-b pb-1 font-semibold"
              href="https://www.openstreetmap.org/?mlat=37.99805&mlon=23.77473#map=17/37.99805/23.77473"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on OpenStreetMap ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
