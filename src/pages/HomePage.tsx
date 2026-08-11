import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { EducationSection } from '../components/EducationSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  )
}
