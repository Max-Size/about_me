import type { ProjectChip } from '../data/portfolio'

interface ChipProps {
  label: ProjectChip | string
  className?: string
}

export function Chip({ label, className = '' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-chip px-2.5 py-1 text-xs font-medium text-chip-text ${className}`}
    >
      {label}
    </span>
  )
}
