import { motion } from 'framer-motion'
import { Landmark } from 'lucide-react'
import { Link } from 'react-router-dom'
import { advisoryBoard } from './content'
import { advisoryDetailIds, getDetailPath } from './detailContent'
import { mutedSection, PlaceholderPhoto, PlaceholderRibbon, SectionIntro } from './shared'

// Deliberately distinct from LeadershipSection: horizontal layout, muted section
// background and a "background" field (credentials-led) rather than a bio, framing
// this group as external counsel rather than operating management.
export function AdvisoryBoardSection() {
  return (
    <section id="advisory-board" className={`${mutedSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Advisory Board"
          title="Independent Counsel Guiding Sentinel's Strategy."
          body="Sentinel draws on external advisors with cross-border healthcare, trade and institutional experience to pressure-test strategy and governance."
        />

        <motion.div
          className="mt-14 grid gap-5 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {advisoryBoard.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(107,92,165,0.12)]"
            >
              <Link
                to={getDetailPath(advisoryDetailIds[index])}
                className="flex gap-5 rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 hover:border-[var(--guardian-soft)]"
              >
                {member.isPlaceholder ? (
                  <PlaceholderPhoto label="Photo pending" className="size-24 shrink-0" />
                ) : (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    loading="lazy"
                    className="size-24 shrink-0 rounded-2xl object-cover"
                  />
                )}

                <div className="min-w-0">
                  <Landmark className="mb-2 size-4 text-[var(--guardian)] opacity-80" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-[var(--text-strong)]">
                    {member.name}
                  </h3>
                  {member.isPlaceholder && <PlaceholderRibbon className="mt-2" />}
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{member.background}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
