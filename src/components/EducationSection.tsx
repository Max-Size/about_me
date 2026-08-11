import { education } from '../data/portfolio'
import { formatPeriod } from '../utils/format'

export function EducationSection() {
  return (
    <section id="education" className="section-anchor py-16 sm:py-20">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Образование
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Где учился
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.id}
            className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-5 shadow-(--card-shadow) transition hover:-translate-y-0.5 hover:shadow-(--card-shadow-hover) sm:p-6"
          >
            <img
              src={item.logo}
              alt=""
              className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-border"
            />
            <div className="min-w-0">
              <h3 className="font-display text-lg font-bold text-ink">{item.university}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {formatPeriod(item.startDate, item.endDate)}
              </p>
              <p className="mt-3 text-sm font-medium text-ink">{item.field}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.program}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
