import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { aboutHighlights } from "@/data/site";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
      </Reveal>

      <Reveal delay={80}>
        <h2
          id="about-heading"
          className="mt-8 max-w-3xl text-3xl font-medium leading-snug tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          웹을 통해 비즈니스의 가치를 전달합니다.
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          단순히 보기 좋은 홈페이지를 만드는 것을 넘어, 실제 고객이 이용하고 비즈니스에 활용할 수 있는 웹사이트를
          제작합니다.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {aboutHighlights.map((item, i) => (
          <Reveal key={item.title} delay={240 + i * 60}>
            <div>
              <span className="font-mono text-sm text-ink-faint">{item.index}</span>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
