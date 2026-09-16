import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "paper" | "soft";
  "aria-labelledby"?: string;
}

export function Section({ children, id, className = "", tone = "paper", ...rest }: SectionProps) {
  const toneClass = tone === "soft" ? "bg-paper-soft" : "bg-paper";

  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 lg:py-32 ${toneClass} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
