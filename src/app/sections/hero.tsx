'use client'

import Link from 'next/link'
import Connections from '../components/Connections'
// import { useFeatureFlag } from '../hooks/useFeatureFlag'

export default function Hero() {
  // const isFeatureEnabled = useFeatureFlag('connections')

  return (
    <section
      id="hero"
      className="relative -top-20 -mb-20 h-max overflow-hidden bg-surface"
    >
      <Connections
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div className="relative m-auto flex min-h-screen max-w-7xl flex-col items-center justify-center pt-24 md:flex-row">
        <div className="flex w-full flex-col justify-center pl-4 md:pl-8 lg:w-1/2">
          <p className="text-2xl font-semibold uppercase tracking-widest sm:text-3xl">
            Hello
          </p>
          <h1 className="text-7xl font-light tracking-tight md:text-8xl lg:text-9xl">
            We are{' '}
            <span className="w-1/5 animate-highlight bg-gradient-to-r from-primary from-[50%] to-white/0 to-[50%] bg-[length:201%_100%] bg-[100%_0] font-semibold tracking-normal">
              hypercliq
            </span>
          </h1>
          <div className="mb-5 mt-10 flex items-center gap-x-6">
            <Link
              href="/services"
              className="text-md rounded-md bg-accent px-3.5 py-2.5 font-semibold text-onAccent shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Our services
            </Link>
            <Link
              href="/about"
              className="text-md group font-semibold leading-6"
            >
              Learn more{' '}
              <span
                className="inline-block transition-all group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              >
                {'\u2192'}
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </section>
  )
}
