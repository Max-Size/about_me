import { useEffect, useRef } from 'react'

/**
 * Жидкий фон: metaballs считаются на мини-канвасе (~200×110 px),
 * браузер растягивает картинку на весь экран с билинейным сглаживанием.
 * Это на порядок дешевле полноэкранного blur+contrast.
 */
const SCALE = 10
const FRAME_MS = 33 // фону достаточно 30 fps

// орбиты подобраны так, чтобы блобы периодически сливались и расходились
const BLOBS = [
  { r: 26, sp: 0.00011, ph: 0.0, ax: 0.3, ay: 0.22 },
  { r: 20, sp: 0.00016, ph: 2.1, ax: 0.26, ay: 0.3 },
  { r: 15, sp: 0.00013, ph: 4.2, ax: 0.34, ay: 0.18 },
]

const C_CORE = [255, 122, 24] // --accent-2
const C_EDGE = [255, 196, 107]

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let fw = 0
    let fh = 0
    let img: ImageData | null = null
    let raf = 0
    let lastDraw = 0
    let lastTime = 0

    const render = (t: number) => {
      if (!img) return
      const cx = fw / 2
      const cy = fh / 2
      const pos = BLOBS.map((b) => ({
        x: cx + Math.sin(t * b.sp + b.ph) * fw * b.ax,
        y: cy + Math.cos(t * b.sp * 1.3 + b.ph) * fh * b.ay,
        r2: b.r * b.r * (fw / 200),
      }))

      const d = img.data
      let i = 0
      for (let y = 0; y < fh; y++) {
        for (let x = 0; x < fw; x++, i += 4) {
          let f = 0
          for (let k = 0; k < BLOBS.length; k++) {
            const dx = x - pos[k].x
            const dy = y - pos[k].y
            f += pos[k].r2 / (dx * dx + dy * dy + 1)
          }
          if (f > 0.28) {
            const g = Math.min((f - 0.28) * 1.6, 1)
            d[i] = C_EDGE[0] + (C_CORE[0] - C_EDGE[0]) * g
            d[i + 1] = C_EDGE[1] + (C_CORE[1] - C_EDGE[1]) * g
            d[i + 2] = C_EDGE[2] + (C_CORE[2] - C_EDGE[2]) * g
            d[i + 3] = 26 + g * 90
          } else if (f > 0.16) {
            const g = (f - 0.16) / 0.12
            d[i] = C_EDGE[0]
            d[i + 1] = C_EDGE[1]
            d[i + 2] = C_EDGE[2]
            d[i + 3] = g * 26
          } else {
            d[i + 3] = 0
          }
        }
      }
      ctx.putImageData(img, 0, 0)
    }

    const resize = () => {
      const w = Math.max(120, Math.round(window.innerWidth / SCALE))
      const h = Math.max(70, Math.round(window.innerHeight / SCALE))
      // присваивание width/height стирает канвас, поэтому меняем буфер
      // только при реальном изменении размера и сразу же перерисовываем кадр —
      // без этого при resize канвас оставался пустым до следующего тика (мерцание)
      if (w === fw && h === fh) return
      fw = w
      fh = h
      canvas.width = fw
      canvas.height = fh
      img = ctx.createImageData(fw, fh)
      render(lastTime)
    }

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick)
      lastTime = t
      if (document.hidden || t - lastDraw < FRAME_MS) return
      lastDraw = t
      render(t)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      render(0) // один статичный кадр
    } else {
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fluid-bg" aria-hidden="true" />
}
