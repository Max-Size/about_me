import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { FluidBackground } from './FluidBackground'
import { ScrollProgress } from './ScrollProgress'

export function Layout() {
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
    <>
      <FluidBackground />
      <ScrollProgress />
      <Header />
      <div className="relative z-1 min-h-svh text-ink">
        <main className="relative mx-auto max-w-[1120px] px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
          <Outlet />
        </main>
        <footer className="font-mono relative mx-auto flex max-w-[1120px] flex-wrap justify-between gap-3 px-4 pb-8 text-[11px] text-ink-dim sm:px-6">
          <span>© {new Date().getFullYear()} максим селезнев</span>
          <span>bento + metaballs — без единой библиотеки</span>
        </footer>
      </div>
    </>
  )
}
