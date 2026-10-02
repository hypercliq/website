'use client'

import { usePathname } from 'next/navigation'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

function focusSiteTop() {
  document.querySelector<HTMLAnchorElement>('[data-site-top-link]')?.focus({
    preventScroll: true,
  })
}

export default function BackToTop() {
  const pathname = usePathname()
  return <BackToTopControl key={pathname} />
}

function BackToTopControl() {
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const updateVisibility = useCallback(() => {
    const shouldShow = window.scrollY >= window.innerHeight

    if (shouldShow === visibleRef.current) return

    if (!shouldShow && document.activeElement === buttonRef.current) {
      focusSiteTop()
    }

    visibleRef.current = shouldShow
    setVisible(shouldShow)
  }, [])

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(updateVisibility)

    return () => window.cancelAnimationFrame(frame)
  }, [updateVisibility])

  useLayoutEffect(() => {
    if (!visible) return

    const button = buttonRef.current
    return () => {
      if (document.activeElement === button) focusSiteTop()
    }
  }, [visible])

  useEffect(() => {
    let frame = 0
    const scheduleUpdate = () => {
      if (frame !== 0) return

      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateVisibility()
      })
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('pageshow', scheduleUpdate)
    window.addEventListener('popstate', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('pageshow', scheduleUpdate)
      window.removeEventListener('popstate', scheduleUpdate)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [updateVisibility])

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    focusSiteTop()
    visibleRef.current = false
    setVisible(false)
  }

  if (!visible) return null

  return (
    <button
      ref={buttonRef}
      type="button"
      className="floating-control on-accent"
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  )
}
