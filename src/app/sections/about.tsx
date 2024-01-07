import HighlightSpan from '@/app/components/HighlightSpan'

const sentences = [
  'Shaping the Future, Today',
  'Innovation Meets Excellence',
  'Transforming Tomorrow',
  'Pioneering Progress',
  'Unlocking Potential, Unleashing Growth',
]

export default function About() {
  return (
    <section
      id="about"
      className="m-auto flex max-w-7xl flex-col items-start py-10 md:py-16 lg:flex-row"
    >
      <header className=" w-full px-4 md:w-1/2 md:px-0 md:pl-8">
        <div className="truncate font-semibold text-accent sm:text-lg">
          {sentences[0]}
        </div>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Data-Driven Solutions for the Modern World
        </h2>
      </header>
      <div className="relative mt-6 w-full px-4 text-xl leading-8 tracking-normal md:w-1/2 md:px-0 md:pl-8 lg:mt-0">
        <p>
          We are a team of data scientists, software engineers, and business
          developers who work together to build{' '}
          <HighlightSpan>data-driven solutions</HighlightSpan>.
        </p>
        <p className="mt-4">
          With our expertise in cutting-edge technologies and deep understanding
          of <HighlightSpan>data-analysis</HighlightSpan>, we empower businesses
          to make informed decisions and drive growth.
        </p>
        <p className="mt-4">
          Our passion for <HighlightSpan>innovation</HighlightSpan> drives us to
          constantly explore new possibilities and deliver impactful solutions
          that transform industries.
        </p>
        <p className="mt-4">
          Join us on this exciting journey towards a{' '}
          <HighlightSpan>data-powered future</HighlightSpan>.
        </p>
      </div>
    </section>
  )
}
