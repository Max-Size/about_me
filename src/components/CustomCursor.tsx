import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const hasTouch =
      window.matchMedia('(any-pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return canHover && !hasTouch && !prefersReduced
  })
  const [active, setActive] = useState(false)
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('has-custom-cursor', enabled)
    return () => document.documentElement.classList.remove('has-custom-cursor')
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    let ticking = false
    let x = 0
    let y = 0

    const apply = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      ticking = false
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY

      if (!ticking) {
        requestAnimationFrame(apply)
        ticking = true
      }

      const el = e.target as HTMLElement
      setActive(!!el.closest('a, button, [data-cursor="link"]'))
      setMoved((prev) => prev || true)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: moved ? 1 : 0 }} />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: active ? 54 : 34,
          height: active ? 54 : 34,
          opacity: moved ? (active ? 0.9 : 0.55) : 0,
          borderColor: active ? 'var(--accent-2)' : 'var(--accent)',
        }}
      />
    </>
  )
}
