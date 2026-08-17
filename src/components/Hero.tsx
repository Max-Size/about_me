import { experience, profile, projects } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { yearsSince } from '../utils/format'
import { IcosahedronCard } from './IcosahedronCard'

const roles = [
  'Software Engineer',
  'Mobile Flutter Developer',
  'Full-stack Builder',
  'Python Backend Developer',
]

const earliestStart = experience.map((e) => e.startDate).sort()[0] ?? '2023-06'

export function Hero() {
  const role = useTypewriter(roles)
  const years = yearsSince(earliestStart)

  const stats = [
    { value: `${years}+`, label: 'года коммерческой разработки' },
    { value: '−60%', label: 'времени code review после AI-pipeline' },
    { value: '×3↑', label: 'ускорение приложения АГАТ.РФ' },
    { value: `${projects.length}/${projects.length}`, label: 'проекта доведены до продакшена' },
  ]

  return (
    <section className="animate-fade-up grid grid-cols-2 gap-3 md:grid-cols-4">
      {/* интро */}
      <div
        className="cell col-span-2 row-span-2 flex min-h-[380px] flex-col justify-center p-7 sm:p-8"
        style={{
          background:
            'radial-gradient(130% 120% at 0% 100%, rgba(255, 122, 24, 0.13) 0%, rgba(255, 244, 224, 0.025) 55%)',
        }}
      >
        <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-dim">
          software engineer · {years}+ года
        </p>
        <h1 className="font-display mt-4 text-[26px] font-black leading-[1.14] sm:text-[32px] lg:text-[40px]">
          Строю <span className="text-accent">продукты</span>,<br />
          не только код.
        </h1>
        <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
          Мобильные приложения, веб-сервисы и бэкенд с нуля — от архитектуры до релиза в сторы.
          Думаю метриками и юнит-экономикой.
        </p>
        {/* фиксированная высота — текст ниже не прыгает при печати */}
        <p className="font-mono mt-5 h-5 overflow-hidden text-[12.5px] text-ink-dim">
          $ whoami → <span className="font-medium text-ink">{role}</span>
          <span className="animate-caret ml-0.5 inline-block h-[13px] w-[7px] translate-y-0.5 bg-accent" />
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href="#projects"
            className="rounded-full bg-linear-to-r from-accent-2 to-accent px-5 py-2.5 text-[13.5px] font-semibold text-accent-ink transition hover:-translate-y-0.5"
          >
            Смотреть проекты
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border-strong px-5 py-2.5 text-[13.5px] font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Связаться
          </a>
        </div>
      </div>

      {/* фото */}
      <div className="cell relative col-span-1 row-span-2 min-h-[300px] overflow-hidden p-0 md:min-h-0">
        <img
          src={profile.photo}
          alt={profile.name}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.88] contrast-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-surface via-surface/75 to-transparent px-5 pb-4 pt-11">
          <p className="text-[13px] font-semibold">{profile.name}</p>
          <p className="font-mono mt-1 text-[11px] text-accent">● open to work</p>
        </div>
      </div>

      {/* икосаэдр — справа от аватара, та же высота */}
      <IcosahedronCard />

      {/* статистика — на новой строке, «годы» первыми */}
      {stats.map((stat) => (
        <div key={stat.label} className="cell col-span-1 flex min-h-[128px] flex-col justify-end gap-2 p-5 sm:p-6">
          <p className="font-display text-[24px] font-bold sm:text-[26px]">
            <StatValue value={stat.value} />
          </p>
          <p className="text-[11.5px] leading-snug text-ink-muted">{stat.label}</p>
        </div>
      ))}
    </section>
  )
}

/** Подсвечивает знаки (+, %, ↑, /) янтарным. */
function StatValue({ value }: { value: string }) {
  const match = value.match(/^(−?×?\d+)(.*)$/)
  if (!match) return <>{value}</>
  return (
    <>
      {match[1]}
      <span className="text-accent">{match[2]}</span>
    </>
  )
}
