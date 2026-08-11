import { profile } from '../data/portfolio'
import { AboutSection } from '../components/AboutSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { EducationSection } from '../components/EducationSection'

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-12 sm:pt-16">
        <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-accent-soft blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent-soft/70 blur-3xl" />

        <div className="relative animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted sm:text-xl">
            {profile.specialization}. Собираю продукты от идеи до релиза — mobile, web и backend.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 dark:text-[#0d1411]"
            >
              Смотреть проекты
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent"
            >
              Обо мне
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  )
}
