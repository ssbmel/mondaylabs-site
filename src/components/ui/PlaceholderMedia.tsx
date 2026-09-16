import Image from "next/image";

type Aspect = "video" | "square" | "portrait" | "wide";

interface PlaceholderMediaProps {
  label: string;
  sublabel?: string;
  aspect?: Aspect;
  src?: string;
  alt?: string;
  className?: string;
}

const aspectClass: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function PlaceholderMedia({
  label,
  sublabel,
  aspect = "video",
  src,
  alt,
  className = "",
}: PlaceholderMediaProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden border border-line bg-paper-soft ${aspectClass[aspect]} ${className}`}>
        <Image src={src} alt={alt ?? label} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-line bg-paper-soft bg-[repeating-linear-gradient(135deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_11px)] ${aspectClass[aspect]} ${className}`}
    >
      <span className="rounded-full border border-line-strong bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
        Image Placeholder
      </span>
      <span className="px-4 text-center font-mono text-xs text-ink-soft">
        {label}
        {sublabel ? ` · ${sublabel}` : ""}
      </span>
    </div>
  );
}
