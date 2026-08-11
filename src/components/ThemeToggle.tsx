interface ThemeToggleProps {
  resolved: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ resolved, onToggle }: ThemeToggleProps) {
  const isDark = resolved === 'dark'

  return (
    <button
      type="button"
      data-cursor="link"
      onClick={onToggle}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-accent-soft hover:text-accent"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
