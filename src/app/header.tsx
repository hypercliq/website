'use client'

import LogoSVG, { LogoMode } from '@/app/components/LogoSVG'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  {
    text: 'Domains',
    href: '/domains',
    description: 'Discover our domains',
  },
  { text: 'Services', href: '/services', description: 'View our services' },
  {
    text: 'Solutions',
    href: '/solutions',
    description: 'Explore our solutions',
  },
  { text: 'About', href: '/about', description: 'Learn more about us' },
  { text: 'Careers', href: '/careers', description: 'Join our team' },
  { text: 'Contact', href: '/contact', description: 'Get in touch with us' },
]

export default function Header() {
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-10 bg-background">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">hypercliq</span>
            <div className="h-8 w-8 sm:hidden">
              <LogoSVG mode={LogoMode.GraphicOnly} />
            </div>
            <div className="hidden h-8 w-44 sm:block">
              <LogoSVG mode={LogoMode.FullLogo} />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? 'cursor-default text-primary'
                  : 'text-foreground/75 hover:text-foreground'
              } text-sm font-semibold leading-6`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div
          className="fixed inset-0 z-[900] bg-foreground/50"
          aria-hidden="true"
        />
        <DialogPanel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Hypercliq</span>
              <div className="h-8 w-auto">
                <LogoSVG mode={LogoMode.GraphicOnly} />
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground/50">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${
                      pathname === link.href
                        ? 'cursor-default text-primary'
                        : 'text-foreground/75 hover:text-foreground'
                    } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
