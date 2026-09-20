import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import type { GalleryDevice } from "@/lib/types";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

const galleryAspect: Record<GalleryDevice, "wide" | "video" | "portrait"> = {
  PC: "wide",
  Tablet: "video",
  Mobile: "portrait",
};

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-line pt-14 pb-16 md:pt-20 md:pb-20">
        <Container>
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              ← 전체 프로젝트
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Client</dt>
                <dd className="mt-2 text-sm text-ink">{project.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Industry</dt>
                <dd className="mt-2 text-sm text-ink">{project.industry}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Year</dt>
                <dd className="mt-2 text-sm text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Work</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.work.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </header>

      <Section tone="paper" aria-label="프로젝트 대표 이미지">
        <Reveal>
          <PlaceholderMedia
            label={project.title}
            sublabel="Hero Image"
            src={project.heroImage}
            aspect="wide"
            sizes="(min-width: 1360px) 1280px, 100vw"
          />
        </Reveal>
      </Section>

      <Section tone="soft" aria-labelledby="overview-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Overview
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{project.overview}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="challenge-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h2 id="challenge-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Challenge
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{project.challenge}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft" aria-labelledby="solution-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h2 id="solution-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Solution
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{project.solution}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="features-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h2 id="features-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Features
            </h2>
          </Reveal>
          <div className="lg:col-span-2">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <Reveal key={feature} delay={i * 40}>
                  <li className="flex items-start gap-3 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {project.liveUrl ? (
        <Section tone="soft" aria-labelledby="live-heading">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
            <Reveal>
              <h2 id="live-heading" className="text-2xl font-semibold tracking-tight text-ink">
                Live Site
              </h2>
            </Reveal>
            <Reveal delay={80} className="flex flex-col items-start gap-6 lg:col-span-2">
              <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                실제 운영 중인 사이트에서 직접 확인해보세요.
              </p>
              <Button href={project.liveUrl} external size="lg" showArrow>
                사이트 방문하기
              </Button>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {project.gallery.length > 0 ? (
        <Section tone="soft" aria-labelledby="gallery-heading">
          <Reveal>
            <h2 id="gallery-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Gallery
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.gallery.map((item, i) => (
              <Reveal key={item.label} delay={i * 60} className={item.device === "PC" ? "sm:col-span-2" : undefined}>
                <PlaceholderMedia label={item.label} sublabel={item.device} aspect={galleryAspect[item.device]} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="paper" aria-labelledby="result-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h2 id="result-heading" className="text-2xl font-semibold tracking-tight text-ink">
              Result
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{project.result}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft" aria-labelledby="project-cta-heading">
        <div className="flex flex-col items-center gap-6 py-4 text-center">
          <Reveal>
            <h2 id="project-cta-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              비슷한 프로젝트를 준비하고 계신가요?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/#contact" size="lg" showArrow>
              프로젝트 문의하기
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
