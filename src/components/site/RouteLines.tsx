// Signature route-line motif (redesign brief §3) — quiet, animated dash-lines evoking
// Sentinel's network. Used in exactly two places: Hero (around the globe) and Global
// Reach & Presence (behind the core-market list). Do not reuse elsewhere — the brief is
// explicit this should read as a signature, not decoration scattered site-wide.
//
// Respects prefers-reduced-motion via the motion-reduce: variant (freezes to static
// lines, same rule already applied to the cobe globe in Globe.tsx).

const heroPaths = [
  'M -40 260 C 160 180, 320 120, 560 90',
  'M -20 340 C 200 320, 380 280, 620 260',
  'M -40 420 C 180 440, 360 420, 600 380',
  'M 40 140 C 220 60, 400 40, 640 70',
]

const networkPaths = [
  'M 0 60 C 220 10, 480 110, 720 40',
  'M 0 120 C 260 170, 520 60, 820 130',
  'M 40 20 C 320 90, 600 10, 900 80',
]

export function RouteLines({
  variant,
  className = '',
}: {
  variant: 'hero' | 'network'
  className?: string
}) {
  const paths = variant === 'hero' ? heroPaths : networkPaths
  const viewBox = variant === 'hero' ? '0 0 640 480' : '0 0 900 200'

  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
    >
      {paths.map((d, index) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={1}
          strokeLinecap="round"
          strokeDasharray="1 9"
          opacity={0.32 - index * 0.05}
          className="animate-[route-dash_7s_linear_infinite] motion-reduce:animate-none"
          style={{ animationDelay: `${index * -1.4}s` }}
        />
      ))}
    </svg>
  )
}
