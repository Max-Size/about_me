import { getProfile } from '../data/portfolio'
import { calcAge, ageUnit } from '../utils/format'
import { useLocale } from '../i18n/context'
import { ContactIcon } from './ContactIcons'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function AboutSection() {
  const { locale, t } = useLocale()
  const profile = getProfile(locale)
  const age = calcAge(profile.birthDate)

  const contacts = [
    { key: 'telegram' as const, label: 'Telegram', href: profile.contacts.telegram },
    { key: 'gmail' as const, label: 'Gmail', href: profile.contacts.gmail },
    { key: 'hh' as const, label: 'HeadHunter', href: profile.contacts.hh },
    { key: 'linkedin' as const, label: 'LinkedIn', href: profile.contacts.linkedin },
  ]

  return (
    <section id="about" className="section-anchor pt-16 sm:pt-20">
      <SectionHeading title={t.about.title} />

      <Reveal>
        <div className="cell grid gap-8 p-7 sm:p-8 lg:grid-cols-[1fr_260px]">
          <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            {profile.about.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:border-l lg:border-border lg:pl-8">
            <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-ink-dim">
              {age} {ageUnit(age, locale)} · {profile.specialization}
            </p>
            <div className="flex flex-col gap-2">
              {contacts.map(({ key, label, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium text-ink-muted transition hover:border-border-strong hover:text-accent"
                >
                  <ContactIcon name={key} className="h-4 w-4 transition group-hover:text-accent" />
                  {label}
                  <span className="ml-auto text-ink-dim transition group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
