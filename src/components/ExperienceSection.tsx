import { experience } from '../data/portfolio'
import { formatPeriod } from '../utils/format'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-anchor py-16 sm:py-20">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Опыт работы
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Где и над чем работал
        </h2>
      </div>

      <div className="relative space-y-0">
        {experience.map((item, index) => {
          const isLast = index === experience.length - 1

          return (
            <article
              key={item.id}
              className="relative grid gap-5 pb-10 last:pb-0 md:grid-cols-[220px_1fr] md:gap-8 lg:grid-cols-[260px_1fr]"
            >
              {!isLast && (
                <div
                  className="timeline-line absolute left-5.75 top-14 bottom-0 hidden w-px md:block"
                  aria-hidden="true"
                />
              )}

              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex items-start gap-3 rounded-xl p-1 transition hover:bg-accent-soft"
              >
                <img
                  src={item.logo}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-full border-2 border-surface bg-surface-elevated object-cover shadow-sm ring-2 ring-border"
                />
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-display text-lg font-bold text-ink hover:text-accent">
                    {item.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {formatPeriod(item.startDate, item.endDate)}
                  </p>
                </div>
              </a>

              <div className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-(--card-shadow) sm:p-6">
                <div className="space-y-6">
                  {item.achievements.map((block) => (
                    <div key={block.projectTitle}>
                      <h4 className="font-display text-base font-bold text-ink">
                        {block.projectTitle}
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {block.points.map((point) => (
                          <li
                            key={point}
                            className="relative pl-4 text-sm leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
