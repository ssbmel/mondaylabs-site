import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="contact-heading"
              className="mt-6 max-w-md text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              프로젝트를 시작해보세요.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">
              아래 정보를 남겨주시면 내용을 확인 후 빠르게 연락드립니다. 간단한 질문도 편하게 문의해주세요.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-2 border-t border-line pt-8 text-sm text-ink-soft">
              <a href={`mailto:${siteConfig.email}`} className="w-fit hover:text-ink">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="w-fit hover:text-ink">
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
