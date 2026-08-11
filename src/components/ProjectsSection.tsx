import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { Chip } from './Chip'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor py-16 sm:py-20">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Проекты
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Что уже сделано
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-(--card-shadow) transition duration-300 hover:-translate-y-1.5 hover:shadow-(--card-shadow-hover)"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-accent-soft">
              <img
                src={project.cover}
                alt=""
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start gap-3">
                <img
                  src={project.icon}
                  alt=""
                  className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-border"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {project.chips.slice(0, 6).map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
