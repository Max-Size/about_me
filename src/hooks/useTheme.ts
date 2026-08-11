import { useEffect, useState } from 'react'

export type ThemeMode = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  return mode === 'system' ? getSystemTheme() : mode
}

function applyTheme(mode: ThemeMode) {
  const resolved = resolveTheme(mode)
  document.documentElement.dataset.theme = resolved
  document.documentElement.style.colorScheme = resolved
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    return stored ?? 'dark'
  })

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem(STORAGE_KEY, mode)

    if (mode !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [mode])

  const resolved = resolveTheme(mode)

  const toggle = () => {
    setMode((prev) => {
      const current = resolveTheme(prev)
      return current === 'dark' ? 'light' : 'dark'
    })
  }

  return { mode, resolved, setMode, toggle }
}
