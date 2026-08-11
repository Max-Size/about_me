import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor py-16 sm:py-24">
      <SectionHeading index="02" eyebrow="проекты" title="Что уже сделано" />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 90} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
