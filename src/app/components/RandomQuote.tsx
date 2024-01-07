'use client'

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@uidotdev/usehooks'

const quotes = [
  {
    id: 1,
    quote: 'In God we trust. All others must bring data.',
    author: 'W. Edwards Deming',
  },
  {
    id: 2,
    quote:
      'Information is the oil of the 21st century, and analytics is the combustion engine.',
    author: 'Peter Sondergaard',
  },
  {
    id: 3,
    quote:
      "It's easy to lie with statistics. It's hard to tell the truth without it.",
    author: 'Andrejs Dunkels',
  },
  {
    id: 4,
    quote:
      'Not everything that can be counted counts, and not everything that counts can be counted.',
    author: 'William Bruce Cameron',
  },
  {
    id: 5,
    quote:
      'Data is the new oil. It’s valuable, but if unrefined it cannot really be used.',
    author: 'Clive Humby',
  },
  {
    id: 6,
    quote: 'The world is one big data problem.',
    author: 'Andrew McAfee',
  },
  {
    id: 7,
    quote: 'Data really powers everything that we do.',
    author: 'Jeff Weiner',
  },
  {
    id: 8,
    quote: 'Data matures like wine, applications like fish.',
    author: 'James Governor',
  },
  {
    id: 9,
    quote:
      'Data are just summaries of thousands of stories – tell a few of those stories to help make the data meaningful.',
    author: 'Chip & Dan Heath',
  },
  {
    id: 10,
    quote:
      'You can have data without information, but you cannot have information without data.',
    author: 'Daniel Keys Moran',
  },
  {
    id: 11,
    quote: 'A good decision is based on knowledge and not on numbers',
    author: 'Plato',
  },
  {
    id: 12,
    quote: 'Facts are stubborn things, but statistics are pliable.',
    author: 'Mark Twain',
  },
  {
    id: 13,
    quote: 'It is a capital mistake to theorize before one has data.',
    author: 'Sherlock Holmes',
  },
  {
    id: 14,
    quote: 'We are surrounded by data, but starved for insights',
    author: 'Jay Baer',
  },
  {
    id: 15,
    quote:
      'The core advantage of data is that it tells you something about the world that you didn’t know before',
    author: 'Hilary Mason',
  },
]

const RandomQuote = () => {
  const [quote, setQuote] = useState(quotes[0])
  const [isInView, setIsInView] = useState(true)
  const [refCallback, entry] = useIntersectionObserver<HTMLElement>({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px',
  })

  useEffect(() => {
    if (entry?.isIntersecting !== isInView) {
      setIsInView(entry?.isIntersecting ?? false)
    }
  }, [entry, isInView])

  useEffect(() => {
    if (!isInView) {
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(newQuote)
    }
  }, [isInView])

  return (
    <blockquote
      ref={refCallback}
      className="quote mt-8 border-l-4 border-foreground/60 bg-surface p-4 italic text-foreground/60 dark:border-darkForeground/60 dark:bg-darkSurface dark:text-darkForeground/60"
    >
      <p className="mb-2  text-lg">“{quote.quote}”</p>
      <cite className="block text-right">- {quote.author}</cite>
    </blockquote>
  )
}

export default RandomQuote
