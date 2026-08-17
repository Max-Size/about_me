import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../i18n/context'
import { LanguageToggle } from './LanguageToggle'

const navIds = ['projects', 'about', 'stack', 'experience', 'contact'] as const

export function Header() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t } = useLocale()

  const navItems = navIds.map((id) => ({
    id,
    href: `/#${id}`,
    label: t.nav[id],
  }))

  useEffect(() => {
    if (!isHome) return

    const sections = navIds
      .map((id) => document.getElementById(id))
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
      <div className="relative w-full max-w-[1120px]">
        <div className="nav-pill relative flex w-full min-w-0 items-center overflow-hidden rounded-full">
          <div className="relative min-w-0 flex-1">
            <nav className="flex w-full min-w-0 overflow-x-auto overscroll-x-contain px-5 py-3 sm:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="mx-auto flex w-max items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition ${
                      activeId === item.id ? 'text-accent' : 'text-ink-muted hover:text-accent'
                    }`}
                  >
                    {activeId === item.id && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-accent-soft" aria-hidden="true" />
                    )}
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="nav-edge-fade nav-edge-fade--start" aria-hidden="true" />
            <div className="nav-edge-fade nav-edge-fade--end" aria-hidden="true" />
          </div>
          <div className="relative z-2 flex shrink-0 items-center border-l border-border py-2 pl-3 pr-3 sm:pr-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
