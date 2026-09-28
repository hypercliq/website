import LogoSVG from '@/app/components/LogoSVG'
import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import Link from 'next/link'

const groups = [
  {
    label: 'Explore',
    links: [
      ['Work', '/solutions'],
      ['Services', '/services'],
      ['Fields', '/domains'],
    ],
  },
  {
    label: 'Company',
    links: [
      ['About', '/about'],
      ['Careers', '/careers'],
      ['Contact', '/contact'],
    ],
  },
  {
    label: 'Information',
    links: [
      ['Privacy', '/privacy'],
      ['Cookies', '/cookies'],
      ['Terms', '/terms'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-foreground/15 bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div>
            <Link
              href="/"
              aria-label="Hypercliq home"
              className="block h-8 w-40"
            >
              <LogoSVG />
            </Link>
            <p className="text-foreground/75 mt-6 max-w-xs leading-7">
              Data systems, applied AI, and research software. Based in Athens,
              working across Europe.
            </p>
            <a
              href="mailto:info@hypercliq.com"
              className="border-accent text-accent mt-5 inline-block border-b pb-1 font-semibold"
            >
              info@hypercliq.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <h2 className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
                  {group.label}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-foreground/75 hover:text-foreground text-sm hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-foreground/15 text-foreground/65 mt-16 flex flex-col gap-6 border-t pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hypercliq</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/hypercliq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/hypercliq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub ↗
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
