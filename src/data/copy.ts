import type { Locale } from '../i18n/locale'

export interface ProfileCopy {
  name: string
  about: string
}

export interface ProjectCopy {
  title: string
  shortDescription: string
  fullDescription: string
  role: string
  highlight: string
  achievements: string[]
}

export interface ExperienceCopy {
  company: string
  achievements: Array<{ projectId: string; points: string[] }>
}

export interface EducationCopy {
  university: string
  field: string
  program: string
}

export const profileCopy: Record<Locale, ProfileCopy> = {
  ru: {
    name: 'Максим Селезнев',
    about: `Профессиональный инженер-разработчик с подтверждённым опытом работы более 3 лет. Ответственно веду продукт от идеи до релиза: проектирую архитектуру, собираю команду процессов и довожу решение до выхода на рынок.

Умею создавать полноценные продукты с нуля — мобильные приложения, веб-сервисы и бэкенд — и делать это в сжатые сроки без потери качества. Понимаю, что разработка должна решать бизнес-задачи и генерировать деньги: думаю не только о коде, но и о метриках, юнит-экономике и удобстве для пользователя.

Есть практический опыт создания мобильных приложений (iOS/Android), сайтов и серверной инфраструктуры. Готов брать ответственность за результат и работать как самостоятельный исполнитель, так и в команде.`,
  },
  en: {
    name: 'Maxim Seleznev',
    about: `Professional software engineer with 3+ years of proven experience. I take a product from idea to release: architecture, delivery process, and shipping to market.

I build complete products from scratch — mobile apps, web services, and backends — on tight timelines without sacrificing quality. Development should solve business problems and make money: I think in metrics, unit economics, and UX, not just code.

Hands-on experience with mobile apps (iOS/Android), websites, and server infrastructure. I own the outcome — as a solo contributor or as part of a team.`,
  },
}

