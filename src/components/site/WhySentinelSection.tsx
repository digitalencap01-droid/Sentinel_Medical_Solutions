import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { whySentinelCards } from './content'
import { getDetailPath, whyDetailIds } from './detailContent'
import { cardVariant, easeOut, mutedSection, Reveal, staggerContainer } from './shared'

export function WhySentinelSection() {
  return (
    <section className={`${mutedSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Why Sentinel
              </p>
              <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--text-strong)] md:text-[2.25rem]">
                An Independent, Agnostic Healthcare Distribution Channel.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[var(--muted)]">
                A neutral platform serves every client equally, preserving commercial neutrality, protecting sensitive market intelligence and creating a stronger foundation for broad-based market access.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {whySentinelCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.24, ease: easeOut }}
                className="overflow-hidden rounded-[1.5rem] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_12px_32px_rgba(79,168,201,0.1)]"
              >
                <Link
                  to={getDetailPath(whyDetailIds[index])}
                  className="block rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 hover:border-[var(--accent-soft)]"
                >
                  <h3 className="whitespace-nowrap text-lg font-semibold tracking-[-0.01em] text-[var(--accent)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 break-words text-[0.92rem] leading-7 text-[var(--muted)]">{card.body}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
