import { skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const groupIcons: Record<string, string> = {
  Core: '🧭',
  Mobile: '📱',
  Frontend: '🖥',
  Backend: '⚙️',
  'CI/CD': '🚀',
  'AI-skills': '🤖',
}

export function StackSection() {
  return (
    <section id="stack" className="section-anchor pt-16 sm:pt-20">
      <SectionHeading title="Стек" hint="сгруппировано по направлениям" />

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 3) * 80} className="h-full">
            <div className="cell h-full p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent-soft text-[15px]">
                  {groupIcons[group.title] ?? '✦'}
                </span>
                <h3 className="font-mono text-xs lowercase text-accent">{group.title}</h3>
                <span className="font-mono ml-auto text-[10.5px] text-ink-dim">{group.skills.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted transition hover:border-border-strong hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
