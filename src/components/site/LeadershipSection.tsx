import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { leadershipTeam } from './content'
import { getDetailPath, leadershipDetailIds } from './detailContent'
import { InitialsAvatar, lightSection, PlaceholderPhoto, PlaceholderRibbon, SectionIntro } from './shared'

export function LeadershipSection() {
  return (
    <section id="leadership" className={`${lightSection} py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionIntro
          eyebrow="Leadership Team"
          title="The People Steering Sentinel's Execution."
          body="A leadership group accountable for sourcing discipline, supply-chain integrity and partner-facing governance across every market Sentinel serves."
        />

        <div className="mt-6">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            Open Leadership Page
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group relative overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(79,168,201,0.1)]"
            >
              <Link
                to={getDetailPath(leadershipDetailIds[index])}
                className="block rounded-[1.75rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 hover:border-[var(--accent-soft)]"
              >
              {member.isPlaceholder ? (
                <PlaceholderPhoto label="Photo pending" className="h-40 w-full" />
              ) : (
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  loading="lazy"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              )}

              <div className="mt-5">
                {member.isPlaceholder ? (
                  <PlaceholderRibbon className="mb-3" />
                ) : (
                  <InitialsAvatar name={member.name} className="mb-3 size-9 text-xs" />
                )}
                <h3 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-[var(--text-strong)]">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[0.78rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                  {member.designation}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{member.bio}</p>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
