import { profile, skillGroups } from '../data/portfolio'
import { calcAge } from '../utils/format'
import { contactIcons } from './ContactIcons'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { useTilt } from '../hooks/useTilt'

const contacts = [
  { key: 'telegram' as const, label: 'Telegram', href: profile.contacts.telegram },
  { key: 'gmail' as const, label: 'Gmail', href: profile.contacts.gmail },
  { key: 'hh' as const, label: 'HeadHunter', href: profile.contacts.hh },
  { key: 'linkedin' as const, label: 'LinkedIn', href: profile.contacts.linkedin },
]

export function AboutSection() {
  const age = calcAge(profile.birthDate)
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>({ max: 6 })

  return (
    <section id="about" className="section-anchor py-16 sm:py-24">
      <SectionHeading index="01" eyebrow="о себе" title="Кто я и чем полезен" />

      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
        <Reveal variant="scale" className="flex flex-col items-center gap-5 lg:items-start">
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="glass glass-spot glass-tilt relative rounded-[2rem] p-3"
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-52 w-52 rounded-[1.5rem] object-cover sm:h-60 sm:w-60"
              style={{ transform: 'translateZ(20px)' }}
            />
            <span className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg dark:text-[#06050a]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 3L4 7l4 4M16 21l4-4-4-4M14 4l-4 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-ink">{profile.name}</h3>
            <p className="font-mono mt-1 text-sm text-ink-muted">
              {age} {ageWord(age)} · {profile.specialization}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {contacts.map(({ key, label, href }) => {
              const Icon = contactIcons[key]
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  aria-label={label}
                  title={label}
                  className="glass glass-spot inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={100} className="space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
            {profile.about.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={200} className="space-y-5">
            <h4 className="font-display text-xl font-bold text-ink">Навыки</h4>
            <div className="space-y-4">
              {skillGroups.map((group, gi) => (
                <div
                  key={group.title}
                  className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <p className="font-mono w-28 shrink-0 text-xs font-semibold uppercase tracking-wide text-accent-2">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <span
                        key={skill}
                        className="glass-lite rounded-lg px-2.5 py-1 text-xs font-medium text-ink transition hover:-translate-y-0.5 hover:text-accent"
                        style={{ transitionDelay: `${(gi * 4 + si) * 15}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ageWord(age: number): string {
  const mod10 = age % 10
  const mod100 = age % 100
  if (mod100 >= 11 && mod100 <= 14) return 'лет'
  if (mod10 === 1) return 'год'
  if (mod10 >= 2 && mod10 <= 4) return 'года'
  return 'лет'
}
