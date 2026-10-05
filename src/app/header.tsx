'use client'

import LogoSVG from '@/app/components/LogoSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Fields', href: '/fields' },
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
    <header className="border-divider bg-background relative z-10 border-b">
      <nav
        className="site-container flex items-center justify-between gap-8 py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          data-site-top-link
          className="block h-8 w-40 shrink-0"
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
                className={`nav-link hover:text-accent text-sm font-medium ${isActive ? 'nav-link-active text-accent' : 'text-foreground/75'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <details ref={mobileMenuRef} className="group relative lg:hidden">
          <summary className="border-control flex cursor-pointer list-none items-center gap-2 border px-4 py-2 text-sm font-semibold">
            Menu
            <svg
              aria-hidden="true"
              focusable="false"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="border-boundary bg-background absolute top-full right-0 mt-3 w-56 border p-3 shadow-lg">
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
                  className={`nav-link hover:text-accent block px-3 py-2 text-base font-medium ${isActive ? 'bg-surface text-accent' : 'hover:bg-surface'}`}
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
