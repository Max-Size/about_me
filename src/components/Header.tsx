import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { id: 'about', href: '/#about', label: 'О себе' },
  { id: 'projects', href: '/#projects', label: 'Проекты' },
  { id: 'experience', href: '/#experience', label: 'Опыт' },
  { id: 'education', href: '/#education', label: 'Учёба' },
]

interface HeaderProps {
  resolvedTheme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({ resolvedTheme, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isHome) return

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el)

    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [isHome])

  return (
    <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-3 sm:top-4 sm:px-6">
      <div className="relative">
        <div className="glass flex items-center gap-2 rounded-full px-3 py-2 sm:gap-3 sm:px-4">
          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="link"
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  activeId === item.id
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {activeId === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-accent-soft" aria-hidden="true" />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:border-l md:border-border md:pl-3">
            <ThemeToggle resolved={resolvedTheme} onToggle={onToggleTheme} />
            <button
              type="button"
              data-cursor="link"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-accent-soft md:hidden"
              aria-label="Меню"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="glass absolute inset-x-0 top-2 rounded-2xl p-1.5 md:hidden">
            <ul className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-full px-3.5 py-2.5 text-center text-sm font-medium text-ink transition hover:bg-accent-soft"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
