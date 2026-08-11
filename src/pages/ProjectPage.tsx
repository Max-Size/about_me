import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById } from '../data/portfolio'
import { Chip } from '../components/Chip'
import { ImageLightbox } from '../components/ImageLightbox'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = useMemo(() => (id ? getProjectById(id) : undefined), [id])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="animate-fade-up pb-16">
      <Link
        to="/#projects"
        data-cursor="link"
        className="font-mono mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition hover:text-accent"
      >
        <span aria-hidden="true">←</span> Назад
      </Link>

      <header className="glass flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-start sm:p-8">
        <img
          src={project.icon}
          alt=""
          className="h-28 w-28 shrink-0 rounded-[1.75rem] object-cover ring-1 ring-border sm:h-32 sm:w-32"
        />
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-base text-ink-muted sm:text-lg">{project.shortDescription}</p>
          <p className="font-mono mt-3 text-sm font-semibold text-accent">роль: {project.role}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.chips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </div>
        </div>
      </header>

      <section className="mt-10">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {project.images.map((src, index) => (
            <button
              key={src}
              type="button"
              data-cursor="link"
              onClick={() => setLightboxIndex(index)}
              className="glass group relative shrink-0 overflow-hidden rounded-2xl p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={src}
                alt={`Скриншот ${project.title} ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-72 w-40 rounded-xl object-cover transition duration-300 group-hover:scale-105 sm:h-80 sm:w-44"
              />
              <span className="pointer-events-none absolute inset-1.5 rounded-xl bg-black/0 transition group-hover:bg-black/10" />
            </button>
          ))}
        </div>
        <p className="font-mono mt-2 text-xs text-ink-dim">// нажмите на изображение, чтобы открыть на весь экран</p>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-ink">Описание</h2>
          <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-ink-muted">
            {project.fullDescription.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="font-display mt-8 text-xl font-bold text-ink">Достижения</h2>
          <ul className="mt-4 space-y-3">
            {project.achievements.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h2 className="font-display text-lg font-bold text-ink">Технологии</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono rounded-md border border-border px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={project.images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </div>
  )
}
