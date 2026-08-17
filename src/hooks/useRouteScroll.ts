import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const positions = new Map<string, number>()
let activeKey: string | undefined
let pendingRestoreY: number | undefined

function scrollToY(top: number) {
  window.scrollTo({ top, left: 0, behavior: 'instant' })
}

function activateKey(key: string) {
  if (activeKey === key) return
  pendingRestoreY = positions.get(key)
  activeKey = key
}

export function useRouteScroll() {
  const location = useLocation()
  const navigationType = useNavigationType()

  activateKey(location.key)

  useLayoutEffect(() => {
    history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const save = () => {
      if (activeKey) positions.set(activeKey, window.scrollY)
    }
    window.addEventListener('scroll', save, { passive: true })
    document.addEventListener('click', save, true)
    window.addEventListener('pagehide', save)
    return () => {
      window.removeEventListener('scroll', save)
      document.removeEventListener('click', save, true)
      window.removeEventListener('pagehide', save)
    }
  }, [])

  useLayoutEffect(() => {
    const saved = pendingRestoreY
    let lastY = window.scrollY

    const restore = () => {
      if (navigationType === 'POP' && saved != null) {
        if (Math.abs(window.scrollY - lastY) > 2) return
        scrollToY(saved)
        lastY = window.scrollY
        return
      }

      if (location.hash) {
        const id = location.hash.slice(1)
        document.getElementById(id)?.scrollIntoView({
          behavior: navigationType === 'POP' ? 'instant' : 'smooth',
        })
        return
      }

      scrollToY(0)
    }

    restore()
    const frame = requestAnimationFrame(restore)
    const retries =
      navigationType === 'POP' && saved != null
        ? [50, 200].map((ms) => window.setTimeout(restore, ms))
        : []

    return () => {
      cancelAnimationFrame(frame)
      retries.forEach(clearTimeout)
    }
  }, [location.hash, location.key, navigationType])
}
