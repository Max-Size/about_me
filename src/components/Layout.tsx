import { Outlet } from 'react-router-dom'
import { getProfile } from '../data/portfolio'
import { useLocale } from '../i18n/context'
import { useRouteScroll } from '../hooks/useRouteScroll'
import { Header } from './Header'
import { FluidBackground } from './FluidBackground'
import { ScrollProgress } from './ScrollProgress'

export function Layout() {
  const { locale, t } = useLocale()
  const profile = getProfile(locale)
  useRouteScroll()

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
          <span>
            © {new Date().getFullYear()} {profile.name.toLowerCase()}
          </span>
          <span>{t.footer.note}</span>
        </footer>
      </div>
    </>
  )
}
