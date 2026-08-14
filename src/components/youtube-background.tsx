const VIDEO_ID = "TULMBoVPJrQ";

export function YoutubeBackground({
  poster,
  posterAlt,
  overlay = "bg-ink/35",
}: {
  poster: string;
  posterAlt: string;
  overlay?: string;
}) {
  const src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1`;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={poster}
        alt={posterAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <iframe
        src={src}
        title="ComTouch Kenya film"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
