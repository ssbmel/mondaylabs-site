import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <Section id="process" aria-labelledby="process-heading">
      <SectionHeading
        eyebrow="Process"
        headingId="process-heading"
        title="이렇게 진행됩니다."
        description="상담부터 배포까지, 하나로 이어지는 과정으로 프로젝트를 진행합니다."
      />

      {/* Mobile / Tablet: vertical timeline */}
      <ol className="relative mt-16 flex flex-col gap-10 lg:hidden">
        <div aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-px bg-line" />
        {processSteps.map((step, i) => (
          <Reveal key={step.index} delay={i * 60}>
            <li className="relative flex gap-5">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-ink bg-paper font-mono text-sm text-ink">
                {step.index}
              </span>
              <div className="pt-1.5">
                <h3 className="text-lg font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Desktop: connected horizontal steps */}
      <ol className="relative mt-20 hidden lg:grid lg:grid-cols-6 lg:gap-4">
        <div
          aria-hidden="true"
          className="absolute top-5 h-px bg-line"
          style={{ left: "calc(100% / 12)", right: "calc(100% / 12)" }}
        />
        {processSteps.map((step, i) => (
          <Reveal key={step.index} delay={i * 60}>
            <li className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-ink bg-paper font-mono text-sm text-ink">
                {step.index}
              </span>
              <div>
                <h3 className="text-base font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
