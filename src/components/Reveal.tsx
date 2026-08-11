import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  variant?: 'up' | 'scale'
}

export function Reveal({ children, delay = 0, className = '', variant = 'up' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${base} ${inView ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
