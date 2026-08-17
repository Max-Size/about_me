export type ProjectChip =
  | "Mobile"
  | "iOS"
  | "Android"
  | "Backend"
  | "Frontend"
  | "Open Source"
  | "Solo dev"
  | "Team"
  | "Flutter"
  | "React"
  | "Python"
  | "FastAPI"
  | "PostgreSQL"
  | "Clickhouse"
  | "PWA"
  | "Diploma"
  | "IoT";

export type ProjectLinkKind =
  | "appstore"
  | "googleplay"
  | "rustore"
  | "github"
  | "pubdev"
  | "demo"
  | "web";

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
  /** подпись, если нужна нестандартная (по умолчанию берётся из kind) */
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  /** короткая ключевая метрика для карточки проекта */
  highlight: string;
  icon: string;
  cover: string;
  images: string[];
  chips: ProjectChip[];
  technologies: string[];
  achievements: string[];
  /** внешние ссылки: сторы, репозиторий, демо, сайт */
  links?: ProjectLink[];
}

export interface ExperienceAchievement {
  projectTitle: string;
  points: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string;
  logo: string;
  startDate: string;
  endDate: string | "present";
  achievements: ExperienceAchievement[];
}

export interface Education {
  id: string;
  university: string;
  logo: string;
  startDate: string;
  endDate: string;
  field: string;
  program: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const profile = {
  name: "Максим Селезнев",
  birthDate: "2002-11-22",
  specialization: "Software Engineer",
  photo: "/me.jpg",
  about: `Профессиональный инженер-разработчик с подтверждённым опытом работы более 3 лет. Ответственно веду продукт от идеи до релиза: проектирую архитектуру, собираю команду процессов и довожу решение до выхода на рынок.

Умею создавать полноценные продукты с нуля — мобильные приложения, веб-сервисы и бэкенд — и делать это в сжатые сроки без потери качества. Понимаю, что разработка должна решать бизнес-задачи и генерировать деньги: думаю не только о коде, но и о метриках, юнит-экономике и удобстве для пользователя.

Есть практический опыт создания мобильных приложений (iOS/Android), сайтов и серверной инфраструктуры. Готов брать ответственность за результат и работать как самостоятельный исполнитель, так и в команде.`,
  contacts: {
    telegram: "https://t.me/maxs1zen",
    gmail: "mailto:maximuhkass14@gmail.com",
    hh: "https://hh.ru/resume/example",
    linkedin: "https://linkedin.com/in/example",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    skills: ["SOLID", "DRY", "KISS", "CleanArchitecture", "Figma"],
  },
  {
    title: "Mobile",
    skills: [
      "Flutter",
      "Riverpod",
      "BLoC/Cubit",
      "GoRouter",
      "AutoRouter",
      "FSD",
      "Drift",
      "Hive/Isar",
      "Firebase",
      "Unit/Widget/Integration tests",
      "Native Android/iOS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "TanStack Query",
      "TailwindCSS",
      "Next.js",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Nginx",
    ],
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI/CD", "Fastlane", "App Store Connect"],
  },
  {
    title: "AI-skills",
    skills: [
      "Cursor",
      "ClaudeCode",
      "MCP-integration",
      "Skills",
      "LLM Workflows",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "gandiva",
    title: "Gandiva 2.0",
    shortDescription:
      "Менеджмент-система, которая эффективно оптимизирует бюрократические процессы в компании.",
    fullDescription: `Gandiva 2.0 — корпоративное мобильное приложение для оптимизации бюрократических процессов. Проект с нуля: архитектура, структура модулей, CI/CD, подходы к разработке и code-style.

Выступал техническим лидом мобильного направления: декомпозиция задач, code review и менторинг. Реализовал кастомные RenderObject-компоненты для сложных high-performance UI и анимаций, безопасную OAuth 2.0 / OpenID Connect авторизацию с deep links и secure token flow.

Внедрил AI-assisted review pipeline и AI-агентов в workflow команды, что сократило время code review более чем на 60%.`,
    role: "Flutter-разработчик / Tech Lead",
    highlight: "AI-review pipeline: −60% времени ревью",
    icon: "/projects/gandiva/gandiva_logo.jpg",
    cover: "/projects/gandiva/gandiva_cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1600&fit=crop",
    ],
    chips: ["Mobile", "iOS", "Android", "Flutter", "Team"],
    technologies: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Provider",
      "get_it",
      "Dio",
      "Retrofit",
      "Drift",
      "OAuth 2.0",
      "Firebase Messaging",
      "GitLab CI/CD",
    ],
    achievements: [
      "Спроектировал и реализовал приложение с нуля: архитектура, модули, CI/CD и code-style",
      "Выступал техлидом мобильного направления: декомпозиция, code review, менторинг",
      "Разработал кастомные RenderObject-компоненты для high-performance UI и анимаций",
      "Внедрил AI-assisted review pipeline и сократил время code review более чем на 60%",
      "Реализовал OAuth 2.0/OIDC с deep links и secure token flow",
      "Интегрировал crash reporting, push-уведомления, deep linking и централизованное логирование",
    ],
  },
  {
    id: "agat-rf",
    title: "АГАТ.РФ",
    shortDescription:
      "Приложение для просмотра каталога автомобилей и покупки услуг по обслуживанию авто.",
    fullDescription: `АГАТ.РФ — мобильное приложение автодилерской сети: каталог автомобилей, услуги обслуживания и сопутствующие сценарии для клиентов.

Фокус на стабильности и скорости: исправление критических багов в сжатые сроки, оптимизация сетевых запросов и рефакторинг модулей под быстрое добавление фич. Интегрировал аналитику просмотра авто, что повлияло на уровень продаж.`,
    role: "Flutter-разработчик",
    highlight: "Оптимизация запросов: быстрее ×3",
    icon: "/projects/agat_rf/agat_rf_logo.jpg",
    cover: "/projects/agat_rf/agat_rf_cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=1600&fit=crop",
    ],
    chips: ["Mobile", "iOS", "Android", "Flutter", "Team"],
    technologies: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Provider",
      "Dio",
      "Retrofit",
      "Yandex Maps",
      "WebSockets",
      "REST API",
    ],
    achievements: [
      "Исправлял критические баги в ограниченное время",
      "Оптимизировал сетевые запросы — скорость работы приложения выросла в 3 раза",
      "Отрефакторил модули так, что новые фичи добавлялись в 2 раза быстрее",
      "Интегрировал аналитику просмотра авто, что увеличило уровень продаж",
    ],
    links: [
      { kind: "appstore", url: "https://apps.apple.com/app/id1479219288" },
      {
        kind: "googleplay",
        url: "https://play.google.com/store/apps/details?id=com.agatgroup.agatclient",
      },
      {
        kind: "rustore",
        url: "https://www.rustore.ru/catalog/app/com.agatgroup.agatclient",
      },
    ],
  },
  {
    id: "agat-crm",
    title: "Agat.CRM",
    shortDescription:
      "Внутреннее приложение для менеджеров: автоматизация проведения тест-драйвов.",
    fullDescription: `Agat.CRM — внутреннее мобильное приложение для менеджеров автодилерской сети. Цель — автоматизировать процесс проведения тест-драйвов: от записи клиента до фиксации результата.

Приложение собрано с нуля: проектирование архитектуры, планирование и приоритизация задач, интеграция системы логирования ошибок и сбоев.`,
    role: "Flutter-разработчик",
    highlight: "Архитектура и логирование — с нуля",
    icon: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1600&fit=crop",
    ],
    chips: ["Mobile", "Android", "iOS", "Flutter", "Solo dev"],
    technologies: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Provider",
      "Dio",
      "Retrofit",
      "rxdart",
      "REST API",
    ],
    achievements: [
      "Реализовал приложение с нуля и спроектировал архитектуру",
      "Планировал и приоритизировал задачи разработки",
      "Интегрировал систему логирования ошибок и сбоев",
    ],
  },
  {
    id: "penta-iot",
    title: "Penta IoT",
    shortDescription:
      "Мобильное приложение для управления IoT-устройствами: шлагбаумы, доступ и мониторинг.",
    fullDescription: `Мобильное приложение для управления IoT-устройствами: шлагбаумы, системы доступа и мониторинг оборудования.

Спроектировал архитектуру и реализовал проект с нуля. Собрал pixel-perfect UI по Figma-макетам, интегрировал биометрическую аутентификацию (Face ID / Touch ID), защищённое хранение данных и токенов, работу с IoT-oriented API и realtime-событиями.`,
    role: "Flutter-разработчик",
    highlight: "0 → релиз соло",
    icon: "/projects/penta/penta_logo.jpg",
    cover: "/projects/penta/penta_cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=1600&fit=crop",
    ],
    chips: ["Mobile", "iOS", "Android", "Flutter", "IoT", "Solo dev"],
    technologies: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC",
      "Dio",
      "Retrofit",
      "Secure Storage",
      "Local Auth",
      "AutoRoute",
      "Provider",
    ],
    achievements: [
      "Спроектировал архитектуру и реализовал приложение с нуля",
      "Собрал pixel-perfect UI по Figma-макетам",
      "Интегрировал биометрию Face ID / Touch ID и secure storage",
      "Работал с IoT API и realtime-событиями с акцентом на безопасность данных",
    ],
  },
  {
    id: "random-walk",
    title: "Random Walk",
    shortDescription:
      "Сервис поиска партнёров для прогулок по интересам. Дипломный проект НИУ ВШЭ.",
    fullDescription: `Random Walk — кроссплатформенное приложение для iOS, Android и PWA: подбор партнёра для прогулки по интересам, карта встречи, чат и уведомления.

Дипломный проект НИУ ВШЭ — Нижний Новгород (ИМиКН, 2025). Собрал клиент с нуля в monorepo: модули auth, matcher, chats, clubs, core. Внутри каждого модуля — Clean Architecture (presentation / domain / data). UI собрал по макетам Figma.

Авторизация по почте с одноразовым кодом и через Google, токены в encrypted storage и автоматическая подстановка в API. Карты — MapLibre GL + MapTiler, геокодирование через DaData, маршрут открывается во внешних картах. Чат на WebSocket: текст и приглашение на прогулку. Push через Firebase Cloud Messaging работают даже при закрытом приложении. Для картинок с одноразовыми URL (TTL 5 минут) сделал кэш на Drift + системном disk cache.`,
    role: "Flutter-разработчик · дипломный проект",
    highlight: "Диплом ВШЭ · iOS, Android и PWA",
    icon: "/projects/random_walk/random_walk_logo.svg",
    cover: "/projects/random_walk/random_walk_cover.jpg",
    images: [
      "/projects/random_walk/01_meetings.jpg",
      "/projects/random_walk/02_walk.jpg",
      "/projects/random_walk/03_map.jpg",
      "/projects/random_walk/04_slot.jpg",
      "/projects/random_walk/05_chats.jpg",
      "/projects/random_walk/06_chat.jpg",
      "/projects/random_walk/07_settings.jpg",
      "/projects/random_walk/08_auth.jpg",
      "/projects/random_walk/09_google.jpg",
    ],
    chips: ["Diploma", "Mobile", "iOS", "Android", "PWA", "Flutter", "Team"],
    technologies: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC",
      "Provider",
      "Firebase Auth",
      "Firebase Cloud Messaging",
      "MapLibre GL",
      "MapTiler",
      "DaData",
      "Drift",
      "WebSockets",
      "PWA",
    ],
    achievements: [
      "Реализовал клиент с нуля в monorepo с Clean Architecture в каждом модуле",
      "Собрал адаптивный UI по Figma-макетам для iOS, Android и PWA",
      "Сделал авторизацию по email-коду и Google, encrypted tokens и auto-attach к API",
      "Подключил MapLibre GL / MapTiler и DaData: выбор точки, адрес, маршрут во внешних картах",
      "Реализовал realtime-чат на WebSocket с приглашениями на прогулку",
      "Настроил FCM: уведомления в любом состоянии приложения и deep-link в нужный экран",
      "Спроектировал кэш изображений с одноразовыми ссылками: Drift + disk cache",
    ],
    links: [
      { kind: "github", url: "https://github.com/ru-random-walk/mobile_app" },
    ],
  },
  {
    id: "more-than-wrap",
    title: "more_than_wrap",
    shortDescription:
      "Flutter-пакет: Wrap с лимитом строк и настоящим виджетом «+N more».",
    fullDescription: `more_than_wrap — open-source Flutter-пакет на pub.dev. Виджет LimitedWrap ограничивает число строк (maxLines) и вставляет реальный overflow-child в конец последней строки: чип, кнопку или любой другой виджет.

Это не обёртка над Wrap, а RenderObjectWidget: дети инфлейтятся во время layout, как в slivers. Непоместившиеся элементы не монтируются в дерево (в .builder они даже не создаются). Overflow-виджет собирается в том же проходе layout, поэтому первый кадр уже с корректным +N — без флеша и прыжка.

Если индикатор не влезает в остаток строки, прячутся ещё дети, пока он не встанет. Совместим с packing Flutter Wrap: spacing, alignment, RTL.`,
    role: "Author / Flutter",
    highlight: "RenderObject: +N без флеша на первом кадре",
    icon: "/projects/more_than_wrap/more_than_wrap_logo.svg",
    cover: "/projects/more_than_wrap/more_than_wrap_cover.png",
    images: ["/projects/more_than_wrap/more_than_wrap_cover.png"],
    chips: ["Open Source", "Flutter", "Solo dev"],
    technologies: [
      "Flutter",
      "Dart",
      "RenderObject",
      "Custom layout",
      "pub.dev",
    ],
    achievements: [
      "Опубликовал пакет на pub.dev: LimitedWrap с maxLines и overflow-слотом",
      "Реализовал кастомный RenderObject: инфлейт детей во время layout, как в slivers",
      "Overflow-виджет строится в том же performLayout — корректный +N уже на первом кадре",
      "Скрытые дети не монтируются; LimitedWrap.builder не создаёт элементы за видимым префиксом",
      "Индикатор подгоняется под ширину: лишние дети прячутся, пока +N не влезет",
    ],
    links: [
      { kind: "pubdev", url: "https://pub.dev/packages/more_than_wrap" },
      { kind: "github", url: "https://github.com/Max-Size/more_than_wrap" },
      { kind: "demo", url: "https://max-size.github.io/more_than_wrap/" },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "agat",
    company: "ГК АГАТ",
    companyUrl: "https://agat-group.com/",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=АГ&backgroundColor=0f766e",
    startDate: "2023-06",
    endDate: "present",
    achievements: [
      {
        projectTitle: "Gandiva 2.0",
        points: [
          "Спроектировал и реализовал приложение с нуля: архитектура, модули, CI/CD и code-style",
          "Выступал техлидом мобильного направления: декомпозиция, code review, менторинг",
          "Внедрил AI-assisted review pipeline — время code review сократилось более чем на 60%",
          "Реализовал OAuth 2.0/OIDC, deep links, push, crash reporting и централизованное логирование",
        ],
      },
      {
        projectTitle: "АГАТ.РФ",
        points: [
          "Оптимизировал сетевые запросы и ускорил приложение в 3 раза",
          "Отрефакторил модули — новые фичи добавлялись в 2 раза быстрее",
          "Интегрировал аналитику просмотра авто, что увеличило уровень продаж",
        ],
      },
      {
        projectTitle: "Agat.CRM",
        points: [
          "Реализовал внутреннее приложение для автоматизации тест-драйвов с нуля",
          "Спроектировал архитектуру и интегрировал логирование ошибок и сбоев",
        ],
      },
    ],
  },
  {
    id: "alpa",
    company: "АЛЬПА",
    companyUrl: "https://alpa.studio",
    logo: "https://admin.alpa.studio/uploads/alpa_logo_v8_1_fe94eb00d3.svg",
    startDate: "2025-09",
    endDate: "2025-12",
    achievements: [
      {
        projectTitle: "Penta IoT",
        points: [
          "Спроектировал архитектуру и реализовал приложение для управления IoT-устройствами с нуля",
          "Собрал pixel-perfect UI и интегрировал Face ID / Touch ID",
          "Реализовал secure storage и работу с IoT API / realtime-событиями",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    id: "hse-nn",
    university: "НИУ ВШЭ — Нижний Новгород",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=ВШЭ&backgroundColor=1d4ed8",
    startDate: "2021",
    endDate: "2025",
    field: "ИМиКН",
    program: "Высшее — Программная инженерия",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
