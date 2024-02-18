'use client'

import { useEffect, useState } from 'react'

const useCSSVariable = (variableName: string) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const fetchCSSVariable = () => {
      const style = getComputedStyle(document.body)
      const value = style.getPropertyValue(variableName).trim()
      setValue(value)
    }

    // Initial fetch
    fetchCSSVariable()

    // Set up a mutation observer to detect class changes on the html element
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          fetchCSSVariable()
        }
      }
    })

    observer.observe(document.documentElement, {
      attributes: true, // Listen to attribute changes
    })

    // Clean up observer on component unmount
    return () => observer.disconnect()
  })

  return value
}

export default useCSSVariable
