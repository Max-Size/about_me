import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ImageLightboxProps {
  images: string[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

export function ImageLightbox({ images, index, onClose, onChange }: ImageLightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [images.length, index, onChange, onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex h-dvh w-screen items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Закрыть"
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Предыдущее"
            className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + images.length) % images.length)
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Следующее"
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % images.length)
            }}
          >
            ›
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        className="max-h-[min(92dvh,100%)] max-w-[min(96vw,100%)] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
          {index + 1} / {images.length}
        </p>
      )}
    </div>,
    document.body,
  )
}
