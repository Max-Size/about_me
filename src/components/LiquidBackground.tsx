export function LiquidBackground() {
  return (
    <div className="liquid-bg" aria-hidden="true">
      <div
        className="liquid-blob animate-blob-a"
        style={{
          width: '46vw',
          height: '46vw',
          left: '-12vw',
          top: '-14vw',
          background: 'radial-gradient(circle at 30% 30%, var(--blob-1), transparent 70%)',
        }}
      />
      <div
        className="liquid-blob animate-blob-b"
        style={{
          width: '38vw',
          height: '38vw',
          right: '-10vw',
          top: '6vh',
          background: 'radial-gradient(circle at 60% 40%, var(--blob-2), transparent 70%)',
        }}
      />
      <div
        className="liquid-blob animate-blob-c"
        style={{
          width: '42vw',
          height: '42vw',
          left: '18vw',
          bottom: '-20vh',
          background: 'radial-gradient(circle at 50% 50%, var(--blob-3), transparent 70%)',
        }}
      />
      <div className="liquid-grain" />
      <div className="liquid-vignette" />
    </div>
  )
}
