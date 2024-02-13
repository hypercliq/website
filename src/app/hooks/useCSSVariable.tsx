'use client'

import { useEffect, useState } from 'react'

const useCSSVariable = (variableName: string) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const fetchCSSVariable = () => {
      const style = getComputedStyle(document.body)
      console.log('🚀 ~ fetchCSSVariable ~ style:', style.backgroundColor)
      const value = style.getPropertyValue(variableName).trim()
      console.log('🚀 ~ fetchCSSVariable ~ value:', value)
      // Assuming the CSS variable contains RGB values, e.g., "255 255 255"
      // Convert it to a hex value or use it directly in Three.js as needed
      setValue(value)
    }

    // Initial fetch
    fetchCSSVariable()

    // Set up a mutation observer to detect class changes on the body element
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
