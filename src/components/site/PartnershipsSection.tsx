import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { partnershipTracks } from './content'
import { easeOut, mutedSection, Reveal, SectionIntro, staggerContainer } from './shared'

export function PartnershipsSection() {
  return (
    <section id="partnerships" className={`${mutedSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Partnerships & Collaboration"
          title="Built on Technology and Trade Relationships, Not Just Volume."
          body="Sentinel's execution depends on a deliberate mix of digital infrastructure and trade-side alliances — distinct from the operating principles in Why Sentinel below."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {partnershipTracks.map((track, trackIndex) => {
            const Icon = track.icon
            return (
              <Reveal key={track.title} delay={trackIndex * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.24, ease: easeOut }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-[border-color,box-shadow,transform] duration-300 hover:border-[var(--accent-soft)] hover:shadow-[0_20px_48px_rgba(79,168,201,0.1)] md:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#4FA8C9] via-[#7CC4DD] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                        Partnership Track
                      </p>
                      <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--text-strong)]">
                        {track.title}
                      </h3>
                    </div>
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-wash)] text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.04] dark:bg-white/8">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <motion.div
                    className="mt-6 grid gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    {track.items.map((item, index) => (
                      <motion.div
                        key={item}
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                        className="group/row flex items-center gap-3.5 rounded-[1rem] border border-[var(--divider)] bg-[var(--surface-alt)] px-4 py-3.5 text-[var(--text-soft)] transition-all duration-300 hover:border-[var(--accent-soft)] hover:bg-[var(--accent-wash)] hover:-translate-y-0.5 dark:bg-white/4"
                      >
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--card-bg)] font-mono text-[0.66rem] font-medium text-[var(--accent)] border border-[var(--divider)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-[0.9rem] leading-6">{item}</span>
                        <ChevronRight className="size-4 shrink-0 -translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
