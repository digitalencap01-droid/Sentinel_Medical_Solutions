import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import { navLinks, primaryNavLinks } from './content'
import { resolveSectionHref, useHomeHref, useSectionHref } from './siteNavigation'
import { easeOut, ThemeToggle } from './shared'
import type { Theme } from './types'

type HeaderProps = {
  menuOpen: boolean
  scrolled: boolean
  theme: Theme
  onMenuToggle: () => void
  onMenuClose: () => void
  onThemeToggle: () => void
}

export function Header({
  menuOpen,
  scrolled,
  theme,
  onMenuToggle,
  onMenuClose,
  onThemeToggle,
}: HeaderProps) {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const homeHref = useHomeHref()
  const contactHref = useSectionHref('#contact')

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--header-border)] bg-[var(--header-surface)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href={homeHref} className="flex shrink-0 items-center">
          <img src={logoImage} alt="Sentinel Medical Solutions" className="h-14 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-0.5 rounded-full xl:flex">
          {primaryNavLinks.map((link) => (
            <a
              key={link.label}
              href={resolveSectionHref(pathname, link.href)}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-[var(--text-soft)] transition-all duration-300 ease-out hover:bg-white/10 hover:text-[var(--accent)] hover:shadow-[0_2px_12px_rgba(15,23,42,0.06)] hover:backdrop-blur-md dark:hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a
            href={contactHref}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-[var(--accent)] px-4.5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-[0_10px_28px_rgba(23,88,110,0.32)]"
          >
            {t('header.cta')}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 xl:hidden">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            className="inline-flex rounded-full border border-[var(--header-border)] bg-[var(--header-surface)] p-2.5 text-[var(--text)] backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            onClick={onMenuToggle}
          >
            {menuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="border-b border-[var(--header-border)] bg-[var(--menu-bg)] backdrop-blur-xl xl:hidden"
          >
            <div className="mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl flex-col px-6 py-10">
              <div className="flex flex-1 flex-col divide-y divide-[var(--divider)]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolveSectionHref(pathname, link.href)}
                    className="py-3.5 text-base font-normal tracking-[-0.01em] text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
                    onClick={onMenuClose}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 text-base font-semibold text-white"
                onClick={onMenuClose}
              >
                {t('header.cta')}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
