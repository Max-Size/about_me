import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LocaleContext } from './context'
import {
  LANG_QUERY_KEY,
  persistLocale,
  readQueryLocale,
  readStoredLocale,
  type Locale,
} from './locale'
import { ui } from './ui'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryLocale = readQueryLocale(searchParams.toString())
  const [fallbackLocale, setFallbackLocale] = useState<Locale>(() => readStoredLocale() ?? 'ru')

  if (queryLocale && queryLocale !== fallbackLocale) {
    setFallbackLocale(queryLocale)
  }

  const locale = queryLocale ?? fallbackLocale

  const setLocale = useCallback(
    (next: Locale) => {
      setFallbackLocale(next)
      persistLocale(next)
      setSearchParams(
        (prev) => {
          const nextParams = new URLSearchParams(prev)
          nextParams.set(LANG_QUERY_KEY, next)
          return nextParams
        },
        { replace: true, preventScrollReset: true },
      )
    },
    [setSearchParams],
  )

  useEffect(() => {
    persistLocale(locale)
    document.documentElement.lang = locale
    document.title = ui[locale].meta.title
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', ui[locale].meta.description)
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: ui[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
