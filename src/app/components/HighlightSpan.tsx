'use client'

import { useIntersectionObserver } from '@uidotdev/usehooks'

export default function HighlightSpan({
  children,
}: {
  readonly children: string
}) {
  const [ref, entry] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.1,
  })

  const classNames = [
    'animate-highlight',
    'bg-gradient-to-r',
    'from-primary',
    'from-[50%]',
    'to-white/0',
    'to-[50%]',
    'bg-[length:201%_100%]',
    'bg-[100%_0]',
  ]

  return (
    <span
      ref={ref}
      className={`font-bold ${
        entry?.isIntersecting ? classNames.join(' ') : ''
      }`}
    >
      {children}
    </span>
  )
}
