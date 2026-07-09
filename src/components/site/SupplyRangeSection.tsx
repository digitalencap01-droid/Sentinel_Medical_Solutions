import { AnimatePresence, motion } from 'framer-motion'
import {
  Bandage,
  ChevronRight,
  FlaskConical,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Wind,
} from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { consumableCards, deviceCards, pharmaPortfolio } from './content'
import { cardVariant, easeOut, lightSection, Reveal, SectionIntro, staggerContainer } from './shared'

type TabKey = 'pharma' | 'consumables' | 'devices'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'pharma', label: 'Pharma' },
  { key: 'consumables', label: 'Consumables' },
  { key: 'devices', label: 'Devices' },
]

const pharmaIcons = [ShieldCheck, HeartPulse, Stethoscope]
const consumableIcons = [Bandage, Syringe, ShieldCheck, FlaskConical, Scissors, Wind]
// TODO: replace with owned/licensed photography — brief flags generic stock "doctor
// imagery" to avoid. Do not swap for different stock; use real photography or an
// illustrative/abstract treatment instead (see site brief 2.4).
const consumableImages = [
  'https://images.unsplash.com/photo-1565474832112-7d5826f8a8c6?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1691896632683-09a1465ea9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEluamVjdGlvbiUyMCUyNiUyMElWJTIwVGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80',
  'https://plus.unsplash.com/premium_photo-1714678706884-e3a0b33739df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
const portfolioPreviewCount = 6
const deviceSpecialtyLabels = ['Surgical Platforms', 'Critical Care', 'Smart Rooms', 'Rehab Systems']
const deviceSpecialtyInsights = [
  'Procedure-led environments demanding precision, uptime and theatre-ready workflows.',
  'Equipment and accessories aligned to respiratory support and monitored care settings.',
  'Patient-room technologies connecting bedside experience with operational visibility.',
  'Orthotics, prosthetics and recovery systems supporting continuity beyond acute care.',
]
const infrastructureHighlights = [
  'Turnkey planning and equipment programs',
  'Installation-aligned technical coordination',
  'Long-horizon service and support continuity',
]

function parseBodyToTags(body: string): string[] {
  const text = body.replace(/\.$/, '')
  const lastAnd = text.lastIndexOf(' and ')
  const processed = lastAnd > -1 ? text.slice(0, lastAnd) + ', ' + text.slice(lastAnd + 5) : text
  return processed.split(', ').map((s) => s.trim()).filter(Boolean)
}

export function SupplyRangeSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('pharma')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const baseId = useId()

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = tabs.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      setActiveTab(tabs[nextIndex].key)
      tabRefs.current[nextIndex]?.focus()
    }
  }

  return (
    <section id="supply" className={`${lightSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="What We Supply"
          title="Three Product Families, One Coordinated Supply Chain."
          body="Pharma, consumables and medical devices move through the same sourcing, quality and logistics discipline — browse each range without leaving the page."
        />

        {/*
          ARIA tabs pattern — arrow-key navigation, roving tabindex, linked panels.
          overflow-x-auto on the tablist (not the page) is deliberate: at narrow
          widths three tabs at comfortable tap-target size don't all fit, so the
          tablist itself scrolls horizontally rather than shrinking text illegibly
          or overflowing the page (caught in mobile QA — brief §6/step 8).
        */}
        <div
          role="tablist"
          aria-label="Supply range"
          className="mt-12 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] p-1.5"
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${tab.key}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${tab.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={`relative z-0 shrink-0 rounded-full px-5 py-2.5 font-mono text-[0.92rem] uppercase tracking-[0.06em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                  isActive
                    ? 'font-semibold text-white'
                    : 'font-medium text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="supply-tab-pill"
                    className="absolute inset-0 rounded-full border border-white/25 bg-[color:color-mix(in_srgb,var(--accent)_86%,transparent)] shadow-[0_10px_24px_rgba(79,168,201,0.38)] backdrop-blur-md"
                    transition={{ type: 'spring', stiffness: 500, damping: 34 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'pharma' && (
            <motion.div
              key="pharma"
              role="tabpanel"
              id={`${baseId}-panel-pharma`}
              aria-labelledby={`${baseId}-tab-pharma`}
              tabIndex={0}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="mt-10"
            >
              <PharmaPanel />
            </motion.div>
          )}
          {activeTab === 'consumables' && (
            <motion.div
              key="consumables"
              role="tabpanel"
              id={`${baseId}-panel-consumables`}
              aria-labelledby={`${baseId}-tab-consumables`}
              tabIndex={0}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="mt-10"
            >
              <ConsumablesPanel />
            </motion.div>
          )}
          {activeTab === 'devices' && (
            <motion.div
              key="devices"
              role="tabpanel"
              id={`${baseId}-panel-devices`}
              aria-labelledby={`${baseId}-tab-devices`}
              tabIndex={0}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="mt-10"
            >
              <DevicesPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function PharmaPanel() {
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set())
  const toggleGroupExpanded = (index: number) => {
    setExpandedGroups((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
        {['200+ Products', '3 Therapeutic Categories', 'WHO Essential Medicines Aligned'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-70" />
            {item}
          </div>
        ))}
      </div>

      <motion.div className="mt-6" initial="hidden" animate="visible" variants={staggerContainer}>
        {pharmaPortfolio.map((group, index) => {
          const Icon = pharmaIcons[index]
          const isExpanded = expandedGroups.has(index)
          const hasMore = group.medicines.length > portfolioPreviewCount
          const visibleMedicines = isExpanded ? group.medicines : group.medicines.slice(0, portfolioPreviewCount)
          return (
            <motion.div
              key={group.title}
              variants={cardVariant}
              className="group relative border-t border-[var(--divider)] py-10 transition-colors duration-300 last:border-b hover:bg-[rgba(79,168,201,0.03)]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex items-start gap-3 lg:w-64 lg:shrink-0">
                  <span className="select-none font-mono text-2xl font-medium leading-none text-[var(--accent)] opacity-30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="inline-flex items-center justify-center rounded-xl bg-[var(--accent-wash)] p-2 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="mt-2.5 text-base font-semibold leading-snug tracking-[-0.01em] text-[var(--text-strong)]">
                      {group.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[var(--text-soft)]">
                      <span className="text-[var(--accent)]">{group.medicines.length}</span>
                      Products
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-wrap items-start gap-2 lg:pt-1">
                  {visibleMedicines.map((medicine) => (
                    <span
                      key={medicine}
                      className="rounded-full border border-[var(--card-border)] bg-[var(--surface-alt)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-soft)] transition-all duration-300 group-hover:border-[var(--accent-soft)] group-hover:bg-[var(--accent-wash)] group-hover:text-[var(--accent)]"
                    >
                      {medicine}
                    </span>
                  ))}
                  {hasMore && (
                    <button
                      type="button"
                      onClick={() => toggleGroupExpanded(index)}
                      className="rounded-full border border-dashed border-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)] transition-colors duration-300 hover:bg-[var(--accent-wash)]"
                    >
                      {isExpanded ? 'Show fewer' : `View full portfolio (+${group.medicines.length - portfolioPreviewCount})`}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

function ConsumablesPanel() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null)

  return (
    <div>
      <p className="max-w-2xl text-[0.94rem] leading-7 text-[var(--muted)]">
        Six core supply domains and 20+ priority product lines with recurring hospital and clinic procurement
        supported by structured sourcing, replenishment and fulfilment.
      </p>

      {/* Desktop: horizontal expanding panels */}
      <Reveal className="mt-10 hidden lg:block">
        <div className="flex gap-3" style={{ minHeight: '460px' }} onMouseLeave={() => setHoveredPanel(null)}>
          {consumableCards.map((card, index) => {
            const Icon = consumableIcons[index]
            const isActive = hoveredPanel === null ? index === 0 : hoveredPanel === index
            const tags = parseBodyToTags(card.body)

            return (
              <motion.div
                key={card.title}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`${card.title} — show details`}
                onMouseEnter={() => setHoveredPanel(index)}
                onFocus={() => setHoveredPanel(index)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <motion.img
                  src={consumableImages[index]}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={{ opacity: isActive ? 0.32 : 0.1, scale: isActive ? 1.07 : 1 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_srgb,var(--surface)_72%,transparent)] via-[color:color-mix(in_srgb,var(--surface)_82%,transparent)] to-[var(--surface)]" />

                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-opacity duration-400 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                />

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between py-8 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <span className="font-mono text-[10px] font-medium tracking-[0.22em] text-[var(--accent)] opacity-50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col items-center gap-4">
                    <div className="inline-flex items-center justify-center rounded-xl bg-[var(--accent-wash)] p-2.5 text-[var(--accent)]">
                      <Icon className="size-4" />
                    </div>
                    <span
                      className="select-none text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--text-soft)]"
                      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                      {card.title}
                    </span>
                  </div>
                  <div />
                </div>

                <div
                  className={`absolute inset-0 flex flex-col p-8 transition-all duration-350 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent-wash)] p-4 text-[var(--accent)]">
                      <Icon className="size-6" />
                    </div>
                    <span className="select-none font-mono text-[2.25rem] font-medium leading-none text-[var(--accent)] opacity-[0.14]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-6 flex-1 overflow-hidden">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                      Clinical Supply
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.04em] text-[var(--text-strong)]">
                      {card.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={card.title}
                          className="mt-5 flex flex-wrap gap-2"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } } }}
                        >
                          {tags.map((tag) => (
                            <motion.span
                              key={tag}
                              variants={{
                                hidden: { opacity: 0, y: 8, scale: 0.88 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: easeOut } },
                              }}
                              className="rounded-full border border-[var(--card-border)] bg-[var(--surface-alt)] px-3 py-1 text-xs font-medium text-[var(--text-soft)] transition-colors duration-200 hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)] hover:text-[var(--accent)]"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[var(--divider)] pt-4">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                      {tags.length} Product Types
                    </span>
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)]">
                      <ChevronRight className="size-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Reveal>

      {/* Mobile / tablet: stacked cards */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {consumableCards.map((card, index) => {
          const Icon = consumableIcons[index]
          return (
            <motion.div
              key={card.title}
              variants={cardVariant}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-soft)]"
            >
              <img
                src={consumableImages[index]}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.1] transition-opacity duration-500 group-hover:opacity-[0.2]"
              />
              <div className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--card-bg)_86%,transparent)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent-wash)] p-3 text-[var(--accent)]">
                    <Icon className="size-5" />
                  </div>
                  <span className="select-none font-mono text-[1.85rem] font-medium leading-none text-[var(--accent)] opacity-[0.12]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Clinical Supply
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-tight tracking-[-0.03em] text-[var(--text-strong)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.body}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

function DevicesPanel() {
  const featuredDevice = deviceCards[0]
  const deviceLeadCards = [
    { card: deviceCards[1], eyebrow: 'High Acuity' },
    { card: deviceCards[2], eyebrow: 'Digital Layer' },
  ]
  const deviceSpecialties = [deviceCards[3], deviceCards[4], deviceCards[5], deviceCards[6]]
  const infrastructureDevice = deviceCards[7]

  return (
    <motion.div className="space-y-4" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="grid gap-4 xl:grid-cols-3">
        <motion.div
          variants={cardVariant}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.24, ease: easeOut }}
          className="group h-full overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_16px_36px_rgba(79,168,201,0.1)]"
        >
          <div className="flex h-full flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-full border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                Featured Capability
              </div>
              <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-[var(--divider)] bg-[var(--surface-alt)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04]">
                <featuredDevice.icon className="size-5" />
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-[var(--accent)]">
                Diagnostics Platform
              </p>
              <h3 className="mt-2.5 text-[1.4rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)]">
                {featuredDevice.title}
              </h3>
              <p className="mt-6 text-[0.84rem] leading-6 text-[var(--muted)]">{featuredDevice.body}</p>
            </div>

            <div className="mt-auto grid gap-2 border-t border-[var(--divider)] pt-4">
              <p className="text-[0.74rem] leading-5 text-[var(--text-soft)]">
                Imaging and workflow visibility across the broader portfolio.
              </p>
              <span className="font-mono text-[0.64rem] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Diagnostics-led
              </span>
            </div>
          </div>
        </motion.div>

        {deviceLeadCards.map(({ card, eyebrow }) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.24, ease: easeOut }}
              className="group h-full overflow-hidden rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_16px_36px_rgba(79,168,201,0.1)]"
            >
              <div className="flex h-full flex-col p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                      {eyebrow}
                    </p>
                    <h3 className="mt-5 max-w-[12rem] text-base font-semibold leading-tight tracking-[-0.02em] text-[var(--text-strong)]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04]">
                    <Icon className="size-4.5" />
                  </div>
                </div>

                <p className="mt-6 text-[0.84rem] leading-6 text-[var(--muted)]">{card.body}</p>

                <div className="mt-auto grid gap-2 border-t border-[var(--divider)] pt-4">
                  <span className="font-mono text-[0.64rem] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                    {eyebrow}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        variants={cardVariant}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.24, ease: easeOut }}
        className="group overflow-hidden rounded-[1.85rem] border border-[var(--card-border)] bg-[var(--card-bg)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)]"
      >
        <div className="grid gap-0 xl:grid-cols-[260px_minmax(0,1fr)]">
          <div className="border-b border-[var(--divider)] bg-[var(--surface-alt)] p-6 xl:border-b-0 xl:border-r">
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
              Specialty Matrix
            </p>
            <h3 className="mt-3 max-w-[11rem] text-[1.15rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)]">
              Focused lines with clean operational roles.
            </h3>
            <div className="mt-6 space-y-2.5">
              {deviceSpecialtyLabels.map((label, index) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-[var(--divider)] pb-2.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--text-soft)] last:border-b-0 last:pb-0"
                >
                  <span>{label}</span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-[var(--divider)] md:grid-cols-2">
            {deviceSpecialties.map((card, index) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-[var(--card-bg)] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)]">
                      <Icon className="size-4.5" />
                    </div>
                    <span className="font-mono text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                      {deviceSpecialtyLabels[index]}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1rem] font-semibold leading-snug tracking-[-0.03em] text-[var(--text-strong)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[var(--muted)]">{card.body}</p>
                  <p className="mt-4 border-t border-[var(--divider)] pt-3 text-[0.74rem] leading-5 text-[var(--text-soft)]">
                    {deviceSpecialtyInsights[index]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariant}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.24, ease: easeOut }}
        className="group overflow-hidden rounded-[1.85rem] border border-[var(--card-border)] bg-[var(--card-bg)] transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)]"
      >
        <div className="grid gap-px bg-[var(--divider)] lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="bg-[var(--card-bg)] p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Infrastructure Capability
                </p>
                <h3 className="mt-4 text-[1.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)] sm:text-[1.5rem]">
                  {infrastructureDevice.title}
                </h3>
              </div>
              <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04]">
                <infrastructureDevice.icon className="size-5" />
              </div>
            </div>
            <p className="mt-4 max-w-[30rem] text-[0.9rem] leading-7 text-[var(--muted)]">
              {infrastructureDevice.body} Built for programs where procurement, deployment and long-term service
              have to operate as one coordinated system.
            </p>
          </div>

          <div className="grid gap-px bg-[var(--divider)]">
            {infrastructureHighlights.map((item) => (
              <div key={item} className="bg-[var(--card-bg)] px-5 py-4 text-[0.78rem] leading-5 text-[var(--text-soft)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
