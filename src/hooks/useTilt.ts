import { useRef, type MouseEvent } from 'react'

interface TiltOptions {
  max?: number
}

export function useTilt<T extends HTMLElement>({ max = 8 }: TiltOptions = {}) {
  const ref = useRef<T | null>(null)

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    el.style.setProperty('--tilt-x', `${((0.5 - py) * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--tilt-y', `${((px - 0.5) * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--spot-x', `${x}px`)
    el.style.setProperty('--spot-y', `${y}px`)
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
  }

  return { ref, onMouseMove, onMouseLeave }
}
