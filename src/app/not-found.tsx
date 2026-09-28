import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-8">
      <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        We couldn’t find that page.
      </h1>
      <p className="text-foreground/75 mt-6 text-lg">
        The address may have changed, or the page may no longer be here.
      </p>
      <Link
        href="/"
        className="border-accent text-accent mt-8 w-fit border-b-2 pb-1 font-semibold"
      >
        Back to home ↗
      </Link>
    </main>
  )
}
