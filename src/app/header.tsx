'use client'

import LogoSVG from '@/app/components/LogoSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

const links = [
  { label: 'Work', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Fields', href: '/domains' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()
  const currentSection = links.find(
    ({ href }) => pathname === href || pathname.startsWith(`${href}/`),
  )?.href

  return (
    <header className="border-foreground/15 bg-background relative z-10 border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus-visible:outline-accent block h-8 w-40 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="Hypercliq home"
        >
          <LogoSVG />
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isActive = currentSection === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname === link.href
                    ? 'page'
                    : isActive
                      ? 'location'
                      : undefined
                }
                className={`focus-visible:outline-accent text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 ${isActive ? 'text-accent underline decoration-2 underline-offset-8' : 'text-foreground/75 hover:text-accent'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <details ref={mobileMenuRef} className="group relative lg:hidden">
          <summary className="border-foreground/25 focus-visible:outline-accent cursor-pointer list-none border px-4 py-2 text-sm font-semibold focus-visible:outline-2">
            Menu <span aria-hidden="true">☰</span>
          </summary>
          <div className="border-foreground/20 bg-background absolute top-full right-0 mt-3 w-56 border p-3 shadow-lg">
            {links.map((link) => {
              const isActive = currentSection === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={
                    pathname === link.href
                      ? 'page'
                      : isActive
                        ? 'location'
                        : undefined
                  }
                  onClick={() => mobileMenuRef.current?.removeAttribute('open')}
                  className={`focus-visible:outline-accent block px-3 py-2 text-base font-medium focus-visible:outline-2 ${isActive ? 'bg-surface text-accent' : 'hover:bg-surface'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </details>
      </nav>
    </header>
  )
}
