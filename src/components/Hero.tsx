import { projects, experience, skillGroups } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { yearsSince } from '../utils/format'
import { TerminalCard } from './TerminalCard'

const roles = ['Software Engineer', 'Mobile Developer', 'Full-stack Builder', 'Backend на FastAPI']

const badges = [
  { label: 'Flutter', delay: '0s' },
  { label: 'React', delay: '0.3s' },
  { label: 'FastAPI', delay: '0.6s' },
  { label: 'PostgreSQL', delay: '0.9s' },
]

const stats = [
  { value: `${yearsSince(experience[experience.length - 1]?.startDate ?? '2021')}+`, label: 'года в разработке' },
  { value: `${projects.length}`, label: 'проектов доведено до релиза' },
  { value: `${skillGroups.reduce((acc, g) => acc + g.skills.length, 0)}+`, label: 'технологий в стеке' },
]

export function Hero() {
  const role = useTypewriter(roles)

  return (
    <section className="relative overflow-hidden pb-20 pt-6 sm:pb-28 sm:pt-10">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-fade-up min-w-0">
          <h1 className="font-display max-w-2xl text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
            <span className="text-gradient">Строю продукты,</span>
            <br />
            не только код.
          </h1>

          <div className="font-mono mt-6 flex h-7 items-center gap-2 text-base text-ink-muted sm:text-lg">
            <span className="text-accent">$</span>
            <span>whoami</span>
            <span className="text-ink"> → {role}</span>
            <span className="animate-caret inline-block h-4 w-[2px] bg-accent" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Собираю мобильные приложения, веб-сервисы и бэкенд с нуля — от архитектуры до релиза в
            сторы. Думаю метриками и юнит-экономикой, а не только кодом.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              data-cursor="link"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--accent)] dark:text-[#06050a]"
            >
              Смотреть проекты
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              data-cursor="link"
              className="glass-lite glass-spot inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Обо мне
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-ink-dim">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay-2 flex min-w-0 flex-col items-center gap-5">
          <TerminalCard />
          <div className="flex max-w-md flex-wrap justify-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="font-mono glass-lite animate-float rounded-full px-3 py-1.5 text-xs font-medium text-ink"
                style={{ animationDelay: badge.delay }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-cursor="link"
        aria-label="Прокрутить вниз"
        className="mx-auto mt-16 hidden w-fit items-center gap-2 text-xs font-medium text-ink-dim transition hover:text-accent sm:flex"
      >
        <span className="font-mono">scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
        </span>
      </a>
    </section>
  )
}
