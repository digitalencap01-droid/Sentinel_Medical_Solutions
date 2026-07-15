import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import { navLinks } from './content'
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

const primaryHashes = ['#about', '#capabilities', '#global-reach']

export function Header({
  menuOpen,
  scrolled,
  theme,
  onMenuToggle,
  onMenuClose,
  onThemeToggle,
}: HeaderProps) {
  const { t } = useTranslation()
  const { pathname, hash } = useLocation()
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)
  const homeHref = useHomeHref()
  const contactHref = useSectionHref('#contact')

  const homeNavLink = useMemo(() => ({ label: 'Home', href: '#top' }), [])
  const desktopNavLinks = useMemo(
    () =>
      navLinks.map((link) =>
        link.href === '#about' ? { ...link, label: 'Who We Are' } : link,
      ),
    [],
  )
  const primaryNavLinks = useMemo(
    () => [homeNavLink, ...desktopNavLinks.filter((link) => primaryHashes.includes(link.href))],
    [desktopNavLinks, homeNavLink],
  )
  const secondaryNavLinks = useMemo(
    () => desktopNavLinks.filter((link) => !primaryHashes.includes(link.href)),
    [desktopNavLinks],
  )
  const mobileNavLinks = useMemo(
    () => [homeNavLink, ...desktopNavLinks],
    [desktopNavLinks, homeNavLink],
  )

  const isHomePage = pathname === '/'
  const isLinkActive = (href: string) => {
    if (href === '#top') {
      return isHomePage && !hash
    }

    const target = resolveSectionHref(pathname, href)

    if (href.startsWith('#') && target === href) {
      return isHomePage && hash === href
    }

    return target === pathname
  }

  const isMoreActive = secondaryNavLinks.some((link) => resolveSectionHref(pathname, link.href) === pathname)

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--header-border)] bg-[var(--header-surface)]/92 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href={homeHref} className="flex shrink-0 items-center">
          <img src={logoImage} alt="Sentinel Medical Solutions" className="h-14 w-auto object-contain" />
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="flex items-center gap-3 rounded-full border border-[var(--header-border)] bg-[color:color-mix(in_srgb,var(--header-surface)_84%,transparent)] px-4 py-2 shadow-[0_18px_38px_rgba(14,27,42,0.1)] backdrop-blur-xl">
            {primaryNavLinks.map((link) => {
              const active = isLinkActive(link.href)

              return (
                <a
                  key={link.label}
                  href={resolveSectionHref(pathname, link.href)}
                  className={`group inline-flex items-center gap-2 px-3 py-2 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    active
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-soft)] hover:-translate-y-0.5 hover:text-[var(--text-strong)]'
                  }`}
                >
                  {active ? (
                    <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
                  ) : (
                    <span className="inline-block size-1.5 rounded-full bg-transparent transition-colors duration-200 group-hover:bg-[var(--accent-soft)]" />
                  )}
                  <span>{link.label}</span>
                </a>
              )
            })}

            <div
              className="relative"
              onMouseEnter={() => setDesktopMenuOpen(true)}
              onMouseLeave={() => setDesktopMenuOpen(false)}
              onFocus={() => setDesktopMenuOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setDesktopMenuOpen(false)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={desktopMenuOpen}
                className={`group inline-flex items-center gap-2 px-3 py-2 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-200 ${
                  isMoreActive || desktopMenuOpen
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-soft)] hover:-translate-y-0.5 hover:text-[var(--text-strong)]'
                }`}
              >
                {isMoreActive || desktopMenuOpen ? (
                  <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
                ) : (
                  <span className="inline-block size-1.5 rounded-full bg-transparent transition-colors duration-200 group-hover:bg-[var(--accent-soft)]" />
                )}
                <span>More</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${desktopMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {desktopMenuOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18, ease: easeOut }}
                    className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-5"
                  >
                    <div className="rounded-[1.2rem] border border-[var(--header-border)] bg-[color:color-mix(in_srgb,var(--card-bg)_88%,transparent)] p-3 shadow-[0_22px_52px_rgba(14,27,42,0.14)] backdrop-blur-2xl">
                      <div className="grid gap-1">
                        {secondaryNavLinks.map((link) => {
                          const active = isLinkActive(link.href)

                          return (
                            <a
                              key={link.label}
                              href={resolveSectionHref(pathname, link.href)}
                              className={`group flex items-center justify-between rounded-[0.95rem] px-4 py-3 text-sm transition-all duration-200 ${
                                active
                                  ? 'text-[var(--accent)]'
                                  : 'text-[var(--text-soft)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-strong)]'
                              }`}
                            >
                              <span className="inline-flex items-center gap-2">
                                {active ? (
                                  <span className="inline-block size-1.5 rounded-full bg-[var(--accent)]" />
                                ) : (
                                  <span className="inline-block size-1.5 rounded-full bg-[var(--divider)] transition-colors duration-200 group-hover:bg-[var(--accent-soft)]" />
                                )}
                                <span>{link.label}</span>
                              </span>
                              <ChevronRight className="size-4 text-[var(--accent)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a
            href={contactHref}
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4.5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] hover:shadow-[0_14px_28px_rgba(23,88,110,0.18)]"
          >
            {t('header.cta')}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 xl:hidden">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
            className="inline-flex rounded-full border border-[var(--header-border)] bg-[var(--header-surface)] p-2.5 text-[var(--text)] backdrop-blur-md transition-colors duration-200 hover:bg-white/10"
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
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolveSectionHref(pathname, link.href)}
                    className={`py-3.5 text-base font-normal tracking-[-0.01em] transition-colors duration-200 ${
                      isLinkActive(link.href)
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text)] hover:text-[var(--accent)]'
                    }`}
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
