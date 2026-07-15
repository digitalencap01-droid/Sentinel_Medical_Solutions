import { motion } from 'framer-motion'
import { BarChart3, Boxes, ChevronRight, Package, Pill, Stethoscope, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { capabilityCards } from './content'
import { capabilityDetailIds, getDetailPath } from './detailContent'
import { cardVariant, lightSection, SectionIntro, staggerContainer } from './shared'

const capabilityIcons = [Pill, Stethoscope, Package, Boxes, Truck, BarChart3]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className={`${lightSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Capabilities"
          title="Six Disciplines. One Integrated Healthcare Supply Platform."
          body="From sourcing to last-mile delivery, every capability is designed to keep critical healthcare products moving compliantly and on time."
        />

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {capabilityCards.map((card, index) => {
            const Icon = capabilityIcons[index]

            return (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="group relative overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,27,42,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
              >
                <Link
                  to={getDetailPath(capabilityDetailIds[index])}
                  className="block h-full rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-7 hover:border-[var(--accent-soft)]"
                >
                {/* Top sliding accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="absolute -right-1 top-4 select-none font-mono text-6xl font-semibold leading-none text-[var(--accent)] opacity-[0.12]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="inline-flex w-fit items-center justify-center rounded-2xl bg-[var(--accent-wash)] p-3.5 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110 dark:bg-white/8 dark:text-[var(--dark-accent)]">
                    <Icon className="size-5" />
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--accent)] dark:text-[var(--dark-accent)]">
                      Core Capability
                    </p>
                    <h3 className="mt-2 text-[1.25rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--text-strong)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[0.94rem] leading-7 text-[var(--muted)] dark:text-[var(--dark-muted)]">
                      {card.body}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[var(--divider)] pt-5 dark:border-white/10">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--accent)] dark:text-[var(--dark-accent)]">
                      Integrated Platform
                    </span>
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--accent-wash)] text-[var(--accent)] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--accent)] group-hover:text-white dark:bg-white/6 dark:text-[var(--dark-accent)] dark:group-hover:bg-[var(--accent)] dark:group-hover:text-white">
                      <ChevronRight className="size-4" />
                    </span>
                  </div>
                </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
