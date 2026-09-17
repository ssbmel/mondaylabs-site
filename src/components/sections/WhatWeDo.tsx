import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";

export function WhatWeDo() {
  return (
    <Section id="services" aria-labelledby="what-we-do-heading">
      <SectionHeading
        eyebrow="What We Do"
        headingId="what-we-do-heading"
        title={`업종에 상관없이,\n비즈니스에 맞춰드립니다.`}
        description={`비즈니스에 필요한 기능을 개선하고,\n쌓아온 노하우로 맞춤 설계합니다.`}
      />

      <ul className="mt-16 border-t border-line">
        {services.map((service, i) => (
          <li key={service.title} className="border-b border-line">
            <Reveal delay={i * 60}>
              <div className="group grid grid-cols-1 gap-3 py-8 transition-colors sm:grid-cols-[100px_1fr] sm:items-baseline sm:gap-8 md:grid-cols-[100px_320px_1fr]">
                <span className="font-mono text-sm text-ink-faint">{service.index}</span>
                <h3 className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{service.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
