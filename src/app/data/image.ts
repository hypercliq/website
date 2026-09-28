import type { StaticImageData } from 'next/image'

export function staticImage(
  name: string,
  width: number,
  height: number,
): StaticImageData {
  return { src: `/images/${name}.avif`, width, height }
}
