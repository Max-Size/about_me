import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1600 } = options
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, typingSpeed)
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
