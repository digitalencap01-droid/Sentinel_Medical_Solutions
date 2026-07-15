import { motion } from 'framer-motion'
import { ChevronRight, Stethoscope, Truck } from 'lucide-react'
import { executionCapabilities, healthcareOperations, operatingSteps } from './content'
import { executionDetailIds, getDetailPath, healthcareSupportDetailIds, operatingStepDetailIds } from './detailContent'
import { Link } from 'react-router-dom'
import { cardVariant, easeOut, lightSection, Reveal, SectionIntro, staggerContainer } from './shared'

const operatingStepTags = [
  'Supplier intake',
  'Demand shaping',
  'Controlled handling',
  'Execution discipline',
  'Route visibility',
  'Service follow-through',
]
const operationsPanelEyebrows = ['Commercial + Supply', 'Field + Service']
const operatingStepBackgrounds = [
  'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnRzfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1594643779073-f18d03c18a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bGZpbHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1543499459-d1460946bdc6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D',
]

export function OperationsSection() {
  return (
    <section id="operations" className={`${lightSection} relative overflow-hidden py-24`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute left-[8%] top-16 size-40 rounded-full bg-[radial-gradient(circle,rgba(79,168,201,0.08),transparent_68%)] blur-3xl"
          animate={{ y: [0, 18, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[10%] top-28 size-52 rounded-full bg-[radial-gradient(circle,rgba(79,168,201,0.06),transparent_70%)] blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="How We Work"
          title="One Integrated Flow - From Source to Support."
          body="A healthcare-focused operating model spanning sourcing, planning, fulfilment and service coordination engineered from the UAE and India."
        />

        {/* This IS a genuine sequence, so the 01-06 markers stay (brief §2 note) */}
        <motion.div
          className="relative mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className="absolute left-[7.7%] right-[7.7%] top-[2.375rem] hidden xl:block">
            <div className="h-px border-t border-dashed border-[var(--divider)]" />
            <motion.div
              aria-hidden
              className="absolute top-[-2px] h-[3px] w-[16%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(79,168,201,0.6),transparent)]"
              animate={{ left: ['0%', '84%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {operatingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24, ease: easeOut }}
                className="group relative h-full"
              >
                <Link
                  to={getDetailPath(operatingStepDetailIds[index])}
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 transition-all duration-300 group-hover:border-[var(--accent-soft)] group-hover:shadow-[0_16px_40px_rgba(79,168,201,0.12)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.36] transition-opacity duration-500 group-hover:opacity-[0.5]"
                    style={{
                      backgroundImage: `url(${operatingStepBackgrounds[index]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.56)_36%,rgba(255,255,255,0.4)_100%)] dark:bg-[linear-gradient(180deg,rgba(15,28,44,0.82)_0%,rgba(15,28,44,0.64)_38%,rgba(15,28,44,0.48)_100%)]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,168,201,0.14),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,168,201,0.08),transparent_34%)]"
                  />
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="relative flex flex-col items-center gap-2 rounded-[1.2rem] bg-white/28 px-3 py-3 backdrop-blur-[2px] dark:bg-white/6">
                    <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] font-mono text-[0.85rem] font-medium text-white shadow-[0_8px_18px_rgba(79,168,201,0.28)] transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    <span className="text-center text-[0.56rem] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--accent)]">
                      {operatingStepTags[index]}
                    </span>
                  </div>

                  <h3 className="relative mt-4 rounded-xl bg-white/34 px-3 py-2 text-center text-[1.05rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--text-strong)] backdrop-blur-[2px] dark:bg-white/6">
                    {step.title}
                  </h3>
                  <p className="relative mt-2.5 flex-1 rounded-[1rem] bg-white/26 px-3 py-3 text-center text-[0.8rem] leading-6 text-[var(--text-soft)] backdrop-blur-[2px] dark:bg-white/4 dark:text-[var(--dark-muted)]">
                    {step.body}
                  </p>
                  <div className="relative mt-5 flex items-center justify-between rounded-[1rem] border border-white/30 bg-white/24 px-3 py-3 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[var(--text-soft)] backdrop-blur-[2px] dark:border-white/10 dark:bg-white/4 dark:text-[var(--dark-muted)]">
                    <span>Step {String(index + 1).padStart(2, '0')}</span>
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[var(--accent)] group-hover:text-white">
                      <ChevronRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.24, ease: easeOut }}
              className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_20px_48px_rgba(79,168,201,0.1)] md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                    {operationsPanelEyebrows[0]}
                  </p>
                  <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)]">
                    Execution Capabilities
                  </h3>
                </div>
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04] dark:bg-white/8">
                  <Truck className="size-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                {String(executionCapabilities.length).padStart(2, '0')} Focus Areas
              </div>

              <div className="mt-6 grid gap-3">
                {executionCapabilities.map((item, index) => (
                  <Link
                    key={item}
                    to={getDetailPath(executionDetailIds[index])}
                    className="group/row flex items-center gap-3.5 rounded-[1rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-3.5 text-[var(--text-soft)] transition-all duration-300 hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)] hover:-translate-y-0.5 dark:bg-white/4"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] font-medium text-[var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[0.9rem] leading-6">{item}</span>
                    <ChevronRight className="size-4 shrink-0 -translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.24, ease: easeOut }}
              className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_20px_48px_rgba(79,168,201,0.1)] md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                    {operationsPanelEyebrows[1]}
                  </p>
                  <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)]">
                    Healthcare Operations Support
                  </h3>
                </div>
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04] dark:bg-white/8">
                  <Stethoscope className="size-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="size-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                {String(healthcareOperations.length).padStart(2, '0')} Support Areas
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {healthcareOperations.map((item, index) => (
                  <Link
                    key={item}
                    to={getDetailPath(healthcareSupportDetailIds[index])}
                    className="group/row flex items-center gap-3.5 rounded-[1rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-3.5 text-[var(--text-soft)] transition-all duration-300 hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)] hover:-translate-y-0.5 dark:bg-white/4"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] font-medium text-[var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[0.88rem] leading-6">{item}</span>
                    <ChevronRight className="size-4 shrink-0 -translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
