import type { Locale } from '../i18n/locale'
import { ui } from '../i18n/ui'

const months: Record<Locale, string[]> = {
  ru: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

export function yearsSince(dateIso: string, now = new Date()): number {
  const [year, month] = dateIso.split('-').map(Number)
  let years = now.getFullYear() - year
  const monthDiff = now.getMonth() + 1 - (month ?? 1)
  if (monthDiff < 0) years -= 1
  return Math.max(0, years)
}

export function calcAge(birthDateIso: string, now = new Date()): number {
  const [year, month, day] = birthDateIso.split('-').map(Number)
  let age = now.getFullYear() - year
  const monthDiff = now.getMonth() + 1 - month
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < day)) {
    age -= 1
  }
  return age
}

export function yearsUnit(years: number, locale: Locale): string {
  if (locale === 'en') return years === 1 ? 'year' : 'years'
  return ruPlural(years, 'год', 'года', 'лет')
}

export function ageUnit(age: number, locale: Locale): string {
  if (locale === 'en') return age === 1 ? 'year' : 'years'
  return ruPlural(age, 'год', 'года', 'лет')
}

export function formatPeriod(start: string, end: string | 'present', locale: Locale): string {
  const format = (value: string) => {
    if (/^\d{4}$/.test(value)) return value
    const [y, m] = value.split('-')
    return `${months[locale][Number(m) - 1]} ${y}`
  }

  const endLabel = end === 'present' ? ui[locale].experience.present : format(end)
  return `${format(start)} — ${endLabel}`
}

function ruPlural(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 14) return many
  if (mod10 === 1) return one
  if (mod10 >= 2 && mod10 <= 4) return few
  return many
}
