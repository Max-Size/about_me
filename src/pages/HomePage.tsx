import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { AboutSection } from '../components/AboutSection'
import { StackSection } from '../components/StackSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}
