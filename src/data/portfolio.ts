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

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  role: string
  icon: string
  cover: string
  images: string[]
  chips: ProjectChip[]
  technologies: string[]
  achievements: string[]
}

export interface ExperienceAchievement {
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

export const profile = {
  name: 'Александр Иванов',
  birthDate: '2002-11-22',
  specialization: 'Software Engineer',
  photo:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  about: `Профессиональный инженер-разработчик с подтверждённым опытом работы более 3 лет. Ответственно веду продукт от идеи до релиза: проектирую архитектуру, собираю команду процессов и довожу решение до выхода на рынок.

Умею создавать полноценные продукты с нуля — мобильные приложения, веб-сервисы и бэкенд — и делать это в сжатые сроки без потери качества. Понимаю, что разработка должна решать бизнес-задачи и генерировать деньги: думаю не только о коде, но и о метриках, юнит-экономике и удобстве для пользователя.

Есть практический опыт создания мобильных приложений (iOS/Android), сайтов и серверной инфраструктуры. Готов брать ответственность за результат и работать как самостоятельный исполнитель, так и в команде.`,
  contacts: {
    telegram: 'https://t.me/example',
    gmail: 'mailto:example@gmail.com',
    hh: 'https://hh.ru/resume/example',
    linkedin: 'https://linkedin.com/in/example',
  },
}

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
    skills: ['Cursor', 'ClaudeCode', 'MCP-integration', 'Skills'],
  },
]

export const projects: Project[] = [
  {
    id: 'fintrack',
    title: 'FinTrack',
    shortDescription:
      'Мобильное приложение для учёта личных финансов с офлайн-режимом и синхронизацией.',
    fullDescription: `FinTrack — кроссплатформенное приложение для управления личным бюджетом. Пользователи ведут доходы и расходы, ставят цели накоплений и получают аналитику по категориям.

Проект построен с упором на офлайн-first: данные доступны без сети, а синхронизация выполняется при появлении соединения. Интерфейс адаптирован под iOS и Android с нативным ощущением навигации и жестов.`,
    role: 'Lead Mobile Developer',
    icon: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'iOS', 'Android', 'Flutter', 'Solo dev', 'PWA'],
    technologies: ['Flutter', 'Riverpod', 'Drift', 'Firebase Auth', 'GoRouter', 'Fastlane'],
    achievements: [
      'Запустил MVP за 6 недель и опубликовал в App Store и Google Play',
      'Реализовал офлайн-синхронизацию с разрешением конфликтов',
      'Довёл crash-free sessions до 99.7%',
      'Настроил CI/CD с автодеплоем через Fastlane',
    ],
  },
  {
    id: 'delivery-hub',
    title: 'Delivery Hub',
    shortDescription:
      'Платформа для логистики последней мили: мобильные клиенты курьеров и веб-панель оператора.',
    fullDescription: `Delivery Hub — комплексная система для служб доставки. Включает приложение курьера, клиентский трекинг и панель диспетчера с картой и распределением заказов в реальном времени.

Система обрабатывает тысячи заказов в день, использует очереди и кэширование для стабильной работы в пиковые часы. Отдельный фокус — удобство курьера: маршруты, статусы и офлайн-кэш маршрутного листа.`,
    role: 'Full-stack Engineer',
    icon: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1605745341112-859dfc6b8e9c?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'Backend', 'Frontend', 'Team', 'Flutter', 'React', 'Python'],
    technologies: [
      'Flutter',
      'React',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'TanStack Query',
    ],
    achievements: [
      'Сократил среднее время назначения заказа на 40%',
      'Спроектировал API и схему БД под горизонтальное масштабирование',
      'Внедрил real-time обновления статусов через WebSocket',
      'Покрыл критические сценарии integration-тестами',
    ],
  },
  {
    id: 'analytics-board',
    title: 'Analytics Board',
    shortDescription:
      'Дашборд продуктовой аналитики с ClickHouse и интерактивными отчётами для бизнеса.',
    fullDescription: `Analytics Board — внутренний продукт для продуктовых и маркетинговых команд. Агрегирует события из мобильных и веб-клиентов, строит воронки, когорты и LTV-метрики.

Архитектура рассчитана на большие объёмы: сырые события пишутся в ClickHouse, а API отдаёт агрегированные срезы для UI. Интерфейс построен как SPA с быстрой фильтрацией по датам, сегментам и каналам.`,
    role: 'Backend & Frontend Developer',
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1543286386-713bdd6533ff?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
    ],
    chips: ['Backend', 'Frontend', 'Team', 'Python', 'FastAPI', 'Clickhouse', 'React'],
    technologies: ['Python', 'FastAPI', 'ClickHouse', 'PostgreSQL', 'React', 'TypeScript', 'Vite'],
    achievements: [
      'Ускорил построение отчётов с минут до секунд за счёт ClickHouse',
      'Спроектировал пайплайн ингеста событий с идемпотентностью',
      'Собрал UI отчётов с сохраняемыми пресетами фильтров',
      'Снизил нагрузку на основную OLTP-базу на 70%',
    ],
  },
  {
    id: 'campus-connect',
    title: 'Campus Connect',
    shortDescription:
      'Дипломный проект: студенческий портал с расписанием, объявлениями и чатами групп.',
    fullDescription: `Campus Connect — дипломный веб- и мобильный продукт для университета. Студенты видят расписание, получают уведомления об изменениях и общаются в чатах учебных групп.

Проект включает PWA для быстрого доступа с телефона и админ-панель для деканата. Особое внимание уделено доступности и простоте онбординга для пользователей без технического бэкграунда.`,
    role: 'Solo Developer',
    icon: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4170?w=800&h=1600&fit=crop',
    ],
    chips: ['Mobile', 'Frontend', 'Solo dev', 'Diploma', 'Flutter', 'PWA', 'PostgreSQL'],
    technologies: ['Flutter', 'FastAPI', 'PostgreSQL', 'Firebase Messaging', 'Nginx'],
    achievements: [
      'Защитил диплом на «отлично» с работающим продакшен-прототипом',
      'Подключил 3 факультета к пилотному запуску',
      'Реализовал PWA с push-уведомлениями об изменениях расписания',
      'Описал архитектуру и передал документацию заказчику',
    ],
  },
  {
    id: 'open-kit',
    title: 'OpenKit UI',
    shortDescription:
      'Open-source набор Flutter-компонентов и утилит для быстрой сборки мобильных приложений.',
    fullDescription: `OpenKit UI — библиотека переиспользуемых виджетов, тем и хелперов для Flutter. Цель — ускорить старт коммерческих и pet-проектов без копипасты boilerplate.

Пакет включает адаптивные компоненты, готовые паттерны навигации и примеры интеграций с популярными стейт-менеджерами. Проект развивается публично: issues, PR и семантический versioning.`,
    role: 'Maintainer',
    icon: 'https://images.unsplash.com/photo-1618477389150-437feda70e96?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
    ],
    chips: ['Open Source', 'Mobile', 'Flutter', 'Solo dev'],
    technologies: ['Flutter', 'Dart', 'GitHub Actions', 'Melos', 'Widgetbook'],
    achievements: [
      'Опубликовал пакет и довёл до стабильной 1.x версии',
      'Настроил автоматический changelog и публикацию в pub.dev',
      'Получил внешние контрибьюции и закрыл 40+ issues',
      'Добавил галерею компонентов на Widgetbook',
    ],
  },
  {
    id: 'med-queue',
    title: 'MedQueue',
    shortDescription:
      'Сервис онлайн-записи в клиники: пациентское приложение и API для интеграций МИС.',
    fullDescription: `MedQueue помогает клиникам принимать онлайн-запись и снижать нагрузку на ресепшен. Пациенты выбирают врача, слот и получают напоминания; клиника управляет расписанием и интеграциями с медицинской ИС.

Бэкенд спроектирован как набор сервисов с чёткими контрактами API. Отдельный акцент — надёжность уведомлений и защита персональных данных.`,
    role: 'Backend Lead',
    icon: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=1600&fit=crop',
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=1600&fit=crop',
    ],
    chips: ['Backend', 'Mobile', 'Team', 'Python', 'FastAPI', 'PostgreSQL', 'Flutter'],
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Flutter', 'Nginx'],
    achievements: [
      'Вывел сервис в 12 клиник за первый квартал',
      'Снизил no-show на 18% за счёт напоминаний',
      'Спроектировал интеграционный слой с внешними МИС',
      'Организовал деплой в Kubernetes с zero-downtime релизом',
    ],
  },
]

