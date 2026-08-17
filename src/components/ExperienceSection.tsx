import { Link } from 'react-router-dom'
import { education, experience, projects } from '../data/portfolio'
import { formatPeriod } from '../utils/format'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

function projectIdByTitle(title: string): string | undefined {
  return projects.find((p) => p.title === title)?.id
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-anchor pt-16 sm:pt-20">
      <SectionHeading title="Опыт и образование" />

      <div className="grid gap-3.5 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="h-full">
          <div className="cell h-full p-7">
            {experience.map((item, index) => (
              <article
                key={item.id}
                className={`grid grid-cols-[10px_1fr] gap-x-4 py-4 first:pt-0 last:pb-0 ${
                  index > 0 ? 'border-t border-border' : ''
                }`}
              >
                <span
                  className={`mt-1.5 h-2.5 w-2.5 rounded-full ${
                    item.endDate === 'present'
                      ? 'bg-accent shadow-[0_0_12px_rgba(255,177,72,0.5)]'
                      : 'bg-ink-dim'
                  }`}
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <a href={item.companyUrl} target="_blank" rel="noreferrer" className="group min-w-0">
                      <h3 className="text-base font-semibold transition group-hover:text-accent">
                        {item.company} <span className="text-ink-dim transition group-hover:text-accent">↗</span>
                      </h3>
                    </a>
                    <span
                      className={`font-mono shrink-0 whitespace-nowrap text-[11px] ${
                        item.endDate === 'present' ? 'text-accent' : 'text-ink-dim'
                      }`}
                    >
                      {formatPeriod(item.startDate, item.endDate)}
                    </span>
                  </div>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {item.achievements.map((block) => {
                      const projectId = projectIdByTitle(block.projectTitle)
                      const chipClass =
                        'font-mono inline-block rounded-full border border-border px-3 py-1 text-[11px] text-ink-muted transition hover:border-border-strong hover:text-accent'

                      return (
                        <li key={block.projectTitle} className="w-fit">
                          {projectId ? (
                            <Link to={`/projects/${projectId}`} className={chipClass}>
                              {block.projectTitle}
                            </Link>
                          ) : (
                            <span className={chipClass}>{block.projectTitle}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <div className="cell flex h-full flex-col p-7">
            {education.map((item) => (
              <div key={item.id} className="flex flex-1 flex-col">
                <h3 className="text-base font-semibold">{item.university}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {item.field}
                  <br />
                  {item.program}, {formatPeriod(item.startDate, item.endDate)}
                </p>
                <span className="font-mono mt-auto inline-block w-fit rounded-full border border-border-strong px-3.5 py-1.5 pt-1.5 text-[10.5px] text-accent">
                  высшее · software engineering
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