export const projectCopy: Record<Locale, Record<string, ProjectCopy>> = {
  ru: {
    gandiva: {
      title: 'Gandiva 2.0',
      shortDescription:
        'Менеджмент-система, которая эффективно оптимизирует бюрократические процессы в компании.',
      fullDescription: `Gandiva 2.0 — корпоративное мобильное приложение для оптимизации бюрократических процессов. Проект с нуля: архитектура, структура модулей, CI/CD, подходы к разработке и code-style.

Выступал техническим лидом мобильного направления: декомпозиция задач, code review и менторинг. Реализовал кастомные RenderObject-компоненты для сложных high-performance UI и анимаций, безопасную OAuth 2.0 / OpenID Connect авторизацию с deep links и secure token flow.

Внедрил AI-assisted review pipeline и AI-агентов в workflow команды, что сократило время code review более чем на 60%.`,
      role: 'Flutter-разработчик / Tech Lead',
      highlight: 'AI-review pipeline: −60% времени ревью',
      achievements: [
        'Спроектировал и реализовал приложение с нуля: архитектура, модули, CI/CD и code-style',
        'Выступал техлидом мобильного направления: декомпозиция, code review, менторинг',
        'Разработал кастомные RenderObject-компоненты для high-performance UI и анимаций',
        'Внедрил AI-assisted review pipeline и сократил время code review более чем на 60%',
        'Реализовал OAuth 2.0/OIDC с deep links и secure token flow',
        'Интегрировал crash reporting, push-уведомления, deep linking и централизованное логирование',
      ],
    },
    'agat-rf': {
      title: 'АГАТ.РФ',
      shortDescription:
        'Приложение для просмотра каталога автомобилей и покупки услуг по обслуживанию авто.',
      fullDescription: `АГАТ.РФ — мобильное приложение автодилерской сети: каталог автомобилей, услуги обслуживания и сопутствующие сценарии для клиентов.

Фокус на стабильности и скорости: исправление критических багов в сжатые сроки, оптимизация сетевых запросов и рефакторинг модулей под быстрое добавление фич. Интегрировал аналитику просмотра авто, что повлияло на уровень продаж.`,
      role: 'Flutter-разработчик',
      highlight: 'Оптимизация запросов: быстрее ×3',
      achievements: [
        'Исправлял критические баги в ограниченное время',
        'Оптимизировал сетевые запросы — скорость работы приложения выросла в 3 раза',
        'Отрефакторил модули так, что новые фичи добавлялись в 2 раза быстрее',
        'Интегрировал аналитику просмотра авто, что увеличило уровень продаж',
      ],
    },
    'agat-crm': {
      title: 'Agat.CRM',
      shortDescription:
        'Внутреннее приложение для менеджеров: автоматизация проведения тест-драйвов.',
      fullDescription: `Agat.CRM — внутреннее мобильное приложение для менеджеров автодилерской сети. Цель — автоматизировать процесс проведения тест-драйвов: от записи клиента до фиксации результата.

Приложение собрано с нуля: проектирование архитектуры, планирование и приоритизация задач, интеграция системы логирования ошибок и сбоев.`,
      role: 'Flutter-разработчик',
      highlight: 'Архитектура и логирование — с нуля',
      achievements: [
        'Реализовал приложение с нуля и спроектировал архитектуру',
        'Планировал и приоритизировал задачи разработки',
        'Интегрировал систему логирования ошибок и сбоев',
      ],
    },
    'penta-iot': {
      title: 'Penta IoT',
      shortDescription:
        'Мобильное приложение для управления IoT-устройствами: шлагбаумы, доступ и мониторинг.',
      fullDescription: `Мобильное приложение для управления IoT-устройствами: шлагбаумы, системы доступа и мониторинг оборудования.

Спроектировал архитектуру и реализовал проект с нуля. Собрал pixel-perfect UI по Figma-макетам, интегрировал биометрическую аутентификацию (Face ID / Touch ID), защищённое хранение данных и токенов, работу с IoT-oriented API и realtime-событиями.`,
      role: 'Flutter-разработчик',
      highlight: '0 → релиз соло',
      achievements: [
        'Спроектировал архитектуру и реализовал приложение с нуля',
        'Собрал pixel-perfect UI по Figma-макетам',
        'Интегрировал биометрию Face ID / Touch ID и secure storage',
        'Работал с IoT API и realtime-событиями с акцентом на безопасность данных',
      ],
    },
    'random-walk': {
      title: 'Random Walk',
      shortDescription:
        'Сервис поиска партнёров для прогулок по интересам. Дипломный проект НИУ ВШЭ.',
      fullDescription: `Random Walk — кроссплатформенное приложение для iOS, Android и PWA: подбор партнёра для прогулки по интересам, карта встречи, чат и уведомления.

Дипломный проект НИУ ВШЭ — Нижний Новгород (ИМиКН, 2025). Собрал клиент с нуля в monorepo: модули auth, matcher, chats, clubs, core. Внутри каждого модуля — Clean Architecture (presentation / domain / data). UI собрал по макетам Figma.

Авторизация по почте с одноразовым кодом и через Google, токены в encrypted storage и автоматическая подстановка в API. Карты — MapLibre GL + MapTiler, геокодирование через DaData, маршрут открывается во внешних картах. Чат на WebSocket: текст и приглашение на прогулку. Push через Firebase Cloud Messaging работают даже при закрытом приложении. Для картинок с одноразовыми URL (TTL 5 минут) сделал кэш на Drift + системном disk cache.`,
      role: 'Flutter-разработчик · дипломный проект',
      highlight: 'Диплом ВШЭ · iOS, Android и PWA',
      achievements: [
        'Реализовал клиент с нуля в monorepo с Clean Architecture в каждом модуле',
        'Собрал адаптивный UI по Figma-макетам для iOS, Android и PWA',
        'Сделал авторизацию по email-коду и Google, encrypted tokens и auto-attach к API',
        'Подключил MapLibre GL / MapTiler и DaData: выбор точки, адрес, маршрут во внешних картах',
        'Реализовал realtime-чат на WebSocket с приглашениями на прогулку',
        'Настроил FCM: уведомления в любом состоянии приложения и deep-link в нужный экран',
        'Спроектировал кэш изображений с одноразовыми ссылками: Drift + disk cache',
      ],
    },
    'more-than-wrap': {
      title: 'more_than_wrap',
      shortDescription:
        'Flutter-пакет: Wrap с лимитом строк и настоящим виджетом «+N more».',
      fullDescription: `more_than_wrap — open-source Flutter-пакет на pub.dev. Виджет LimitedWrap ограничивает число строк (maxLines) и вставляет реальный overflow-child в конец последней строки: чип, кнопку или любой другой виджет.

Это не обёртка над Wrap, а RenderObjectWidget: дети инфлейтятся во время layout, как в slivers. Непоместившиеся элементы не монтируются в дерево (в .builder они даже не создаются). Overflow-виджет собирается в том же проходе layout, поэтому первый кадр уже с корректным +N — без флеша и прыжка.

Если индикатор не влезает в остаток строки, прячутся ещё дети, пока он не встанет. Совместим с packing Flutter Wrap: spacing, alignment, RTL.`,
      role: 'Author / Flutter',
      highlight: 'RenderObject: +N без флеша на первом кадре',
      achievements: [
        'Опубликовал пакет на pub.dev: LimitedWrap с maxLines и overflow-слотом',
        'Реализовал кастомный RenderObject: инфлейт детей во время layout, как в slivers',
        'Overflow-виджет строится в том же performLayout — корректный +N уже на первом кадре',
        'Скрытые дети не монтируются; LimitedWrap.builder не создаёт элементы за видимым префиксом',
        'Индикатор подгоняется под ширину: лишние дети прячутся, пока +N не влезет',
      ],
    },
  },
  en: {
    gandiva: {
      title: 'Gandiva 2.0',
      shortDescription:
        'A management system that streamlines bureaucratic processes inside the company.',
      fullDescription: `Gandiva 2.0 is a corporate mobile app that streamlines bureaucratic processes. Built from scratch: architecture, module structure, CI/CD, engineering practices, and code style.

I was tech lead for the mobile track: task breakdown, code review, and mentoring. I shipped custom RenderObject components for complex high-performance UI and animations, plus a secure OAuth 2.0 / OpenID Connect flow with deep links and a secure token flow.

I introduced an AI-assisted review pipeline and AI agents into the team workflow, cutting code-review time by more than 60%.`,
      role: 'Flutter developer / Tech Lead',
      highlight: 'AI review pipeline: −60% review time',
      achievements: [
        'Designed and shipped the app from scratch: architecture, modules, CI/CD, and code style',
        'Tech-led the mobile track: decomposition, code review, mentoring',
        'Built custom RenderObject components for high-performance UI and animations',
        'Introduced an AI-assisted review pipeline and cut code-review time by more than 60%',
        'Implemented OAuth 2.0/OIDC with deep links and a secure token flow',
        'Integrated crash reporting, push notifications, deep linking, and centralized logging',
      ],
    },
    'agat-rf': {
      title: 'AGAT.RF',
      shortDescription:
        'An app to browse the car catalog and buy vehicle maintenance services.',
      fullDescription: `AGAT.RF is a mobile app for a car-dealer network: vehicle catalog, maintenance services, and related client flows.

Focus on stability and speed: critical bugfixes under tight deadlines, network-request optimization, and module refactors so features could land faster. I integrated vehicle-view analytics that affected sales.`,
      role: 'Flutter developer',
      highlight: 'Request optimization: 3× faster',
      achievements: [
        'Fixed critical bugs under tight deadlines',
        'Optimized network requests — the app became 3× faster',
        'Refactored modules so new features shipped 2× faster',
        'Integrated vehicle-view analytics, which increased sales',
      ],
    },
    'agat-crm': {
      title: 'Agat.CRM',
      shortDescription: 'Internal app for managers: automating test drives.',
      fullDescription: `Agat.CRM is an internal mobile app for managers in a car-dealer network. The goal is to automate test drives: from booking a client to recording the result.

Built from scratch: architecture, planning and prioritization, and an error/crash logging system.`,
      role: 'Flutter developer',
      highlight: 'Architecture and logging — from scratch',
      achievements: [
        'Shipped the app from scratch and designed the architecture',
        'Planned and prioritized development work',
        'Integrated error and crash logging',
      ],
    },
    'penta-iot': {
      title: 'Penta IoT',
      shortDescription:
        'A mobile app for IoT devices: barriers, access control, and monitoring.',
      fullDescription: `A mobile app for managing IoT devices: barriers, access systems, and equipment monitoring.

I designed the architecture and built the product from scratch. Pixel-perfect UI from Figma, biometric auth (Face ID / Touch ID), secure storage for data and tokens, IoT-oriented APIs, and realtime events.`,
      role: 'Flutter developer',
      highlight: '0 → release, solo',
      achievements: [
        'Designed the architecture and built the app from scratch',
        'Shipped pixel-perfect UI from Figma',
        'Integrated Face ID / Touch ID biometrics and secure storage',
        'Worked with IoT APIs and realtime events with a focus on data security',
      ],
    },
    'random-walk': {
      title: 'Random Walk',
      shortDescription:
        'A service to find walking partners by interests. HSE diploma project.',
      fullDescription: `Random Walk is a cross-platform app for iOS, Android, and PWA: match a walking partner by interests, meeting map, chat, and notifications.

HSE University — Nizhny Novgorod diploma (Faculty of Informatics, Mathematics and Computer Science, 2025). I built the client from scratch in a monorepo: auth, matcher, chats, clubs, core. Each module follows Clean Architecture (presentation / domain / data). UI from Figma.

Email one-time-code and Google auth, tokens in encrypted storage with automatic API attach. Maps via MapLibre GL + MapTiler, geocoding via DaData, routes open in external maps. WebSocket chat: text and walk invites. Firebase Cloud Messaging works even when the app is closed. For images with one-time URLs (5-minute TTL) I built a cache on Drift + the system disk cache.`,
      role: 'Flutter developer · diploma project',
      highlight: 'HSE diploma · iOS, Android, and PWA',
      achievements: [
        'Built the client from scratch in a monorepo with Clean Architecture in every module',
        'Shipped adaptive UI from Figma for iOS, Android, and PWA',
        'Implemented email-code and Google auth, encrypted tokens, and auto-attach to the API',
        'Connected MapLibre GL / MapTiler and DaData: pick a point, address, route in external maps',
        'Built a realtime WebSocket chat with walk invitations',
        'Set up FCM: notifications in any app state and deep-links into the right screen',
        'Designed an image cache for one-time URLs: Drift + disk cache',
      ],
    },
    'more-than-wrap': {
      title: 'more_than_wrap',
      shortDescription:
        'Flutter package: Wrap with a line limit and a real “+N more” widget.',
      fullDescription: `more_than_wrap is an open-source Flutter package on pub.dev. LimitedWrap caps the number of lines (maxLines) and inserts a real overflow child at the end of the last line: a chip, a button, or any other widget.

This is not a Wrap wrapper — it is a RenderObjectWidget: children inflate during layout, like slivers. Overflowing children never mount (with .builder they are not even created). The overflow widget is built in the same layout pass, so the first frame already has the correct +N — no flash or jump.

If the indicator does not fit the remaining width, more children are hidden until it does. Compatible with Flutter Wrap packing: spacing, alignment, RTL.`,
      role: 'Author / Flutter',
      highlight: 'RenderObject: +N with no first-frame flash',
      achievements: [
        'Published the package on pub.dev: LimitedWrap with maxLines and an overflow slot',
        'Implemented a custom RenderObject: inflate children during layout, like slivers',
        'Overflow widget is built in the same performLayout — correct +N on the first frame',
        'Hidden children never mount; LimitedWrap.builder does not create items past the visible prefix',
        'The indicator fits the remaining width: extra children hide until +N fits',
      ],
    },
  },
}

