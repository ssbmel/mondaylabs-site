import Link from "next/link";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Tag } from "@/components/ui/Tag";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block" aria-label={`${project.title} 프로젝트 상세 보기`}>
      <div className="relative">
        <PlaceholderMedia
          label={project.title}
          sublabel={project.category}
          src={project.heroImage}
          aspect="wide"
          className="transition-opacity duration-300 group-hover:opacity-90"
        />
        {project.status === "in-progress" ? (
          <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
            제작 중
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.category}</p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">{project.summary}</p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.work.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
