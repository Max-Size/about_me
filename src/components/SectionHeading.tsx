import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
}

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="relative mb-12 sm:mb-16">
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -top-10 -left-2 select-none text-[6rem] font-extrabold leading-none text-ink opacity-[0.04] sm:-top-14 sm:text-[8rem]"
      >
        {index}
      </span>
      <p className="font-mono relative mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display relative text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
