import LogoSVG, { LogoMode } from '@/app/components/LogoSVG'
import RandomQuote from '@/app/components/RandomQuote'
import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import Link from 'next/link'
import GitHubIcon from './components/GitHubIcon'
import LinkedInIcon from './components/LinkedInIcon'
import XIcon from './components/XIcon'
import YouTubeIcon from './components/YouTubeIcon'

import pkg from '../../package.json'

const impact = [
  { text: 'Solutions', href: '/solutions' },
  // { text: 'Collaborations', href: '/collaborations' },
  { text: 'Domains', href: '/domains' },
  // { text: 'Research & Development', href: '/research-development' },
]

const company = [
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
  { text: 'Careers', href: '/careers' },
  { text: 'Contact', href: '/contact' },
]

const legal = [
  { text: 'Terms of Service', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Cookie Policy', href: '/cookies' },
]

const LinkSection = ({
  title,
  links,
}: {
  title: string
  links: { text: string; href: string }[]
}) => (
  <div className="">
    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground/60">
      {title}
    </h3>
    <ul>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.text}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-16 md:px-8 md:pb-8 lg:pt-32">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            {/* First container */}
            <div className="flex h-12 w-12 justify-start">
              <LogoSVG mode={LogoMode.GraphicOnly} />
            </div>
            {/* <p className="mb-4">Empowering Innovation Through Data: Unleashing Potential, Overcoming Challenges</p> */}
            <RandomQuote />
            <div className="mt-8 flex space-x-4">
              <Link
                href="https://x.com/hypercliq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="h-6 w-6 fill-foreground/60 hover:fill-foreground" />
              </Link>
              <Link
                href="https://linkedin.com/company/hypercliq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-6 w-6 fill-foreground/60 hover:fill-foreground" />
              </Link>
              <Link
                href="https://github.com/hypercliq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-6 w-6 fill-foreground/60 hover:fill-foreground" />
              </Link>
              <Link
                href="https://youtube.com/@hypercliq/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="h-6 w-6 fill-foreground/60 hover:fill-foreground" />
              </Link>
            </div>
          </div>
          <div className="mt-16 w-full lg:mt-0 lg:w-2/3 lg:pl-8">
            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-4 lg:gap-x-0 lg:px-8">
              <LinkSection title="Impact" links={impact} />
              <LinkSection title="Company" links={company} />
              <LinkSection title="Legal" links={legal} />
              <div className="toolbox">
                {/* Dark/Light Mode Switch */}
                <ThemeSwitcher />
                {/* Language Dropdown */}
                {/* <LanguageSelector /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-sm">
          <hr className="border-foreground/60" />
          <div className="mt-4 flex items-center justify-between">
            <p className="pt-4 md:pt-8">
              © {new Date().getFullYear()} Hypercliq. All rights reserved.
            </p>
            <p className="pt-4 md:pt-8">
              <Link href={pkg.repository.url}>
                <span className="text-foreground/60">v{pkg.version}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
