import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/data/projects";

export function SelectedProjects() {
  const projects = getAllProjects();

  return (
    <Section id="projects" tone="soft" aria-labelledby="selected-projects-heading">
      <SectionHeading
        eyebrow="Selected Projects"
        headingId="selected-projects-heading"
        title={`실제로 만든 사이트에서\n확인해보세요.`}
        description="업종과 규모는 다양하지만, 완성도는 같습니다."
      />

      <div className="mt-16 flex flex-col gap-24 md:gap-28">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