export const experience: Experience[] = [
  {
    id: 'technova',
    company: 'TechNova',
    companyUrl: 'https://example.com/technova',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=TN&backgroundColor=0f766e',
    startDate: '2024-03',
    endDate: 'present',
    achievements: [
      {
        projectTitle: 'Delivery Hub',
        points: [
          'Разработал мобильное приложение курьера на Flutter с офлайн-режимом',
          'Спроектировал и реализовал API на FastAPI для распределения заказов',
          'Внедрил мониторинг и алерты, сократив время реакции на инциденты в 2 раза',
        ],
      },
      {
        projectTitle: 'Analytics Board',
        points: [
          'Перенёс тяжёлую аналитику в ClickHouse и ускорил отчёты в десятки раз',
          'Собрал React-дашборд с гибкими фильтрами для продуктовой команды',
        ],
      },
    ],
  },
  {
    id: 'softlabs',
    company: 'SoftLabs',
    companyUrl: 'https://example.com/softlabs',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=SL&backgroundColor=1e3a5f',
    startDate: '2022-08',
    endDate: '2024-02',
    achievements: [
      {
        projectTitle: 'FinTrack',
        points: [
          'С нуля собрал кроссплатформенное приложение и вывел в сторы',
          'Настроил CI/CD (GitHub Actions + Fastlane) и процесс релизных сборок',
          'Вёл коммуникации с дизайном и заказчиком, фиксировал приоритеты бэклога',
        ],
      },
      {
        projectTitle: 'MedQueue',
        points: [
          'Отвечал за backend-архитектуру и интеграции с внешними системами',
          'Обеспечил стабильную работу API при пиковых нагрузках записи',
        ],
      },
    ],
  },
  {
    id: 'startup-garage',
    company: 'Startup Garage',
    companyUrl: 'https://example.com/startup-garage',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=SG&backgroundColor=7c2d12',
    startDate: '2021-06',
    endDate: '2022-07',
    achievements: [
      {
        projectTitle: 'MVP для клиентов акселератора',
        points: [
          'Собирал прототипы мобильных и веб-продуктов под жёсткие дедлайны',
          'Помогал фаундерам валидировать гипотезы через быстрые итерации',
          'Работал full-stack: Flutter / React / Python в зависимости от задачи',
        ],
      },
    ],
  },
]

export const education: Education[] = [
  {
    id: 'msu-cs',
    university: 'Московский государственный университет',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=МГУ&backgroundColor=1d4ed8',
    startDate: '2020',
    endDate: '2024',
    field: 'Прикладная информатика',
    program: 'Бакалавриат — Информационные системы и технологии',
  },
  {
    id: 'yandex-practicum',
    university: 'Яндекс Практикум',
    logo: 'https://api.dicebear.com/9.x/initials/svg?seed=YP&backgroundColor=111827',
    startDate: '2021',
    endDate: '2022',
    field: 'Разработка',
    program: 'Профессиональная переподготовка — Android-разработчик',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
