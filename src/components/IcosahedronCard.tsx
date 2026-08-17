import { useEffect, useRef } from 'react'

/** Каркасный икосаэдр на canvas 2D: вращение drag'ом (мышь / палец) с инерцией. */

const PHI = (1 + Math.sqrt(5)) / 2

const VERTICES: number[][] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
].map((v) => {
  const len = Math.hypot(v[0], v[1], v[2])
  return v.map((c) => c / len)
})

// рёбра — пары вершин на минимальном расстоянии
const EDGES: Array<[number, number]> = []
for (let a = 0; a < VERTICES.length; a++) {
  for (let b = a + 1; b < VERTICES.length; b++) {
    const d = Math.hypot(
      VERTICES[a][0] - VERTICES[b][0],
      VERTICES[a][1] - VERTICES[b][1],
      VERTICES[a][2] - VERTICES[b][2],
    )
    if (d < 1.2) EDGES.push([a, b])
  }
}

const DRAG_SENS = 0.005
const FRICTION = 0.94
const AUTO_SPIN = 0.0035

export function IcosahedronCard() {
  const cellRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const cell = cellRef.current
    const canvas = canvasRef.current
    if (!cell || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let raf = 0
    let pendingW = 0
    let pendingH = 0

    let rx = 0.35
    let ry = 0
    let vx = 0
    let vy = reduced ? 0 : AUTO_SPIN
    let dragging = false
    let lastX = 0
    let lastY = 0
    let lastT = 0

    const scheduleResize = () => {
      pendingW = Math.round(cell.clientWidth)
      pendingH = Math.round(cell.clientHeight)
    }

    /** Меняем буфер canvas только в кадре отрисовки — иначе при ресайзе мелькает пустой кадр. */
    const applyResize = () => {
      if (pendingW === w && pendingH === h) return
      if (pendingW <= 0 || pendingH <= 0) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = pendingW
      h = pendingH
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(scheduleResize)
    ro.observe(cell)
    scheduleResize()

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      lastT = performance.now()
      vx = 0
      vy = 0
      cell.setPointerCapture(e.pointerId)
      cell.classList.add('cursor-grabbing')
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return
      const now = performance.now()
      const dt = Math.max(now - lastT, 1)
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY

      ry -= dx * DRAG_SENS
      rx += dy * DRAG_SENS
      // ограничиваем наклон, чтобы фигура не «переворачивалась» слишком резко
      rx = Math.max(-1.2, Math.min(1.2, rx))

      // скорость в рад/кадр (~16ms) для инерции после отпускания
      vy = (-dx * DRAG_SENS) * (16 / dt)
      vx = (dy * DRAG_SENS) * (16 / dt)

      lastX = e.clientX
      lastY = e.clientY
      lastT = now
    }

    const endDrag = (e: PointerEvent) => {
      if (!dragging) return
      dragging = false
      cell.classList.remove('cursor-grabbing')
      try {
        cell.releasePointerCapture(e.pointerId)
      } catch {
        /* already released */
      }
      // если почти не крутили — мягкий автоспин
      if (!reduced && Math.hypot(vx, vy) < 0.001) {
        vy = AUTO_SPIN
        vx = 0
      }
    }

    cell.addEventListener('pointerdown', onPointerDown)
    cell.addEventListener('pointermove', onPointerMove)
    cell.addEventListener('pointerup', endDrag)
    cell.addEventListener('pointercancel', endDrag)

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (document.hidden) return

      applyResize()
      if (w <= 0 || h <= 0) return

      if (!dragging) {
        ry += vy
        rx += vx
        rx = Math.max(-1.2, Math.min(1.2, rx))
        vx *= FRICTION
        vy *= FRICTION
        if (!reduced && Math.abs(vy) < AUTO_SPIN * 0.4 && Math.abs(vx) < 0.0005) {
          vy = AUTO_SPIN
          vx = 0
        }
      }

      ctx.clearRect(0, 0, w, h)

      const cosY = Math.cos(ry)
      const sinY = Math.sin(ry)
      const cosX = Math.cos(rx)
      const sinX = Math.sin(rx)
      const radius = Math.min(w, h) * 0.3
      const ox = w / 2
      const oy = h / 2

      const projected = VERTICES.map(([x, y, z]) => {
        const X = x * cosY + z * sinY
        let Z = -x * sinY + z * cosY
        const Y = y * cosX - Z * sinX
        Z = y * sinX + Z * cosX
        const pers = 2.4 / (2.4 + Z)
        return { x: ox + X * radius * pers, y: oy + Y * radius * pers, z: Z }
      })

      for (const [a, b] of EDGES) {
        const depth = (projected[a].z + projected[b].z) / 2
        const alpha = 0.16 + (1 - (depth + 1) / 2) * 0.6
        ctx.strokeStyle = `rgba(255, 177, 72, ${alpha.toFixed(3)})`
        ctx.lineWidth = 1 + (1 - (depth + 1) / 2) * 0.8
        ctx.beginPath()
        ctx.moveTo(projected[a].x, projected[a].y)
        ctx.lineTo(projected[b].x, projected[b].y)
        ctx.stroke()
      }
      for (const p of projected) {
        const size = 1.4 + (1 - (p.z + 1) / 2) * 1.8
        ctx.fillStyle = `rgba(255, 210, 140, ${(0.4 + (1 - (p.z + 1) / 2) * 0.6).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      cell.removeEventListener('pointerdown', onPointerDown)
      cell.removeEventListener('pointermove', onPointerMove)
      cell.removeEventListener('pointerup', endDrag)
      cell.removeEventListener('pointercancel', endDrag)
    }
  }, [])

  return (
    <div
      ref={cellRef}
      className="cell relative col-span-1 row-span-2 min-h-[300px] cursor-grab touch-none overflow-hidden p-0 md:min-h-0"
      style={{
        background: 'radial-gradient(100% 100% at 50% 0%, rgba(255, 177, 72, 0.07), transparent 70%)',
      }}
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 block h-full w-full" />
      <span className="font-mono pointer-events-none absolute inset-x-0 bottom-4 text-center text-[10.5px] text-ink-dim">
        потяни
      </span>
    </div>
  )
}
