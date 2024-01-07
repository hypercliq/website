// interface EmailSVGProps {
//   email: string
//   className?: string
//   width?: string
//   height?: string
// }
// export const EmailSVG: React.FC<EmailSVGProps> = ({
//   email,
//   className = 'text-md select-all',
// }) => (
//   <svg xmlns="http://www.w3.org/2000/svg"  className="inline">
//     <foreignObject width="100%" height="100%" >
//       <span className={className}>{email}</span>
//     </foreignObject>
//   </svg>
// )

'use client'

import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Props for the EmailSVG component.
 */
interface EmailSVGProps {
  /**
   * The email address to display.
   */
  email: string

  /**
   * The y-coordinate of the text.
   * Adjust this value to vertically center the text.
   * @default 15
   */
  textY?: number
}
interface EmailSVGProps {
  email: string
  textY?: number
  className?: string
}

export const EmailSVG: React.FC<EmailSVGProps> = ({
  email,
  textY = 15,
  className = '',
}) => {
  const textRef = useRef<SVGTextElement | null>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.getBBox().width)
      setHeight(textRef.current.getBoundingClientRect().height)
    }
  }, [email])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="inline select-all fill-current align-text-top leading-none"
    >
      <text y={textY} ref={textRef} className={className}>
        {email}
      </text>
    </svg>
  )
}
