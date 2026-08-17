import { LOCALES } from '../i18n/locale'
import { useLocale } from '../i18n/context'

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className="flex shrink-0 items-center rounded-full border border-border p-0.5"
    >
      {LOCALES.map((code) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`font-mono rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition ${
              active ? 'bg-accent-soft text-accent' : 'text-ink-dim hover:text-accent'
            }`}
          >
            {t.lang[code]}
          </button>
        )
      })}
    </div>
  )
}
