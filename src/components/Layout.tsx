import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { LiquidBackground } from './LiquidBackground'
import { CustomCursor } from './CustomCursor'
import { ScrollProgress } from './ScrollProgress'
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
    <div className="relative min-h-svh text-ink">
      <LiquidBackground />
      <CustomCursor />
      <ScrollProgress />
      <Header resolvedTheme={resolved} onToggleTheme={toggle} />
      <main className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
