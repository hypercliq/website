import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/app/header'
import Footer from '@/app/footer'
import ThemeProvider from '@/app/components/ThemeProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hypercliq: Data-Driven Solutions with AI & Machine Learning',
  description:
    'Hypercliq, leveraging Machine Learning and Artificial Intelligence, transforms data into actionable insights. Our expertise lies in delivering data-driven solutions, helping businesses unlock their potential. With a strong presence in European research projects, we partner with leading institutions and companies to face and overcome new challenges.',
  keywords:
    'Hypercliq, AI, Machine Learning, Statistical Data Analysis, European Research Projects, Data Extraction',
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
