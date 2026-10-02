import ContentLink from '@/app/components/ContentLink'
import { company } from '@/app/data/company'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Hypercliq in Athens, Greece.',
}

export default function Contact() {
  return (
    <main className="min-h-[65vh]">
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-generous">
          <p className="text-accent eyebrow">Contact</p>
          <h1 className="heading-page mt-4 max-w-4xl">
            Tell us what you are working on.
          </h1>
          <p className="text-foreground/75 type-intro mt-7 max-w-2xl">
            A short email is enough to start a conversation. We read messages
            about projects, research collaborations, and technical questions.
          </p>
        </div>
      </header>
      <section
        className="site-container section-standard"
        aria-label="Contact details"
      >
        <div className="border-boundary grid border-t md:grid-cols-2">
          <div className="py-8 md:py-10">
            <p className="text-accent eyebrow">Email</p>
            <ContentLink
              href={`mailto:${company.email}`}
              className="mt-4 inline-block text-2xl font-semibold tracking-tight"
              variant="action"
            >
              {company.email}
            </ContentLink>
            <p className="text-accent eyebrow mt-8">Phone</p>
            <ContentLink
              href={company.phoneHref}
              className="mt-4 inline-block text-xl"
              variant="action"
            >
              {company.phone}
            </ContentLink>
          </div>
          <div className="border-boundary border-t py-8 md:border-t-0 md:border-l md:py-10 md:pl-12">
            <p className="text-accent eyebrow">Office</p>
            <address className="type-intro mt-4 not-italic">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ContentLink
              className="mt-7 inline-block"
              href="https://www.openstreetmap.org/?mlat=37.99805&mlon=23.77473#map=17/37.99805/23.77473"
              target="_blank"
              rel="noopener noreferrer"
              variant="action"
            >
              View on OpenStreetMap
            </ContentLink>
          </div>
        </div>
      </section>
    </main>
  )
}
