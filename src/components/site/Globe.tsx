import createGlobe from 'cobe'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Theme } from './types'

type LatLng = [number, number]
type Vec3 = [number, number, number]
type Marker = { location: LatLng; size: number }
type Arc = { from: LatLng; to: LatLng; color?: Vec3 }
type Route = {
  from: LatLng
  to: LatLng
}

const dubai: LatLng = [25.2048, 55.2708]
const abuDhabi: LatLng = [24.4539, 54.3773]
const mumbai: LatLng = [19.076, 72.8777]
const riyadh: LatLng = [24.7136, 46.6753]
const cairo: LatLng = [30.0444, 31.2357]
const nairobi: LatLng = [-1.2921, 36.8219]
const lagos: LatLng = [6.5244, 3.3792]
const frankfurt: LatLng = [50.1109, 8.6821]
const london: LatLng = [51.5072, -0.1276]
const singapore: LatLng = [1.3521, 103.8198]

const hubMarkers: Marker[] = [
  { location: dubai, size: 0.058 },
  { location: abuDhabi, size: 0.03 },
  { location: mumbai, size: 0.04 },
  { location: cairo, size: 0.03 },
  { location: nairobi, size: 0.03 },
  { location: riyadh, size: 0.026 },
  { location: lagos, size: 0.026 },
  { location: frankfurt, size: 0.024 },
  { location: london, size: 0.024 },
  { location: singapore, size: 0.028 },
]

const routes: Route[] = [
  { from: dubai, to: abuDhabi },
  { from: dubai, to: riyadh },
  { from: dubai, to: mumbai },
  { from: dubai, to: cairo },
  { from: dubai, to: nairobi },
  { from: dubai, to: lagos },
  { from: dubai, to: frankfurt },
  { from: dubai, to: london },
  { from: dubai, to: singapore },
]

export function Globe({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDark = theme === 'dark'

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas?.parentElement
    if (!canvas || !container) {
      return
    }

    let phi = 5.28
    let width = container.offsetWidth
    let animationFrame: number
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const baseArcColor: Vec3 = isDark ? [0.33, 0.47, 0.86] : [0.33, 0.56, 0.96]
    const activeArcColor: Vec3 = isDark ? [0.96, 0.98, 1] : [0.04, 0.31, 0.88]
    const baseArcs: Arc[] = routes.map((route) => ({
      from: route.from,
      to: route.to,
      color: baseArcColor,
    }))

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.38,
      dark: isDark ? 1 : 0,
      diffuse: 1.35,
      scale: 1,
      mapSamples: 22000,
      mapBrightness: isDark ? 6.8 : 5.1,
      baseColor: isDark ? [0.12, 0.18, 0.3] : [0.67, 0.79, 1],
      markerColor: isDark ? [0.64, 0.79, 1] : [0.1, 0.4, 0.98],
      glowColor: isDark ? [0.24, 0.42, 0.84] : [0.74, 0.85, 1],
      markers: hubMarkers,
      arcs: [...baseArcs, { ...baseArcs[0], color: activeArcColor }],
      arcColor: baseArcColor,
      arcWidth: 1.2,
      arcHeight: 0.26,
    })

    const render = () => {
      // Respect prefers-reduced-motion: keep the globe static (no auto-rotation or arc
      // cycling) instead of a continuous animation loop.
      if (!prefersReducedMotion) {
        phi += 0.008
        const activeRoute = Math.floor(performance.now() / 1400) % routes.length
        globe.update({
          phi,
          width: width * 2,
          height: width * 2,
          arcs: [
            ...baseArcs,
            {
              from: routes[activeRoute].from,
              to: routes[activeRoute].to,
              color: activeArcColor,
            },
          ],
        })
        animationFrame = requestAnimationFrame(render)
      }
    }
    animationFrame = requestAnimationFrame(render)

    const resizeObserver = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width
    })
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      globe.destroy()
    }
  }, [isDark])

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[500px]"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <div
          className={`absolute inset-[-6%] rounded-full ${
            isDark
              ? 'bg-[radial-gradient(circle,rgba(79, 168, 201,0.14),transparent_64%)]'
              : 'bg-[radial-gradient(circle,rgba(79, 168, 201,0.08),transparent_66%)]'
          }`}
        />
        <div
          className={`absolute inset-[-12%] rounded-full blur-3xl ${
            isDark
              ? 'bg-[radial-gradient(circle,rgba(79, 168, 201,0.38),transparent_64%)]'
              : 'bg-[radial-gradient(circle,rgba(79, 168, 201,0.22),transparent_66%)]'
          }`}
        />
        <div
          className={`absolute inset-[8%] rounded-full border ${
            isDark ? 'border-white/8' : 'border-[rgba(79, 168, 201,0.08)]'
          }`}
        />
        <div
          className={`absolute inset-[16%] rounded-full border ${
            isDark ? 'border-white/6' : 'border-[rgba(79, 168, 201,0.05)]'
          }`}
        />
        <div
          className={`absolute inset-[23%] rounded-full ${
            isDark
              ? 'bg-[radial-gradient(circle,rgba(10,22,42,0.14),rgba(10,22,42,0.01)_62%,transparent_72%)]'
              : 'bg-[radial-gradient(circle,rgba(79, 168, 201,0.06),rgba(79, 168, 201,0.015)_62%,transparent_72%)]'
          }`}
        />
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Rotating globe highlighting Sentinel's operating hubs across the UAE, India, the Middle East and Africa, with logistics routes connecting them."
          className="relative h-full w-full"
        />
      </div>
    </motion.div>
  )
}
