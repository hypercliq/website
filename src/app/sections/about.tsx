import ContentLink from '@/app/components/ContentLink'

export default function About() {
  return (
    <section
      className="site-container section-generous grid gap-10 md:grid-cols-2"
      aria-labelledby="about-title"
    >
      <div>
        <p className="text-accent eyebrow">Our approach</p>
        <h2 id="about-title" className="heading-section mt-4 max-w-xl">
          Understand the problem. Build around the people.
        </h2>
      </div>
      <div className="text-foreground/75 type-body max-w-xl">
        <p>
          Research and product teams need ways to make sense of complex
          information. We help structure their data and build tools for the
          people who collect, explore, and use it.
        </p>
        <p className="mt-5">
          Our work spans 3D scans, extended reality (XR), and construction
          technology, alongside earlier projects in workplace health and product
          design.
        </p>
        <ContentLink
          href="/about"
          className="mt-7 inline-block text-base"
          variant="action"
        >
          About Hypercliq
        </ContentLink>
      </div>
    </section>
  )
}
