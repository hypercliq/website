'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React, { useState, useEffect } from 'react'
// import '@/app/styles/logo-animations.css'
import LogoSVG from './LogoSVG'

type Props = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="mx-auto h-screen max-w-3xl">
        <LogoSVG animate={true} />
      </div>
    )
  }

  return (
    <NextThemesProvider enableSystem={true} attribute="class">
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
