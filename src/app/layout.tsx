import BackToTop from '@/app/components/BackToTop'
import ContentLink from '@/app/components/ContentLink'
import ThemeProvider from '@/app/components/ThemeProvider'
import Footer from '@/app/footer'
import '@/app/globals.css'
import Header from '@/app/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://hypercliq.com'),
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
          <ContentLink
            href="#main-content"
            variant="nav"
            className="skip-link bg-surface px-6 py-3 font-semibold"
          >
            Skip to content
          </ContentLink>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
