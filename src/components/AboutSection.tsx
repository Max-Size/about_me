import { profile, skillGroups } from '../data/portfolio'
import { calcAge } from '../utils/format'
import { contactIcons } from './ContactIcons'

const contacts = [
  { key: 'telegram' as const, label: 'Telegram', href: profile.contacts.telegram },
  { key: 'gmail' as const, label: 'Gmail', href: profile.contacts.gmail },
  { key: 'hh' as const, label: 'HeadHunter', href: profile.contacts.hh },
  { key: 'linkedin' as const, label: 'LinkedIn', href: profile.contacts.linkedin },
]

export function AboutSection() {
  const age = calcAge(profile.birthDate)

  return (
    <section id="about" className="section-anchor py-16 sm:py-20">
      <div className="mb-10 animate-fade-up">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">О себе</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Кто я и чем полезен
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
        <div className="animate-fade-up-delay-1 flex flex-col items-center gap-5 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-accent-soft blur-xl" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative h-52 w-52 rounded-[1.75rem] object-cover shadow-(--card-shadow-hover) sm:h-64 sm:w-64"
            />
          </div>

          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-ink">{profile.name}</h3>
            <p className="mt-1 text-ink-muted">
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
                  aria-label={label}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-(--card-shadow-hover)"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="animate-fade-up-delay-2 space-y-8">
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
            {profile.about.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-5">
            <h4 className="font-display text-xl font-bold text-ink">Навыки</h4>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm font-semibold text-accent">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
