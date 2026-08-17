export type Locale = 'ru' | 'en'

export const LOCALES: Locale[] = ['ru', 'en']

export const LOCALE_STORAGE_KEY = 'cutaway-locale'
export const LANG_QUERY_KEY = 'lang'

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'ru' || value === 'en'
}

export function readQueryLocale(search: string = window.location.search): Locale | null {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const value = params.get(LANG_QUERY_KEY)
  return isLocale(value) ? value : null
}

export function readStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(value) ? value : null
  } catch {
    return null
  }
}

export function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* private mode / blocked storage */
  }
}

export function resolveLocale(search: string = window.location.search): Locale {
  return readQueryLocale(search) ?? readStoredLocale() ?? 'ru'
}
