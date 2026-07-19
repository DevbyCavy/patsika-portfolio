import Image from "next/image";
import Link from "next/link";
import { type GalleryImage } from "@/lib/site-config";

function Frame({ image }: { image: GalleryImage }) {
  return (
    <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-ink sm:mb-6">
      <Image
        src={image.src}
        alt={image.caption}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
      {image.concept && (
        <span className="font-heading absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-ink">
          Concept
        </span>
      )}
      {image.workSlug && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
            ▶
          </span>
        </span>
      )}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
        {image.caption}
      </span>
    </div>
  );
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3">
      {images.map((image) =>
        image.workSlug ? (
          <Link
            key={image.src}
            href={`/work#${image.workSlug}`}
            className="block break-inside-avoid"
          >
            <Frame image={image} />
          </Link>
        ) : (
          <Frame key={image.src} image={image} />
        ),
      )}
    </div>
  );
}
