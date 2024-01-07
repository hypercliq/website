'use client'

import { useState, useEffect } from 'react'

type CarouselDirection = 'left' | 'right' | 'top' | 'bottom'

import { useIntersectionObserver } from '@uidotdev/usehooks'
interface TextCarouselProps {
  textArray: string[]
  className: string
  innerClassName?: string
  fromDirection?: CarouselDirection
  toDirection?: CarouselDirection
  slideDuration?: number
  tag?: React.ElementType
}

const TextCarousel: React.FC<TextCarouselProps> = ({
  textArray,
  className,
  innerClassName = '',
  fromDirection = 'left',
  toDirection = 'right',
  slideDuration = 5,
  tag: Tag = 'div',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(textArray.length - 1)
  const [isInView, setIsInView] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const [ref, entry] = useIntersectionObserver<any>({
    threshold: 0.1,
    rootMargin: '0px',
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIsInView(true)
    } else {
      setIsInView(false)
      setFirstRender(true)
    }
  }, [entry])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let timeout: NodeJS.Timeout

    if (isInView) {
      if (firstRender) {
        timeout = setTimeout(() => {
          setFirstRender(false)
          setPreviousIndex(currentIndex)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length)
        }, 1000)
      } else {
        interval = setInterval(() => {
          setPreviousIndex(currentIndex)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length)
        }, slideDuration * 1000)
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [textArray, slideDuration, currentIndex, isInView, firstRender])

  const animationVariants = {
    left: {
      in: 'animate-left-slide-in',
      out: 'animate-left-slide-out',
    },
    right: {
      in: 'animate-right-slide-in',
      out: 'animate-right-slide-out',
    },
    top: {
      in: 'animate-top-slide-in',
      out: 'animate-top-slide-out',
    },
    bottom: {
      in: 'animate-bottom-slide-in',
      out: 'animate-bottom-slide-out',
    },
  }

  const getClassName = (index: number) => {
    if (!isInView || firstRender) {
      return index === currentIndex
        ? 'absolute h-full w-full truncate'
        : 'absolute hidden h-full w-full truncate'
    } else if (index === currentIndex) {
      return `absolute h-full w-full ${animationVariants[fromDirection].in} truncate`
    } else if (index === previousIndex) {
      return `absolute h-full w-full ${animationVariants[toDirection].out} truncate`
    } else {
      return 'absolute hidden h-full w-full truncate'
    }
  }

  return (
    <Tag
      id="carousel-outer-container"
      ref={ref}
      className={`relative ${className} overflow-hidden`}
    >
      {textArray.map((text, index) => (
        <span
          id="carousel-inner-container"
          key={`carousel-item-${text}`}
          className={`${getClassName(index)} ${innerClassName}`}
        >
          {text}
        </span>
      ))}
    </Tag>
  )
}

export default TextCarousel
