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
      titleLead: 'Создаю',
      titleAccent: 'продукты',
      titleTail: ',',
      titleLine2: 'не только код.',
      subtitle:
        'Мобильные приложения, веб-сервисы и бэкенд с нуля — от архитектуры до успешного релиза',
      viewProjects: 'Смотреть проекты',
      contact: 'Связаться',
      openToWork: 'open to work',
      drag: 'потяни',
      statYears: 'коммерческой разработки',
      statEstimate: 'задач реализованы в срок',
      statSpeed: 'скорость разработки благодаря внедрению ИИ-агентов',
      statShipped: 'проектов доведено до продакшена',
    },
    projects: {
      title: 'Проекты',
      hint: 'клик по карточке — полный кейс',
      featured: 'флагманский кейс',
      openCase: 'открыть кейс →',
      status: {
        active: 'активен',
        development: 'в работе',
        retired: 'архив',
      },
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
      hsediploma: 'Реестр дипломов ВШЭ',
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
      titleLead: 'I create',
      titleAccent: 'products',
      titleTail: ',',
      titleLine2: 'not just code.',
      subtitle:
        'Mobile apps, web services, and backends from scratch — from architecture to successful release',
      viewProjects: 'View projects',
      contact: 'Get in touch',
      openToWork: 'open to work',
      drag: 'drag',
      statYears: 'of commercial development',
      statEstimate: 'tasks completed on time',
      statSpeed: 'development speed thanks to AI agent integration',
      statShipped: 'projects shipped to production',
    },
    projects: {
      title: 'Projects',
      hint: 'click a card for the full case',
      featured: 'flagship case',
      openCase: 'open case →',
      status: {
        active: 'live',
        development: 'in progress',
        retired: 'archived',
      },
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
      hsediploma: 'HSE Diploma Registry',
    },
    footer: {
      note: 'bento + metaballs — no extra libraries',
    },
  },
} as const

export type UiMessages = (typeof ui)[Locale]
