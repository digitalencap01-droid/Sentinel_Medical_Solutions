import { ArrowUp, Mail, MapPinned } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import { navLinks } from './content'
import { resolveSectionHref, useSectionHref } from './siteNavigation'

const companyLinks = navLinks.filter((link) =>
  ['#about', '#leadership', '#advisory-board', '#clients'].includes(link.href),
)
const platformLinks = [
  ...navLinks.filter((link) =>
    ['#capabilities', '#global-reach', '#operations', '#partnerships', '#supply'].includes(link.href),
  ),
  { label: 'Contact', href: '#contact' },
]
const presence = ['UAE', 'India', 'Africa']

export function Footer({ year }: { year: number }) {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const contactHref = useSectionHref('#contact')

  return (
    <footer className="relative overflow-hidden bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--footer-accent)]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute -left-24 top-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(79, 168, 201,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(79, 168, 201,0.07),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="inline-flex">
              <img
                src={logoImage}
                alt="Sentinel Medical Solutions"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--footer-muted)]">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--footer-muted)]">
              <MapPinned className="size-3.5 text-[var(--footer-accent)]" />
              {presence.join(' · ')}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--footer-accent)]">
              {t('footer.companyHeading')}
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--footer-muted)]">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={resolveSectionHref(pathname, link.href)}
                  className="w-fit transition-all duration-200 hover:translate-x-1 hover:text-[var(--footer-text)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--footer-accent)]">
              {t('footer.platformHeading')}
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--footer-muted)]">
              {platformLinks.map((link) => (
                <a
                  key={link.label}
                  href={resolveSectionHref(pathname, link.href)}
                  className="w-fit transition-all duration-200 hover:translate-x-1 hover:text-[var(--footer-text)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--footer-accent)]">
              {t('footer.contactHeading')}
            </p>
            <a
              href="mailto:info@sentinelmedical.com"
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-text)]"
            >
              <Mail className="size-3.5 text-[var(--footer-accent)]" />
              info@sentinelmedical.com
            </a>
            <a
              href={contactHref}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--footer-border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--footer-text)] transition-all duration-200 hover:border-[var(--footer-accent)] hover:bg-white/40"
            >
              {t('footer.ctaPartnership')}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--footer-border)] pt-6 text-sm text-[var(--footer-copy)] sm:flex-row">
          <span>{t('footer.copyright', { year })}</span>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-text)]"
          >
            {t('footer.backToTop')}
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
