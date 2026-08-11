import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolio'
import { Chip } from './Chip'
import { useTilt } from '../hooks/useTilt'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>({ max: 4 })

  return (
    <Link
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      to={`/projects/${project.id}`}
      data-cursor="link"
      className="glass glass-spot glass-tilt group relative flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <span className="font-mono absolute right-4 top-4 z-10 text-xs font-semibold text-white/70 mix-blend-difference">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          style={{ transform: 'translateZ(10px)' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start gap-3">
          <img
            src={project.icon}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-border"
          />
          <div>
            <h3 className="font-display text-lg font-bold text-ink transition group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{project.shortDescription}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.chips.slice(0, 6).map((chip) => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 z-10 flex h-9 w-9 -translate-x-2 items-center justify-center rounded-full bg-accent text-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-[#06050a]"
      >
        →
      </span>
    </Link>
  )
}
