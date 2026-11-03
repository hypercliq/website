import ContentLink from '@/app/components/ContentLink'

export default function Hero() {
  return (
    <section className="border-divider bg-surface border-b">
      <div className="site-container section-generous grid items-end gap-12 md:min-h-[40rem] md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-accent eyebrow-brand">
            Hypercliq · Athens, Greece
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Thoughtful software for difficult data.
          </h1>
          <p className="text-foreground/75 type-intro mt-8 max-w-2xl">
            We help teams explore spatial data, connect complex information, and
            turn research into working software. Based in Athens, we work with
            partners across Europe.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <ContentLink
              href="/work"
              className="inline-flex items-center px-6 py-3"
              variant="primary"
            >
              See our work
            </ContentLink>
            <ContentLink
              href="/contact"
              className="inline-flex items-center"
              variant="action"
            >
              Get in touch
            </ContentLink>
          </div>
        </div>
        <div className="border-control hidden border-t pt-5 md:block">
          <p className="text-accent eyebrow">Our focus</p>
          <p className="type-body mt-4">
            Data people can explore. Tools they can use.
          </p>
        </div>
      </div>
    </section>
  )
}
