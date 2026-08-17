import type { Locale } from './locale'

export const ui = {
  ru: {
    meta: {
      title: 'Максим Селезнев · Software Engineer',
      description:
        'Портфолио Максима Селезнева — Software Engineer: мобильные приложения, веб и бэкенд с нуля',
    },
    nav: {
      projects: 'Проекты',
      about: 'О себе',
      stack: 'Стек',
      experience: 'Опыт',
      contact: 'Контакты',
    },
    lang: {
      label: 'Язык',
      ru: 'RU',
      en: 'EN',
    },
    hero: {
      titleLead: 'Строю ',
      titleAccent: 'продукты',
      titleTail: ',',
      titleLine2: 'не только код.',
      subtitle:
        'Мобильные приложения, веб-сервисы и бэкенд с нуля — от архитектуры до релиза в сторы. Думаю метриками и юнит-экономикой.',
      viewProjects: 'Смотреть проекты',
      contact: 'Связаться',
      openToWork: 'open to work',
      drag: 'потяни',
      statYears: 'коммерческой разработки',
      statReview: 'времени code review после AI-pipeline',
      statSpeed: 'ускорение приложения АГАТ.РФ',
      statShipped: 'проекта доведены до продакшена',
    },
    projects: {
      title: 'Проекты',
      hint: 'клик по карточке — полный кейс',
      featured: 'флагманский кейс',
      openCase: 'открыть кейс →',
    },
    about: {
      title: 'О себе',
    },
    stack: {
      title: 'Стек',
      hint: 'сгруппировано по направлениям',
    },
    experience: {
      title: 'Опыт и образование',
      present: 'текущее время',
      degreeBadge: 'высшее · software engineering',
    },
    contact: {
      title: 'Обсудим проект?',
      subtitle: 'Отвечаю быстро. Открыт к продуктовым командам и сложным задачам.',
    },
    projectPage: {
      allProjects: 'все проекты',
      images: 'Изображения',
      clickToExpand: '// нажмите на изображение, чтобы открыть на весь экран',
      description: 'Описание',
      whatIDid: 'Что сделал',
      tech: 'Технологии',
      screenshotAlt: 'Скриншот',
    },
    lightbox: {
      view: 'Просмотр изображения',
      close: 'Закрыть',
      prev: 'Предыдущее',
      next: 'Следующее',
    },
    links: {
      web: 'Сайт',
    },
    footer: {
      note: 'bento + metaballs — без единой библиотеки',
    },
  },
  en: {
    meta: {
      title: 'Maxim Seleznev · Software Engineer',
      description:
        'Portfolio of Maxim Seleznev — Software Engineer: mobile apps, web, and backend from scratch',
    },
    nav: {
      projects: 'Projects',
      about: 'About',
      stack: 'Stack',
      experience: 'Experience',
      contact: 'Contact',
    },
    lang: {
      label: 'Language',
      ru: 'RU',
      en: 'EN',
    },
    hero: {
      titleLead: 'I build ',
      titleAccent: 'products',
      titleTail: ',',
      titleLine2: 'not just code.',
      subtitle:
        'Mobile apps, web services, and backends from scratch — from architecture to store release. I think in metrics and unit economics.',
      viewProjects: 'View projects',
      contact: 'Get in touch',
      openToWork: 'open to work',
      drag: 'drag',
      statYears: 'of commercial development',
      statReview: 'code-review time after the AI pipeline',
      statSpeed: 'faster AGAT.RF app',
      statShipped: 'projects shipped to production',
    },
    projects: {
      title: 'Projects',
      hint: 'click a card for the full case',
      featured: 'flagship case',
      openCase: 'open case →',
    },
    about: {
      title: 'About',
    },
    stack: {
      title: 'Stack',
      hint: 'grouped by area',
    },
    experience: {
      title: 'Experience and education',
      present: 'present',
      degreeBadge: 'higher education · software engineering',
    },
    contact: {
      title: 'Shall we talk?',
      subtitle: 'I reply quickly. Open to product teams and hard problems.',
    },
    projectPage: {
      allProjects: 'all projects',
      images: 'Images',
      clickToExpand: '// click an image to view fullscreen',
      description: 'Description',
      whatIDid: 'What I did',
      tech: 'Technologies',
      screenshotAlt: 'Screenshot',
    },
    lightbox: {
      view: 'Image viewer',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    links: {
      web: 'Website',
    },
    footer: {
      note: 'bento + metaballs — no extra libraries',
    },
  },
} as const

export type UiMessages = (typeof ui)[Locale]
