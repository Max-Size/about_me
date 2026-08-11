import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full origin-left bg-linear-to-r from-accent via-accent-2 to-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
