import type { ProjectChip } from '../data/portfolio'

interface ChipProps {
  label: ProjectChip | string
  accent?: boolean
  className?: string
}

export function Chip({ label, accent = false, className = '' }: ChipProps) {
  return (
    <span
      className={`font-mono inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] ${
        accent ? 'border-border-strong text-accent' : 'border-border text-ink-muted'
      } ${className}`}
    >
      {label}
    </span>
  )
}
