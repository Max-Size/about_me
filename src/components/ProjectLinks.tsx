import type { ReactElement } from 'react'
import type { ProjectLink, ProjectLinkKind } from '../data/portfolio'

const defaultLabels: Record<ProjectLinkKind, string> = {
  appstore: 'App Store',
  googleplay: 'Google Play',
  rustore: 'RuStore',
  github: 'GitHub',
  pubdev: 'pub.dev',
  demo: 'Live demo',
  web: 'Сайт',
}

const icons: Record<ProjectLinkKind, (props: { className?: string }) => ReactElement> = {
  appstore: IconAppStore,
  googleplay: IconGooglePlay,
  rustore: IconRuStore,
  github: IconGitHub,
  pubdev: IconPubDev,
  demo: IconDemo,
  web: IconWeb,
}

interface ProjectLinksProps {
  links: ProjectLink[]
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links.map((link) => {
        const Icon = icons[link.kind]
        return (
          <a
            key={`${link.kind}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[12.5px] font-medium text-ink-muted transition hover:border-border-strong hover:text-accent"
          >
            <Icon className="h-3.5 w-3.5" />
            {link.label ?? defaultLabels[link.kind]}
            <span className="text-ink-dim transition group-hover:translate-x-0.5 group-hover:text-accent">
              ↗
            </span>
          </a>
        )
      })}
    </div>
  )
}

function IconAppStore({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.8c.03-2.5 2.05-3.7 2.14-3.76-1.17-1.7-2.98-1.94-3.62-1.97-1.54-.16-3.02.91-3.8.91-.8 0-2.02-.88-3.32-.86-1.7.03-3.27 1-4.14 2.53-1.77 3.07-.45 7.61 1.26 10.1.84 1.21 1.83 2.57 3.13 2.52 1.26-.05 1.74-.81 3.26-.81s1.95.81 3.28.78c1.35-.02 2.21-1.23 3.04-2.45.96-1.4 1.35-2.76 1.38-2.83-.03 0-2.65-1.02-2.61-4.06zM13.7 5.28c.7-.85 1.17-2.03 1.04-3.21-1 .04-2.21.67-2.93 1.5-.65.74-1.22 1.94-1.07 3.09 1.13.09 2.27-.57 2.96-1.38z" />
    </svg>
  )
}

function IconGooglePlay({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.65629C2 2.15127 3.59967 1.18549 4.93149 1.88645L20.7844 10.2301C22.2091 10.9799 22.2091 13.0199 20.7844 13.7698L4.9315 22.1134C3.59968 22.8144 2 21.8486 2 20.3436V3.65629ZM19.8529 11.9999L16.2682 10.1132L14.2243 11.9999L16.2682 13.8866L19.8529 11.9999ZM14.3903 14.875L12.75 13.3608L6.75782 18.8921L14.3903 14.875ZM12.75 10.639L14.3903 9.12488L6.75782 5.10777L12.75 10.639ZM4 5.28391L11.2757 11.9999L4 18.7159V5.28391Z"
      />
    </svg>
  )
}

function IconRuStore({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 192 192" fill="none" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="4.6249"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(2.5351 0 0 2.6556 -15.545 -20.844)"
      >
        <path d="M46.853 24.746v-4.319c0-2.762 2.611-4.789 5.304-4.116l17.054 4.26a5.31 5.31 0 0 1 4.034 5.146v28.658c0 2.763-2.611 4.789-5.304 4.116l-10.09-2.52" />
        <path
          d="M30.805 31.18v-4.154c0-2.763 2.61-4.79 5.304-4.117l17.053 4.26a5.31 5.31 0 0 1 4.034 5.146v28.658c0 2.763-2.61 4.79-5.304 4.116L41.76 62.558"
          strokeLinecap="square"
        />
        <path d="M18.79 67.427a5.31 5.31 0 0 1-4.034-5.146V33.623c0-2.763 2.61-4.789 5.304-4.116l17.054 4.26a5.31 5.31 0 0 1 4.033 5.146V67.57c0 2.762-2.61 4.789-5.304 4.116z" />
      </g>
    </svg>
  )
}

function IconGitHub({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function IconPubDev({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M22.039 6.149c-1.122-1.118-2.258-2.221-3.419-3.298-0.327-0.355-0.794-0.577-1.313-0.577-0.008 0-0.015 0-0.023 0h0.001c-0.401 0.039-0.769 0.125-1.117 0.253l0.031-0.010-7.26 3.63zM6.995 6.995v14.709c-0.010 0.083-0.016 0.179-0.016 0.276 0 0.622 0.243 1.188 0.639 1.607l-0.001-0.001 6.142 6.141h10.649v-5.32zM6.148 6.147s6.306-3.151 9.458-4.728c0.496-0.25 1.080-0.396 1.699-0.396 0.052 0 0.105 0.001 0.157 0.003l-0.007-0c0.806 0.159 1.513 0.504 2.101 0.99l-0.008-0.006 11.429 11.43v12.216h-5.32v5.32h-12.414l-11.231-11.231c-0.595-0.612-0.968-1.443-0.985-2.362l-0-0.003c0.051-0.511 0.191-0.978 0.405-1.402l-0.010 0.023z" />
    </svg>
  )
}

function IconDemo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.5 6.8v10.4c0 .7.8 1.1 1.4.7l8.1-5.2c.5-.34.5-1.06 0-1.4l-8.1-5.2c-.6-.4-1.4 0-1.4.7z" />
    </svg>
  )
}

function IconWeb({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.8 12h16.4M12 3.75c2.2 2.3 3.4 5.15 3.4 8.25s-1.2 5.95-3.4 8.25M12 3.75C9.8 6.05 8.6 8.9 8.6 12s1.2 5.95 3.4 8.25" />
    </svg>
  )
}
