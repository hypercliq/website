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
    <figure className="media-panel">
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
      <figcaption className="media-muted px-5 py-3 text-sm leading-6">
        {caption}
      </figcaption>
      {!compact && (
        <details className="media-divider media-muted border-t px-5 py-3 text-sm leading-6">
          <summary className="media-foreground cursor-pointer font-semibold">
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
