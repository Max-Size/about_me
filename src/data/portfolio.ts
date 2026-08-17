import type { Locale } from '../i18n/locale'
import { educationCopy, experienceCopy, profileCopy, projectCopy } from './copy'

export type ProjectChip =
  | 'Mobile'
  | 'iOS'
  | 'Android'
  | 'Backend'
  | 'Frontend'
  | 'Open Source'
  | 'Solo dev'
  | 'Team'
  | 'Flutter'
  | 'React'
  | 'Python'
  | 'FastAPI'
  | 'PostgreSQL'
  | 'Clickhouse'
  | 'PWA'
  | 'Diploma'
  | 'IoT'

export type ProjectLinkKind =
  | 'appstore'
  | 'googleplay'
  | 'rustore'
  | 'github'
  | 'pubdev'
  | 'demo'
  | 'web'

export interface ProjectLink {
  kind: ProjectLinkKind
  url: string
  /** подпись, если нужна нестандартная (по умолчанию берётся из kind) */
  label?: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  role: string
  highlight: string
  icon: string
  cover: string
  images: string[]
  chips: ProjectChip[]
  technologies: string[]
  achievements: string[]
  links?: ProjectLink[]
}

export interface ExperienceAchievement {
  projectId: string
  projectTitle: string
  points: string[]
}

export interface Experience {
  id: string
  company: string
  companyUrl: string
  logo: string
  startDate: string
  endDate: string | 'present'
  achievements: ExperienceAchievement[]
}

export interface Education {
  id: string
  university: string
  logo: string
  startDate: string
  endDate: string
  field: string
  program: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Profile {
  name: string
  birthDate: string
  specialization: string
  photo: string
  about: string
  contacts: {
    telegram: string
    gmail: string
    hh: string
    linkedin: string
  }
}

interface ProjectMeta {
  id: string
  icon: string
  cover: string
  images: string[]
  chips: ProjectChip[]
  technologies: string[]
  links?: ProjectLink[]
}

const projectMeta: ProjectMeta[] = [
  {
    id: 'gandiva',
    icon: '/projects/gandiva/gandiva_logo.jpg',
    cover: '/projects/gandiva/gandiva_cover.jpg',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'iOS', 'Android', 'Flutter', 'Team'],
    technologies: [
      'Flutter',
      'Clean Architecture',
      'BLoC',
      'Provider',
      'get_it',
      'Dio',
      'Retrofit',
      'Drift',
      'OAuth 2.0',
      'Firebase Messaging',
      'GitLab CI/CD',
    ],
  },
  {
    id: 'agat-rf',
    icon: '/projects/agat_rf/agat_rf_logo.jpg',
    cover: '/projects/agat_rf/agat_rf_cover.jpg',
    images: [
      'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'iOS', 'Android', 'Flutter', 'Team'],
    technologies: [
      'Flutter',
      'Clean Architecture',
      'BLoC',
      'Provider',
      'Dio',
      'Retrofit',
      'Yandex Maps',
      'WebSockets',
      'REST API',
    ],
    links: [
      { kind: 'appstore', url: 'https://apps.apple.com/app/id1479219288' },
      {
        kind: 'googleplay',
        url: 'https://play.google.com/store/apps/details?id=com.agatgroup.agatclient',
      },
      {
        kind: 'rustore',
        url: 'https://www.rustore.ru/catalog/app/com.agatgroup.agatclient',
      },
    ],
  },
  {
    id: 'agat-crm',
    icon: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'Android', 'iOS', 'Flutter', 'Solo dev'],
    technologies: [
      'Flutter',
      'Clean Architecture',
      'BLoC',
      'Provider',
      'Dio',
      'Retrofit',
      'rxdart',
      'REST API',
    ],
  },
  {
    id: 'penta-iot',
    icon: '/projects/penta/penta_logo.jpg',
    cover: '/projects/penta/penta_cover.jpg',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'iOS', 'Android', 'Flutter', 'IoT', 'Solo dev'],
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'BLoC',
      'Dio',
      'Retrofit',
      'Secure Storage',
      'Local Auth',
      'AutoRoute',
      'Provider',
    ],
  },
  {
    id: 'random-walk',
    icon: '/projects/random_walk/random_walk_logo.svg',
    cover: '/projects/random_walk/random_walk_cover.jpg',
    images: [
      '/projects/random_walk/01_meetings.jpg',
      '/projects/random_walk/02_walk.jpg',
      '/projects/random_walk/03_map.jpg',
      '/projects/random_walk/04_slot.jpg',
      '/projects/random_walk/05_chats.jpg',
      '/projects/random_walk/06_chat.jpg',
      '/projects/random_walk/07_settings.jpg',
      '/projects/random_walk/08_auth.jpg',
      '/projects/random_walk/09_google.jpg',
    ],
    chips: ['Diploma', 'Mobile', 'iOS', 'Android', 'PWA', 'Flutter', 'Team'],
    technologies: [
      'Flutter',
      'Dart',
      'Clean Architecture',
      'BLoC',
      'Provider',
      'Firebase Auth',
      'Firebase Cloud Messaging',
      'MapLibre GL',
      'MapTiler',
      'DaData',
      'Drift',
      'WebSockets',
      'PWA',
    ],
    links: [{ kind: 'github', url: 'https://github.com/ru-random-walk/mobile_app' }],
  },
  {
    id: 'more-than-wrap',
    icon: '/projects/more_than_wrap/more_than_wrap_logo.svg',
    cover: '/projects/more_than_wrap/more_than_wrap_cover.png',
    images: ['/projects/more_than_wrap/more_than_wrap_cover.png'],
    chips: ['Open Source', 'Flutter', 'Solo dev'],
    technologies: ['Flutter', 'Dart', 'RenderObject', 'Custom layout', 'pub.dev'],
    links: [
      { kind: 'pubdev', url: 'https://pub.dev/packages/more_than_wrap' },
      { kind: 'github', url: 'https://github.com/Max-Size/more_than_wrap' },
      { kind: 'demo', url: 'https://max-size.github.io/more_than_wrap/' },
    ],
  },
]

