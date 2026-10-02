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
          The work starts with understanding the problem.
        </h2>
      </div>
      <div className="text-foreground/75 type-body max-w-xl">
        <p>
          Research and product teams often have more information than they can
          use. We help give that information structure, then build tools around
          the people who need it.
        </p>
        <p className="mt-5">
          Our recent work includes 3D scans, XR, and construction technology.
          Earlier projects cover workplace health and product design.
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
