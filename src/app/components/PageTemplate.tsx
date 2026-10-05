import ContentLink from '@/app/components/ContentLink'
import { company } from '@/app/data/company'

interface Section {
  title: string
  content: React.ReactNode
}

interface PageProps {
  title: string
  intro: string
  sections: Section[]
  lastUpdated: string
}

export default function PageTemplate({
  title,
  intro,
  sections,
  lastUpdated,
}: PageProps) {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="border-divider bg-surface border-b">
        <div className="site-container section-standard">
          <p className="text-accent eyebrow">Information</p>
          <h1 className="heading-section mt-4">{title}</h1>
          <p className="text-foreground/75 type-body mt-6 max-w-2xl">{intro}</p>
        </div>
      </header>
      <div className="site-container section-standard grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-foreground/65 text-sm">Updated {lastUpdated}</p>
        </div>
        <div className="max-w-2xl">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-divider border-t py-7 first:border-t-0 first:pt-0"
            >
              <h2 className="heading-item">{section.title}</h2>
              <div className="text-foreground/75 type-prose mt-4">
                {section.content}
              </div>
            </section>
          ))}
          <div className="border-divider border-t pt-8">
            <h2 className="heading-item">Contact</h2>
            <p className="text-foreground/75 type-prose mt-4">
              Questions about this page can be sent to{' '}
              <ContentLink href={`mailto:${company.email}`} variant="inline">
                {company.email}
              </ContentLink>
              .
            </p>
            <address className="text-foreground/75 mt-4 not-italic">
              {company.name}
              <br />
              {company.addressLines.join(', ')}
            </address>
            <ContentLink
              href="/contact"
              className="mt-6 inline-block"
              variant="action"
            >
              Contact details
            </ContentLink>
          </div>
        </div>
      </div>
    </main>
  )
}
