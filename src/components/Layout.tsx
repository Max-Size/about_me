import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { useTheme } from '../hooks/useTheme'

export function Layout() {
  const { resolved, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-svh text-ink">
      <Header resolvedTheme={resolved} onToggleTheme={toggle} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="mx-auto mt-8 max-w-6xl border-t border-border px-4 py-8 text-sm text-ink-muted sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} · Portfolio</p>
      </footer>
    </div>
  )
}
