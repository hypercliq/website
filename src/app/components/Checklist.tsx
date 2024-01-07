'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

type Sentence = {
  id: number
  text: string
}

type CheckListProps = {
  sentences: Sentence[]
}

export default function CheckList({ sentences }: Readonly<CheckListProps>) {
  const [isVisible, setIsVisible] = useState(false)
  const [refCallback, entry] = useIntersectionObserver<HTMLDivElement>()

  useEffect(() => {
    setIsVisible(entry?.isIntersecting ?? false)
  }, [entry])

  return (
    <div className="mt-4 grid grid-cols-1 gap-2 px-4 text-left text-xl sm:grid-cols-2 md:px-8">
      {sentences.map((sentence) => (
        <div
          key={sentence.id}
          className="flex items-center justify-start p-2"
          ref={refCallback}
        >
          <CheckIcon
            className={`ease-[cubic-bezier(0.36, 0, 0.66, -0.56)] mr-2 h-10 w-10 flex-shrink-0 stroke-[2.5] ${
              isVisible ? 'text-accent' : 'text-surface'
            } transition-colors duration-1000`}
          />
          <span>{sentence.text}</span>
        </div>
      ))}
    </div>
  )
}
