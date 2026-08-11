import { education } from '../data/portfolio'
import { formatPeriod } from '../utils/format'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function EducationSection() {
  return (
    <section id="education" className="section-anchor py-16 sm:py-24">
      <SectionHeading index="04" eyebrow="образование" title="Где учился" />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.id} delay={index * 90}>
            <article className="glass glass-spot flex h-full gap-4 rounded-2xl p-5 transition hover:-translate-y-1 sm:p-6">
              <img
                src={item.logo}
                alt=""
                className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-border"
              />
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-ink">{item.university}</h3>
                <p className="font-mono mt-1 text-xs text-ink-muted">
                  {formatPeriod(item.startDate, item.endDate)}
                </p>
                <p className="mt-3 text-sm font-medium text-ink">{item.field}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.program}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
