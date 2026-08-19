import { useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getProjectById } from '../data/portfolio'
import { Chip } from '../components/Chip'
import { ImageLightbox } from '../components/ImageLightbox'
import { ProjectLinks } from '../components/ProjectLinks'
import { ProjectStatusBadge } from '../components/ProjectStatusBadge'
import { useLocale } from '../i18n/context'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const { locale, t } = useLocale()
  const project = useMemo(() => (id ? getProjectById(id, locale) : undefined), [id, locale])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!project) {
    return <Navigate to={{ pathname: '/', search: location.search }} replace />
  }

  return (
    <div className="animate-fade-up pb-8">
      <button
        type="button"
        onClick={() => {
          const idx = window.history.state?.idx
          if (typeof idx === 'number' && idx > 0) navigate(-1)
          else navigate({ pathname: '/', search: location.search })
        }}
        className="font-mono mb-6 inline-flex cursor-pointer items-center gap-2 text-[13px] text-ink-muted transition hover:text-accent"
      >
        <span aria-hidden="true">←</span> {t.projectPage.allProjects}
      </button>

      {/* обложка + шапка кейса */}
      <header className="cell cell-solid overflow-hidden">
        <div className="relative aspect-video max-h-[340px] w-full sm:aspect-[16/6.5]">
          <img src={project.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-surface-elevated via-transparent to-transparent" />
        </div>
        <div className="relative -mt-9 px-6 pb-7 sm:px-10 sm:pb-9">
          <div className="flex items-center gap-4">
            <img
              src={project.icon}
              alt=""
              className="h-[58px] w-[58px] shrink-0 rounded-2xl border border-border-strong bg-surface-elevated object-cover"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h1 className="font-display text-xl font-black sm:text-[26px]">{project.title}</h1>
                <ProjectStatusBadge status={project.status} className="text-[11px]" />
              </div>
              <p className="font-mono mt-1 text-[11px] text-accent">{project.role.toLowerCase()}</p>
            </div>
          </div>
          <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.chips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </div>
          <ProjectLinks links={project.links ?? []} />
        </div>
      </header>

      {project.images.length > 0 && (
        <section className="cell mt-3.5 p-7 sm:p-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim">{t.projectPage.images}</h2>
          <div className="-mx-2 mt-4 flex gap-3 overflow-x-auto px-2 pb-2">
            {project.images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group shrink-0 overflow-hidden rounded-xl border border-border transition hover:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={src}
                  alt={`${t.projectPage.screenshotAlt} ${project.title} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-auto object-cover transition duration-300 group-hover:scale-105 sm:h-52"
                />
              </button>
            ))}
          </div>
          <p className="font-mono mt-2 text-[10.5px] text-ink-dim">
            {t.projectPage.clickToExpand}
          </p>
        </section>
      )}

      <div className="mt-3.5 grid gap-3.5 lg:grid-cols-[1.4fr_1fr]">
        {/* описание + достижения */}
        <div className="cell p-7 sm:p-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim">{t.projectPage.description}</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            {project.fullDescription.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="font-mono mt-8 text-[11px] uppercase tracking-[0.14em] text-ink-dim">{t.projectPage.whatIDid}</h2>
          <ul className="mt-4 space-y-2.5">
            {project.achievements.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-[13.5px] leading-relaxed text-ink before:absolute before:left-0 before:content-['→'] before:text-accent-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* технологии */}
        <aside className="cell h-fit p-7">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim">{t.projectPage.tech}</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono rounded-full border border-border px-3 py-1.5 text-[11px] text-ink-muted transition hover:border-border-strong hover:text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </div>

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
