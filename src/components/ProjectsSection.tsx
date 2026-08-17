import { getProjects } from '../data/portfolio'
import { useLocale } from '../i18n/context'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function ProjectsSection() {
  const { locale, t } = useLocale()
  const [featured, ...rest] = getProjects(locale)

  return (
    <section id="projects" className="section-anchor pt-16 sm:pt-20">
      <SectionHeading title={t.projects.title} hint={t.projects.hint} />

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
