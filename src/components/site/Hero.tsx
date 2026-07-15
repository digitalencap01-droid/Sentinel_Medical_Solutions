import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { heroBadges } from './content'
import { Globe } from './Globe'
import { useSectionHref } from './siteNavigation'
import { RouteLines } from './RouteLines'
import { easeOut, Reveal } from './shared'
import type { Theme } from './types'

export function Hero({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  const { t } = useTranslation()
  const contactHref = useSectionHref('#contact')
  const capabilitiesHref = useSectionHref('#capabilities')
  // NOTE (i18n scaffold, brief 3.3): the two-line gradient headline below is left as
  // hardcoded English rather than pulled through t() — its word order and the inline
  // gradient <span> both assume English sentence structure, so it needs a proper
  // per-locale rework (not a 1:1 string swap) whenever a second locale is added.
  const heroLines = [
    'Healthcare Supply,',
    <>
      <span
        className={`bg-[length:180%_100%] bg-clip-text text-transparent animate-[hero-gradient_6s_ease-in-out_infinite] ${
          isDark
            ? 'bg-[linear-gradient(90deg,#F5F6F4_0%,#8FD3E8_35%,#F5F6F4_68%,#8FD3E8_100%)]'
            : 'bg-[linear-gradient(90deg,#0E1B2A_0%,#4FA8C9_35%,#0E1B2A_68%,#4FA8C9_100%)]'
        }`}
      >
        Executed
      </span>{' '}
      Across the Globe.
    </>,
  ]

  return (
    <section
      className={`relative min-h-svh overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[var(--hero-bg)] text-[var(--dark-text)]'
          : 'bg-[linear-gradient(180deg,#F5F6F4_0%,#F5F6F4_58%,#ffffff_100%)] text-[var(--text-strong)]'
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[linear-gradient(90deg,rgba(14, 27, 42,0.96)_0%,rgba(14, 27, 42,0.86)_38%,rgba(14, 27, 42,0.58)_68%,rgba(14, 27, 42,0.72)_100%),radial-gradient(circle_at_top_right,rgba(79, 168, 201,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(79, 168, 201,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]'
            : 'bg-[linear-gradient(90deg,rgba(245, 246, 244,0.88)_0%,rgba(245, 246, 244,0.76)_30%,rgba(245, 246, 244,0.42)_56%,rgba(245, 246, 244,0.58)_100%),radial-gradient(circle_at_top_right,rgba(79, 168, 201,0.1),transparent_26%),radial-gradient(circle_at_left,rgba(79, 168, 201,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0.08))]'
        }`}
      />
      <div
        className={`absolute inset-0 [background-size:92px_92px] ${
          isDark
            ? 'opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]'
            : 'opacity-20 [background-image:linear-gradient(rgba(79, 168, 201,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(79, 168, 201,0.045)_1px,transparent_1px)]'
        }`}
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl items-center px-6 pb-10 pt-24 lg:px-10 lg:pb-12 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,540px)] lg:gap-16">
          <div className="order-1 max-w-[44rem] text-left">
            <Reveal>
              <div
                className={`inline-flex items-center gap-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.3em] ${
                  isDark ? 'text-[var(--dark-accent)]' : 'text-[var(--accent)]'
                }`}
              >
                <span
                  className={`block h-[2px] w-7 rounded-full ${
                    isDark
                      ? 'bg-[linear-gradient(90deg,#8FD3E8_0%,#ffffff_100%)]'
                      : 'bg-[linear-gradient(90deg,#7CC4DD_0%,#4FA8C9_100%)]'
                  }`}
                />
                <span>{t('hero.eyebrow')}</span>
              </div>
            </Reveal>

            <div className="mt-4 max-w-[42rem]">
              {heroLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: easeOut, delay: 0.15 + index * 0.2 }}
                  className={`text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem] ${
                    isDark ? 'text-[var(--dark-text)]' : 'text-[var(--text-strong)]'
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.35} className="mt-6 max-w-[33rem]">
              <p
                className={`text-[0.98rem] leading-7 sm:text-[1rem] lg:text-[1.04rem] ${
                  isDark ? 'text-[var(--dark-muted)]' : 'text-[var(--text-soft)]'
                }`}
              >
                {t('hero.body')}
              </p>
            </Reveal>

            <Reveal delay={0.45} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={contactHref}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-white text-[var(--hero-bg)]'
                    : 'bg-[var(--accent)] text-white shadow-[0_16px_36px_rgba(79, 168, 201,0.24)] hover:bg-[var(--accent-strong)]'
                }`}
              >
                {t('hero.ctaPrimary')} <ChevronRight className="ml-2 size-4" />
              </a>
              <a
                href={capabilitiesHref}
                className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                  isDark
                    ? 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                    : 'border border-[var(--accent-soft)] bg-white text-[var(--text-strong)] hover:border-[var(--accent)]'
                }`}
              >
                {t('hero.ctaSecondary')}
              </a>
            </Reveal>

            {/*
              Restraint pass (brief 2.3): certifications now read as a quiet supporting
              line rather than a bordered 3-box grid, so they support the hero message
              instead of competing with it visually.
            */}
            <Reveal delay={0.55} className="mt-8">
              <div
                className={`flex max-w-[37rem] flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.66rem] font-medium tracking-[0.04em] uppercase ${
                  isDark ? 'text-white/65' : 'text-[var(--text-soft)]'
                }`}
              >
                {heroBadges.map((badge, index) => (
                  <span key={badge} className="inline-flex items-center gap-3 whitespace-nowrap">
                    {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-current opacity-50" />}
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="relative order-2">
            <RouteLines
              variant="hero"
              className="inset-0 -z-10 hidden size-full opacity-70 lg:block"
            />
            <Globe theme={theme} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
