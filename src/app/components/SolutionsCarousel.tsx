'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { StaticImageData } from 'next/image'
import {
  ButtonBack,
  ButtonNext,
  CarouselContext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useContext, useEffect, useRef, useState } from 'react'

function Dots({ totalSlides = 0 }) {
  const [currentDot, setCurrentDot] = useState(0)
  const [stretchDotStyle, setStretchDotStyle] = useState({ left: 0, width: 8 })
  const dotRefs = useRef<HTMLDivElement[]>([])
  const stretchDotRef = useRef<HTMLDivElement | null>(null)

  const carouselContext = useContext(CarouselContext)
  const currentDotRef = useRef(currentDot)

  useEffect(() => {
    currentDotRef.current = currentDot
  }, [currentDot])

  useEffect(() => {
    function onChange() {
      doChangeDots(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  useEffect(() => {
    if (stretchDotRef.current) {
      stretchDotRef.current.style.left = `${stretchDotStyle.left}px`
      stretchDotRef.current.style.width = `${stretchDotStyle.width}px`
    }
  }, [stretchDotStyle])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const currentActiveDot = dotRefs.current[currentDot]
      if (currentActiveDot) {
        setStretchDotStyle({
          left: currentActiveDot.offsetLeft,
          width: 8,
        })
      }
    }, 300) // same duration as the transition
    return () => clearTimeout(timeoutId)
  }, [currentDot])

  function doChangeDots(index: number) {
    const clickedDot = dotRefs.current[index]
    const currentActiveDot = dotRefs.current[currentDotRef.current]
    if (clickedDot && currentActiveDot) {
      setStretchDotStyle({
        left: Math.min(clickedDot.offsetLeft, currentActiveDot.offsetLeft),
        width:
          Math.abs(clickedDot.offsetLeft - currentActiveDot.offsetLeft) + 8,
      })
    }
    setCurrentDot(index)
  }

  return (
    <div className="relative bottom-8 flex justify-center">
      <div
        ref={stretchDotRef}
        className="absolute bottom-0 m-1 h-2 w-2 rounded-full bg-accent"
        style={{ transition: 'left 0.3s, width 0.3s' }}
      />
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          ref={(el) => {
            dotRefs.current[index] = el as HTMLDivElement
          }}
          key={index}
        >
          <Dot
            slide={index}
            disabled={false}
            onClick={() => {
              doChangeDots(index)
            }}
            className={`${
              index === currentDot ? 'bg-accent' : 'bg-accent/30'
            } m-1 h-2 w-2 rounded-full`}
          />
        </div>
      ))}
    </div>
  )
}

const SolutionsCarousel = ({
  solutions,
}: {
  solutions: {
    id: number
    title: string
    description: string
    imageUrl: StaticImageData
  }[]
}) => {
  const totalSlides = solutions.length
  const [isMediumScreenOrUp, setIsMediumScreenOrUp] = useState(
    typeof window === 'undefined' ? false : window.innerWidth >= 768,
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreenOrUp(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.618}
      totalSlides={7}
      visibleSlides={isMediumScreenOrUp ? 3 : 1}
      infinite={true}
      isPlaying={true}
      className="relative px-4 md:px-8"
    >
      <Slider className="w-full">
        {solutions.map(
          (solution: {
            id: number
            title: string
            description: string
            imageUrl:  StaticImageData
          }) => (
            <a
              href={`/solutions/${solution.id}-${encodeURIComponent(
                solution.title.toLowerCase().replaceAll(' ', '-'),
              )}`}
              key={solution.id}
            >
              <Slide index={solution.id}>
                <div
                  className="flex h-full w-full items-center justify-center"
                  title={solution.description}
                >
                  <div
                    className="flex h-[90%] w-[90%] items-end justify-center self-center overflow-hidden bg-cover bg-center bg-no-repeat shadow-md dark:shadow-none"
                    style={{ backgroundImage: `url(${solution.imageUrl.src})` }}
                  >
                    <div className="mx-auto flex h-1/3 w-full flex-col items-start justify-center bg-white/50 p-4 backdrop-blur-sm backdrop-hue-rotate-180 dark:bg-black/50">
                      <div className="text-xl font-bold">{solution.title}</div>
                    </div>
                  </div>
                </div>
              </Slide>
            </a>
          ),
        )}
      </Slider>
      <ButtonBack>
        <ChevronLeftIcon className="absolute bottom-1/2 left-0 h-12 w-12 text-accent" />
      </ButtonBack>
      <ButtonNext>
        <ChevronRightIcon className="absolute bottom-1/2 right-0 h-12 w-12 text-accent" />
      </ButtonNext>
      <Dots totalSlides={totalSlides} />
    </CarouselProvider>
  )
}

export default SolutionsCarousel