const experienceMeta = [
  {
    id: 'agat',
    companyUrl: 'https://agat-group.com/',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=АГ&backgroundColor=0f766e',
    startDate: '2023-06',
    endDate: 'present' as const,
  },
  {
    id: 'alpa',
    companyUrl: 'https://alpa.studio',
    logo: 'https://admin.alpa.studio/uploads/alpa_logo_v8_1_fe94eb00d3.svg',
    startDate: '2025-09',
    endDate: '2025-12',
  },
]

const educationMeta = [
  {
    id: 'hse-nn',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=ВШЭ&backgroundColor=1d4ed8',
    startDate: '2021',
    endDate: '2025',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core',
    skills: ['SOLID', 'DRY', 'KISS', 'CleanArchitecture', 'Figma'],
  },
  {
    title: 'Mobile',
    skills: [
      'Flutter',
      'Riverpod',
      'BLoC/Cubit',
      'GoRouter',
      'AutoRouter',
      'FSD',
      'Drift',
      'Hive/Isar',
      'Firebase',
      'Unit/Widget/Integration tests',
      'Native Android/iOS',
    ],
  },
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'TanStack Query', 'TailwindCSS', 'Next.js', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Nginx'],
  },
  {
    title: 'CI/CD',
    skills: ['GitHub Actions', 'GitLab CI/CD', 'Fastlane', 'App Store Connect'],
  },
  {
    title: 'AI-skills',
    skills: ['Cursor', 'ClaudeCode', 'MCP-integration', 'Skills', 'LLM Workflows'],
  },
]

const sharedProfile = {
  birthDate: '2002-11-22',
  specialization: 'Software Engineer',
  photo: '/me.jpg',
  contacts: {
    telegram: 'https://t.me/maxs1zen',
    gmail: 'mailto:maximuhkass14@gmail.com',
    hh: 'https://hh.ru/resume/example',
    linkedin: 'https://linkedin.com/in/example',
  },
}

export function getProjects(locale: Locale): Project[] {
  return projectMeta.map((meta) => {
    const copy = projectCopy[locale][meta.id]
    return { ...meta, ...copy }
  })
}

export function getProjectById(id: string, locale: Locale): Project | undefined {
  return getProjects(locale).find((p) => p.id === id)
}

export function getExperience(locale: Locale): Experience[] {
  const projects = getProjects(locale)
  const titleById = Object.fromEntries(projects.map((p) => [p.id, p.title]))

  return experienceMeta.map((meta) => {
    const copy = experienceCopy[locale][meta.id]
    return {
      ...meta,
      company: copy.company,
      achievements: copy.achievements.map((block) => ({
        ...block,
        projectTitle: titleById[block.projectId] ?? block.projectId,
      })),
    }
  })
}

export function getEducation(locale: Locale): Education[] {
  return educationMeta.map((meta) => ({
    ...meta,
    ...educationCopy[locale][meta.id],
  }))
}

export function getProfile(locale: Locale): Profile {
  return { ...sharedProfile, ...profileCopy[locale] }
}
