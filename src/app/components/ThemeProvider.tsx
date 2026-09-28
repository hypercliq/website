'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider enableSystem={true} attribute="class">
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
