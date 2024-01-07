'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div className="relative flex h-[--screen-height] flex-col items-center justify-center bg-surface text-center">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold">404</h2>
        <hr className="border-1 w-16 rotate-90 border-accent" />
        <p>Could not find requested resource</p>
      </div>
      <button
        className="mt-8 cursor-pointer rounded-md bg-accent px-4 py-2 font-semibold text-onAccent hover:bg-opacity-80 hover:dark:bg-opacity-80"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  )
}
