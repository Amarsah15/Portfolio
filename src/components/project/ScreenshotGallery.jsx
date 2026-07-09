export default function ScreenshotGallery({ screenshots }) {
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {screenshots.map((shot) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-xl border border-border bg-surface/40 premium-border"
        >
          <img
            src={shot.src}
            alt={shot.alt}
            width={shot.w}
            height={shot.h}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </figure>
      ))}
    </div>
  );
}
