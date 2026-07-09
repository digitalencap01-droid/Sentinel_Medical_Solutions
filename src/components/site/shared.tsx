import { motion, useInView } from 'framer-motion'
import { ImageOff, Moon, SunMedium } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { CountUpProps, RevealProps, Theme } from './types'

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Motion tuned calmer/slower for the redesign (brief §5) — durations nudged up and
// stagger loosened slightly from the original snappier values, centralized here so
// every Reveal/cardVariant/staggerContainer usage across the site shifts together.
export const revealVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, delay },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

export const lightSection =
  'bg-[var(--surface)] text-[var(--text)] [background-image:radial-gradient(circle_at_top_left,rgba(79, 168, 201,0.05),transparent_30%)]'
export const mutedSection = 'bg-[var(--surface-alt)] text-[var(--text)]'
export const emphasisSection =
  'bg-[var(--emphasis-surface)] text-[var(--emphasis-text)] [background-image:radial-gradient(circle_at_top_right,rgba(79, 168, 201,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]'

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={delay}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={revealVariant}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    const duration = 1800
    const start = performance.now()
    let frame = 0

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  invert = false,
}: {
  eyebrow: string
  title: string
  body: string
  invert?: boolean
}) {
  return (
    <Reveal className="max-w-2xl">
      <div
        className={`mb-3 text-xs font-medium uppercase tracking-[0.24em] ${
          invert ? 'text-[var(--emphasis-accent)]' : 'text-[var(--accent)]'
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`max-w-2xl text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-3xl md:text-[2.25rem] ${
          invert ? 'text-[var(--emphasis-text)]' : 'text-[var(--text-strong)]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-xl text-[0.95rem] leading-7 ${
          invert ? 'text-[var(--emphasis-muted)]' : 'text-[var(--muted)]'
        }`}
      >
        {body}
      </p>
    </Reveal>
  )
}

export function InitialsAvatar({
  name,
  className = '',
}: {
  name: string
  className?: string
}) {
  const initials = /placeholder/i.test(name)
    ? '—'
    : name
        .split(' ')
        .map((word) => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase()

  return (
    <div
      className={`flex items-center justify-center rounded-full border border-dashed border-[var(--card-border)] bg-[var(--accent-wash)] font-semibold text-[var(--accent)] dark:bg-white/6 dark:text-[var(--dark-accent)] ${className}`}
    >
      {initials}
    </div>
  )
}

export function PlaceholderPhoto({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--card-border)] bg-[var(--surface-alt)] text-[var(--text-soft)] dark:bg-white/4 ${className}`}
    >
      <ImageOff className="size-6 opacity-60" aria-hidden="true" />
      <span className="px-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] opacity-70">
        {label}
      </span>
    </div>
  )
}

export function PlaceholderRibbon({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-[var(--accent-rare)] bg-[color:color-mix(in_srgb,var(--accent-rare)_12%,transparent)] px-3 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[var(--accent-rare)] ${className}`}
    >
      Placeholder — awaiting client
    </span>
  )
}

export function LogoMark() {
  return (
    <div
      className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-[var(--logo-border)] shadow-[0_10px_28px_rgba(79, 168, 201,0.18)]"
      style={{ backgroundImage: 'var(--logo-bg)' }}
    >
      <div className="absolute inset-[4px] rounded-lg border border-white/20" />
      <div className="absolute h-5.5 w-5.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.12)_70%)] opacity-70" />
      <div className="absolute h-6.5 w-px rotate-45 bg-white/60" />
      <div className="absolute h-6.5 w-px -rotate-45 bg-white/60" />
      <div className="absolute h-px w-6.5 bg-white/70" />
      <div className="absolute w-px h-6.5 bg-white/70" />
      <div className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
    </div>
  )
}

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme
  onToggle: () => void
}) {
  const isDark = theme === 'dark'
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t('header.themeToggleToLight') : t('header.themeToggleToDark')}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--header-border)] bg-[var(--header-surface)] px-2.5 py-1.5 text-[var(--text)] shadow-[0_6px_18px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:bg-white/10"
    >
      <span className="relative flex h-5 w-9 items-center rounded-full bg-[var(--toggle-track)] px-1">
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          className="absolute size-3.5 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
          style={{ left: isDark ? '1.05rem' : '0.2rem' }}
        />
        <SunMedium className="relative z-10 size-3 text-[#fbbf24]" />
        <Moon className="relative z-10 ml-auto size-3 text-[#93c5fd]" />
      </span>
      <span className="hidden text-sm font-medium sm:inline">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