export const experienceCopy: Record<Locale, Record<string, ExperienceCopy>> = {
  ru: {
    agat: {
      company: 'ГК АГАТ',
      achievements: [
        {
          projectId: 'gandiva',
          points: [
            'Спроектировал и реализовал приложение с нуля: архитектура, модули, CI/CD и code-style',
            'Выступал техлидом мобильного направления: декомпозиция, code review, менторинг',
            'Внедрил AI-assisted review pipeline — время code review сократилось более чем на 60%',
            'Реализовал OAuth 2.0/OIDC, deep links, push, crash reporting и централизованное логирование',
          ],
        },
        {
          projectId: 'agat-rf',
          points: [
            'Оптимизировал сетевые запросы и ускорил приложение в 3 раза',
            'Отрефакторил модули — новые фичи добавлялись в 2 раза быстрее',
            'Интегрировал аналитику просмотра авто, что увеличило уровень продаж',
          ],
        },
        {
          projectId: 'agat-crm',
          points: [
            'Реализовал внутреннее приложение для автоматизации тест-драйвов с нуля',
            'Спроектировал архитектуру и интегрировал логирование ошибок и сбоев',
          ],
        },
      ],
    },
    alpa: {
      company: 'АЛЬПА',
      achievements: [
        {
          projectId: 'penta-iot',
          points: [
            'Спроектировал архитектуру и реализовал приложение для управления IoT-устройствами с нуля',
            'Собрал pixel-perfect UI и интегрировал Face ID / Touch ID',
            'Реализовал secure storage и работу с IoT API / realtime-событиями',
          ],
        },
      ],
    },
  },
  en: {
    agat: {
      company: 'AGAT Group',
      achievements: [
        {
          projectId: 'gandiva',
          points: [
            'Designed and shipped the app from scratch: architecture, modules, CI/CD, and code style',
            'Tech-led the mobile track: decomposition, code review, mentoring',
            'Introduced an AI-assisted review pipeline — code-review time dropped by more than 60%',
            'Implemented OAuth 2.0/OIDC, deep links, push, crash reporting, and centralized logging',
          ],
        },
        {
          projectId: 'agat-rf',
          points: [
            'Optimized network requests and made the app 3× faster',
            'Refactored modules — new features shipped 2× faster',
            'Integrated vehicle-view analytics, which increased sales',
          ],
        },
        {
          projectId: 'agat-crm',
          points: [
            'Built an internal app to automate test drives from scratch',
            'Designed the architecture and integrated error/crash logging',
          ],
        },
      ],
    },
    alpa: {
      company: 'ALPA',
      achievements: [
        {
          projectId: 'penta-iot',
          points: [
            'Designed the architecture and built an IoT device management app from scratch',
            'Shipped pixel-perfect UI and integrated Face ID / Touch ID',
            'Implemented secure storage and IoT API / realtime events',
          ],
        },
      ],
    },
  },
}

export const educationCopy: Record<Locale, Record<string, EducationCopy>> = {
  ru: {
    'hse-nn': {
      university: 'НИУ ВШЭ — Нижний Новгород',
      field: 'ИМиКН',
      program: 'Высшее — Программная инженерия',
    },
  },
  en: {
    'hse-nn': {
      university: 'HSE University — Nizhny Novgorod',
      field: 'Faculty of Informatics, Mathematics and Computer Science',
      program: "Bachelor's — Software Engineering",
    },
  },
}
