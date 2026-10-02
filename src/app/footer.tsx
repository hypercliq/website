import ContentLink from '@/app/components/ContentLink'
import LogoSVG from '@/app/components/LogoSVG'
import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import { company } from '@/app/data/company'
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
    <footer className="border-divider bg-background border-t">
      <div className="site-container pt-16 pb-[max(5rem,calc(3rem+env(safe-area-inset-bottom)))] md:pt-20">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div>
            <Link
              href="/"
              aria-label="Hypercliq home"
              className="block h-8 w-40"
            >
              <LogoSVG />
            </Link>
            <p className="text-foreground/75 type-prose mt-6 max-w-xs">
              Spatial tools, data systems, and research software. Based in
              Athens, working across Europe.
            </p>
            <ContentLink
              href={`mailto:${company.email}`}
              className="mt-5 inline-block font-semibold"
              variant="action"
            >
              {company.email}
            </ContentLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <h2 className="text-accent eyebrow-compact">{group.label}</h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <ContentLink
                        href={href}
                        className="text-foreground/75 hover:text-accent text-sm"
                        variant="nav"
                      >
                        {label}
                      </ContentLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-divider text-foreground/65 mt-16 flex flex-col gap-6 border-t pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© Hypercliq</p>
          <div className="flex items-center gap-6">
            <ContentLink
              href="https://www.linkedin.com/company/hypercliq"
              target="_blank"
              rel="noopener noreferrer"
              variant="nav"
            >
              LinkedIn
            </ContentLink>
            <ContentLink
              href="https://github.com/hypercliq"
              target="_blank"
              rel="noopener noreferrer"
              variant="nav"
            >
              GitHub
            </ContentLink>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
