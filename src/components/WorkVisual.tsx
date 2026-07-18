import Image from "next/image";
import { type WorkMedia } from "@/lib/site-config";

export function WorkVisual({
  media,
  category,
  concept,
  alt,
}: {
  media: WorkMedia;
  category: string;
  concept?: boolean;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">
      {media.kind === "image" ? (
        <Image
          src={media.src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <video
          className="h-full w-full object-cover"
          poster={media.poster}
          controls
          preload="none"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="font-heading rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
          {category}
        </span>
        {concept && (
          <span className="font-heading rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-ink">
            Concept
          </span>
        )}
      </div>
    </div>
  );
}
