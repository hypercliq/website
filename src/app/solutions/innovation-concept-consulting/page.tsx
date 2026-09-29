import type { Metadata } from 'next'
import Link from 'next/link'

const sportInfinityPath =
  '/solutions/sustainable-design-data-management-platform'

export const metadata: Metadata = {
  title: 'Research concept and funding support',
  description: 'This work is now covered in the Sport Infinity case study.',
  alternates: { canonical: sportInfinityPath },
  robots: { index: false, follow: true },
}

export default function ResearchStrategyMoved() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Research strategy in Sport Infinity
      </h1>
      <p className="text-foreground/75 mt-7 max-w-2xl text-lg leading-8">
        Our research concept work is now described alongside the materials data
        platform we built for Sport Infinity.
      </p>
      <Link
        href={sportInfinityPath}
        className="border-accent text-accent mt-8 inline-block border-b-2 pb-1 font-semibold"
      >
        Read the Sport Infinity case study ↗
      </Link>
    </main>
  )
}
