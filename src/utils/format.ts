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

export function formatPeriod(start: string, end: string | 'present'): string {
  const format = (value: string) => {
    if (/^\d{4}$/.test(value)) return value
    const [y, m] = value.split('-')
    const months = [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ]
    return `${months[Number(m) - 1]} ${y}`
  }

  const endLabel = end === 'present' ? 'текущее время' : format(end)
  return `${format(start)} — ${endLabel}`
}
