'use client'

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImagePopperProps {
  src: StaticImageData
  alt: string
  className?: string
}

const ImagePopper: React.FC<ImagePopperProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <Image
        src={src}
        alt={alt}
        className={className}
        onClick={() => {
          setIsOpen(true)
        }}
      />

      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel>
              <Dialog.Title as="h2" className="sr-only">
                Image Modal
              </Dialog.Title>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-surface p-2 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <Image
                src={src}
                alt={alt}
                className="object-contain"
                onClick={() => {
                  setIsOpen(false)
                }}
              />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default ImagePopper
