import type { ProjectMedia } from '@/app/data/media'

export default function ProjectVideo({
  media,
  caption,
  compact = false,
}: {
  media: ProjectMedia
  caption: string
  compact?: boolean
}) {
  return (
    <figure className="bg-[#1b2a27]">
      <video
        className="w-full object-contain"
        style={{
          aspectRatio: compact ? '16 / 9' : (media.aspectRatio ?? '16 / 9'),
        }}
        controls
        playsInline
        preload="none"
        poster={media.poster}
        aria-label={media.label}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <figcaption className="px-5 py-3 text-sm leading-6 text-[#eff5ef]/80">
        {caption}
      </figcaption>
      {!compact && (
        <details className="border-t border-white/20 px-5 py-3 text-sm leading-6 text-[#eff5ef]/80">
          <summary className="cursor-pointer font-semibold text-[#eff5ef]">
            What the video shows
          </summary>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            {media.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </details>
      )}
    </figure>
  )
}
