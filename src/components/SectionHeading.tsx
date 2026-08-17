import { Reveal } from './Reveal'

interface SectionHeadingProps {
  title: string
  hint?: string
}

export function SectionHeading({ title, hint }: SectionHeadingProps) {
  return (
    <Reveal className="mb-7 flex items-baseline justify-between gap-4">
      <h2 className="font-display text-xl font-bold sm:text-[26px]">{title}</h2>
      {hint && <p className="text-xs text-ink-dim">{hint}</p>}
    </Reveal>
  )
}
