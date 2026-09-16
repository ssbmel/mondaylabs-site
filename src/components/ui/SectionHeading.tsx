import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  headingId?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", headingId }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal>
      <div className={`flex flex-col gap-5 ${alignClass}`}>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
        <h2 id={headingId} className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
