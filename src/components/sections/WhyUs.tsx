import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { whyUsItems } from "@/data/site";

export function WhyUs() {
  return (
    <Section id="why-us" tone="soft" aria-labelledby="why-us-heading">
      <SectionHeading
        eyebrow="Why Us"
        headingId="why-us-heading"
        title="비즈니스에 필요한 것을 만듭니다."
        description="기술보다 실제로 얻게 되는 결과를 기준으로 작업합니다."
      />

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="border-t border-line pt-8">
              <span className="flex size-8 items-center justify-center rounded-full border border-line-strong text-accent">
                <CheckIcon />
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
