import { getProfile } from '../data/portfolio'
import { useLocale } from '../i18n/context'
import { ContactIcon } from './ContactIcons'
import { Reveal } from './Reveal'

export function ContactSection() {
  const { locale, t } = useLocale()
  const profile = getProfile(locale)

  const contacts = [
    { key: 'telegram' as const, label: 'Telegram', href: profile.contacts.telegram },
    { key: 'gmail' as const, label: 'Email', href: profile.contacts.gmail },
    { key: 'hh' as const, label: 'HeadHunter', href: profile.contacts.hh },
    { key: 'linkedin' as const, label: 'LinkedIn', href: profile.contacts.linkedin },
  ]

  return (
    <section id="contact" className="section-anchor pt-16 sm:pt-20">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[26px] bg-linear-to-r from-accent-2 to-accent p-10 text-accent-ink sm:p-12">
          <div>
            <h2 className="font-display text-[22px] font-black sm:text-[30px]">{t.contact.title}</h2>
            <p className="mt-2 text-sm text-accent-ink/75">{t.contact.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {contacts.map(({ key, label, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent-ink/40 px-5 py-3 text-sm font-bold transition hover:border-accent-ink hover:bg-accent-ink/12"
              >
                <ContactIcon name={key} className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
