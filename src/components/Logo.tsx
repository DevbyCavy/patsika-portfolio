import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "lockup",
  className = "",
}: {
  variant?: "icon" | "wordmark" | "lockup";
  className?: string;
}) {
  const asset =
    variant === "icon"
      ? { src: "/brand/patsika-icon.png", width: 1075, height: 1345 }
      : variant === "wordmark"
        ? { src: "/brand/patsika-wordmark.png", width: 1555, height: 215 }
        : { src: "/brand/patsika-lockup-full.png", width: 1070, height: 1520 };

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={asset.src}
        alt="Patsika Media House"
        width={asset.width}
        height={asset.height}
        priority
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
