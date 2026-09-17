import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { strengths } from "@/data/site";

export function WhyUs() {
  return (
    <Section id="about" tone="soft" aria-labelledby="why-us-heading">
      <SectionHeading
        eyebrow="Why Us"
        headingId="why-us-heading"
        title={`믿고 맡길 수 있는\n이유가 있습니다.`}
        description={`먼데이랩스는 디테일도 보안도 놓치지 않고,\n완벽하게 마무리합니다.`}
      />

      <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="border-t border-line pt-8">
              <span className="flex size-8 items-center justify-center rounded-full border border-line-strong text-accent">
                <CheckIcon />
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description.split("\n").map((line, j, lines) => (
                  <span key={j}>
                    {line}
                    {j < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
