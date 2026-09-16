import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line-strong px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}
