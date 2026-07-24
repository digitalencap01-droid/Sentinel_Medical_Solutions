import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { heroBadges } from './content'
import { useSectionHref } from './siteNavigation'
import { easeOut, Reveal } from './shared'

export function Hero() {
  const { t } = useTranslation()
  const contactHref = useSectionHref('#contact')
  const capabilitiesHref = useSectionHref('#capabilities')

  const heroLines = [
    'Healthcare Supply,',
    <>
      <span className="relative inline-flex">
        <motion.span
          className="relative z-10 inline-block italic text-[var(--accent)]"
          animate={{ y: [0, -2, 0], scale: [1, 1.015, 1], skewX: [0, -4, 0] }}
          transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: easeOut }}
        >
          Executed
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-[6%] bottom-[0.08em] h-[0.16em] rounded-full bg-[rgba(241,90,42,0.22)]"
          animate={{ scaleX: [0.72, 1, 0.72], opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: easeOut }}
          style={{ originX: 0.5 }}
        />
      </span>{' '}
      Across the Globe.
    </>,
  ]

  return (
    <section className="relative min-h-svh overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.cencora.com/-/media/assets/corporate/global/images/stock-photography/homepage_spotlight-2.jpeg')",
        }}
      />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1480px] items-center px-4 pb-10 pt-28 sm:px-5 lg:px-8 lg:pb-12 lg:pt-28">
        <div className="max-w-[45rem] text-left">
          <Reveal>
            <div className="inline-flex items-center gap-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.3em] text-[var(--color-ink)] [text-shadow:0_2px_10px_rgba(248,245,239,0.75)]">
              <span className="block h-[2px] w-7 rounded-full bg-[linear-gradient(90deg,#F15A2A_0%,#17213A_100%)]" />
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
                className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-ink)] [text-shadow:0_3px_16px_rgba(248,245,239,0.78)] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem]"
              >
                {line}
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-6 max-w-[33rem]">
            <p className="text-[0.98rem] leading-7 text-[var(--color-ink)] [text-shadow:0_2px_12px_rgba(248,245,239,0.78)] sm:text-[1rem] lg:text-[1.04rem]">
              {t('hero.body')}
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href={contactHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(241,90,42,0.28)] transition-transform duration-200 hover:scale-[1.02] hover:bg-[var(--accent-strong)]"
            >
              {t('hero.ctaPrimary')} <ChevronRight className="ml-2 size-4" />
            </a>
            <a
              href={capabilitiesHref}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink)]/14 bg-[rgba(248,245,239,0.9)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] backdrop-blur-sm transition-colors duration-200 hover:border-[var(--color-ink)]/24 hover:bg-[rgba(248,245,239,0.98)]"
            >
              {t('hero.ctaSecondary')}
            </a>
          </Reveal>

          <Reveal delay={0.55} className="mt-8">
            <div className="flex max-w-[37rem] flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.66rem] font-medium uppercase tracking-[0.04em] text-[var(--color-ink)] [text-shadow:0_2px_10px_rgba(248,245,239,0.72)]">
              {heroBadges.map((badge, index) => (
                <span key={badge} className="inline-flex items-center gap-3 whitespace-nowrap">
                  {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-current opacity-50" />}
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
