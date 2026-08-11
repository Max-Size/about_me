import { experience } from '../data/portfolio'
import { formatPeriod } from '../utils/format'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-anchor py-16 sm:py-24">
      <SectionHeading index="03" eyebrow="опыт работы" title="Где и над чем работал" />

      <div className="flex flex-col gap-8 sm:gap-10">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <article className="grid items-start gap-4 md:grid-cols-[220px_1fr] md:gap-8 lg:grid-cols-[260px_1fr]">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="glass glass-spot flex items-start gap-3 rounded-xl p-3 transition hover:-translate-y-0.5"
              >
                <img
                  src={item.logo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-border"
                />
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-display text-lg font-bold text-ink">{item.company}</h3>
                  <p className="font-mono mt-0.5 text-xs text-ink-muted">
                    {formatPeriod(item.startDate, item.endDate)}
                  </p>
                  {item.endDate === 'present' && (
                    <span className="glass-lite mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-accent-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                      сейчас
                    </span>
                  )}
                </div>
              </a>

              <div className="glass rounded-2xl p-5 sm:p-6">
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
