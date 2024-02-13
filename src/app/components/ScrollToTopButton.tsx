'use client'

import { ArrowUpIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full bg-accent p-2 text-onAccent shadow lg:animate-bounce ${isVisible ? 'block' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  )
}

export default ScrollToTopButton
