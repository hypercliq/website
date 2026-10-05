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
      <details className="media-divider media-muted border-t px-5 py-3 text-sm leading-6">
        <summary className="media-foreground cursor-pointer font-semibold">
          What the video shows
        </summary>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          {media.overview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <details className="media-divider mt-5 border-t pt-4">
          <summary className="media-foreground cursor-pointer font-semibold">
            Full video description with timestamps
          </summary>
          <ol role="list" className="mt-4 space-y-5">
            {media.chapters.map((chapter) => (
              <li key={chapter.timestamp}>
                <p className="media-foreground font-semibold">
                  {chapter.timestamp} · {chapter.title}
                </p>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3">
                    {paragraph}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </details>
      </details>
    </figure>
  )
}
