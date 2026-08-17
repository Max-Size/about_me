import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function ProjectsSection() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-anchor pt-16 sm:pt-20">
      <SectionHeading title="Проекты" hint="клик по карточке — полный кейс" />

      <Reveal>
        <ProjectCard project={featured} featured />
      </Reveal>

      <div className="mt-3.5 grid gap-3.5 md:grid-cols-3">
        {rest.map((project, index) => (
          <Reveal key={project.id} delay={index * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
