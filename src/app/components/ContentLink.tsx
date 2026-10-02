import Link from 'next/link'
import { Children, type ComponentProps, type ReactNode } from 'react'

export type ContentLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href: string
  variant?: 'inline' | 'action' | 'back' | 'primary' | 'nav'
  tone?: 'accent' | 'on-accent'
}

// Keep the final word and its decorative marker together on wrapped labels.
function withTrailingArrow(children: ReactNode, arrow: string) {
  const parts = Children.toArray(children)
  const last = parts.pop()
  if (typeof last === 'string') {
    const match = last.match(/^(.*?)(\S+)\s*$/s)
    if (match) {
      return (
        <>
          {parts}
          {match[1]}
          <span className="link-ending">
            {match[2]}
            {'\u00a0'}
            <span aria-hidden="true">{arrow}</span>
          </span>
        </>
      )
    }
  }
  return (
    <>
      {parts}
      <span className="link-ending">
        {last}
        {'\u00a0'}
        <span aria-hidden="true">{arrow}</span>
      </span>
    </>
  )
}

export default function ContentLink({
  href,
  variant = 'inline',
  tone = 'accent',
  className = '',
  children,
  ...props
}: ContentLinkProps) {
  const external = /^(https?:)?\/\//i.test(href)
  const contact = /^(mailto:|tel:)/i.test(href)
  const internal = href.startsWith('/') && !external
  const arrow = contact
    ? undefined
    : variant === 'back'
      ? '←'
      : external
        ? '↗'
        : variant === 'action' || variant === 'primary'
          ? '→'
          : undefined
  const label =
    arrow === '←' ? (
      <>
        <span aria-hidden="true">←</span>
        {'\u00a0'}
        {children}
      </>
    ) : arrow ? (
      withTrailingArrow(children, arrow)
    ) : (
      children
    )
  const shared = {
    ...props,
    href,
    className: `content-link content-link-${variant} ${tone === 'on-accent' ? 'on-accent' : ''} ${className}`,
    'data-contact': contact || undefined,
    // One inline label keeps wrapping natural even in a flex-based treatment.
    children: <span>{label}</span>,
  }
  return internal ? <Link {...shared} /> : <a {...shared} />
}
