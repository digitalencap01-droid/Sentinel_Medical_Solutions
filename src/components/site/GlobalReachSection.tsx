import { motion } from 'framer-motion'
import { Boxes, Building2, MapPinned, Route as RouteIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { africaMarkets, coreLocations, globalCards, secondaryMarkets } from './content'
import {
  africaMarketDetailIds,
  coreLocationDetailIds,
  getDetailPath,
  globalDetailIds,
  secondaryMarketDetailIds,
} from './detailContent'
import { RouteLines } from './RouteLines'
import { cardVariant, Reveal, SectionIntro, staggerContainer } from './shared'

const globalIcons = [Building2, Boxes, RouteIcon]
const globalFlagBackgrounds = [
  'https://images.unsplash.com/photo-1720722023447-b00d085369d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1674591172888-1184c4170a47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675865395544-d583f3fb714f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

// Merged "Global Reach" + "Africa Strategy" into one section (brief §4, row 5). The
// African country cards live as a sub-module here rather than a separate scroll stop —
// same page, same SectionIntro, no second eyebrow/title pair.
export function GlobalReachSection() {
  return (
    <section id="global-reach" className="relative overflow-hidden bg-[var(--surface)] py-24 text-[var(--text)]">
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,rgba(79,168,201,0.08),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(79,168,201,0.07),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(79,168,201,0.06),transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Global Reach & Presence"
          title="A UAE-Led Healthcare Platform, Powered by India Operating Depth."
          body="Sentinel combines UAE commercial leadership with India sourcing, warehousing and transport scale, then executes across the Gulf and into priority African growth markets."
        />

        <motion.div
          className="relative mt-14 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {globalCards.map((card, index) => {
            const [place, role] = card.title.split(' - ')
            const Icon = globalIcons[index]

            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
                }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] transition-colors duration-500"
              >
                <Link
                  to={getDetailPath(globalDetailIds[index])}
                  className="flex h-full flex-col rounded-[1.75rem] border border-[var(--card-border)] bg-[color:color-mix(in_srgb,var(--card-bg)_88%,transparent)] p-7 hover:border-[var(--accent-soft)]"
                >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.34] transition-opacity duration-500 group-hover:opacity-[0.46]"
                  style={{
                    backgroundImage: `url(${globalFlagBackgrounds[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.74)_42%,rgba(255,255,255,0.46)_100%)] dark:bg-[linear-gradient(90deg,rgba(15,28,44,0.9)_0%,rgba(15,28,44,0.66)_42%,rgba(15,28,44,0.34)_100%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(79,168,201,0.12), transparent 72%)' }}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent-wash)] p-3.5 text-[var(--accent)] dark:bg-white/8">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-[0.68rem] font-medium text-[var(--muted)] opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="relative mt-6 font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  {role}
                </p>
                <h3 className="relative mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                  {place}
                </h3>
                <p className="relative mt-4 flex-1 text-[0.94rem] leading-7 text-[var(--muted)]">{card.body}</p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <Reveal className="relative mt-12">
          <RouteLines variant="network" className="inset-x-0 top-0 -z-10 hidden h-40 w-full opacity-60 md:block" />
          <div className="border-t border-[var(--divider)] pt-8">
            <div className="flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
              <MapPinned className="size-3.5 text-[var(--accent)]" />
              Core Markets
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {coreLocations.map((location, index) => (
                <Link
                  key={location.country}
                  to={getDetailPath(coreLocationDetailIds[index])}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--accent-wash)] px-4 py-1.5 text-[0.82rem] font-medium text-[var(--accent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-soft)]"
                >
                  {location.country}
                  {location.isHQ && (
                    <span className="rounded-full bg-[var(--accent)] px-1.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.1em] text-white">
                      HQ
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/*
            Oman, Qatar and Egypt fall outside the brief's core 10 locations. Kept as a
            visually secondary row per the default in the working brief (2.2) — remove
            entirely if the client confirms the core-10 list should be exact.
          */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-[var(--divider)] pt-5">
            <div className="mr-1 font-mono text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)] opacity-70">
              Also Active In
            </div>
            {secondaryMarkets.map((market, index) => (
              <Link
                key={market}
                to={getDetailPath(secondaryMarketDetailIds[index])}
                className="rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] px-3 py-1 text-[0.76rem] font-medium text-[var(--text-soft)] opacity-80"
              >
                {market}
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Africa sub-module — same section, same intro, not a separate scroll stop */}
        <div className="mt-16 border-t border-[var(--divider)] pt-14">
          <Reveal className="max-w-lg">
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
              Africa Focus
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug tracking-[-0.01em] text-[var(--text-strong)] sm:text-lg">
              Country-Specific Execution Across Five Priority Markets.
            </h3>
          </Reveal>

          <Reveal className="relative mt-6 -mx-6 px-6 py-4 [mask-image:linear-gradient(90deg,transparent,black_64px,black_calc(100%-64px),transparent)] sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
            <div className="flex w-max gap-5 [animation:proof-marquee_42s_linear_infinite] hover:[animation-play-state:paused]">
              {[...africaMarkets, ...africaMarkets].map((market, index) => (
                <Link
                  key={`${market.country}-${index}`}
                  aria-hidden={index >= africaMarkets.length}
                  to={getDetailPath(africaMarketDetailIds[index % africaMarkets.length])}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
                    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
                  }}
                  className="group relative h-[340px] w-[320px] shrink-0 overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--accent-soft)] hover:shadow-[0_20px_44px_rgba(79,168,201,0.14)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(79,168,201,0.1), transparent 72%)' }}
                  />

                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 top-4 select-none whitespace-nowrap font-mono text-[4.5rem] font-bold leading-none text-[var(--accent)] opacity-[0.14] transition-opacity duration-500 group-hover:opacity-[0.22]"
                  >
                    {market.code}
                  </span>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-wash)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                      <MapPinned className="size-3.5" />
                      Africa
                    </div>
                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold tracking-[-0.01em] text-[var(--text-strong)]">
                    {market.country}
                  </h3>
                  <p className="relative mt-4 line-clamp-4 text-base leading-8 text-[var(--muted)]">{market.body}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
