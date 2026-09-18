import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = ["기업", "브랜드", "매장 · 지점", "서비스 · 플랫폼", "랜딩페이지", "앱 개발"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-line bg-paper pt-16 pb-24 md:pb-32 lg:pt-0">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-3">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Web Development Studio</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.2] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
                고객 경험은 살리고,
                <br />
                운영은 편리하게.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
                기업 홈페이지부터 브랜드, 매장, 서비스까지
                <br />
                기획·개발·배포 모두 함께합니다.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/#contact" size="lg" showArrow>
                  프로젝트 문의하기
                </Button>
                <Button href="/#projects" size="lg" variant="secondary">
                  포트폴리오 보기
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-faint sm:gap-x-3 sm:gap-y-2">
                {capabilities.map((item, i) => (
                  <span
                    key={item}
                    className="flex items-center gap-3 rounded-full border border-line px-3 py-1 sm:border-0 sm:px-0 sm:py-0"
                  >
                    {item}
                    {i < capabilities.length - 1 ? (
                      <span aria-hidden="true" className="hidden text-line-strong sm:inline">
                        ·
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="aspect-4/3 w-full lg:h-[60vh]">
              <Image
                src="/landing.png"
                alt="먼데이랩스가 만든 웹사이트 랜딩 페이지 목업"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
