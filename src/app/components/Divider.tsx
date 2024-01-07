'use client'

import { useCallback, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@uidotdev/usehooks'

const Divider = () => {
  const [customRef, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [node, setNode] = useState<HTMLDivElement | undefined>()

  const combinedRef = useCallback(
    (node: HTMLDivElement) => {
      customRef(node)
      setNode(node)
    },
    [customRef],
  )

  useEffect(() => {
    const handleScroll = () => {
      if (entry?.isIntersecting && node) {
        const pixelsScrolled =
          window.scrollY - node.offsetTop + window.innerHeight
        const parallaxFactor = 0.03 // Adjust this to change the speed of the parallax effect
        setScrollPosition(pixelsScrolled * parallaxFactor)
      } else {
        setScrollPosition(0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [entry, node])

  return (
    <div ref={combinedRef as any} className="relative -z-10">
      <svg
        style={{ transform: `translateY(${scrollPosition}%)` }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 224"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgb(var(--color-surface))', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: 'rgb(var(--color-background))',
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 L 48 10.7 C 96 21 192 43 288 42.7 C 384 43 480 21 576 26.7 C 672 32 768 64 864 80 C 960 96 1056 96 1152 90.7 C 1248 85 1344 75 1392 69.3 L 1440 64 L 1440 224 L 1392 224 C 1344 224 1248 224 1152 224 C 1056 224 960 224 864 224 C 768 224 672 224 576 224 C 480 224 384 224 288 224 C 192 224 96 224 48 224 L 0 224 Z"
          fill="url(#gradient)"
        />
      </svg>
    </div>
  )
}

export default Divider
