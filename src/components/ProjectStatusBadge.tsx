import type { ProjectStatus } from '../data/portfolio'
import { useLocale } from '../i18n/context'

const DOT_CLASS: Record<ProjectStatus, string> = {
  active: 'bg-status-active shadow-[0_0_6px_var(--color-status-active)]',
  development: 'bg-status-dev',
  retired: 'bg-status-retired',
}

interface ProjectStatusBadgeProps {
  status: ProjectStatus
  className?: string
}

export function ProjectStatusBadge({ status, className = '' }: ProjectStatusBadgeProps) {
  const { t } = useLocale()

  return (
    <span
      className={`font-mono inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[10px] text-ink-muted ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASS[status]}`} aria-hidden="true" />
      {t.projects.status[status]}
    </span>
  )
}
