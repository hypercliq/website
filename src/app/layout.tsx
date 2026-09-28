import ThemeProvider from '@/app/components/ThemeProvider'
import Footer from '@/app/footer'
import '@/app/globals.css'
import Header from '@/app/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Hypercliq — Spatial tools and data systems',
    template: '%s — Hypercliq',
  },
  description:
    'Hypercliq builds spatial tools, data platforms, and research software with partners across Europe.',
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
