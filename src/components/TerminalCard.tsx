import { useEffect, useState } from 'react'
import { useTilt } from '../hooks/useTilt'

const LINES = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: "name: 'Александр Иванов'," },
  { indent: 1, text: "role: 'Software Engineer'," },
  { indent: 1, text: 'stack: [' },
  { indent: 2, text: "'Flutter', 'React'," },
  { indent: 2, text: "'Python', 'FastAPI'," },
  { indent: 1, text: '],' },
  { indent: 1, text: "status: 'открыт к задачам'," },
  { indent: 0, text: '}' },
]

const FULL_TEXT = LINES.map((l) => '  '.repeat(l.indent) + l.text).join('\n')

export function TerminalCard() {
  const [prefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [typed, setTyped] = useState(() => (prefersReduced ? FULL_TEXT : ''))
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>({ max: 4 })

  useEffect(() => {
    if (prefersReduced) return

    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(id)
    }, 18)
    return () => clearInterval(id)
  }, [prefersReduced])

  const shownLines = typed.split('\n')

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass glass-spot glass-tilt w-full max-w-md rounded-2xl p-0 shadow-2xl"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono ml-3 text-xs text-ink-dim">profile.ts</span>
      </div>
      <pre className="font-mono min-h-[15.5rem] overflow-x-auto whitespace-pre px-5 py-4 text-[13px] leading-relaxed text-ink sm:text-sm">
        {shownLines.map((line, idx) => (
          <span key={idx} className="block">
            <TokenizedLine text={line} />
            {idx === shownLines.length - 1 && (
              <span className="animate-caret inline-block h-3.5 w-[2px] translate-y-0.5 bg-accent align-middle" />
            )}
          </span>
        ))}
      </pre>
    </div>
  )
}

function TokenizedLine({ text }: { text: string }) {
  const stringMatch = text.match(/'([^']*)'/)
  if (!stringMatch) {
    return <span className="text-ink-muted">{text}</span>
  }

  const [full, inner] = stringMatch
  const start = text.indexOf(full)
  const before = text.slice(0, start)
  const after = text.slice(start + full.length)

  return (
    <>
      <span className="text-ink-muted">{before}</span>
      <span className="text-accent-2">'{inner}'</span>
      <span className="text-ink-muted">{after}</span>
    </>
  )
}
